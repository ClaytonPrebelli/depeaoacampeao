var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
        console.log("teste");
        	e.preventDefault();

		var $this = $(this);
        var envio = {
            nome : document.querySelector("#nome").value,
            email : document.querySelector("#mail").value,
            telefone : document.querySelector("#telefone").value
        }
        console.log(envio)
        const options = {
            method: 'GET',
            headers: {
               

                
              }
             
          }
        fetch('https://prebellisolucoes.com/process.php?nome='+envio.nome+"&email="+envio.email+"&telefone="+envio.telefone, options).then(response=>{
            console.log(response)
        }).catch(error=>{
            
        })
        
    
   
})

