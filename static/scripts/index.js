import header from "../components/header.js"
var head = document.getElementById("header");
head.innerHTML = header();

import footer from "../components/footer.js"
var foot = document.getElementById("footer");
foot.innerHTML = footer();



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slide = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].className = slide[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slide[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}



async function categoryData() {

    try {

        //let response_paneer = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=paneer`);   //Filter by main ingredient

        //www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata //Search meal by name
        //let response_2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=burger`);   //Filter by Category
        //Search meal by name

        let response_buyOne = await fetch(`http://localhost:8888/category/indian`);    //Filter by Area

        let response_rice = await fetch(`http://localhost:8888/category/rice`);
        let response_noodles = await fetch(`http://localhost:8888/category/noodle`);
        let response_pasta = await fetch(`http://localhost:8888/category/pasta`);
        let response_biriyani = await fetch(`http://localhost:8888/category/biryani`);
        let response_salad = await fetch(`http://localhost:8888/category/salad`);
        let response_keto = await fetch(`http://localhost:8888/category/chicken`);
        let response_burger = await fetch(`http://localhost:8888/category/burger`);


        let response_breakfast = await fetch(`http://localhost:8888/category/breakfast`);
        let response_snacks = await fetch(`http://localhost:8888/category/starter`);


        let response_sandwitches = await fetch(`http://localhost:8888/category/sandwich`);
        let response_sides = await fetch(`http://localhost:8888/category/soup`);;
        let response_desserts = await fetch(`http://localhost:8888/category/dessert`);


        let data_buyOne = await response_buyOne.json();
        var buy = data_buyOne[0].product_id


        let data_rice = await response_rice.json();
        let rices = data_rice[0].product_id

        let data_noodle = await response_noodles.json();
        let noodle = data_noodle[0].product_id

        let data_pasta = await response_pasta.json();
        let pasta = data_pasta[0].product_id

        let data_biriyani = await response_biriyani.json();
        let biriyani = data_biriyani[0].product_id

        let data_fit = await response_salad.json();
        let fit = data_fit[0].product_id

        let data_keto = await response_keto.json();
        let keto = data_keto[0].product_id

        let data_burger = await response_burger.json();
        let burger = data_burger[0].product_id

        let data_breakfast = await response_breakfast.json();
        let breakfast = data_breakfast[0].product_id

        let data_snacks = await response_snacks.json();
        let snacks = data_snacks[0].product_id

        let data_sandwitches = await response_sandwitches.json();
        let sandwitches = data_sandwitches[0].product_id

        let data_sides = await response_sides.json();
        let sides = data_sides[0].product_id

        let data_desserts = await response_desserts.json();
        let desserts = data_desserts[0].product_id


        console.log("data_buyOne", buy);
        console.log("data_rice", rice);
        console.log("data_noodle", noodle);
        console.log("data_pasta", pasta);
        console.log("data_biriyani", biriyani);
        console.log("data_fit", fit);
        console.log("data_keto", keto);
        console.log("data_burger", burger);
        console.log("data_breakfast", breakfast);
        console.log("data_snacks", snacks);
        console.log("data_sandwitches", sandwitches);
        console.log("data_sides", sides);
        console.log("data_desserts", desserts);

        appendBuyone(buy);
        appendRice(rices);
        appendNoodle(noodle);
        appendPasta(pasta);
        appendBiriyani(biriyani);
        appendFit(fit);
        appendKeto(keto);
        appendBurger(burger);
        appendBreakfast(breakfast);
        appendSnacks(snacks);
        appendSandwitches(sandwitches);
        appendSides(sides);
        appendDesserts(desserts);
    }
    catch (error) {
        console.log("error", error);
    }

}

categoryData();

let buyOne = document.getElementById('buyOne');

function appendBuyone(buy) {

    buy.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        buyOne.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}

let rice = document.getElementById('rice');
function appendRice(rices) {

    rices.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        rice.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}

let noodles = document.getElementById('noodle');
function appendNoodle(noodle) {

    noodle.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        noodles.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}
let pastas = document.getElementById('pasta');
function appendPasta(pasta) {

    pasta.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        pastas.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}
let biriyanis = document.getElementById('biriyani');
function appendBiriyani(biriyani) {

    biriyani.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        biriyanis.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}
let fits = document.getElementById('fit');
function appendFit(fit) {

    fit.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        fits.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}

let ketos = document.getElementById('keto');
function appendKeto(keto) {

    keto.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        ketos.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}

let burgers = document.getElementById('burger');
function appendBurger(burger) {

    burger.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        burgers.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}

let breakfasts = document.getElementById('breakfast');
function appendBreakfast(breakfast) {

    breakfast.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        breakfasts.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}



let accompanimentss = document.getElementById('accompaniments');

function appendSnacks(snacks) {

    snacks.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        accompanimentss.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}



let sandwitchess = document.getElementById('sandwitches');
function appendSandwitches(sandwitches) {

    sandwitches.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        sandwitchess.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}

let sidess = document.getElementById('sides');
function appendSides(sides) {

    sides.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        sidess.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}
let dessertss = document.getElementById('desserts');
function appendDesserts(desserts) {

    desserts.forEach(({ strMeal, strMealThumb, price, _id }) => {

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + price;
        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        dessertss.append(main_div);

        img.addEventListener("click", () => {

            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", _id);

            window.location.href = "mealpage.html";

        });

    });


}




//cart pages
var cart = JSON.parse(localStorage.getItem("CartData")) || []
function sideCart({ strMeal, strMealThumb, price }) {
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c s s s ";
    `;
    document.querySelector(".sideCartMain").style.display = "block";
    document.querySelector(".container").style.width = "100%";
    document.querySelector(".secondpart").style.width = "110%";
    document.querySelector(".secondpart").style.marginLeft = "-6%";
    document.querySelector("#category_list").style.marginLeft = "50px";
    document.querySelector("#category_image").style.marginLeft = "0%";
    document.querySelector("#category_image").style.width = "80%";
    document.querySelector("#dodiv1").style.marginLeft = "4%";
    document.querySelector("#dodiv2").style.marginLeft = "52px";
    document.querySelector("#inp").style.width = "380px";

    var carimg = document.querySelectorAll(".carimg")
    for (let i = 0; i < carimg.length; i++) {
        carimg[i].style.width = "30%";
        carimg[i].style.height = "35%";
    }


    let cartData = {
        strMeal,
        strMealThumb,
        price
    }
    cart.push(cartData)
    localStorage.setItem("CartData", JSON.stringify(cart));
    appendCart(cart)
    cartTotal()

    console.log(cartData)

}


function appendCart(cart) {
    let sideCartData = document.querySelector(".sideCart");

    document.querySelector(".sideCart").innerHTML = "";
    document.querySelector("#cartLength").innerHTML = `${cart.length} items`;
    document.querySelector("#cartlength").innerHTML = cart.length;

    cart.map(function (elem, index) {
        let div = document.createElement("div");
        div.setAttribute("class", "sideCartDiv")


        let p = document.createElement("p");
        p.setAttribute("id", "searchHistory");
        p.innerText = elem.strMeal;

        let div2 = document.createElement("div");

        let price = document.createElement("p");
        price.innerText = elem.price
        let span = document.createElement("span");

        let btn1 = document.createElement("button")
        btn1.setAttribute("id", "dec")
        btn1.innerHTML = "-"
        btn1.addEventListener("click", function () {
            dec(index)
        })

        let btn2 = document.createElement("button")
        btn2.setAttribute("id", "count")
        btn2.innerHTML = 1


        let btn3 = document.createElement("button")
        btn3.setAttribute("id", "inc")
        btn3.innerHTML = "+"

        span.append(btn1, btn2, btn3)


        div2.append(price, span)
        div.append(p, div2);
        sideCartData.append(div);
    })

}



function cartTotal() {
    var cTotal = document.querySelector(".total");
    var parsedData = JSON.parse(localStorage.getItem("CartData"));
    var cartTotal = 0;
    parsedData.map((data) => {
        cartTotal += Number(data.price);
    });

    cTotal.innerHTML = `₹ ${cartTotal}`;
    console.log(cartTotal)


}




function dec(index) {

    cart.splice(index, 1);
    localStorage.setItem("CartData", JSON.stringify(cart));
    appendCart(cart)
    cartTotal()

}


document.getElementById("placeOrder").addEventListener("click", function () {
    window.location.href = "paymentbycard.html"
})




// ---alsolike----
alsolike()
async function alsolike() {
    try {


        let res = await fetch(
            "http://localhost:8888/category");
        let data = await res.json();
        let meal = data[0].product_id;
        appendLike(meal)
        console.log("also", meal);
    } catch (err) {
        console.log("er:", err);
    }
}

function appendLike(meals) {

    let also = document.querySelector(".alsolike");
    also.innerHTML = "";
    if (meals == undefined) {
        return false;
    }

    meals.forEach(({ strMeal, strMealThumb, price }) => {
        let div = document.createElement("div");
        div.setAttribute("class", "likeDiv")

        let img = document.createElement("img");
        img.src = strMealThumb;
        let p = document.createElement("p");
        p.innerText = strMeal;

        let div2 = document.createElement("div");

        let prices = document.createElement("p");
        prices.innerHTML = "₹" + price;
        let btn = document.createElement("button");
        btn.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        btn.innerHTML = "ADD <sup>+</sup>"


        div2.append(p, price)
        div.append(img, div2, btn);
        also.append(div);
    });
}




document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".sideCartMain").style.display = "none";
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c c c c ";
    `;
})


document.getElementById("search_div").addEventListener("click", function () {
    window.location.href = "search.html"
})
document.getElementById("help_div").addEventListener("click", function () {
    window.location.href = "help.html"
})
var cartdiv = document.getElementById("cart_div");

cartdiv.addEventListener("click", function () {
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c s s s ";
    `;
    document.querySelector(".sideCartMain").style.display = "block";
    document.querySelector(".container").style.width = "100%";
    document.querySelector(".secondpart").style.width = "110%";
    document.querySelector(".secondpart").style.marginLeft = "-6%";
    document.querySelector("#category_list").style.marginLeft = "50px";
    document.querySelector("#category_image").style.marginLeft = "0%";
    document.querySelector("#category_image").style.width = "80%";
    document.querySelector("#dodiv1").style.marginLeft = "4%";
    document.querySelector("#dodiv2").style.marginLeft = "52px";
    document.querySelector("#inp").style.width = "380px";

    var carimg = document.querySelectorAll(".carimg")
    for (let i = 0; i < carimg.length; i++) {
        carimg[i].style.width = "30%";
        carimg[i].style.height = "35%";
    }



    localStorage.setItem("CartData", JSON.stringify(cart));
    appendCart(cart)
    cartTotal()

});


document.getElementById("homeimg").addEventListener("click", function () {
    window.location.href = "index.html"
})
document.getElementById("offers_div").addEventListener("click", function () {
    window.location.href = "offer.html"
})

document.getElementById("price_div").addEventListener("click", handlePriceSort)
async function handlePriceSort() {
    document.getElementById("buyOne").innerHTML = null
    document.getElementById("rice").innerHTML = null
    document.getElementById("noodle").innerHTML = null
    document.getElementById("pasta").innerHTML = null
    document.getElementById("biriyani").innerHTML = null
    document.getElementById("fit").innerHTML = null
    document.getElementById("keto").innerHTML = null
    document.getElementById("burger").innerHTML = null
    document.getElementById("breakfast").innerHTML = null
    document.getElementById("accompaniments").innerHTML = null
    document.getElementById("sandwitches").innerHTML = null
    document.getElementById("sides").innerHTML = null
    document.getElementById("desserts").innerHTML = null
    try {
        let high = await fetch(`http://localhost:8888/category/higher`);
        let higher = await high.json();
        var main = higher[0].product_id
        var main1 = higher[1].product_id
        var main2 = higher[2].product_id
        var main3 = higher[3].product_id
        var main4 = higher[4].product_id
        var main5 = higher[5].product_id
        var main6 = higher[6].product_id
        var main7 = higher[7].product_id
        var main8 = higher[8].product_id
        var main9 = higher[9].product_id
        var main10 = higher[10].product_id
        var main11 = higher[11].product_id
        var main12 = higher[12].product_id
        
        
        appendBuyone(main);
        appendRice(main1);
        appendNoodle(main2);
        appendPasta(main3);
        appendBiriyani(main4);
        appendFit(main5);
        appendKeto(main6);
        appendBurger(main7);
        appendBreakfast(main8);
        appendSnacks(main9);
        appendSandwitches(main10);
        appendSides(main11);
        appendDesserts(main12);

    }
    catch (err) {
        console.log(err)
    }
}
