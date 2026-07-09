/*
  HERTS VAPES PRODUCT DATA
  Future updates: edit products, flavours, prices, bundles and bulk copy in this inventory object only.
  The rendering/cart/order logic below should not need changing for normal stock updates.
*/
const inventory = {
  special: {
    title: "Special Deals",
    type: "deals",
    items: [
      {
        name: "Vaporesso XROS Pro 2.0",
        subline: "+ 4 Nic Salts",
        price: "£30",
        meta: "Kit bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "XROS Pro 2.0" }, { label: "Nic Salts", qty: "×4" }],
        prompts: ["Kit colour", "Nic Salt 1", "Nic Salt 2", "Nic Salt 3", "Nic Salt 4"]
      },
      {
        name: "2 XROS Pods",
        subline: "+ 6 Nic Salts",
        price: "£20",
        meta: "Pods and liquids bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "XROS Pods", qty: "×2" }, { label: "Nic Salts", qty: "×6" }],
        prompts: ["Nic Salt 1", "Nic Salt 2", "Nic Salt 3", "Nic Salt 4", "Nic Salt 5", "Nic Salt 6"]
      },
      {
        name: "2 Hayati Dual Flavour 25000",
        price: "£25",
        meta: "25K disposable bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "Hayati 25K", qty: "×2" }],
        prompts: ["Device 1", "Device 2"]
      },
      {
        name: "3 Elux Legend 3500",
        price: "£10",
        meta: "3.5K disposable bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "Elux 3500", qty: "×3" }],
        prompts: ["Flavour 1", "Flavour 2", "Flavour 3"]
      },
      {
        name: "2 Lost Mary BM6000",
        subline: "+ 1 Hayati 25K",
        price: "£30",
        meta: "Mixed disposable bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "Lost Mary", qty: "×2" }, { label: "Hayati 25K" }],
        prompts: ["Lost Mary 1", "Lost Mary 2", "Hayati 25K"]
      }
    ]
  },

  disposable: {
    title: "Disposable Vapes",
    items: [
      { name: "Lost Mary BM6000", price: "£10", meta: "13 flavours available", popular: true, flavours: ["Summer Grape", "Blue Razz Lemonade", "Pineapple Ice", "Cherry Cola", "Cherry Ice", "Strawberry Raspberry Cherry Ice", "Banana Ice", "Triple Mango", "Blueberry Sour Raspberry", "Double Apple", "Blueberry Cherry Cranberry", "Miami Mint", "Orange Bru"] },
      { name: "Hayati Dual Flavour 25000", price: "£15", meta: "5 flavour combinations", flavours: ["Strawberry Cranberry Cherry / Strawberry Raspberry Ice", "Blue Razz Cherry / Blue Razz Gummy Bear", "Blueberry Cotton Candy / Raspberry Cotton Candy", "Strawberry Cranberry Cherry / Cherry Ice", "Kiwi Banana / Strawberry Banana"] },
      { name: "Enjoy Ultra 9000", price: "£10", meta: "2 flavours available", flavours: ["Berry Apple Peach", "Apple Watermelon Strawberry"] },
      { name: "Pixl 8000", price: "£10", meta: "Black Cherry", flavours: ["Black Cherry"], simple: true },
      { name: "Hayati Pro Max 6000", price: "£10", meta: "Fizzy Cherry", flavours: ["Fizzy Cherry"], simple: true },
      { name: "Elux Legend 3500", price: "£5", meta: "5 flavours available", flavours: ["Cherry Ice", "Fizzy Cherry", "Cherry Sours", "Pineapple Ice", "Watermelon Cherry Raspberry Ice"] }
    ]
  },

  podkits: {
    title: "Pod Kits",
    items: [
      { name: "Vaporesso XROS Pro 2.0", price: "£25", meta: "Body kit • comes with 2 pods", details: ["Glittering Black", "Glittering Silver", "Gem Green"] }
    ]
  },

  salts: {
    title: "Nic Salts",
    items: [
      { name: "Elux Legend Nic Salts", price: "£2.50", meta: "20mg • 25 flavours available", popular: true, flavours: ["Mr Blue", "Blueberry Cranberry Cherry", "Blue Razz Gummy", "Blackberry Ice", "Banana Ice", "Gummy Bear", "Fizzy Cherry", "Watermelon Ice", "Blueberry Sour Raspberry", "Cherry Ice", "Blue Razz Cherry", "Cherry Sour Raspberry", "Grape", "Lemon Lime", "Strawberry Raspberry Cherry", "Cola", "Juicy Peach", "Pineapple Ice", "Hubba Bubba", "Lemonade", "Raspberry Peach", "Triple Mango", "Raspberry Watermelon", "Black Cherry", "Triple Melon"] }
    ]
  },

  pods: {
    title: "Replacement Pods",
    items: [
      { name: "XROS Corex Pods", meta: "0.6Ω", pricing: [{ label: "1 Pod", price: "£5" }, { label: "Pack of 4", price: "£15" }], saving: "Save £5" }
    ]
  },

  pouches: {
    title: "Nicotine Pouches",
    items: [
      { name: "VELO", meta: "Minty Lemon • 10mg", pricing: [{ label: "1 Box", price: "£5" }, { label: "Pack of 5", price: "£20" }], saving: "Save £5" },
      { name: "Pablo", meta: "Frosted Mint • 50mg", pricing: [{ label: "1 Box", price: "£5" }, { label: "Pack of 5", price: "£20" }], saving: "Save £5" }
    ]
  },

  tobacco: {
    title: "Tobacco",
    items: [
      { name: "Amber Leaf Original", meta: "50g", pricing: [{ label: "1 Pack", price: "£30" }, { label: "2 Packs", price: "£55" }], saving: "Save £5" }
    ]
  },

  bulk: {
    title: "HV Bulk",
    type: "bulk",
    intro: "Save big on larger pre-orders.",
    points: [
      "Manufacturer-sealed boxes",
      "A much wider range than our in-stock menu",
      "Reserved exclusively for your order"
    ],
    minimum: "Available on bulk pre-orders from £100.",
    link: "https://wa.me/447885752823?text=Hi%20Herts%20Vapes%2C%0A%0AI%27m%20interested%20in%20your%20bulk%20prices.%0A%0AProducts%20I%27m%20interested%20in%3A%0A%0A%E2%80%A2"
  }
};

const menu = document.querySelector(".menu-visual");
const readyCard = document.querySelector(".ready-card");
const bulkCard = document.querySelector(".bulk-card");
const panel = document.getElementById("inventoryPanel");
const panelTitle = document.getElementById("panelTitle");
const panelContent = document.getElementById("panelContent");
const closePanel = document.getElementById("closePanel");
const cartFloat = document.getElementById("cartFloat");
const cartCount = document.getElementById("cartCount");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartClose = document.getElementById("cartClose");
const cartBody = document.getElementById("cartBody");
const cartWhatsapp = document.getElementById("cartWhatsapp");
const cartSnapchat = document.getElementById("cartSnapchat");
const cartClear = document.getElementById("cartClear");
const toast = document.getElementById("toast");
const WHATSAPP_NUMBER = "447885752823";
const CART_KEY = "hertsVapesCart";
let cart = loadCart();
let toastTimer;

function softTap() {
  if (navigator.vibrate) navigator.vibrate(8);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function revealMenu() {
  if (!menu) return;
  menu.classList.add("reveal");
  document.body.classList.add("menu-entered");
}

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    softTap();
    revealMenu();
    const target = document.querySelector(button.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function revealOnScroll() {
  const vh = window.innerHeight;
  if (window.scrollY > 18 || (menu && menu.getBoundingClientRect().top < vh * 0.72)) revealMenu();
  if (readyCard && readyCard.getBoundingClientRect().top < vh * 0.86) readyCard.classList.add("reveal");
  if (bulkCard && bulkCard.getBoundingClientRect().top < vh * 0.88) bulkCard.classList.add("reveal");
}

window.addEventListener("scroll", revealOnScroll, { passive: true });
window.addEventListener("load", () => {
  document.body.classList.add("hero-loaded");
  renderCart();
});

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    softTap();
    openCategory(button.dataset.category);
  });
});

closePanel.addEventListener("click", () => {
  softTap();
  panel.classList.remove("open");
  panel.style.display = "none";
  document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
});

function openCategory(key) {
  const category = inventory[key];
  if (!category) return;
  panel.dataset.category = key;
  panelTitle.textContent = category.title;
  panelContent.innerHTML = renderCategory(category);
  panel.style.display = "block";
  requestAnimationFrame(() => panel.classList.add("open"));
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
  setupProductCards();
}

function renderCategory(category) {
  if (category.type === "bulk") return renderBulkCategory(category);
  if (category.type === "deals") return category.items.map(renderDeal).join("");
  return category.items.map(renderProduct).join("");
}

function renderDeal(deal) {
  const promptData = deal.prompts ? escapeHtml(deal.prompts.join("||")) : "";
  const displayName = deal.subline ? `${deal.name} ${deal.subline}` : deal.name;
  return `
    <article class="deal-card offer-card">
      ${renderDealVisuals(deal)}
      <div class="deal-main">
        <div>
          ${deal.saving ? `<div class="saving-badge">${escapeHtml(deal.saving)}</div>` : ""}
          <div class="deal-name">${escapeHtml(deal.name)}</div>
          ${deal.subline ? `<div class="deal-plus-line">${escapeHtml(deal.subline)}</div>` : ""}
          <div class="deal-meta">${escapeHtml(deal.meta)}</div>
          ${deal.confirm ? `<div class="confirm-note">${escapeHtml(deal.confirm)}</div>` : ""}
        </div>
        <div class="price-pill">${escapeHtml(deal.price)}</div>
      </div>
      <div class="card-actions">
        <button class="add-cart-button" type="button" data-add="${escapeHtml(displayName)}" data-price="${escapeHtml(deal.price)}" data-prompts="${promptData}">ADD</button>
      </div>
    </article>
  `;
}

function renderDealVisuals(deal) {
  if (!deal.visuals || !deal.visuals.length) return "";
  return `
    <div class="deal-visuals">
      ${deal.visuals.map((visual, index) => `
        ${index > 0 ? `<span class="deal-visual-plus">+</span>` : ""}
        <div class="deal-product-tile">
          <span class="deal-product-label">${escapeHtml(visual.label)}</span>
          ${visual.qty ? `<strong>${escapeHtml(visual.qty)}</strong>` : ""}
        </div>
      `).join("")}
    </div>
  `;
}

function renderBulkCategory(category) {
  return `
    <article class="bulk-panel-card bulk-final-card">
      <div class="bulk-icon-box package-icon" aria-hidden="true">
        <svg viewBox="0 0 120 100" focusable="false">
          <path d="M20 34 60 14 100 34 60 54 20 34Z"></path>
          <path d="M20 34v38l40 20V54L20 34Z"></path>
          <path d="M100 34v38L60 92V54l40-20Z"></path>
          <path d="M42 24 82 44"></path>
        </svg>
      </div>
      <p class="bulk-panel-kicker">HV BULK</p>
      <h3>Bulk Orders</h3>
      <p class="bulk-intro">${escapeHtml(category.intro)}</p>
      <div class="bulk-points panel-bulk-points">
        ${category.points.map(point => `<div class="bulk-point">${escapeHtml(point)}</div>`).join("")}
      </div>
      <div class="bulk-minimum-box">
        <span>Available on bulk pre-orders from</span>
        <strong>£100+</strong>
      </div>
      <a href="${category.link}" class="order-button bulk-button">Order on WhatsApp</a>
      <p class="bulk-footnote">You will be redirected to WhatsApp to place your bulk order.</p>
    </article>
  `;
}


function renderProduct(product) {
  const choices = product.flavours || product.details || [];
  const hasExpandable = choices.length > 1 && !product.pricing;
  const hasSingleChoice = choices.length === 1 && !product.pricing;

  return `
    <article class="product-card ${hasExpandable ? "can-open" : ""}">
      <button class="product-main" type="button" ${hasExpandable ? "" : "disabled"}>
        <div>
          <div class="product-name">${escapeHtml(product.name)}${product.popular ? ` <span class="popular-badge">MOST POPULAR</span>` : ""}</div>
          <div class="product-meta">${escapeHtml(product.meta)}${hasExpandable ? "  ▾" : ""}</div>
        </div>
        ${product.price ? `<div class="price-pill">${escapeHtml(product.price)}</div>` : ""}
      </button>
      ${product.pricing ? renderPricing(product) : ""}
      ${hasExpandable ? renderExpandable(product) : ""}
      ${hasSingleChoice ? renderSingleOption(product, choices[0]) : ""}
      ${!product.pricing && choices.length === 0 ? renderQuickAdd(product, "") : ""}
    </article>
  `;
}

function renderQuickAdd(product, option = "") {
  return `
    <div class="card-actions">
      <button class="add-cart-button" type="button" data-add="${escapeHtml(product.name)}" data-option="${escapeHtml(option)}" data-price="${escapeHtml(product.price || "")}">ADD</button>
    </div>
  `;
}

function renderSingleOption(product, option = "") {
  return `
    <div class="single-option-list">
      <button class="option-add-row" type="button" data-add="${escapeHtml(product.name)}" data-option="${escapeHtml(option)}" data-price="${escapeHtml(product.price || "")}">
        <span>${escapeHtml(option || product.name)}</span>
        <em>ADD</em>
      </button>
    </div>
  `;
}

function renderPricing(product) {
  if (product.details && product.details.length) {
    return `
      <div class="price-pair priced-options">
        ${product.details.map(detail => `
          <div class="option-group">
            <div class="option-title">${escapeHtml(detail)}</div>
            <div class="option-prices">
              ${product.pricing.map(row => `<button class="price-row add-price" type="button" data-add="${escapeHtml(product.name)}" data-option="${escapeHtml(detail + " - " + row.label)}" data-price="${escapeHtml(row.price)}"><span>${escapeHtml(row.label)}</span><strong>${escapeHtml(row.price)}</strong><em>ADD</em></button>`).join("")}
            </div>
            ${product.saving ? `<div class="saving option-saving">${escapeHtml(product.saving)}</div>` : ""}
          </div>
        `).join("")}
      </div>
    `;
  }

  return `
    <div class="price-pair priced-options">
      ${product.pricing.map(row => `<button class="price-row add-price" type="button" data-add="${escapeHtml(product.name)}" data-option="${escapeHtml(row.label)}" data-price="${escapeHtml(row.price)}"><span>${escapeHtml(row.label)}</span><strong>${escapeHtml(row.price)}</strong><em>ADD</em></button>`).join("")}
      ${product.saving ? `<div class="saving">${escapeHtml(product.saving)}</div>` : ""}
    </div>
  `;
}

function renderExpandable(product) {
  const list = product.flavours || product.details || [];
  const twoCol = list.length >= 6 ? " two-col" : "";
  return `<div class="expand-content"><div class="flavour-list${twoCol}">${list.map(item => `<button class="flavour add-flavour" type="button" data-add="${escapeHtml(product.name)}" data-option="${escapeHtml(item)}" data-price="${escapeHtml(product.price || "")}">${escapeHtml(item)}<span>ADD</span></button>`).join("")}</div></div>`;
}

function setupProductCards() {
  const cards = [...document.querySelectorAll(".product-card.can-open")];
  cards.forEach((card) => {
    const button = card.querySelector(".product-main");
    button.addEventListener("click", () => {
      softTap();
      cards.forEach(other => { if (other !== card) other.classList.remove("open"); });
      card.classList.toggle("open");
    });
  });
}

panelContent.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (!addButton) return;
  softTap();
  addToCart({
    name: addButton.dataset.add,
    option: addButton.dataset.option || "",
    price: addButton.dataset.price || "",
    prompts: addButton.dataset.prompts ? addButton.dataset.prompts.split("||") : []
  });
});

function addToCart(item) {
  const key = `${item.name}||${item.option}||${item.price}`;
  const existing = cart.find(cartItem => cartItem.key === key);
  if (existing) {
    existing.qty += 1;
    if ((!existing.prompts || !existing.prompts.length) && item.prompts && item.prompts.length) existing.prompts = item.prompts;
  } else {
    cart.push({ ...item, key, qty: 1, prompts: item.prompts || [] });
  }
  saveCart();
  showToast("✓ Added");
  pulseCart();
}

function updateQty(key, change) {
  const item = cart.find(cartItem => cartItem.key === key);
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) cart = cart.filter(cartItem => cartItem.key !== key);
  saveCart();
}

function removeFromCart(key) {
  cart = cart.filter(cartItem => cartItem.key !== key);
  saveCart();
}

function totalItems() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  const total = totalItems();
  cartCount.textContent = total;
  cartCount.hidden = total === 0;
  cartFloat.classList.toggle("has-items", total > 0);

  if (!cart.length) {
    cartBody.innerHTML = `<div class="empty-cart"><strong>Your order starts here.</strong><br>Tap <b>ADD</b> on any product to begin.</div>`;
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-main">
        <strong>${escapeHtml(item.name)}</strong>
        ${item.option ? `<span>${escapeHtml(item.option)}</span>` : ""}
        ${item.price ? `<em>${escapeHtml(item.price)}</em>` : ""}
      </div>
      <div class="qty-control">
        <button type="button" data-qty="-1" data-key="${escapeHtml(item.key)}" aria-label="Decrease quantity">−</button>
        <span>${item.qty}</span>
        <button type="button" data-qty="1" data-key="${escapeHtml(item.key)}" aria-label="Increase quantity">+</button>
      </div>
      <button class="remove-item" type="button" data-remove="${escapeHtml(item.key)}" aria-label="Remove item">×</button>
    </div>
  `).join("");
}

function buildOrderMessage() {
  if (!cart.length) {
    return "Hi,\n\nI'd like to place an order.\n\nCollection / Delivery:";
  }

  const lines = cart.map(item => {
    const optionLine = item.option ? ` - ${item.option}` : "";
    return `• ${item.name}${optionLine} ×${item.qty}`;
  }).join("\n");

  const promptSections = cart
    .filter(item => item.prompts && item.prompts.length)
    .map(item => {
      const header = `\n${item.name} ×${item.qty}`;
      const promptLines = [];
      for (let i = 1; i <= item.qty; i += 1) {
        if (item.qty > 1) promptLines.push(`Bundle ${i}:`);
        item.prompts.forEach(prompt => {
          promptLines.push(`${prompt}:`);
        });
      }
      return `${header}\n${promptLines.join("\n")}`;
    });

  const promptText = promptSections.length
    ? `\n${promptSections.join("\n")}`
    : "";

  return `Hi,\n\nI'd like:\n\n${lines}${promptText}\n\nCollection / Delivery:`;
}

async function copyOrderMessage() {
  const message = buildOrderMessage();
  try {
    await navigator.clipboard.writeText(message);
    showToast("✓ Order copied");
  } catch (error) {
    showToast("Order ready to copy");
  }
  return message;
}

function openCart() {
  softTap();
  cartOverlay.classList.add("open");
  cartDrawer.classList.add("open");
  cartOverlay.setAttribute("aria-hidden", "false");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  softTap();
  cartOverlay.classList.remove("open");
  cartDrawer.classList.remove("open");
  cartOverlay.setAttribute("aria-hidden", "true");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function pulseCart() {
  cartFloat.classList.remove("cart-pop");
  void cartFloat.offsetWidth;
  cartFloat.classList.add("cart-pop");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1500);
}

cartFloat.addEventListener("click", openCart);
cartOverlay.addEventListener("click", closeCart);
cartClose.addEventListener("click", closeCart);

cartBody.addEventListener("click", (event) => {
  const qtyButton = event.target.closest("[data-qty]");
  const removeButton = event.target.closest("[data-remove]");

  if (qtyButton) {
    softTap();
    updateQty(qtyButton.dataset.key, Number(qtyButton.dataset.qty));
  }

  if (removeButton) {
    softTap();
    removeFromCart(removeButton.dataset.remove);
  }
});

cartClear.addEventListener("click", () => {
  softTap();
  cart = [];
  saveCart();
  showToast("Cart cleared");
});

cartWhatsapp.addEventListener("click", async () => {
  softTap();
  const message = await copyOrderMessage();
  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

cartSnapchat.addEventListener("click", async () => {
  softTap();
  await copyOrderMessage();
  showToast("✓ Order copied. Paste into Snapchat.");
  setTimeout(() => window.open("https://www.snapchat.com/add/herts.vps1", "_blank"), 350);
});

// Final public clean build marker. Functionality above is unchanged.
window.HERTS_VAPES_BUILD = "final-public-clean";
