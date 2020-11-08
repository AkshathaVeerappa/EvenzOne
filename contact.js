
function myFunction1() {
  var name = document.getElementById('name').value;
  		if((name == '')){
			document.getElementById('name').setAttribute("style", "border: 3px solid red;");
			document.getElementById('namefield').style.display = 'block';
			returnValue= false;
		}else{
			document.getElementById('name').setAttribute("style", "border: 3px solid #0a47f8;");
			document.getElementById('namefield').style.display = 'none';
			returnValue = true;
		}
	var email = document.getElementById('email').value;
	var emailPattern = /\S+@\S+\.\S+/;
	if((email == '')){
			document.getElementById('email').setAttribute("style", "border: 3px solid red;");
			document.getElementById('efield').style.display = 'block';
			returnValue= false;
		}else{
			document.getElementById('email').setAttribute("style", "border: 3px solid #0a47f8;");
			document.getElementById('efield').style.display = 'none';
			if(!(emailPattern.test(email))){
				document.getElementById('email').setAttribute("style", "border: 3px solid red;");
				document.getElementById('e1field').style.display = 'block';
				returnValue= false;
			}else{
				document.getElementById('email').setAttribute("style", "border: 3px solid #0a47f8;");
				document.getElementById('e1field').style.display = 'none';
				returnValue = true;
			}
		}
	var contact = document.getElementById('contact').value;
	var phonePattern = /^\d{10}$/;
	if((contact == '')){
			document.getElementById('contact').setAttribute("style", "border: 3px solid red;");
			document.getElementById('cfield').style.display = 'block';
			returnValue= false;
		}else{
			document.getElementById('contact').setAttribute("style", "border: 3px solid #0a47f8;");
			document.getElementById('cfield').style.display = 'none';
			if(!(phonePattern.test(contact))){
				document.getElementById('contact').setAttribute("style", "border: 3px solid red;");
				document.getElementById('c1field').style.display = 'block';
				returnValue= false;
			}else{
				document.getElementById('contact').setAttribute("style", "border: 3px solid #0a47f8;");
				document.getElementById('c1field').style.display = 'none';
				returnValue = true;
			}
		}
		console.log(returnValue)
		if(returnValue){
			alert('form submitted successfully');
		}
	
		return returnValue;
}
