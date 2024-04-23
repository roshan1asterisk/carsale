main.js
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');

}



//header
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


 

  

function validateForm() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (!name || !address || !phone || !email || !username || !password) {
        alert("Please fill in all fields.");
        return false;
    }
    return true; 
}


const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
const buttons = document.querySelectorAll('input[type="submit"]');


inputFields.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.backgroundColor = 'yellow';
    });
});


inputFields.forEach(input => {
    input.addEventListener('blur', function() {
        this.style.backgroundColor = 'white';
    });
});


buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    });
});


buttons.forEach(button => {
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; 
    });
});







