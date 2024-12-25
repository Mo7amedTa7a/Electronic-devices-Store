var filter = document.querySelector(".filter");

function open_filter(){
  filter.classList.toggle("active");
}






fetch("js/item.json")
  .then((response) => response.json())
  .then((data) => {
    const products_dev = document.querySelector("#products_dev");

    all_products_json = data;

    data.forEach((product) => {
      const persent_dis = product.old_price?`<span class="sale_present">%${Math.floor(((product.old_price - product.price) / product.old_price) * 100)}</span>`:"";
      const old_price_pargrahp = product.old_price?`<p class="old_price">$${product.old_price}</p>`:"";
      products_dev.innerHTML += `
            <div class="product swiper-slide">

            <div class="icons">
              <span><i onclick = "addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>

            ${persent_dis}

            <div class="img_product">
              <img src="${product.img}" alt="">
              <img class="img_hover" src="${product.img_hover}" alt="">
              <h3 class="name_product"><a href="items.html">${product.name}</a></h3>
              
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>

              <div class="price">
                <p><span>$${product.price}</span></p>
                ${old_price_pargrahp}
              </div>
            </div>
          </div>
            `;
    });
  });
