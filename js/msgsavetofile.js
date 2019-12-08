	function writeToFile()
		{	
			var name=document.getElementById("interactforminputname").value;
			var email=document.getElementById("interactforminputemail").value;
			var msg=document.getElementById("interactformmsg").value;
			var data="<br>Message By :"+name+"("+email+")"+"<br>"+"<br>Message:"+msg+"<br>";
			var template_params = {
		   "reply_to": "dnyaneshwar giri",
		   "from_name": "dnyaneshwar giri",
		   "to_name": "dnyaneshwargiri510@gmail.com",
		   "message_html": data
		}
		var service_id = "gmail";
		var template_id = "template_WLrEerar";
		emailjs.send(service_id,template_id,template_params);
	        alert("Thank You for message. Have a nice day ! ");		
		}

	

