let product_main_content = document.querySelector(".product_main_content");
let productTemplate2 = document.querySelector(".grid_product_template");
export const getshowgriddata = (gridproduct) => {
  if (!gridproduct) {
    return false;
  }
  gridproduct.forEach((prodElm) => {
    const {
      grid_image,
      grid_actualprice,
      grid_esstemetedprice,
      grid_rating,
      grid_description,
    } = prodElm;
    const productClone = document.importNode(productTemplate2.content, true);

    productClone.querySelector(".grid_image").src = grid_image;
    productClone.querySelector(
      ".grid_p_actual_price"
    ).textContent = `$${grid_actualprice}`;
    productClone.querySelector(
      ".grid_p_esstemeted_price"
    ).textContent = `$${grid_esstemetedprice}`;
    productClone.querySelector(".p_c_i_rating").textContent = grid_rating;
    productClone.querySelector(".grid_p_description").textContent =
      grid_description;

    product_main_content.appendChild(productClone);
  });
};
