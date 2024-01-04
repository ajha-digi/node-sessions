const fs = require("node:fs/promises")

 fs.readFile('./hello.txt',"utf-8")
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error)
    })

async function readText() {
    try {
        const data = await fs.readFile('./hello.txt',"utf-8")
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

readText()