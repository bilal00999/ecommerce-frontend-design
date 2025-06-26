let product_main_content = document.querySelector(".product_main_content");
let productTemplate = document.querySelector(".product_template");
export const getShowData = (product) => {
  if (!product) {
    return false;
  }
  product.forEach((item) => {
    const {
      productname,
      actualprice,
      esstemetedprice,
      rating,
      orders,
      description,
      image,
    } = item;

    const clone = document.importNode(productTemplate.content, true);

    clone.querySelector(".p_c_item_img").src = image;
    clone.querySelector(".p_c_i_d_para1").innerText = `${productname}`;
    clone.querySelector(".p_c_actual_price").innerText = `$${actualprice}`;
    clone.querySelector(
      ".p_c_esstemeted_price"
    ).innerText = `$${esstemetedprice}`;
    clone.querySelector(".p_c_i_rating").innerText = `${rating}`;
    clone.querySelector(".p_c_i_orders").innerText = `${orders} orders`;
    clone.querySelector(".p_c_i_description").innerText = description;

    product_main_content.appendChild(clone);
  });
};
