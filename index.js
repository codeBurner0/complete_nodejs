const fs=require('fs')

// const file=fs.readFileSync('./intro.txt','utf-8')
// console.log(file+"Ankit")

fs.readFile('./intro.txt','utf-8',(err,data)=>{
    console.log(data)
})

// console.log(readfile)