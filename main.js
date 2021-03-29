



var uri= `https://api.unsplash.com/search/photos?query=branding-web-photography-app&per_page=20&client_id=11f2ff5a50fcce4df43aa4c897d132d3f5ad4a84ed0aec7be67718deb5120192`;
var element=document.getElementById('elem')

const get_api =(url) =>{
    fetch(url)
    .then (response=> response.json())
    .then (data=>{
        data.results.map(function(data) {
            return ( element.innerHTML+= `<div><img src="${data.urls.regular}"  ></div>`)                  
        });
         
    })
    .catch(err=>console.log(err))
}

const sub =(e) =>{
   document.getElementById('elem').innerHTML = "";  //limpiar div
   let url2 =`https://api.unsplash.com/search/photos?query=${e}&per_page=10&client_id=11f2ff5a50fcce4df43aa4c897d132d3f5ad4a84ed0aec7be67718deb5120192`;
   get_api(url2)
}


get_api(uri)


const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


const componente3Toggle3to1 = document.querySelector(".grid-columns-li-1");
const galeriMenu = document.querySelector(".gallery-wrapper");


const componente3Toggle1to3 = document.querySelector(".grid-columns-li-3");
const galeriMenu3 = document.querySelector(".gallery-wrapper ");

componente3Toggle3to1.addEventListener("click", () => {
    galeriMenu.classList.toggle("gallery-wrapper-una");
});

componente3Toggle1to3.addEventListener("click", (e) => {      
    galeriMenu3.classList.remove("gallery-wrapper-una");
 // console.log(e)
});
