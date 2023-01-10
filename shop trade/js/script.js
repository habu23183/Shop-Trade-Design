window.onscroll = () => {

    document.getElementsByClassName('header')[0].classList.remove('active');

    if (window.scrollY > 80) {
        document.getElementsByClassName('header')[0].classList.add('active');
    } else {
        document.getElementsByClassName('header')[0].classList.remove('active');
    }

}
window.onload = () => {

        if (window.scrollY > 80) {
            document.getElementsByClassName('nav')[0].classList.add('active');
        } else {
            document.getElementsByClassName('nav')[0].classList.remove('active');
        }
    }
    /*Cart*/

let cart = document.getElementById('cartClick');
let cartList = document.getElementsByClassName('cart-list');
cart.onclick = () => {
    cartList[0].classList.add('active');
}

/*Menu open*/

let menu = document.getElementsByClassName('menu');
let nav = document.getElementsByClassName('nav-list');
menu[0].onclick = () => {
    nav[0].classList.add('active');
    cartList[0].classList.remove('active');
}


/*Menu close*/

let close = document.getElementsByClassName('close');
let cross = document.getElementById('cross');
cross.onclick = () => {

    cartList[0].classList.remove('active');
}
close[0].onclick = () => {
    nav[0].classList.remove('active');

}

/*Drop down Price wise*/

let select = document.getElementById('select');
let list = document.getElementById('list');
let selectText = document.getElementById('select-text');
let options = document.getElementsByClassName('options');

select.onclick = function() {
    list.classList.toggle('open');
    cartList[0].classList.remove('active');
}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (e) => {
        selectText.innerHTML = e.target.innerText;
    })
}

/*Filter button active*/

// let btn = document.getElementsByClassName('btn');
// for (let i = 0; i < btn.length; i++) {
//     btn[i].onclick = () => {
//         let current = document.getElementsByClassName('active');
//         current[0].className = current[0].className.replace('active', '');
//         btn[i].className += ' active';
//         cartList[0].classList.remove('active');
//     }
// }

/*Increase Count*/

let addCount = document.getElementsByClassName('addCart');
let countIncr = document.getElementsByClassName('count');
let count = 0;
for (let i = 0; i < addCount.length; i++) {
    addCount[i].disabled = false;
    addCount[i].addEventListener('click', (e) => {
        count = count + 1;
        countIncr[0].innerText = count;
        addCount[i].style.border = '1px solid #eaeaea';
        addCount[i].disabled = true;
    })
}


function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == "all") c = "";


    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("filter");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

$("document").ready(function() {
    filterSelection('all');

});



function price_sorting(event) {
    var token = $(event).attr('token');
    if (token == 'high') // this means high to low
    {
        for (let i = 0; i < products.length; i++) {
            for (let j = i + 1; j < products.length; j++) {
                if (parseInt(products[i]['price']) < parseInt(products[j]['price'])) {
                    temp = products[i];
                    products[i] = products[j];
                    products[j] = temp;
                }
            }
        }
    } else { // this means low to high
        for (let i = 0; i < products.length; i++) {
            for (let j = i + 1; j < products.length; j++) {
                if (parseInt(products[i]['price']) > parseInt(products[j]['price'])) {
                    temp = products[i];
                    products[i] = products[j];
                    products[j] = temp;
                }
            }
        }
    }
    var index = $('.filter-item.active').attr('token');
    document.getElementById('product-list').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
        if (index == 'all') {
            content = '<div class="box show ' + products[i]['tag'] + '"><img src="' + products[i]['image_src'] + '" alt=""><div class="content"><h4>' + products[i]['vendor'] + '</h4><p class="text">' + products[i]['name'] + '</p><div class="cost"><p>$' + products[i]['price'] + '</p><small><span class="strike">$' + products[i]['compare_at_price'] + '</span> <span class="off">(50% Off)</span></small></div></div><div class="size"><button class="addCart" type="button">Add To Cart</button><p class="text">Sizes: XS, S, M, L ,XL</p><div class="cost"><p>$' + products[i]['price'] + '</p><small><span class="strike">$' + products[i]['compare_at_price'] + '</span> <span class="off">(50% Off)</span></small></div></div></div>';
        } else {
            if (products[i]['tag'] == index) {
                content = '<div class="box show ' + products[i]['tag'] + '"><img src="' + products[i]['image_src'] + '" alt=""><div class="content"><h4>' + products[i]['vendor'] + '</h4><p class="text">' + products[i]['name'] + '</p><div class="cost"><p>$' + products[i]['price'] + '</p><small><span class="strike">$' + products[i]['compare_at_price'] + '</span> <span class="off">(50% Off)</span></small></div></div><div class="size"><button class="addCart" type="button">Add To Cart</button><p class="text">Sizes: XS, S, M, L ,XL</p><div class="cost"><p>$' + products[i]['price'] + '</p><small><span class="strike">$' + products[i]['compare_at_price'] + '</span> <span class="off">(50% Off)</span></small></div></div></div>';
            }

        }
        document.getElementById('product-list').innerHTML += content;
    }
}