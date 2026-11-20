// ===================================================
// 1. PRODUCT DATA
// Each watch is an object inside this array.
// ===================================================
const products = [
  {
    id: 1,
    name: "Noir Chronograph",
    category: "Chronograph",
    price: 4850,
    badge: "New",
    image: "https://images.pexels.com/photos/9453448/pexels-photo-9453448.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    description: "A bold black chronograph with a matte dial and crisp luminous hands. Made for those who value quiet confidence.",
    caseSize: "42 mm black PVD steel",
    movement: "Automatic chronograph",
    strap: "Black calfskin leather",
    water: "100 m"
  },
  {
    id: 2,
    name: "Sterling Link",
    category: "Classic",
    price: 2490,
    badge: "",
    image: "https://images.pexels.com/photos/128619/pexels-photo-128619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    description: "A slim silver timepiece on a link bracelet. Clean lines and a crisp dial for everyday elegance.",
    caseSize: "40 mm polished stainless steel",
    movement: "Swiss quartz",
    strap: "Stainless steel link bracelet",
    water: "50 m"
  },
  {
    id: 3,
    name: "Royal Chronograph",
    category: "Chronograph",
    price: 5400,
    badge: "Bestseller",
    image: "https://images.pexels.com/photos/4601006/pexels-photo-4601006.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    description: "A sporty chronograph with a polished steel case and a bright dial that reads clearly in any light.",
    caseSize: "41 mm polished steel",
    movement: "Quartz chronograph",
    strap: "Steel bracelet",
    water: "100 m"
  },
  {
    id: 4,
    name: "Aurum Gold Bezel",
    category: "Gold",
    price: 7900,
    badge: "Limited",
    image: "https://images.pexels.com/photos/3419331/pexels-photo-3419331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    description: "A round gold-tone watch with a sparkling bezel. A limited piece for special occasions.",
    caseSize: "38 mm gold-tone steel",
    movement: "Swiss quartz",
    strap: "Gold-tone bezel with leather strap",
    water: "30 m"
  },
  {
    id: 5,
    name: "Man of Gold",
    category: "Gold",
    price: 8750,
    badge: "Luxury",
    image: "https://images.pexels.com/photos/25052866/pexels-photo-25052866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    description: "A warm gold wristwatch that makes a statement on the wrist. Designed for evenings and celebrations.",
    caseSize: "40 mm 18k gold plated",
    movement: "Automatic",
    strap: "Gold-tone bracelet",
    water: "50 m"
  },
  {
    id: 6,
    name: "Verde Classic",
    category: "Classic",
    price: 3150,
    badge: "",
    image: "https://images.pexels.com/photos/7120291/pexels-photo-7120291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    description: "A refined classic watch inspired by the calm of the countryside. Simple, light and easy to wear.",
    caseSize: "39 mm stainless steel",
    movement: "Swiss quartz",
    strap: "Woven fabric strap",
    water: "50 m"
  },
  {
    id: 7,
    name: "Skeleton Mechanica",
    category: "Mechanical",
    price: 12300,
    badge: "Rare",
    image: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    description: "See the heartbeat of the movement through an open dial. A true mechanical masterpiece.",
    caseSize: "43 mm steel",
    movement: "Hand-wound skeleton",
    strap: "Brown alligator leather",
    water: "50 m"
  },
  {
    id: 8,
    name: "Heritage Pocket",
    category: "Mechanical",
    price: 6400,
    badge: "",
    image: "https://images.pexels.com/photos/325871/pexels-photo-325871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    description: "An open-face pocket watch with a classic dial and visible gears. A tribute to the golden age of watchmaking.",
    caseSize: "48 mm gold-tone brass",
    movement: "Hand-wound mechanical",
    strap: "Gold chain",
    water: "Not water resistant"
  }
];

// ===================================================
// 2. HELPER FUNCTIONS
// ===================================================
function formatPrice(amount) {
  return "$" + amount.toLocaleString("en-US");
}

function getProduct(id) {
  return products.find(function (item) {
    return item.id === id;
  });
}

// ===================================================
// 3. SCROLLING BEHAVIOUR (one long page)
// - the menu links simply jump to each section
// - the gold line shows how far you scrolled
// - the active menu item follows the section you are in
// ===================================================
const navLinks = document.querySelectorAll(".nav-link");
const sectionIds = ["home", "collection", "about", "contact"];
const backToTopBtn = document.getElementById("back-to-top");
const progressBar = document.getElementById("scroll-progress");

// Find which section is currently at the top of the screen
function getCurrentSection() {
  let current = "home";

  sectionIds.forEach(function (id) {
    const section = document.getElementById(id);
    if (window.scrollY >= section.offsetTop - 150) {
      current = id;
    }
  });

  return current;
}

function handleScroll() {
  const current = getCurrentSection();

  // Highlight the matching menu link
  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });

  // Fill the progress line
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / pageHeight) * 100;
  progressBar.style.width = scrolled + "%";

  // Header shadow + back to top button
  document.getElementById("site-header").classList.toggle("scrolled", window.scrollY > 40);
  backToTopBtn.classList.toggle("show", window.scrollY > 400);
}

window.addEventListener("scroll", handleScroll);

// Close the mobile menu after clicking a link
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("nav-links").classList.remove("open");
  });
});

// Fade in sections when they appear on screen
const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(function (element) {
  revealObserver.observe(element);
});

// ===================================================
// 4. PRODUCT CARDS, FEATURED & SHOP
// ===================================================
function productCardHTML(product) {
  const badgeHTML = product.badge
    ? '<span class="badge">' + product.badge + '</span>'
    : "";

  return `
    <article class="card">
      <div class="card-img">
        ${badgeHTML}
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="card-body">
        <p class="card-cat">${product.category}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-price">${formatPrice(product.price)}</p>
        <div class="card-actions">
          <button class="btn btn-outline" data-action="view" data-id="${product.id}">View</button>
          <button class="btn" data-action="add" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

// Featured watches on the home part (the ones with a badge)
function renderFeatured() {
  const featured = products.filter(function (p) {
    return p.badge !== "";
  }).slice(0, 3);

  document.getElementById("featured-grid").innerHTML =
    featured.map(productCardHTML).join("");
}

// Collection section: filter + sort
let currentFilter = "All";
let currentSort = "default";

function renderShop() {
  // 1. Filter by category
  let list = [...products];
  if (currentFilter !== "All") {
    list = list.filter(function (p) {
      return p.category === currentFilter;
    });
  }

  // 2. Sort the list
  if (currentSort === "low") {
    list.sort(function (a, b) { return a.price - b.price; });
  } else if (currentSort === "high") {
    list.sort(function (a, b) { return b.price - a.price; });
  } else if (currentSort === "name") {
    list.sort(function (a, b) { return a.name.localeCompare(b.name); });
  }

  // 3. Show the result
  document.getElementById("shop-grid").innerHTML = list.map(productCardHTML).join("");
  document.getElementById("result-count").textContent =
    "Showing " + list.length + " watch" + (list.length === 1 ? "" : "es");
}

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    renderShop();
  });
});

// Sort dropdown
document.getElementById("sort-select").addEventListener("change", function (event) {
  currentSort = event.target.value;
  renderShop();
});

// ===================================================
// 5. PRODUCT DETAIL MODAL
// ===================================================
function openProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  document.getElementById("modal-body").innerHTML = `
    <div class="modal-img">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal-info">
      <p class="card-cat">${product.category}</p>
      <h2>${product.name}</h2>
      <p class="card-price">${formatPrice(product.price)}</p>
      <p>${product.description}</p>
      <ul class="spec-list">
        <li><span>Case</span>${product.caseSize}</li>
        <li><span>Movement</span>${product.movement}</li>
        <li><span>Strap</span>${product.strap}</li>
        <li><span>Water Resistance</span>${product.water}</li>
      </ul>
      <button class="btn btn-full" data-action="add" data-id="${product.id}">Add to Cart</button>
    </div>
  `;

  document.getElementById("product-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("product-modal").classList.remove("open");
}

// Click on the dark background closes the modal
document.getElementById("product-modal").addEventListener("click", function (event) {
  if (event.target === this) {
    closeModal();
  }
});

// ===================================================
// 6. SHOPPING CART (saved in localStorage)
// cart looks like: [{ id: 1, qty: 2 }, { id: 4, qty: 1 }]
// ===================================================
function loadCart() {
  const saved = localStorage.getItem("albertoCart");
  return saved ? JSON.parse(saved) : [];
}

let cart = loadCart();

function saveCart() {
  localStorage.setItem("albertoCart", JSON.stringify(cart));
  renderCart();
}

function addToCart(id) {
  const item = cart.find(function (i) { return i.id === id; });

  if (item) {
    item.qty = item.qty + 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }

  saveCart();
  showToast("Added to your cart");
}

function changeQty(id, amount) {
  const item = cart.find(function (i) { return i.id === id; });
  if (!item) return;

  item.qty = item.qty + amount;

  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
  }
}

function removeFromCart(id) {
  cart = cart.filter(function (i) { return i.id !== id; });
  saveCart();
}

function getCartTotal() {
  return cart.reduce(function (sum, item) {
    return sum + getProduct(item.id).price * item.qty;
  }, 0);
}

function getCartCount() {
  return cart.reduce(function (sum, item) {
    return sum + item.qty;
  }, 0);
}

function renderCart() {
  const itemsBox = document.getElementById("cart-items");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Show the number of items in the header
  document.getElementById("cart-count").textContent = getCartCount();

  // Empty cart message
  if (cart.length === 0) {
    itemsBox.innerHTML = '<p class="empty-cart">Your cart is empty.<br>Scroll to our collection below.</p>';
    checkoutBtn.disabled = true;
  } else {
    itemsBox.innerHTML = cart.map(function (item) {
      const product = getProduct(item.id);
      return `
        <div class="cart-item">
          <img class="cart-item-img" src="${product.image}" alt="${product.name}">
          <div class="cart-item-info">
            <h4>${product.name}</h4>
            <p class="card-price">${formatPrice(product.price)}</p>
            <div class="qty-controls">
              <button data-action="dec" data-id="${product.id}">−</button>
              <span>${item.qty}</span>
              <button data-action="inc" data-id="${product.id}">+</button>
            </div>
            <button class="remove-btn" data-action="remove" data-id="${product.id}">Remove</button>
          </div>
        </div>
      `;
    }).join("");
    checkoutBtn.disabled = false;
  }

  document.getElementById("cart-total").textContent = formatPrice(getCartTotal());
}

function openCart() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
}

function checkout() {
  if (cart.length === 0) return;

  const total = formatPrice(getCartTotal());
  cart = [];
  saveCart();
  closeCart();
  showToast("Thank you! Your order of " + total + " has been placed.");
}

// ===================================================
// 7. EXTRA FEATURES (toast, forms, menu, back to top)
// ===================================================
let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2800);
}

// Contact form with simple validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("c-name").value.trim();
  const email = document.getElementById("c-email").value.trim();
  const message = document.getElementById("c-message").value.trim();
  const feedback = document.getElementById("form-message");

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "Please fill in all the fields.";
    feedback.className = "form-message error";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.className = "form-message error";
    return;
  }

  feedback.textContent = "Thank you, " + name + "! Our concierge will reply to " + email + " within 24 hours.";
  feedback.className = "form-message success";
  this.reset();
});

// Newsletter in the footer
document.getElementById("newsletter-form").addEventListener("submit", function (event) {
  event.preventDefault();
  showToast("Thank you for subscribing!");
  this.reset();
});

// Mobile menu button
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("open");
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Close the modal and cart with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
    closeCart();
  }
});

// ===================================================
// 8. CLICK HANDLER (all buttons with data-action)
// ===================================================
document.addEventListener("click", function (event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const id = Number(button.dataset.id);

  if (action === "view") openProduct(id);
  if (action === "add") addToCart(id);
  if (action === "inc") changeQty(id, 1);
  if (action === "dec") changeQty(id, -1);
  if (action === "remove") removeFromCart(id);
  if (action === "open-cart") openCart();
  if (action === "close-cart") closeCart();
  if (action === "close-modal") closeModal();
  if (action === "checkout") checkout();
});

// ===================================================
// 9. START THE APP
// ===================================================
document.getElementById("year").textContent = new Date().getFullYear();
renderFeatured();
renderShop();
renderCart();
handleScroll();
