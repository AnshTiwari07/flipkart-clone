function toggleDropdownMenu(event) {
  const dropdownMenu = event.currentTarget.querySelector(
    ".homeHeader .dropdown-menu"
  );
  if (dropdownMenu) {
    if (event.type === "mouseenter") {
      dropdownMenu.classList.add("show");
      // console.log("shwo")
    } else if (event.type === "mouseleave") {
      dropdownMenu.classList.remove("show");
      // console.log("hide")
    }
  }
}

// Adding event listeners to both elements (support both id spellings)
const navbarDropdown = document.getElementById("navbarDropdown") || document.getElementById("navbarDropdow");
const moreLinksDropdown = document.getElementById("moreLinksDropdown") || document.getElementById("moreLinksDropdow");

if (navbarDropdown) {
  navbarDropdown.addEventListener("mouseenter", toggleDropdownMenu);
  navbarDropdown.addEventListener("mouseleave", toggleDropdownMenu);
}

if (moreLinksDropdown) {
  moreLinksDropdown.addEventListener("mouseenter", toggleDropdownMenu);
  moreLinksDropdown.addEventListener("mouseleave", toggleDropdownMenu);
}

// for kart
document.addEventListener("DOMContentLoaded", function() {
  try {
    const cartItemsFromStorage = JSON.parse(
      localStorage.getItem("filteredProducts")
    ) || [];
    let cartItemslen = cartItemsFromStorage.length;
    const cartItemsElement = document.getElementById("cartItems");
    
    if (cartItemsElement) {
      if(cartItemslen > 0){
        cartItemsElement.style.visibility = "visible";
        cartItemsElement.innerText = cartItemslen;
      } else {
        cartItemsElement.style.visibility = "hidden";
      }
    }
  } catch (error) {
    const cartItemsElement = document.getElementById("cartItems");
    if (cartItemsElement) {
      cartItemsElement.style.display = "none";
    }
    console.warn(error);
  }
});
