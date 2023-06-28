
const legend = [
   {
       id: 0,
       image: "./images/old-world.jpg",
       text: "Leyendas, esta tierra esta llena de ellas. Algunas son antiguas como las montañas y otras apenas han llegado aqui como las ultimas nevadas. Y de algunas, mi señor, quiza tu puedas ser parte. La que quiza te halla atraido aqui es la relacionada con la corona negra. Ese oscuro y poderoso artefacto que muchos han buscado.... " 
    },
    {
      id: 1,
      image: "./images/king-fantasy.jpg",
      text: "Antiguamente, antes de los tiempos de Sigmar, un poderoso rey habito estas tierras. Se dice que usando artes prohibidas de las tierras del sur creo una corona negra con oscuras runas en ella escritas en piedra bruja y capaz de darle poder tanto sobre espiritus como demonios. Con ella esclavizo tanto a vivos como a los muertos...." 
   },
   {
      id: 2,
      image: "./images/tumba.jpg",
      text: "Lamentablemente todos sus poderes no lo salvaron de la traicion y al morir sus enemigos lo enterraron en las montañas y, con encantamientos, ocultaron su tumba. Desde entonces, su corona y sus tesoros han estado perdido en ellas. Esperando un heroe capaz de encontrarla. Aqui es donde quiza tu historia se cruze con la leyenda mi señor..."   
   },
   {
      id: 3,
      image: "./images/aventurero.jpg",
      text: "Un aventurero moribundo y al borde de la locura llego hace poco a esta posada diciendo que encontro la tumba del rey brujo a 6 dias de aqui en las montañas del este. Habia mucha gente cuando aparecio y muchos vieron el mapa que mostro. Muchos grupos, poderosos y con ejercitos, se estan preparando para buscar la tumba del rey, sus tesoros, y quiza tambien la corona negra. Te atreveras a ser uno de ellos?"   
   }                      
    
]

const storySection = document.getElementsByClassName("leyenda");
const story = storySection[0]

function storyLine () {

   legend.forEach((element) => {

    const division = document.createElement("div");
    const images = document.createElement("img");
    const text = document.createElement("p"); 
  
    story.appendChild(division);

   
    const storyDiv =  story.getElementsByTagName("div");
    const storyDivSelected = storyDiv[element.id];
    storyDivSelected.className = "newStorySection";

    storyDivSelected.appendChild(images);
    storyDivSelected.appendChild(text);

    const imageColection = storyDivSelected.getElementsByTagName("img");
    const imageSelected = imageColection[0]
    imageSelected.className = "storyImage";
    imageSelected.src = element.image;
    imageSelected.alt = "Story Image";

    const textSelection = storyDivSelected.getElementsByTagName("p"); 
    const textSelected = textSelection[0];
    textSelected.className = "storyText";
    textSelected.innerText = element.text;    
   })
}

storyLine();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("newStorySection");
    if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";  
}

