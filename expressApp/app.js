let express = require('express');

let app =  express();

app.set('view engine', 'ejs');

app.listen(3000);
console.log('LISTENING AT 3000');
app.get('/', function(req,res)
{
    res.send('this is the homepage');
    

});
app.get('/contact', function(req,res)
{
    // res.send('this is the contact-page');
    res.sendFile(__dirname+'/contact.html');
});

app.get('/profile/:name', function(req, res){
    // res.send('YOU REQUESTED TO SEE PRIOFILE WITH ID '+req.params.id);
    let data = {age:29, job:'ninja'};
    res.render('profile',{person:req.params.name, data:data});
});