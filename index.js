const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to the scheduling app!')
})

app.get('/sign-up', (req,res) =>{
  res.send('Welcome, ' + req.query.name)
})

app.use(express.urlencoded({
  extended: true
}))

app.post('/login', (req, res) =>{

    let userName = req.body.usr;
    let password = req.body.pwd;
    let message = "Access Denied";
    if(userName == 'admin' && password == 'password') {
      message = "Login accepted, welcome";
    }

    res.send(message);
})

app.use(express.static('static'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})