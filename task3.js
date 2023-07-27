var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport
({
    service:'gmail',
    auth:{
    user:'veronikasukantha03@gmail.com',
    pass:'jvgggezcjlwkhacw'
    }
});
var mailOptions={
    from:'veronikasukantha03@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from 20A21A0514',
    text:'Hello Sir'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error)
    {
        console.log('Email Sent:'+info.response);
    }
})