const heroBackButton = document.querySelector(".hero-back-button");
const heroForwardButton = document.querySelector(".hero-forward-button");
const heroSliderContainer = document.querySelectorAll(".hero-slider-img");
const heroSliderLine = document.querySelectorAll(".hero-slider-line");
const collectionBackButton = document.getElementById("collection-back-button");
const collectionForwardButton = document.getElementById("collection-forward-button");
const sliderCards = document.querySelectorAll(".collection-slider");
const clientBackButton = document.getElementById("client-back-button");
const clientForwardButton = document.getElementById("client-forward-button");
const clientSliderCards = document.querySelectorAll(".client-slider");

let flag = 0;

function heroSlider(index) {
    for (let item of heroSliderContainer) {
        item.classList.add("hidden");
    }
    if (index >= heroSliderContainer.length) {
        flag = 0;
        index = 0;
    } else if (index < 0) {
        flag = heroSliderContainer.length - 1;
        index = heroSliderContainer.length - 1;
    }

    heroSliderContainer[index].classList.remove("hidden");
    heroSliderLine[index].classList.toggle("hero-line");
}

heroSlider(flag);

heroBackButton.addEventListener('click', () => {
    const num = 1;
    flag = flag + num;
    heroSlider(flag);
});

heroForwardButton.addEventListener('click', () => {
    const num = 1;
    flag = flag - num;
    heroSlider(flag);
});

function sliderDisplay(index) {
    for (let items of sliderCards) {
        items.classList.add("hidden");
    }

    if (index >= sliderCards.length) {
        flag = 0;
        index = 0;

    } else if (index < 0) {
        flag = sliderCards.length - 1;
        index = sliderCards.length - 1;
    }
    sliderCards[index].classList.remove("hidden");
}
setTimeout(sliderDisplay(flag), 3000);

collectionBackButton.addEventListener("click", () => {
    const num = 1;
    flag = flag - num;
    sliderDisplay(flag);
});

collectionForwardButton.addEventListener("click", () => {
    let num = 1;
    flag = flag + num;
    sliderDisplay(flag);
});

function clientDisplay(index) {
    for (let items of clientSliderCards) {
        items.classList.add("hidden");
    }

    if (index >= clientSliderCards.length) {
        flag = 0;
        index = 0;

    } else if (index < 0) {
        flag = clientSliderCards.length - 1;
        index = clientSliderCards.length - 1;
    }
    clientSliderCards[index].classList.remove("hidden");
}

clientDisplay(flag);

clientBackButton.addEventListener('click', () => {
    const num = 1;
    flag = flag - num;
    clientDisplay(flag);
});

clientForwardButton.addEventListener('click', () => {
    let num = 1;
    flag = flag + num;
    clientDisplay(flag);
});



