function myFunction() {
         
    navigator.clipboard.writeText("damilareadegboye2000@gmail.com");
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Email Copied!";
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy my email";
  }