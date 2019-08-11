/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let currentImg = 0

function leftClick() {
  showImg(currentImg -= 1)
}

function rightClick() {
  showImg(currentImg += 1);
}

const imgArray = [
  './assets/carousel/mountains.jpeg', 
  './assets/carousel/computer.jpeg', 
  './assets/carousel/trees.jpeg', 
  './assets/carousel/turntable.jpeg']

function makeCarousel(images) {
  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  
  const leftBtn = document.createElement('div')
  leftBtn.className = 'left-button';
  leftBtn.append('<');
  leftBtn.addEventListener('click', (event) => {
    leftClick();
  });

  carousel.appendChild(leftBtn);

  images.forEach(image => {
    let newImg = document.createElement('img');
    newImg.setAttribute('src', image);
    carousel.appendChild(newImg);
  })

  carousel.children[1].style.display = 'block'

  const rightBtn = document.createElement('div');
  rightBtn.className = 'right-button';
  rightBtn.append('>');
  rightBtn.addEventListener('click', (event) => {
    rightClick();
  });

  carousel.appendChild(rightBtn);

  return carousel;

}

const carouselContainer = document.querySelector('.carousel-container');
let carousel = makeCarousel(imgArray);
carouselContainer.appendChild(carousel);

function showImg (n) {
  var carouselPics = document.querySelectorAll('.carousel img');
  if(n < 0) {
    currentImg = carouselPics.length-1;
  }
    if (n >= carouselPics.length) {
    currentImg = 0;
  }
  carouselPics.forEach(pic =>{
    pic.style.display = 'none';
  })
  carouselPics[currentImg].style.display = 'block';
  console.log(carouselPics);
  console.log(carouselPics.length);  
}

// showImg(currentImg);


/*
let currentImg = 


while(currentImg >=1 && currentImg <=4) {
something something if nth image position is currentImg display = block else display = false
}

leftClick(){}

rightClick(){}
*/