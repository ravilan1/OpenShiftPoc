const express = require('express');
const app = express();
const port = 5050;

app.get('/:id',(req,res)=>{
	res.status(200).json({"id":req.params.id});
})

app.listen(port,()=>{
	console.log('Your app is listening on port 5050');
})