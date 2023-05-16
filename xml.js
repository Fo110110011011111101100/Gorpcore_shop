var xmlDoc;
if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "product.xml", false);
    if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType('text/xml');
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    }
else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load("product.xml");
}

// Получение списка элементов из XML документа
const products0 = xmlDoc.getElementsByTagName("jackets");
var str = "";

for (let i = 0; i < products0.length; i++) {
  const jackets = products0[i];
  const imgSrc = jackets.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = jackets.getElementsByTagName("img")[0].getAttribute("alt");
  const name = jackets.getElementsByTagName("name")[0].textContent;
  const price = jackets.getElementsByTagName("price")[0].textContent;
  const size = jackets.getElementsByTagName("size")[0].textContent;
  str += "<div class=\"product jackets\"><img src=\"" + imgSrc + "\" alt=\"" + imgAlt + "\"><h3>"+
  name+"</h3><p class=\"price\">"+price+" р.</p><label for="+size+">Выберите размер:</label>"+
  "<select name="+size+" id="+size+">"+
  "<option value=\"s\">S</option>"+
  "<option value=\"m\">M</option>"+
  "<option value=\"l\">L</option>"+
  "<option value=\"xl\">XL</option></select>"+
  "<button onclick=\"addToCart('"+name+"',"+price+", document.getElementById('"+size+"').value,'"+imgSrc+"')\">Добавить в корзину</button></div>";
}
	document.getElementById("product-container").innerHTML += str;

const products1 = xmlDoc.getElementsByTagName("sneakers");
var str = "";

for (let i = 0; i < products1.length; i++) {
  const sneakers = products1[i];
  const imgSrc = sneakers.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = sneakers.getElementsByTagName("img")[0].getAttribute("alt");
  const name = sneakers.getElementsByTagName("name")[0].textContent;
  const price = sneakers.getElementsByTagName("price")[0].textContent;
  const size = sneakers.getElementsByTagName("size")[0].textContent;
  str += "<div class=\"product sneakers\"><img src=\"" + imgSrc + "\" alt=\"" + imgAlt + "\"><h3>"+
  name+"</h3><p class=\"price\">"+price+" р.</p><label for="+size+">Выберите размер:</label>"+
  "<select name="+size+" id="+size+">"+
  "<option value=\"38\">38</option>"+
  "<option value=\"39\">39</option>"+
  "<option value=\"40\">40</option>"+
  "<option value=\"41\">41</option>"+
  "<option value=\"42\">42</option>"+
  "<option value=\"43\">43</option>"+
  "<option value=\"44\">44</option></select>"+
  "<button onclick=\"addToCart('"+name+"',"+price+", document.getElementById('"+size+"').value)\">Добавить в корзину</button></div>";
}
	document.getElementById("product-container").innerHTML += str;

const products2 = xmlDoc.getElementsByTagName("pants");
var str = "";

for (let i = 0; i < products2.length; i++) {
  const pants = products2[i];
  const imgSrc = pants.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = pants.getElementsByTagName("img")[0].getAttribute("alt");
  const name = pants.getElementsByTagName("name")[0].textContent;
  const price = pants.getElementsByTagName("price")[0].textContent;
  const size = pants.getElementsByTagName("size")[0].textContent;
  str += "<div class=\"product pants\"><img src=\"" + imgSrc + "\" alt=\"" + imgAlt + "\"><h3>"+
  name+"</h3><p class=\"price\">"+price+" р.</p><label for="+size+">Выберите размер:</label>"+
  "<select name="+size+" id="+size+">"+
  "<option value=\"s\">S</option>"+
  "<option value=\"m\">M</option>"+
  "<option value=\"l\">L</option>"+
  "<option value=\"xl\">XL</option></select>"+
  "<button onclick=\"addToCart('"+name+"',"+price+", document.getElementById('"+size+"').value)\">Добавить в корзину</button></div>";
}
	document.getElementById("product-container").innerHTML += str;