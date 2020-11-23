const express = require('express');
const https = require('https');

const app = express();



app.get("/", (req,res)=>{
    https.get('https://api.openweathermap.org/data/2.5/weather?q=skardu&appid=7c8d6998b08695e4f524f16ebf40f257&units=metric', (response)=>{
        console.log(response.statusCode);

        response.on("data", (data)=>{
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp;
            console.log(temp);
        })
    })})


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})