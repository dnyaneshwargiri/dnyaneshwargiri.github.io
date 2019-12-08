	function writeToFile()
		{	
			var name=document.getElementById("name").value;
			var review=document.getElementById("review").value;
			var data="<br>Review By :"+name+"<br>"+"<br>Review:"+review+"<br>";
			var template_params = {
		   "reply_to": "dnyaneshwar giri",
		   "from_name": "dnyaneshwar giri",
		   "to_name": "dnyaneshwargiri510@gmail.com",
		   "message_html": data
		}
		var service_id = "gmail";
		var template_id = "template_WLrEerar";
		emailjs.send(service_id,template_id,template_params);
		alert("Thank You for sharing your review.Have a nice day ! ");	
		}

	

