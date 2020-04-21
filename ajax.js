$('#btnEnviar').click(function(e){
	$.get('https://my-json-server.typicode.com/DilanDavid1011/EjerAjax/persona', function(datos){
		datos.forEach(function(dato){
            var c = $('#d');
            
            c.append ('<tr><td>' +dato.nombre+'</td><td>'+dato.apellido+'</td><td>'+dato.edad+'</td><td>'+dato.ciudad+'</td><tr>');
		});
	});
});