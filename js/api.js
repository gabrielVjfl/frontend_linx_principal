const URL =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?";

// Recebe os produtos da api
async function getList() {
  try {
    const response = await axios.get(`${URL}page=1`);

    let data = response.data.products;

    show(data);
  } catch (err) {
    console.log(err);
  }
}
getList();

// Lista os produtos
function show(items) {
  const output = items
    .map(
      (item) =>
        `
   
    <div class="card">
    <div class="card-content">
    <div class="card-header">
      <img loading="lazy" src="http:${item.image}" alt=${item.name}>
    </div>
    <div class="card-body">
     <span class="nameProduct">${item.name}</span><br>
     <p class="descriptionProduct">${item.description}</p>
     <span class="oldPriceProduct">De: R$${item.oldPrice}</span><br>
     <span class="priceProduct">Por: R$${item.price}</span><br>
     <span class="creditProduct">ou ${item.installments.count}X de R$ 
     ${item.installments.value.toFixed(2)}</span><br>
     <button class="btnProducts">Comprar</button>
     <br>
     <br>
    </div>
    </div>
  </div>

    `
    )
    .join("");

  document.getElementById("zone").innerHTML = output;
}


// Recebe os produtos da segunda página da api
async function getListPlus() {
  try {
    const response = await axios.get(`${URL}page=2`);

    let data = response.data.products;

    document.getElementById("btn-api-plus").style.display = "none";
    document.getElementById("btn-api-remove").style.display = "block";

    showPlus(data);
  } catch (err) {
    console.log(err);
  }
}

// Lista os produtos da segunda página da api
function showPlus(items) {
  const output = items
    .map(
      (item) =>
        `
   
    <div class="card">
    <div class="card-header">
      <img loading="lazy" src="http:${item.image}" alt=${item.name}>
    </div>
    <div class="card-body">
     <span class="nameProduct">${item.name}</span><br>
     <p class="descriptionProduct">${item.description}</p>
     <span class="oldPriceProduct">De: R$${item.oldPrice}</span><br>
     <span class="priceProduct">Por: R$${item.price}</span><br>
     <span class="creditProduct">ou ${item.installments.count}X de R$ 
     ${item.installments.value.toFixed(2)}</span><br>
     <button class="btnProducts">Comprar</button>
     <br>
     <br>
    </div>
  </div>

    `
    )
    .join("");

  document.getElementById("zonesPlus").innerHTML = output;
}

// Volta para a primeira página de produtos
function removeListPlus() {
  showPlus([]);
  document.getElementById("btn-api-plus").style.display = "block";
  document.getElementById("btn-api-remove").style.display = "none";
}
