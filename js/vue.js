const Create = new Vue ({
	el: '#Create',
	data: {
		registros: {
			RegistroNombre: '',
			RegistroApellido: '',
		},
	},
	methods: {
		CreateMethod: function() {
			$.ajax({
	            url:"php/registro/create.php",
	            type:"POST",
	            data:this.registros,
	            async:true,
	            timeout: 10000,
	            success: function(data){
	            	try{
			            var registro = JSON.parse(data);
			            if(registro.status!=false){
			            	Create.registros.RegistroNombre='';
			            	Create.registros.RegistroApellido='';
			            	Read.ReadMethod();

							$('#registroModal').modal('hide');

			        	} else {
			        		console.log(registro.message);
			        	}
	            	} catch(e) {
		        		console.log("Error: "+ e);
		        		console.log("Datos: "+ data);
			        }
	            },
	        });
		},
	},
});

const Read = new Vue ({
	el:'#Read',
	data: {
		registros: [],
		empty:true,
	},
	mounted : function(){
		this.ReadMethod();
	},
	methods: {
		ReadMethod: function(){
				$.ajax({
					url:"php/registro/read.php",
				    type:"GET",
				    async:true,
				    timeout: 10000,
				    success: function(data){
		        		try{
							registro=JSON.parse(data);
							if (registro.status!=false) {
								if(registro.empty!=true){
					        	Read.registros=registro.values;
								}
								Read.empty=registro.empty;
					        } else {
					        	Read.registros=[];
					        	console.log(registro.message);
					        }
					            console.log("Registros Obtenidos Correctamente");
				            } catch(e) {
					       		console.log("Error: "+ e);
					       		console.log("Datos: "+ data);
				       		}
				     },
				});
			},
		GetById: function(RegistroID) {
			    	$.ajax({
			            url:"php/registro/getID.php",
			            type:"POST",
			            data:{RegistroID:RegistroID},
			            async:true,
			            timeout: 10000,
			            success: function(data){
			            	try{
					            var registro = JSON.parse(data);
					            if(registro.status!=false){
						            Update.registros=registro.values[0];
						            Update.showModal();
					        	}else{
					        		console.log(registro.message);
					        	}
				                	console.log("Registro Unico Obtenido");
			            	} catch(e) {
				        		console.log("Error: "+ e);
				        		console.log("dato: "+ data);
			        		}
				        },
			       	});
		},
	    Delete: function(RegistroID) {
			    var respuesta = confirm(`Quieres Eliminar el registro con el ID: ${RegistroID}`);
			    if (respuesta) {
				    $.ajax({
				        url:"php/registro/delete.php",
				        type:"POST",
				        data:{RegistroID:RegistroID},
			            async:true,
			            timeout: 10000,
			            success: function(data){
			            	try{
				                var registro = JSON.parse(data);
				                if(registro.status==false){
				                    console.log(registro.message);
				                }
				                Read.ReadMethod();
				                console.log("Registro Eliminado");
			            	} catch(e) {
				        		console.log("Error: "+ e);
				        		console.log("Datos: "+ data);
			        		}
				        },
			        });
		    	}
		},
	},
});

const Update = new Vue({
	el : '#Update',
	data: {
		registros: {
			RegistroNombre: '',
			RegistroApellido: '',
	    },
  	},
	methods: {
		UpdateMethod: function() {
		    	$.ajax({
		            url:"php/registro/update.php",
		            type:"POST",
		            data:this.registros,
		            async:true,
		            timeout: 10000,
					success: function(data){
						try{
							var registro = JSON.parse(data);
				            if(registro.status!=false){
				            Update.registros.RegistroNombre='';
			            	Update.registros.RegistroApellido='';
					        $("#UpdateModal").modal('hide');
					        Read.ReadMethod();
				        	} else {
				        		console.log(registro.message);
				        	}
				        	console.log("Registro Actualizado");
			        	} catch(e) {
			        		console.log("Error: "+ e);
			        		console.log("Datos: "+ data);
			        	}
		        	},
		    	});
		},
		showModal : function(){
            $("#UpdateModal").modal("show");
		},
	},
});
