
                 var y=document.getElementById("togicon");

             
                function func()
                {

                     var x = document.getElementById("menu");
                    

                  
                      if(x.style.display == "block")
                       {
                         x.style.display ="none";
                           y.innerHTML ="<b>&#9776;</b>"; 
                      }
                      else
                      {
                        x.style.display ="block";  
                        y.innerHTML ="<b>&times; </b>"; 
                      }


                  }


                  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

  } else {
    header.classList.remove("sticky");

  }
  
}
