// start scrollTo top
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolling = document.querySelector('.scrolling');

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    scrolling.style.width = `${(scrollTop / height) * 100}%`
});
// end scrollTo top



// check for data of local Storage 
let mainData = localStorage.getItem('option-colors');

if (mainData !== null) {
    // console.log('local storage is not Empty');

    document.documentElement.style.setProperty("--main-color",  localStorage.getItem('option-colors'));


    //remove active class from colors list Item 
    document.querySelectorAll(".Colors-list li").forEach(el => {
        el.classList.remove("active");


    //add active class from li check 
        if (el.dataset.color === mainData) {
            el.classList.add("active");
        }
    });
}
// check for data of local Storage


// randomBack Equl to true 
let randomBack = true;

// Decler Empty variable
let theIntrvalBack;

// check for data of local Storage from random BackGround
let mainRandomLocal = localStorage.getItem('background_option');

// check there's local storage is not Empty
if (mainRandomLocal !== null) {
    if (mainRandomLocal === 'true') {
        randomBack = true;
    } else {
        randomBack = false;
    }

    //remove class active form All span
    document.querySelectorAll('.random span').forEach(element => {
        element.classList.remove('active');
    });

    if (mainRandomLocal === "true") {
        document.querySelector('.random .yes').classList.add('active');
    } else {
        document.querySelector('.random .no').classList.add('active');
    }
}
// check for data of local Storage from random BackGround


// start toggole manu
let settingBox = document.querySelector('.setting-box');

let toggol = document.querySelector(".toggol-icon");

toggol.onclick = function () {
    settingBox.classList.toggle('open');
};


// end toggole manu

// burger icon from header

let burger = document.querySelector(".header-area .burger-icon");

let links = document.querySelector('.nav-contanier .links');

// onclick for burger
burger.onclick = function () {
    links.classList.toggle('opened');
}
// burger icon from header 

//switch color
const colorsLi = document.querySelectorAll(".Colors-list li");

// loop for colorsLi 
colorsLi.forEach(li => {
    li.addEventListener('click', (e) => {
        // set a proprty on root 
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        //set item of local
        localStorage.setItem('option-colors', e.target.dataset.color);

        // function remove and add class active for elemant
        handelActive(e);
    });
});

// switch random background 
const randomBackEl = document.querySelectorAll('.random span');

// loop for randomBackEl 
randomBackEl.forEach(span => {
    span.addEventListener('click', (e) => {

        // function remove and add class active for elemant
        handelActive(e);

        // check of randomBack Equl to true 
        if (e.target.dataset.background === 'Yes') {
            randomBack = true;
            randomizeImgs();
            localStorage.setItem('background_option', true);
        } else {
            randomBack = false;
            clearInterval(theIntrvalBack);
            localStorage.setItem('background_option', false);
        }
    });
});
// switch random background 

// select variable 
let landingPage = document.querySelector('.landing-page');


// select img sourse

let arrayImg = ['slide-01.jpg', 'slide-02.jpg', 'slide-03.jpg'];

// function setInterval 
function randomizeImgs() {

    theIntrvalBack = setInterval(() => {
        // random img 
        randomNumber = Math.floor(Math.random() * arrayImg.length);

        // set a randomBack of landingPage
        landingPage.style.background = 'url("images/'+arrayImg[randomNumber] +'")'
    }, 10000);
}
randomizeImgs();
// end change backgroundImage


// our-skills section 
let section = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.name-progress span');


window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        });
    }
    

}
// our-skills section

// start our-project section

let image = document.querySelectorAll(".imag-box img");

// Looping for image 
image.forEach(img => {
    img.addEventListener("click", function () {
        // create div 
        let overLay = document.createElement('div');

        // add class name
        overLay.className = "overlay-popup";

        // craete popup box 
        let popupBox = document.createElement('div');

        // add className 
        popupBox.className = "popup-box";

        // create img 
        let imgBox = document.createElement('img');

        imgBox.src = img.src;

        // check for img alt is not null 
        if (img.alt !== null) {
            // create span 
            let headingBox = document.createElement('h4');

            // create text headingBox
            let textHeading = document.createTextNode(img.alt);

            // add textHeading to headingBox 
            headingBox.appendChild(textHeading);

            // add headingBox to popup box 
            popupBox.appendChild(headingBox);
        }

        // create a span 
        let closeSpan = document.createElement("span");

        // create text span 
        let spanText = document.createTextNode('x');
        
        // add className 
        closeSpan.className = "close-span";

        // add spanText to closeSpan
        closeSpan.appendChild(spanText);

        // add closeSpan to popupBox
        popupBox.appendChild(closeSpan);

        // add imgBox to popupBox
        popupBox.appendChild(imgBox)
        // add popupBox to overLay 
        overLay.appendChild(popupBox);
        // add overLay to body 
        document.body.appendChild(overLay);
    });
});

// close popup box and overlay for click of close span

document.addEventListener("click", (e) => {
    if (e.target.className === "close-span") {
        e.target.parentNode.remove();

        document.querySelector(".overlay-popup").remove();
    }
})

// end our-project section

//start bollet section

//select all bollets and nav links
const allBollet = document.querySelectorAll('.nav-bolits .bolit');

const allLinks = document.querySelectorAll(".links a");

function scrollSection(element) {
    element.forEach(ele => {
        ele.addEventListener('click', (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        });
    });
}
scrollSection(allBollet);
scrollSection(allLinks);
//end bollet section

// header aria scrolling 
let headerAria = document.querySelector(".landing-page .header-area");

window.addEventListener('scroll', (e) => {
    if (scrollY >= 533) {
        headerAria.classList.add("fixed");
    }
})

// header area scrolling

// handel class active

function handelActive(ev) {
    // remove class active of children
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    // add active class for span 
    ev.target.classList.add('active');
}
// handel class active

// start option Bollets 
let bolletsSpans = document.querySelectorAll(".option-bollets span");

let bolletContainer = document.querySelector(".nav-bolits");

let bolletLocal = localStorage.getItem("option_bollet");

// check localStorage in not Empty now 
if (bolletLocal !== null) {
    bolletsSpans.forEach(span => {
        span.classList.remove("active");
    });
    if (bolletLocal === 'block') {
        bolletContainer.style.display = 'block';
        document.querySelector(".option-bollets .yes").classList.add("active");
    } else {
        bolletContainer.style.display = 'none';
        document.querySelector(".option-bollets .no").classList.add("active");
    }
}

bolletsSpans.forEach(span => {
    span.addEventListener('click', (e) => {
        if (span.dataset.display === 'block') {
            bolletContainer.style.display = 'block';
            localStorage.setItem("option_bollet", e.target.dataset.display);
        } else {
            bolletContainer.style.display = 'none';
            localStorage.setItem("option_bollet", e.target.dataset.display);
        }

        // remove and add class active from span
        handelActive(e);
    });
})
// end option Bollets

// reset options 
document.querySelector(".setting-box .reset").onclick = ()=> {
    localStorage.removeItem("option-colors");
    localStorage.removeItem("background_option");
    localStorage.removeItem("option_bollet");

    document.location.reload();
}
// reset options 