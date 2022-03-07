const cors = require("cors")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3001

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}
   body={"status": "available"}
   res.status(200).send(body)
})

app.get("/index", (req ,res)=>{
   headers={"http_status":200, "cache-control":  "no-cache"}
   body=
   [
      // let pointsX = 0,
      // let pointsO = 0;
    
      // let pointsXElement = document.getElementById('pointsX')
      // pointsXElement.innerHTML=0;
      // let pointsOElement = document.getElementById('pointsO')
      // pointsOElement.innerHTML=0;
   ]
   
  //  res.set('Content-Type', 'application/json');
   res.status(200).send(body)
})

app.listen(PORT , ()=>{
     console.log(`STARTED LISTENING ON PORT ${PORT}`)
});