const wrapper = document.querySelector(".sliderWrapper");
const menuitems = documents.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "TULIPS",
        price: 119,
        colors: [
            {
                code: "black",
                img: imagews/purple/tulips/ina/vase.png,
            },
            {
                code: "darkblue",
                img: "./imagews/Sunflowers in a vase.png",
            },
        ],
    },
    {
        id: 2,
        title: "idek",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./imagews/",
            },
            {
                code: "green",
                img: "./imagews/",
            },
        ],
    },
    {
        id: 4,
        title: "Crab",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./imagews",
            },
            {
                code: "lightgray",
                img: "./imagews"
            },
        ],
    },
    {
        id: 5,
        title: "hip",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./imagews",
            },
            {
                code: "black",
                img: "./imagews",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".producPrice");
const currentProductColors = document.querySelector(".color");
const currentProductSizes = document.querySelector(".size");

menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.computedStyleMap.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.tyle.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizesa.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});