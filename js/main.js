// var wrapper=document.querySelector(".super-wrapper-inner");

var listenlink=document.querySelector(".nav-listen a");
listenlink.addEventListener("click", function(e){
  e.preventDefault();
  document.body.classList.add("show-listen")
  document.body.classList.remove("show-bio")
  document.body.classList.remove("show-contact")
})

var biolink=document.querySelector(".nav-bio a");
biolink.addEventListener("click", function(e){
  e.preventDefault();
  document.body.classList.remove("show-listen")
  document.body.classList.add("show-bio")
  document.body.classList.remove("show-contact")
})

var contactlink=document.querySelector(".nav-contact a");
contactlink.addEventListener("click", function(e){
  e.preventDefault();
  document.body.classList.remove("show-listen")
  document.body.classList.remove("show-bio")
  document.body.classList.add("show-contact")
})
