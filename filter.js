export const filter = () => {};

const selectedFilters = document.querySelector("#selectedFilters");
const sidebarInputs = document.querySelectorAll(
  'input[type="checkbox"], input[type="radio"]'
);

function updateFilters() {
  // Clear previous filters
  selectedFilters.innerHTML = "";
  const existing = new Set();

  // Loop through all checked inputs
  sidebarInputs.forEach((input) => {
    if (input.checked) {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label || existing.has(label.textContent)) return;

      existing.add(label.textContent); // Avoid duplicates

      // Create filter tag
      const filterDiv = document.createElement("div");
      filterDiv.classList.add("filter_item");

      const para = document.createElement("p");
      para.classList.add("filter_name");
      para.textContent = label.textContent;

      const span = document.createElement("span");
      span.innerHTML = `<i class="fa-solid fa-xmark cancel_filter" data-id="${input.id}"></i>`;

      filterDiv.append(para, span);
      selectedFilters.append(filterDiv);

      // Cancel icon functionality
      span.querySelector("i").addEventListener("click", (e) => {
        const inputId = e.target.getAttribute("data-id");
        const input = document.getElementById(inputId);
        if (input) input.checked = false;
        updateFilters(); // Refresh the list
      });
    }
  });

  // Add "Clear All" if any filters exist
  if (existing.size > 0) {
    const clearAll = document.createElement("p");
    clearAll.textContent = "clear all filter";
    clearAll.classList.add("clear_all_filters");

    clearAll.addEventListener("click", () => {
      sidebarInputs.forEach((input) => {
        input.checked = false;
      });
      updateFilters(); // Refresh after clearing
    });

    selectedFilters.append(clearAll);
  }
}

// Attach listener to all checkboxes and radios
sidebarInputs.forEach((input) => {
  input.addEventListener("change", updateFilters);
});
