const express = require('express');
const app = express();

const nodemailer = require("nodemailer")

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});



app.post('/', (req, res) =>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'balkanturkmentranzit@gmail.com',
            pass: 'bntt26.08.21'
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'dsquared713@gmail.com',
        text: `
        Сообщение отправил: ${req.body.name}.
        Электронный адрес: ${req.body.email}. 
        Номер: ${req.body.tel}. 
        Текст сообщения: ${req.body.message}
        `
    }
    transporter.sendMail(mailOptions, (error, info)=> {
        if(error){
            console.log(error);
            res.send('error')
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    } )
});
app.listen (PORT, () => {
    console.log(`Server running in port ${PORT}`)
});

