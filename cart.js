var cart = []; // массив для хранения товаров в корзине
var totalPrice = 0; // общая стоимость товаров в корзине

function addToCart(productName, productPrice, productSize, productSrc) {
  cart.push({ name: productName, price: productPrice, size: productSize, src: productSrc}); // добавляем товар в корзину
  totalPrice += productPrice; // увеличиваем общую стоимость
  // alert("Товар добавлен в корзину!");
}

function openCart() {
  var cartItems = ""; // строка для хранения списка товаров
  if (cart.length == 0) {
    cartItems = "Ваша корзина пуста!";
  } else {
    for (var i = 0; i < cart.length; i++) {
      cartItems += "<img src=\"" + cart[i].src + "\">" + cart[i].name + " - Размер: " + cart[i].size + " - " + cart[i].price + " р.</li>";
    }
  }
  document.getElementById("cartItems").innerHTML = cartItems;
  document.getElementById("totalPrice").innerHTML = "Общая стоимость: " + totalPrice + " р.";
  document.getElementById("cartModal").style.display = "block"; // открываем модальное окно корзины
}

function openAdress() {
  // var cartItems = ""; // строка для хранения списка товаров
  // if (cart.length == 0) {
  //   cartItems = "Ваша корзина пуста!";
  // } else {
  //   for (var i = 0; i < cart.length; i++) {
  //     cartItems += "<li>" + cart[i].name + " - Размер: " + cart[i].size + " - " + cart[i].price + " руб.</li>";
  //   }
  // }
  // document.getElementById("cartItems").innerHTML = cartItems;
  // document.getElementById("totalPrice").innerHTML = "Общая стоимость: " + totalPrice + " р.";
  document.getElementById("adressModal").style.display = "block"; // открываем модальное окно корзины
  document.getElementById("cartModal").style.display = "none";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none"; // закрываем модальное окно корзины
}
function closeAdress() {
  document.getElementById("adressModal").style.display = "none"; // закрываем модальное окно корзины
}

const jackets = document.getElementById('jackets');
const productJackets = document.querySelectorAll('.product.jackets');
let j=0;

jackets.onclick = () => {
  if (j==1) {
    // productJackets.forEach(productJacket => { productJacket.style.display = "flex"; });
    productJackets.forEach(productJacket => { productJacket.style.display = "flex"; });
    productPants.forEach(productPant => { productPant.style.display = "flex"; });
    productSneakers.forEach(productSneaker => { productSneaker.style.display = "flex"; });
    jackets.style.backgroundColor="#333";
    j=0;
  }
  else {
    // productJackets.forEach(productJacket => { productJacket.style.display = "none"; });
    productJackets.forEach(productJacket => { productJacket.style.display = "flex"; });
    jackets.style.backgroundColor="green";
    pants.style.backgroundColor="#333";
    sneakers.style.backgroundColor="#333";
    // productJackets.forEach(productJacket => { productJacket.style.color = "green"; });
    productPants.forEach(productPant => { productPant.style.display = "none"; });
    productSneakers.forEach(productSneaker => { productSneaker.style.display = "none"; });
    j=1;p=0;s=0;
  }
};

const pants = document.getElementById('pants');
const productPants = document.querySelectorAll('.pants');
let p=0;

pants.onclick = () => {
  if (p==1) {
    // productPants.forEach(productPant => { productPant.style.display = "flex"; });
    productPants.forEach(productPant => { productPant.style.display = "flex"; });
    productJackets.forEach(productJacket => { productJacket.style.display = "flex"; });
    productSneakers.forEach(productSneaker => { productSneaker.style.display = "flex"; });
    pants.style.backgroundColor="#333";
    p=0;
  }
  else {
    // productPants.forEach(productPant => { productPant.style.display = "none"; });
    pants.style.backgroundColor="green";
    jackets.style.backgroundColor="#333";
    sneakers.style.backgroundColor="#333";
    productPants.forEach(productPant => { productPant.style.display = "flex"; });
    productJackets.forEach(productJacket => { productJacket.style.display = "none"; });
    productSneakers.forEach(productSneaker => { productSneaker.style.display = "none"; });
    p=1;s=0;j=0;
  }
};

const sneakers = document.getElementById('sneakers');
const productSneakers = document.querySelectorAll('.sneakers');
let s=0;

sneakers.onclick = () => {
  if (s==1) {
    // productSneakers.forEach(productSneaker => { productSneaker.style.display = "flex"; });
    productSneakers.forEach(productSneaker => { productSneaker.style.display = "flex"; });
    productJackets.forEach(productJacket => { productJacket.style.display = "flex"; });
    productPants.forEach(productPant => { productPant.style.display = "flex"; });
    sneakers.style.backgroundColor="#333";
    s=0;
  }
  else {
    // productSneakers.forEach(productSneaker => { productSneaker.style.display = "none"; });
    sneakers.style.backgroundColor="green";
    pants.style.backgroundColor="#333";
    jackets.style.backgroundColor="#333";
    productSneakers.forEach(productSneaker => { productSneaker.style.display = "flex"; });
    productJackets.forEach(productJacket => { productJacket.style.display = "none"; });
    productPants.forEach(productPant => { productPant.style.display = "none"; });
    s=1;p=0;j=0;
  }
};