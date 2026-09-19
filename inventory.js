/* Herts Vapes inventory data. IMPORTANT: preserve this stock exactly during design/function updates. Only change stock when explicitly requested. */
window.HV_INVENTORY = {
  special: {
    title: "Special Deals",
    type: "deals",
    items: [
      {
        name: "Complete XROS Bundle",
        bestValue: true,
        components: ["1 × Vaporesso XROS 2.0 Kit", "4 × Vaporesso XROS Pods", "4 × Nic Salts"],
        price: "£40",
        meta: "Complete XROS bundle",
        saving: "Save £10",
        confirm: "Flavours confirmed in message",
        visuals: [
          { label: "Vaporesso XROS 2.0 Kit" },
          { label: "Vaporesso XROS Pods", qty: "×4" },
          { label: "Nic Salts", qty: "×4" }
        ],
        prompts: ["Kit colour", "Nic Salt 1", "Nic Salt 2", "Nic Salt 3", "Nic Salt 4"]
      },
      {
        name: "XROS & Salts Bundle",
        components: ["1 × Vaporesso XROS 2.0 Kit", "4 × Nic Salts"],
        price: "£30",
        meta: "Kit bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "Vaporesso XROS 2.0 Kit" }, { label: "Nic Salts", qty: "×4" }],
        prompts: ["Kit colour", "Nic Salt 1", "Nic Salt 2", "Nic Salt 3", "Nic Salt 4"]
      },
      {
        name: "Pods & Salts Bundle",
        components: ["2 × Vaporesso XROS Pods", "6 × Nic Salts"],
        price: "£20",
        meta: "Pods and liquids bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "XROS Pods", qty: "×2" }, { label: "Nic Salts", qty: "×6" }],
        prompts: ["Nic Salt 1", "Nic Salt 2", "Nic Salt 3", "Nic Salt 4", "Nic Salt 5", "Nic Salt 6"]
      },
      {
        name: "Hayati 25K Deal",
        components: ["2 × Hayati Dual Flavour 25000"],
        price: "£25",
        meta: "25K disposable bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "Hayati 25K", qty: "×2" }],
        prompts: ["Device 1", "Device 2"]
      },
      {
        name: "Elux 3500 Deal",
        components: ["3 × Elux Legend 3500"],
        price: "£10",
        meta: "3.5K disposable bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "Elux 3500", qty: "×3" }],
        prompts: ["Flavour 1", "Flavour 2", "Flavour 3"]
      },
      {
        name: "Lost Mary Deal",
        components: ["3 × Lost Mary BM6000"],
        price: "£25",
        meta: "BM6000 bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "Lost Mary BM6000", qty: "×3" }],
        prompts: ["Lost Mary 1", "Lost Mary 2", "Lost Mary 3"]
      },
      {
        name: "Enjoy Ultra Deal",
        components: ["2 × Enjoy Ultra 9000"],
        price: "£15",
        meta: "Clearance bundle",
        saving: "Save £5",
        confirm: "Flavours confirmed in message",
        visuals: [{ label: "Enjoy Ultra 9000", qty: "×2" }],
        prompts: ["Enjoy Ultra 1", "Enjoy Ultra 2"]
      }
    ]
  },

  disposable: {
    title: "Disposable Vapes",
    items: [
      { name: "Lost Mary BM6000", price: "£10", meta: "11 flavours available", popular: true, flavours: ["Banana Ice", "Triple Mango", "Summer Grape", "Blueberry Sour Raspberry", "Strawberry Raspberry Cherry Ice", "Latte", "Maimi Mint", "Blackcurrant Lemonade", "Lemon Lime", "Fruit Medley", "Blackberry Ice"] },
      { name: "Hayati Dual Flavour 25000", price: "£15", meta: "3 flavour combinations", flavours: ["Strawberry Cranberry Cherry / Cherry Ice", "Peach Mango / Cherry Ice", "Blueberry Raspberry / Blueberry Raspberry Cherry"] },
      { name: "Enjoy Ultra 9000", price: "£10", meta: "2 flavours available", flavours: ["Berry Apple Peach", "Apple Watermelon Strawberry"] },
      { name: "Pixl 8000", price: "£10", meta: "2 flavours available", flavours: ["Sour Pineapple Mango", "Strawberry Burst"] },
      { name: "Hayati Pro Max 6000", price: "£10", meta: "3 flavours available", flavours: ["Blue Fusion", "Fizzy Cherry", "Mango Peach Pineapple"] },
      { name: "Elux Legend 3500", price: "£5", meta: "3 flavours available", flavours: ["Cherry Sours", "Pineapple Ice", "Watermelon Cherry Raspberry Ice"] }
    ]
  },

  podkits: {
    title: "Pod Kits",
    items: [
      { name: "Vaporesso XROS 2.0 Kit", price: "£25", meta: "Body kit • comes with 2 pods", details: ["Glittering Gold", "Glittering Black", "Glittering Silver"] }
    ]
  },

  salts: {
    title: "Nic Salts",
    items: [
      { name: "Elux Legend Nic Salts", price: "£2.50", meta: "20mg • 25 flavours available", popular: true, flavours: ["Blueberry Cranberry Cherry", "Blue Razz Gummy", "Blackberry Ice", "Banana Ice", "Fizzy Cherry", "Blueberry Sour Raspberry", "Strawberry Ice", "Watermelon Ice", "Cherry Ice", "Blue Razz Cherry", "Cherry Sour Raspberry", "Grape", "Lemon Lime", "Strawberry Raspberry Cherry", "Cherry Lime", "Pineapple Ice", "Lemonade", "Triple Mango", "Oasis", "Black Cherry", "Triple Melon", "Strawberry Ice Cream", "Gummy Bear", "Juicy Peach", "Double Apple"] }
    ]
  },

  pods: {
    title: "Replacement Pods",
    items: [
      { name: "Vaporesso XROS Pods", meta: "0.6Ω", pricing: [{ label: "1 Pod", price: "£5" }, { label: "Pack of 4", price: "£15" }], saving: "Save £5" }
    ]
  },

  pouches: {
    title: "Nicotine Pouches",
    items: [
      { name: "Pablo", meta: "Frosted Mint • 50mg", pricing: [{ label: "1 Box", price: "£5" }, { label: "Pack of 4", price: "£15" }], saving: "Save £5" }
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
