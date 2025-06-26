// toggel effect
// Select all sidebar headings
const headings = document.querySelectorAll(".sidebar_main_heading");
// console.log(headings);

headings.forEach((heading) => {
  heading.addEventListener("click", () => {
    // Find the next element (the list)
    const list = heading.nextElementSibling;

    // Find the chevron icon inside the heading
    const chevron = heading.querySelector(".chevron_up");

    // Toggle visibility
    if (list.style.display === "none") {
      list.style.display = "block";
      chevron.classList.remove("fa-chevron-down");
      chevron.classList.add("fa-chevron-up");
    } else {
      list.style.display = "none";
      chevron.classList.remove("fa-chevron-up");
      chevron.classList.add("fa-chevron-down");
    }
  });
});
import { getShowData } from "./getShowData.js";
import { getshowgriddata } from "./getshowgriddata.js";
import { filter } from "./filter.js";

let main_container = document.querySelector(".product_main_content");
let grid_icon = document.querySelector(".grid_icon");
let list_icon = document.querySelector(".list_icon");

fetch("./product.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }
    return res.json();
  })
  .then((data) => {
    getShowData(data);
    main_container.classList.remove("product_main_content2");
    main_container.classList.add("product_main_content");
  })
  .catch((err) => console.error(err));

grid_icon.addEventListener("click", () => {
  if (!main_container.classList.contains("product_main_content2")) {
    fetch("./gridproduct.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product data");
        }
        return res.json();
      })
      .then((data) => {
        main_container.classList.remove("product_main_content");
        main_container.classList.add("product_main_content2");
        main_container.innerHTML = "";
        getshowgriddata(data);
      })
      .catch((err) => console.error(err));
  }
});

list_icon.addEventListener("click", () => {
  if (!main_container.classList.contains("product_main_content")) {
    fetch("./product.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product data");
        }
        return res.json();
      })
      .then((data) => {
        main_container.classList.remove("product_main_content2");
        main_container.classList.add("product_main_content");
        main_container.innerHTML = "";
        getShowData(data);
      })
      .catch((err) => console.error(err));
  }
});

// list_icon.addEventListener("click", () => {
//   if (!main_container.classList.contains("product_main_content")) {
//     fetch("./product.json")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch list data");
//         return res.json();
//       })
//       .then((data) => {
//         main_container.classList.remove("product_main_content2");
//         main_container.classList.add("product_main_content");
//         main_container.innerHTML = ""; // Clear previous grid items
//         getShowData(data);
//       })
//       .catch((err) => console.error(err));
//   }
// });
// import { getShowData } from "./getShowData.js";
// import { getshowgriddata } from "./getshowgriddata.js";

// const main_container = document.querySelector(".product_main_content");
// const grid_icon = document.querySelector(".grid_icon");
// const list_icon = document.querySelector(".list_icon");

// // Default load (list view)
// fetch("./product.json")
//   .then((res) => {
//     if (!res.ok) throw new Error("Failed to fetch product data");
//     return res.json();
//   })
//   .then((data) => {
//     main_container.classList.remove("product_main_content2");
//     main_container.classList.add("product_main_content");
//     getShowData(data);
//   })
//   .catch((err) => console.error(err));

// // Grid view toggle
// grid_icon.addEventListener("click", () => {
//   if (!main_container.classList.contains("product_main_content2")) {
//     fetch("./gridproduct.json")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch grid data");
//         return res.json();
//       })
//       .then((data) => {
//         main_container.classList.remove("product_main_content");
//         main_container.classList.add("product_main_content2");
//         main_container.innerHTML = ""; // Clear previous list items
//         getshowgriddata(data);
//       })
//       .catch((err) => console.error(err));
//   }
// });

// // List view toggle
// list_icon.addEventListener("click", () => {
//   if (!main_container.classList.contains("product_main_content")) {
//     fetch("./product.json")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch list data");
//         return res.json();
//       })
//       .then((data) => {
//         main_container.classList.remove("product_main_content2");
//         main_container.classList.add("product_main_content");
//         main_container.innerHTML = ""; // Clear previous grid items
//         getShowData(data);
//       })
//       .catch((err) => console.error(err));
//   }
// });
