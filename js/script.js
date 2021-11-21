// Navbar Dropdown
var settingsmenu = document.querySelector(".settings-menu");
var notifymenu = document.querySelector(".notify-menu");
var usermenu = document.querySelector(".user-menu");

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
function notifyMenuToggle(){
    notifymenu.classList.toggle("notify-menu-height");
}
function userMenuToggle(){
    usermenu.classList.toggle("user-menu-height");
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = this.nextElementSibling;
if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
} else {
    dropdownContent.style.display = "block";
}
});
}

//Open Modal

$('.openmodale-upload').click(function (e) {
    e.preventDefault();
    $('.modale-upload').addClass('opened-upload');
});
$('.closemodale-upload').click(function (e) {
    e.preventDefault();
    $('.modale-upload').removeClass('opened-upload');
});


