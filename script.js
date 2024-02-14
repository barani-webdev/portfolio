

        // skills,experience,education script // 

var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}





                    // Spread Excel sheet  script //

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwAfe8w7Pvj2RegpgI7uSnM7pt9Yr_2bsQ4PJqwinTV_dLznaQ0w18DkSbaFW5ZpZj1/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


//toggle icon navbar script //

let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};






  // scroll section active link script//

  let sections= document.querySelectorAll('section');
  let navlinks= document.querySelectorAll('header nav a');

  window.onscroll=()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset=sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top< offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });

        };

    });

          //sticky navbar script//

 let header=document.querySelector('header');
 header.classList.toggle('sticky',window.scrollY>100);


 //remove toggle icon and navbar when click navbar link(scroll) script//
 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');
  };




  // scroll reveal  script//

  ScrollReveal({
    reset: true ,
     distance:'80px',
     duration :2000,
     delay:200
    });

    ScrollReveal().reveal('.home-content, .heading ',{ origin:'top' });
    ScrollReveal().reveal('.home-img, .services-container,.services-box i, .portfolio-box, .contact form ',{ origin:'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left' });
    ScrollReveal().reveal('.home-content p, .about-content',{ origin:'right' });




           //typed js script//

           const typed =new Typed('.multiple-text',{
            strings:['Web Developer','PHP Developer' ,'Java Developer'],
            typeSpeed :100,
            backSpeed :100,
            backDelay :1000,
            loop : true

           });



                    //toggle script //

           $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
          });
                        

