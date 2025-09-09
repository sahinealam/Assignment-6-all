// All Data Section steart
const treeContainer = document.getElementById("tree-container");
const allBtn = document.querySelector(".btn-soft");

// Show all plants
const showAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data.plants)) {
        treeContainer.innerHTML = "";
        data.plants.forEach((plant) => {
          const card = document.createElement("div");
          card.innerHTML = `<div class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md p-4 mx-auto">
            <div>
              <img class="h-64 mx-auto" src="${plant.image}" alt="" srcset="">
            </div>
            <h2 class="text-lg font-semibold text-gray-800">${plant.name}</h2>
            <p class="text-sm text-gray-600 mt-1">${plant.description}</p>
            <div class="flex justify-between items-center mt-4 flex-wrap">
              <span class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mt-2 sm:mt-0">${plant.category}</span>
              <span class="text-gray-800 font-semibold mt-2 sm:mt-0"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span>
            </div>
            <button class="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md">Add to Cart</button>
          </div>`;
          treeContainer.appendChild(card);
        });
      } else {
        treeContainer.innerHTML = "<p>No plant data found.</p>";
      }
    })
    .catch((err) => {
      treeContainer.innerHTML = "<p>Error loading plant data.</p>";
      console.error(err);
    });
};

// All button click event
if (allBtn) {
  allBtn.addEventListener("click", () => {
    removeActive();
    allBtn.classList.add("activ");
    showAllPlants();
  });
  manageSpinner(false);
}

// Initial load: show all plants
showAllPlants();

const loadCategorieTrees = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayTrees(data.categories));
};
// remove activ tree
const removeActive = () => {
  const treesButton = document.querySelectorAll(".tree-btn, .btn-soft");
  treesButton.forEach((btn) => btn.classList.remove("activ"));
};

// sppiner -stert
const manageSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("tree-container").classList.add("hidden");
  } else {
    document.getElementById("tree-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
}
// sppiner -end

// LoadTee -stert
const loadTree = (id) => {
  manageSpinner(true)
  // console.log(id)
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`tree-btn${id}`);
      if (clickBtn) clickBtn.classList.add("activ");
      displayLoadTrees(data.plants);
    });
};
const loadtreeDeatil = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  console.log(url)
  // console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displatreeDetils(details.plants);
};
const displatreeDetils = (tree) => {
  console.log(tree)
  const detailsBox = document.getElementById("details-container");
  // console.log(detailsBox)
  detailsBox.innerHTML = `<div class=" p-4">
  
 <!-- Title -->
  <h2 class="text-lg font-semibold text-gray-800">${tree.category}</h2>
  <!-- Image Placeholder -->
  <div>
      <img class="h-64 mx-auto" src="${tree.image}" alt="" srcset="">
      </div>
  <!-- Description -->
  <p class="text-sm text-gray-600 mb-3">
    ${tree.description}
  </p>

  <!-- Label + Price -->
  <div class="flex justify-between items-center mb-3">
   
   <span class="text-gray-800 font-bold mt-2 sm:mt-0"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</span>
  </div>
</div>`;
  document.getElementById("tree_modal").showModal();

};
const displayLoadTrees = (trees) => {
  // console.log(trees)
  const tree_container = document.getElementById("tree-container");
  tree_container.innerHTML = "";
  trees.forEach((tree) => {
    const card = document.createElement("div");
    card.innerHTML = `<div class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md p-4 mx-auto">
      <div>
      <img class="h-64 mx-auto" src="${tree.image}" alt="" srcset="">
      </div>
      <h2 onclick="loadtreeDeatil(${tree.id})" class="text-lg font-bold text-gray-800">${tree.name}</h2>
      <p class="text-sm text-gray-600 mt-1">${tree.description}</p>
      <div class="flex justify-between items-center mt-4 flex-wrap">
      <span class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mt-2 sm:mt-0">${tree.category}</span>
      <span class="text-gray-800 font-bold mt-2 sm:mt-0"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</span>
      </div>
      <button class="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md">Add to Cart</button>
    </div>`;
    tree_container.appendChild(card);
  });
  return manageSpinner(false);
  
};

const displayTrees = (trees) => {
  const tree_level_container = document.getElementById("tree-level-container");
  tree_level_container.innerHTML = "";
  for (let tree of trees) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button id="tree-btn${tree.id}"
       onclick="loadTree(${tree.id})" class="btn btn-outline border-none tree-btn">${tree.category_name}</button>
    `;
    tree_level_container.appendChild(btnDiv);
  }
};

loadCategorieTrees(); 
