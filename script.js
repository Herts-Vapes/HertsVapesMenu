const inventory = window.HV_INVENTORY;
const settings = window.HV_SETTINGS || {};
if (!inventory) throw new Error("inventory.js did not load");

const CART_KEY = "hertsVapesCart";
const categoryList = document.getElementById("categoryList");
const moreToggle = document.getElementById("moreToggle");
const moreContent = document.getElementById("moreContent");
const orderBar = document.getElementById("orderBar");
const orderBarCount = document.getElementById("orderBarCount");
const orderBarTotal = document.getElementById("orderBarTotal");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartClose = document.getElementById("cartClose");
const cartBody = document.getElementById("cartBody");
const cartTotal = document.getElementById("cartTotal");
const cartWhatsapp = document.getElementById("cartWhatsapp");
const cartSnapchat = document.getElementById("cartSnapchat");
const cartClear = document.getElementById("cartClear");
const toast = document.getElementById("toast");
let toastTimer;
let cart = loadCart();

const MAIN_CATEGORIES = [
  { key: "disposable", title: "Disposable Vapes", image: "lostmary.png.png" },
  { key: "salts", title: "Nic Salts", image: "eluxnicsalt.png.png" },
  { key: "podsandkits", title: "Pods & Kits", image: "podkit.png.png" },
  { key: "pouches", title: "Nicotine Pouches", image: "pablopouch.png.png" },
  { key: "special", title: "Bundle Deals", image: "hayati25k.png.png" }
];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function moneyValue(price) {
  const value = Number(String(price || "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

function formatMoney(value) {
  return `£${value.toFixed(2).replace(/\.00$/, "")}`;
}

function totalItems() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function totalPrice() {
  return cart.reduce((sum, item) => sum + moneyValue(item.price) * item.qty, 0);
}

function softTap() {
  if (navigator.vibrate) navigator.vibrate(8);
}

function showToast(message = "✓ Added") {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1200);
}

function categoryData(key) {
  if (key === "podsandkits") {
    return {
      title: "Pods & Kits",
      items: [...(inventory.podkits?.items || []), ...(inventory.pods?.items || [])]
    };
  }
  return inventory[key];
}

function renderCategories() {
  categoryList.innerHTML = MAIN_CATEGORIES.map(category => `
    <section class="category" data-category-section="${category.key}">
      <button class="category-button" type="button" aria-expanded="false">
        <span class="category-image"><img src="${category.image}" alt="" loading="lazy"></span>
        <span class="category-title">${escapeHtml(category.title)}</span>
        <span class="category-arrow" aria-hidden="true">⌄</span>
      </button>
      <div class="category-content" hidden></div>
    </section>
  `).join("");

  moreContent.innerHTML = `
    <button class="bulk-link" type="button" id="bulkLink">
      <span><strong>HV Bulk</strong><small>Large pre-orders from £100</small></span>
      <span aria-hidden="true">›</span>
    </button>
    <div id="bulkContent" hidden></div>
  `;
}

function renderCategory(key) {
  const category = categoryData(key);
  if (!category) return `<p class="empty-message">Nothing available right now.</p>`;
  if (category.type === "deals") return category.items.map(renderDeal).join("");
  return category.items.map(renderProduct).join("");
}

function productImageFor(name) {
  const key = String(name).toLowerCase();
  if (key.includes("lost mary")) return "lostmary.png.png";
  if (key.includes("hayati dual")) return "hayati25k.png.png";
  if (key.includes("hayati pro")) return "hayati6000.png.png";
  if (key.includes("elux legend 3500")) return "elux3500.png.png";
  if (key.includes("enjoy ultra")) return "enjoyultra.png.png";
  if (key.includes("pixl")) return "pixl8000.png.png";
  if (key.includes("xros pro")) return "podkit.png.png";
  if (key.includes("nic salts")) return "eluxnicsalt.png.png";
  if (key.includes("corex") || key.includes("xros pods")) return "vaporessopod.png.png";
  if (key.includes("pablo")) return "pablopouch.png.png";
  if (key.includes("velo")) return "velopouch.png.png";
  return "";
}

function renderProduct(product) {
  const choices = product.flavours || product.details || [];
  const image = productImageFor(product.name);
  const needsChoice = choices.length > 0;
  return `
    <article class="product-card ${needsChoice ? "has-options" : ""}">
      <button class="product-button" type="button" ${needsChoice ? "" : "disabled"} aria-expanded="false">
        ${image ? `<span class="product-image"><img src="${image}" alt="" loading="lazy"></span>` : ""}
        <span class="product-copy">
          <strong>${escapeHtml(product.name)}</strong>
          <small>${escapeHtml(product.meta || "")}</small>
        </span>
        ${product.price ? `<span class="product-price">${escapeHtml(product.price)}</span>` : ""}
        ${needsChoice ? `<span class="product-arrow" aria-hidden="true">⌄</span>` : ""}
      </button>
      ${product.pricing ? renderPricing(product) : ""}
      ${needsChoice ? `<div class="product-options" hidden>${renderChoices(product, choices)}</div>` : renderQuickAdd(product)}
    </article>
  `;
}

function renderChoices(product, choices) {
  return choices.map(choice => `
    <button class="choice-button" type="button" data-add="${escapeHtml(product.name)}" data-option="${escapeHtml(choice)}" data-price="${escapeHtml(product.price || "")}">
      <span>${escapeHtml(choice)}</span><strong>Add</strong>
    </button>
  `).join("");
}

function renderQuickAdd(product) {
  if (product.pricing) return "";
  return `<button class="quick-add" type="button" data-add="${escapeHtml(product.name)}" data-price="${escapeHtml(product.price || "")}">Add to Order</button>`;
}

function renderPricing(product) {
  return `<div class="pricing-options">${product.pricing.map(row => `
    <button class="choice-button price-choice" type="button" data-add="${escapeHtml(product.name)}" data-option="${escapeHtml(row.label)}" data-price="${escapeHtml(row.price)}">
      <span>${escapeHtml(row.label)}</span><strong>${escapeHtml(row.price)} · Add</strong>
    </button>
  `).join("")}</div>`;
}

function renderDeal(deal) {
  const displayName = deal.subline ? `${deal.name} ${deal.subline}` : deal.name;
  const prompts = escapeHtml((deal.prompts || []).join("||"));
  return `
    <article class="deal-card">
      <div class="deal-copy">
        <small>${escapeHtml(deal.saving || "Bundle")}</small>
        <strong>${escapeHtml(deal.name)}</strong>
        ${deal.subline ? `<span>${escapeHtml(deal.subline)}</span>` : ""}
      </div>
      <div class="deal-price">${escapeHtml(deal.price)}</div>
      <button class="quick-add" type="button" data-add="${escapeHtml(displayName)}" data-price="${escapeHtml(deal.price)}" data-prompts="${prompts}">Add Bundle</button>
    </article>
  `;
}

function toggleCategory(section) {
  const button = section.querySelector(".category-button");
  const content = section.querySelector(".category-content");
  const opening = content.hidden;
  button.setAttribute("aria-expanded", String(opening));
  section.classList.toggle("open", opening);
  if (opening && !content.dataset.loaded) {
    content.innerHTML = renderCategory(section.dataset.categorySection);
    content.dataset.loaded = "true";
  }
  content.hidden = !opening;
}

function toggleProduct(card) {
  const button = card.querySelector(".product-button");
  const options = card.querySelector(".product-options");
  if (!options) return;
  const opening = options.hidden;
  options.hidden = !opening;
  card.classList.toggle("open", opening);
  button.setAttribute("aria-expanded", String(opening));
}

function addToCart(item) {
  const key = `${item.name}||${item.option}||${item.price}`;
  const existing = cart.find(entry => entry.key === key);
  if (existing) existing.qty += 1;
  else cart.push({ ...item, key, qty: 1, prompts: item.prompts || [] });
  saveCart();
  showToast("✓ Added to your order");
}

function renderCart() {
  const count = totalItems();
  const total = totalPrice();
  orderBar.hidden = count === 0;
  orderBarCount.textContent = `${count} ${count === 1 ? "item" : "items"}`;
  orderBarTotal.textContent = formatMoney(total);
  cartTotal.textContent = formatMoney(total);

  if (!cart.length) {
    cartBody.innerHTML = `<p class="empty-message">Your order is empty.</p>`;
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-copy">
        <strong>${escapeHtml(item.name)}</strong>
        ${item.option ? `<span>${escapeHtml(item.option)}</span>` : ""}
        <small>${escapeHtml(item.price)}</small>
      </div>
      <div class="qty-control">
        <button type="button" data-qty="-1" data-key="${escapeHtml(item.key)}" aria-label="Remove one">−</button>
        <strong>${item.qty}</strong>
        <button type="button" data-qty="1" data-key="${escapeHtml(item.key)}" aria-label="Add one">+</button>
      </div>
    </div>
  `).join("");
}

function updateQty(key, amount) {
  const item = cart.find(entry => entry.key === key);
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter(entry => entry.key !== key);
  saveCart();
  if (!cart.length) closeCart();
}

function openCart() {
  if (!cart.length) return;
  softTap();
  cartOverlay.classList.add("open");
  cartDrawer.classList.add("open");
  cartOverlay.setAttribute("aria-hidden", "false");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartOverlay.classList.remove("open");
  cartDrawer.classList.remove("open");
  cartOverlay.setAttribute("aria-hidden", "true");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function buildOrderMessage() {
  const lines = cart.map(item => `• ${item.name}${item.option ? ` - ${item.option}` : ""} ×${item.qty}`).join("\n");
  const prompts = cart.filter(item => item.prompts?.length).map(item => `\n${item.name}:\n${item.prompts.map(prompt => `${prompt}:`).join("\n")}`).join("\n");
  return `Hi Herts Vapes,\n\nI'd like:\n\n${lines}${prompts}\n\nCollection or delivery:`;
}

async function copyOrder() {
  const message = buildOrderMessage();
  try { await navigator.clipboard.writeText(message); }
  catch { /* WhatsApp still receives the message directly. */ }
  return message;
}

function setupLinks() {
  const number = settings.whatsappNumber || "447885752823";
  const username = settings.snapchatUsername || "herts.vps1";
  const text = settings.defaultWhatsappText || "Hi Herts Vapes, I'd like to place an order.";
  document.querySelectorAll("[data-whatsapp-link]").forEach(link => link.href = `https://wa.me/${number}?text=${encodeURIComponent(text)}`);
  document.querySelectorAll("[data-snapchat-link]").forEach(link => link.href = `https://www.snapchat.com/add/${username}`);
}

renderCategories();
setupLinks();
renderCart();

document.querySelectorAll("[data-scroll]").forEach(button => button.addEventListener("click", () => {
  softTap();
  document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
}));

categoryList.addEventListener("click", event => {
  const categoryButton = event.target.closest(".category-button");
  const productButton = event.target.closest(".product-button");
  const addButton = event.target.closest("[data-add]");
  if (categoryButton) { softTap(); toggleCategory(categoryButton.closest(".category")); return; }
  if (productButton) { softTap(); toggleProduct(productButton.closest(".product-card")); return; }
  if (addButton) {
    softTap();
    addToCart({
      name: addButton.dataset.add,
      option: addButton.dataset.option || "",
      price: addButton.dataset.price || "",
      prompts: addButton.dataset.prompts ? addButton.dataset.prompts.split("||") : []
    });
  }
});

moreToggle.addEventListener("click", () => {
  softTap();
  const opening = moreContent.hidden;
  moreContent.hidden = !opening;
  moreToggle.setAttribute("aria-expanded", String(opening));
});

moreContent.addEventListener("click", event => {
  const bulkLink = event.target.closest("#bulkLink");
  if (!bulkLink) return;
  const bulkContent = document.getElementById("bulkContent");
  const opening = bulkContent.hidden;
  if (opening) {
    const bulk = inventory.bulk;
    bulkContent.innerHTML = `
      <div class="bulk-card">
        <strong>Bulk Orders</strong>
        <p>${escapeHtml(bulk.intro)}</p>
        <p class="bulk-minimum">From £100</p>
        <a class="bulk-button" href="${escapeHtml(bulk.link)}">Message for Bulk Prices</a>
      </div>`;
  }
  bulkContent.hidden = !opening;
});

orderBar.addEventListener("click", openCart);
cartOverlay.addEventListener("click", closeCart);
cartClose.addEventListener("click", closeCart);
cartBody.addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");
  if (button) { softTap(); updateQty(button.dataset.key, Number(button.dataset.qty)); }
});
cartClear.addEventListener("click", () => {
  cart = [];
  saveCart();
  closeCart();
  showToast("Order cleared");
});
cartWhatsapp.addEventListener("click", async () => {
  const message = await copyOrder();
  const number = settings.whatsappNumber || "447885752823";
  window.location.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
});
cartSnapchat.addEventListener("click", async () => {
  await copyOrder();
  showToast("✓ Order copied");
  const username = settings.snapchatUsername || "herts.vps1";
  setTimeout(() => window.open(`https://www.snapchat.com/add/${username}`, "_blank"), 300);
});
