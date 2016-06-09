

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/form', function (req, res) {
	var nodemailer = require('nodemailer');

	var smtpConfig = {
		host: 'smtp.gmail.com',
		port: 465,
    	secure: true, // use SSL
    	auth: {
    		user: 'lsancerionoreply@gmail.com',
    		pass: 'secretpassword'
    	}
    };

	// create reusable transporter object using the default SMTP transport 
	var transporter = nodemailer.createTransport(smtpConfig);
	console.log('body'+req.body);
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: 'lsancerionoreply@gmail.com', // sender address 
	    to: 'lsancerio@gmail.com', // list of receivers 
	    subject: req.body.subject, // Subject line 
	    text: 'From: ' + req.body.name + ' of ' 
	    + req.body.email + '\n' + req.body.message, // plaintext body 
	};

	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return console.log(error);
		}
		console.log('Message sent: ' + info.response);
		res.redirect('back');
	});
});

http.listen(port, function(){
	console.log('listening on *:'+port);
});

