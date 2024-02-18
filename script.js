function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var mobile = document.getElementById("mobile").value;
  
    // Construct URL with query parameters
    var url = "output_page.html?";
    url += "name=" + encodeURIComponent(name);
    url += "&age=" + encodeURIComponent(age);
    url += "&email=" + encodeURIComponent(email);
    url += "&gender=" + encodeURIComponent(gender);
    url += "&mobile=" + encodeURIComponent(mobile);
  
    // Redirect to the output page with the form data
    window.location.href = url;
  }
  