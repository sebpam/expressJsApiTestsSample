(()=>{
	const fs = require('fs');
	try{
		console.log('ENV IS:');
		console.log( process.env.ENV )
        fs.unlinkSync(process.cwd() + "/test/mochawesome.html")
	} catch( e ){
		console.log('File has already been deleted')
	}
})()