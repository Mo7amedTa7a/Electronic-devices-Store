fetch("js/item.json")
  .then((response) => response.json())
  .then((data) => {
    const swip_eritem_sale = document.querySelector("#swip_eritem_sale");
    const other_product_swiper = document.querySelector(
      "#other_product_swiper"
    );
    const other_product_swiper2 = document.querySelector(
      "#other_product_swiper2"
    );

    all_products_json = data;

    data.forEach((product) => {
      if (product.old_price) {
        const persent_dis = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        swip_eritem_sale.innerHTML += `
            <div class="product swiper-slide">

            <div class="icons">
              <span><i onclick = "addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>

            <span class="sale_present">%${persent_dis}</span>

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
                <p class="old_price">$${product.old_price}</p>
              </div>
            </div>
          </div>
            `;
      }
    });

    data.forEach((product) => {
      other_product_swiper.innerHTML += `
          <div class="product swiper-slide">

          <div class="icons">
            <span><i onclick = "addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
            <span><i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
          </div>

          <div class="img_product">
            <img src="${product.img}" alt="">
            <img class="img_hover" src="${product.img_hover}" alt="">
            <h3 class="name_product"><a href="">${product.name}</a></h3>
            
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>

            <div class="price">
              <p><span>$${product.price}</span></p>
            </div>
          </div>
        </div>
          `;
    });

    data.forEach((product) => {
      other_product_swiper2.innerHTML += `
        <div class="product swiper-slide">

        <div class="icons">
          <span><i onclick = "addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
          <span><i class="fa-solid fa-heart"></i></span>
          <span><i class="fa-solid fa-share"></i></span>
        </div>

        <div class="img_product">
          <img src="${product.img}" alt="">
          <img class="img_hover" src="${product.img_hover}" alt="">
          <h3 class="name_product"><a href="">${product.name}</a></h3>
          
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <div class="price">
            <p><span>$${product.price}</span></p>
          </div>
        </div>
      </div>
        `;
    });
  });
