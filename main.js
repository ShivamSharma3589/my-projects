// the list of all my prjects 
const lists = [];

// creating the first list for HTML/CSS 
lists[0] = [
      {
            link: 'https://shivamsharma3589.github.io/My-Card-Shivam-Sharma/',
            title: 'SoloLearn Card',
            image: 'projects/my card.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/My-CV-Shivam-Sharma/',
            title: 'My CV',
            image: 'projects/my cv.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/pizza-online/',
            title: 'Pizza Website',
            image: 'projects/pizza.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/land-records/',
            title: 'Lands Records',
            image: 'projects/land records.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/social/',
            title: 'All in one media',
            image: 'projects/social media.jpeg'
      },

];

// creating list for javaScripts 
lists[1] = [
      {
            link: 'https://shivamsharma3589.github.io/insta2/',
            title: 'Instagram-clone',
            image: 'projects/instagram.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/RockPaperScissor/',
            title: 'Rock Paper Scissors',
            image: 'projects/rockpaperscissors.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/Music-Page/',
            title: 'Music Page',
            image: 'projects/music page.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/ultimatrix/',
            title: 'Ultimatrix',
            image: 'projects/ultimatrix.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/My-Clock/',
            title: 'Clock',
            image: 'projects/clock.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/whatsapp7/',
            title: 'Whatsapp-clone',
            image: 'projects/whatsapp.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/portfolio3/',
            title: 'Portfolio',
            image: 'projects/portfolio.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/youtube/',
            title: 'Youtube-clone',
            image: 'projects/youtube.jpeg'
      },
      {
            link: 'https://shivamsharma3589.github.io/musicPlayer/',
            title: 'Music Player',
            image: 'projects/music player.jpeg'
      }
];

// declaring variables here 
let navLinks = document.getElementsByClassName('nav-links');
let navLinksLength = navLinks.length;
// let windowHeight = window.innerHeight;
let body = document.querySelector('#body');

let projectContainer = document.getElementsByClassName('project-container');
let projectContainerLength = projectContainer.length;

let mainTitle = document.getElementsByClassName('main-title');
let articleSection = document.querySelectorAll('article > section');
let plusContainer = document.getElementsByClassName('plus-container');
let plusDown = document.getElementsByClassName('plus-down');
let trblAnimation = document.getElementsByClassName('trbl-animation');

// variables declaring for phone 
let bar = document.getElementById('bars');
let navoptions = document.getElementById('nav-options');
let media = window.matchMedia("(max-width: 600px)");
let div = document.querySelectorAll('#bars > div');

// window onload function 
window.addEventListener('load', ()=>{
      for (let i = 0; i < projectContainerLength; i++) {
            projectContainer[i].style.height = '0px';
            articleSection[i].style.height = 'max-content';
            projectContainer[i].style.overflow = 'hidden';
      }
      
      if (media.matches) {
            navoptions.style.display = 'none';
            body.style.overflow = 'scroll';
      }
});

// click animation starts here for window
function clickAnimation() {
      let trblAnimationLength = trblAnimation.length;
      for (let i = 0; i < trblAnimationLength; i++) {
            trblAnimation[i].style.display = 'block';

            setTimeout(() => {
                  trblAnimation[i].style.display = 'none';
            }, 1001);
      }
}

// for home option in navbar 
navLinks[0].addEventListener('click', () => {
      clickAnimation();
      if (media.matches) {
            navoptions.style.display = 'none';
            body.style.overflow = 'scroll';
            animatedBars();
      }
});

for (let i = 0; i < projectContainerLength; i++) {

      //for adding event to navbar links
      navLinks[i + 1].addEventListener('click', () => {
            projectContainer[i].style.height = '95vh';
            articleSection[i].style.height = '100vh';
            plusDown[i].style.transform = 'translate(-50%, -50%) rotate(180deg)';
            projectContainer[i].style.overflow = 'auto';
            mainTitle[i].classList.add('main-title-on-click');
            plusContainer[i].classList.add('plus-container-on-click');
            clickAnimation();
            if (media.matches) {
                  navoptions.style.display = 'none';
                  body.style.overflow = 'scroll';
                  animatedBars();
            }
      });
      
      // To give functionality to the projects sub-heading titles
      mainTitle[i].addEventListener('click', () => {
            if (projectContainer[i].style.height == '0px') {
                  articleSection[i].style.height = '100vh';
                  projectContainer[i].style.height = '95vh';
                  plusDown[i].style.transform = 'translate(-50%, -50%) rotate(180deg)';
                  projectContainer[i].style.overflow = 'auto';
                  mainTitle[i].classList.toggle('main-title-on-click');
                  plusContainer[i].classList.toggle('plus-container-on-click');
                  clickAnimation();
            } else {
                  projectContainer[i].style.height = '0px';
                  articleSection[i].style.height = 'max-content';
                  plusDown[i].style.transform = 'translate(-50%, -50%) rotate(90deg)';
                  projectContainer[i].style.overflow = 'hidden';
                  mainTitle[i].classList.toggle('main-title-on-click');
                  plusContainer[i].classList.toggle('plus-container-on-click');
                  clickAnimation();
            }
      });
}

// to create projects 

// function declaration for creating projects 
function createProjects(value, i) {
      let childNode = document.createElement('a');
      childNode.innerHTML = `<a href="${lists[value][i].link}" target="_blank">
                                   <img class="project-image" src="${lists[value][i].image}">
                                   <div class="project-title">${lists[value][i].title}</div>
                             </a>`;
      projectContainer[value].appendChild(childNode);
}

// function calling for creating the projects 
// for (let i = 0; i < projectContainerLength; i++) {
for (let i = 0; i < 2; i++) {
      let listLength = lists[i].length;
      for (let j = 0; j < listLength; j++) {
            createProjects(i, j);
      }
}


// javascript for phones

// animation function for bars 
function animatedBars() {
      div[0].classList.toggle('position-bars');
      div[1].classList.toggle('position-bars');
      div[2].classList.toggle('position-bars3');
}

// bar button function 
bars.addEventListener('click', () => {
      
      animatedBars();
      if (navoptions.style.display == 'none') {
            navoptions.style.display = 'flex';
            body.style.overflow = 'hidden';
      } else {
            navoptions.style.display = 'none';
            body.style.overflow = 'scroll';
      }
      clickAnimation();
});