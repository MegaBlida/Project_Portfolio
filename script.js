const navbarEl = document.querySelector(".navbar");
const hamburgerEl = document.querySelector(".hamburger");
const aboutmeContainerEl = document.getElementById('aboutme_container');
const aboutmeChildEl1 = document.getElementById('aboutme_info_child1');






hamburgerEl.addEventListener("click", () => {
    navbarEl.classList.toggle("navbar--open");
    hamburgerEl.classList.toggle("hamburger--open")
    });
    
    navbarEl.addEventListener('click',() =>{
    navbarEl.classList.remove("navbar--open");
    hamburgerEl.classList.remove("hamburger--open")  
    });



    function colorValue() {
        return Math.floor(Math.random() * 256);
      }

      function colorChange(){
        let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
        aboutmeContainerEl.style.backgroundColor = randomColor;
        aboutmeChildEl1.style.color = 'white';
        }

    aboutmeContainerEl.addEventListener('mouseover',colorChange);
    aboutmeContainerEl.addEventListener('mouseout',colorChange);