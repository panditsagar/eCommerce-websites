//navbar toggle function
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close")
bar.addEventListener("click", () => {
  nav.classList.toggle("active");
});
close.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  
// productDetails function
  var mainImg = document.getElementById("mainImg");
  var smallimg = document.getElementsByClassName("small-img")

  smallimg[0].onclick= function(){
      mainImg.src=smallimg[0].src;
  }
  smallimg[1].onclick= function(){
      mainImg.src=smallimg[1].src;
  }  
   smallimg[2].onclick= function(){
      mainImg.src=smallimg[2].src;
  }   
  smallimg[3].onclick= function(){
      mainImg.src=smallimg[3].src;
  }