/* Herts Vapes V4 inventory data. Future stock/product updates should be made here. */
window.HV_INVENTORY = {
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
      { name: "Lost Mary BM6000", price: "£10", meta: "11 flavours available", popular: true, flavours: ["Summer Grape", "Pineapple Ice", "Cherry Cola", "Cherry Ice", "Strawberry Raspberry Cherry Ice", "Banana Ice", "Triple Mango", "Blueberry Sour Raspberry", "Double Apple", "Blueberry Cherry Cranberry", "Orange Bru"] },
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
    menuEntry: true,
    menuLabel: "TOBACCO",
    menuSubline: "Amber Leaf Original",
    menuImage: "assets/categories/tobacco.png",
    items: [
      { name: "Amber Leaf Original", meta: "50g", pricing: [{ label: "50g", price: "£30" }, { label: "2 Packs", price: "£55" }], saving: "Save £5" }
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
};;
