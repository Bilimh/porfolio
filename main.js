import './style.css'




const buttonCheck = document.querySelector('.apropos_check')
const radio = document.querySelector('.radio_formation_item')
const radio1 = document.querySelector('.radio_experience_item')
const radio2 = document.querySelector('.radio_diplome_item')

const experience = document.querySelector("#experiences")
const  formation = document.querySelector("#formation")
const diplome = document.querySelector("#diplome")

let  chechedExp= document.querySelector('.chechedExp');
let  chechedDip= document.querySelector('.chechedDip');
let  chechedForm= document.querySelector('.chechedForm');

radio.classList.add('masque')
radio2.classList.add('masque')
chechedExp.style.color = '#1ba098';

//chechedExp.style.borderBottom = '2px solid #1ba098';
//chechedExp.classList.add('trait')
const apropos_presentation = document.querySelector(".apropos_presentation")

buttonCheck.addEventListener('click', ()=>{
   
    if(experience.checked){
        radio.classList.add('masque')
        radio2.classList.add('masque')
        radio1.classList.remove('masque')
        chechedExp.style.color = '#1ba098';
        chechedForm.style.color = '';
        chechedDip.style.color = '';
       
    }
    else if(formation.checked){
        radio1.classList.add('masque')
        radio.classList.remove('masque')
        radio2.classList.add('masque')
        chechedForm.style.color = '#1ba098';
        chechedExp.style.color = '';
        chechedDip.style.color = '';
       
       
      
    }
    else if(diplome.checked){
        radio1.classList.add('masque')
        radio.classList.add('masque')
        //apropos_presentation.classList.add('masque')
        radio2.classList.remove('masque')
        chechedDip.style.color = '#1ba098';
        chechedForm.style.color = '';
        chechedExp.style.color = '';
      
    }
})



const dataScience = document.querySelector('#datascience')
const master = document.querySelector('#master')
const openC1 = document.querySelector('#openC1')
const openC2 = document.querySelector('#openC2')
const ds1 = document.querySelector('#ds1')
const ds2 = document.querySelector('#ds2')

const sectionItem = document.querySelector('.section_item')

let toogle = document.querySelector(".toogle")
toogle.style.display = "none"
toogle.addEventListener("click", ()=>{
    sectionItem.style.display = "block"
})

const changeMe = document.querySelectorAll('.image_diplom_item')
for (let i = 0; i < changeMe.length; i++) {
    let element = changeMe[i];
    if(element.id=="a"){
        element.addEventListener('click',()=>{
            master.style.display = "block"
            sectionItem.style.display = "none"
            toogle.style.display = "block"
            toogle.addEventListener("click", ()=>{
                sectionItem.style.display = "block"
                master.style.display = "none"
                toogle.style.display = "none"
            })
        })
    }
    if(element.id=="b"){
        element.addEventListener('click',()=>{
            dataScience.style.display = "block"
            sectionItem.style.display = "none"
            toogle.style.display = "block"
            toogle.addEventListener("click", ()=>{
                sectionItem.style.display = "block"
                dataScience.style.display = "none"
                toogle.style.display = "none"
            })
        })
    }
    if(element.id=="c"){
        element.addEventListener('click',()=>{
            openC1.style.display = "block"
            sectionItem.style.display = "none"
            toogle.style.display = "block"
            toogle.addEventListener("click", ()=>{
                sectionItem.style.display = "block"
                openC1.style.display = "none"
                toogle.style.display = "none"
            })
        })
    }
    if(element.id=="d"){
        element.addEventListener('click',()=>{
            openC2.style.display = "block"
            sectionItem.style.display = "none"
            toogle.style.display = "block"
            toogle.addEventListener("click", ()=>{
                sectionItem.style.display = "block"
                openC2.style.display = "none"
                toogle.style.display = "none"
            })
        })
    }
    if(element.id=="e"){
        element.addEventListener('click',()=>{
            ds1.style.display = "block"
            sectionItem.style.display = "none"
            toogle.style.display = "block"
            toogle.addEventListener("click", ()=>{
                sectionItem.style.display = "block"
                ds1.style.display = "none"
                toogle.style.display = "none"
            })
        })
    }
    if(element.id=="f"){
        element.addEventListener('click',()=>{
            ds2.style.display = "block"
            sectionItem.style.display = "none"
            toogle.style.display = "block"
            toogle.addEventListener("click", ()=>{
                sectionItem.style.display = "block"
                ds2.style.display = "none"
                toogle.style.display = "none"
            })
        })
    }

}

let tl = gsap.timeline();

tl.from('.accueil', {
    duration: 1.25,
    filter: "blur(10px)"
})

tl.from('.mon_image', {
    duration: 0.75,
    x: '-200%'
})




/*function adjustSectionHeight() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.style.height = window.innerHeight + 'px';
    });
}

// Appelez la fonction lorsque la page se charge et lorsque la taille de la fenêtre change
window.addEventListener('load', adjustSectionHeight);
window.addEventListener('resize', adjustSectionHeight);*/











const canvas = document.getElementById('charts');
const ctx = canvas.getContext('2d');


const data = {
    labels: ['Python', 'Java Script', 'PHP', 'SQL', 'HTML', 'CSS', 'Machine Learning', 'Deep Learning', 'Linux'],
    datasets: [{
        label: 'Compétences',
        data: [4, 4, 4, 4, 5, 5, 5, 4, 4],
        backgroundColor: 'transparent',//'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: [
            '#1ba098'//'rgba(255, 99, 132, 1)',
        ],
        borderColor: [
            '#1ba098'//'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2

    }]
};

const myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        scales: {
            
            r: {
                angleLines: {
                    color: '#081521' //couleur des traits reliant les points
                  },
                  grid: {
                    color: '#081521', //couleur des toiles
                  },
                pointLabels: { 
                    color: '#deb992', //couleur des labels
                    font: {
                        size: 13, // Taille de la police en pixels
                      }
                  },
                beginAtZero: true,
                max: 5,
                ticks: {
                      display: false, //ignore l'affichage des échelles (barèmes)
                    },
            }
        },
        plugins: {
            legend: {
                display: false // Cacher la légende
            },
            tooltip: {
                enabled: false // Désactiver les tooltips
            }
        }
    }
});
