	function writeToFile()
		{	
			var name=document.getElementById("name").value;
			var contactno=document.getElementById("contactno").value;
			var email=document.getElementById("email").value;
			var msg=document.getElementById("description").value;
			var data="<br>Project Proposal By :"+name+" (	"+email+" , 	"+contactno+"	)"+"<br>"+"<br>Project description:"+msg+"<br>";
			var template_params = {
		   "reply_to": "dnyaneshwar giri",
		   "from_name": "dnyaneshwar giri",
		   "to_name": "dnyaneshwargiri510@gmail.com",
		   "message_html": data
		}
		var service_id = "gmail";
		var template_id = "template_WLrEerar";
		emailjs.send(service_id,template_id,template_params);
                alert("Thank You! I'll replay to you soon.");
		}

	

