const URL =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?";

// Recebe os produtos da api
async function getListEmail() {
  try {
    const response = await axios.get(`${URL}page=1`);

    let dataListTwo = response.data.products.slice(0, 2);

    showListEmail(dataListTwo);
  } catch (err) {
    console.log(err);
  }
}
getListEmail();

// Lista os produtos
async function showListEmail(items) {
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

  document.getElementById("zoneListEmail").innerHTML = output;
}

// Recebe novos produtos da api
async function getListPlusEmail() {
  try {
    const response = await axios.get(`${URL}page=1`);

    let dataListTwo = response.data.products.slice(0, 2);

    showListPlusEmail(dataListTwo);

    document.getElementById("btn-api-plus").style.display = "none";
  } catch (err) {
    console.log(err);
  }
}

// Lista novos produtos da api
async function showListPlusEmail(items) {
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

  document.getElementById("zoneListPlusEmail").innerHTML = output;
}
