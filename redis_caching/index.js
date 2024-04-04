const express = require("express");
const axios = require("axios");
const redis = require("redis");
const responseTime = require("response-time");
const { promisify } = require("util");
const helmet = require("helmet");
const app = express();

app.use(responseTime()); //add header to response

const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
});

app.use(helmet())
const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

app.get("/rockets", async (req, res) => {
  try {

    const reply=await GET_ASYNC('rockets')
    if(reply){
        console.log('using cached')
        return res.send(JSON.parse(reply))
    }
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    const saveResult = await SET_ASYNC(
      "rockets",
      JSON.stringify(response.data),
      'EX',
      100
    );

     res.send(response.data);
  } catch (error) {
    console.log(res.send(error));
  }
});

app.listen(3000, () => {
  console.log("server is stated on port 3000 🚀");
});


// aws keychain