var wrapper=document.querySelector(".super-wrapper-inner");

var listenlink=document.querySelector(".nav-listen a");
listenlink.addEventListener("click", function(e){
  e.preventDefault();
  wrapper.classList.add("show-listen")
  wrapper.classList.remove("show-bio")
  wrapper.classList.remove("show-contact")
})

var biolink=document.querySelector(".nav-bio a");
biolink.addEventListener("click", function(e){
  e.preventDefault();
  wrapper.classList.remove("show-listen")
  wrapper.classList.add("show-bio")
  wrapper.classList.remove("show-contact")
})

var contactlink=document.querySelector(".nav-contact a");
contactlink.addEventListener("click", function(e){
  e.preventDefault();
  wrapper.classList.remove("show-listen")
  wrapper.classList.remove("show-bio")
  wrapper.classList.add("show-contact")
})
