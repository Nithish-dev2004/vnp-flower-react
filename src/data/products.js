// kind decides which illustration is shown (see components/Art.jsx)
export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "hair", label: "Hair Flowers" },
  { id: "garland", label: "Garlands" },
  { id: "pooja", label: "Pooja Flowers" },
];

export const PRODUCTS = [
  {
    id: 1, category: "hair", kind: "jasmine",
    name: "Jasmine Gajra", local: "மல்லிகை",
    desc: "Fragrant jasmine buds strung on cotton thread for women's hair.",
    price: "₹30", unit: "per strand",
  },
  {
    id: 2, category: "hair", kind: "mullai",
    name: "Mullai Strand", local: "முல்லை",
    desc: "Delicate white mullai, light, sweet and perfect for daily wear.",
    price: "₹40", unit: "per strand",
  },
  {
    id: 3, category: "hair", kind: "kanakambaram",
    name: "Kanakambaram Strand", local: "கனகாம்பரம்",
    desc: "Bright orange kanakambaram, a festival favourite for hair.",
    price: "₹35", unit: "per strand",
  },
  {
    id: 4, category: "garland", kind: "rose",
    name: "Rose Garland", local: "ரோஜா மாலை",
    desc: "Fresh roses hand-strung into a full garland for guests and gods.",
    price: "₹120", unit: "per garland",
  },
  {
    id: 5, category: "garland", kind: "marigold",
    name: "Marigold Garland", local: "சாமந்தி மாலை",
    desc: "Golden marigold garlands for festivals, shops and vehicles.",
    price: "₹90", unit: "per garland",
  },
  {
    id: 6, category: "garland", kind: "wedding",
    name: "Bridal Garland Set", local: "திருமண மாலை",
    desc: "Matching bridal and groom garlands with jasmine hair strands.",
    price: "₹650", unit: "per set",
  },
  {
    id: 7, category: "pooja", kind: "lotus",
    name: "Lotus Pack", local: "தாமரை",
    desc: "Fresh lotus flowers for temple and home pooja.",
    price: "₹60", unit: "per 2 flowers",
  },
  {
    id: 8, category: "pooja", kind: "marigold-loose",
    name: "Pooja Flower Mix", local: "பூஜை பூக்கள்",
    desc: "Loose marigold, hibiscus and tulsi packed fresh for daily pooja.",
    price: "₹20", unit: "per pack",
  },
  {
    id: 9, category: "pooja", kind: "rose-loose",
    name: "Rose Petals", local: "ரோஜா இதழ்கள்",
    desc: "Soft loose rose petals for archana, decoration and gifting.",
    price: "₹50", unit: "per 250 g",
  },
];

export const OCCASIONS = [
  { id: "wedding", kind: "wedding", title: "Weddings & Engagements",
    text: "Bridal garlands, hair flowers for the bride and family, stage and entrance decoration." },
  { id: "festival", kind: "marigold", title: "Festivals",
    text: "Pongal, Diwali, Navaratri, Vinayagar Chaturthi, bulk garlands and pooja flowers on time." },
  { id: "temple", kind: "lotus", title: "Temple & Daily Pooja",
    text: "Regular daily supply of fresh flowers and garlands for temples and homes." },
  { id: "home", kind: "rose", title: "Housewarming & Birthdays",
    text: "Rose garlands, petals and simple decoration for your family celebrations." },
  { id: "daily", kind: "jasmine", title: "Daily Wear",
    text: "Fresh jasmine and mullai strands every morning, just walk in and pick up." },
];

export const PACKAGES = [
  { name: "Simple", price: "from ₹1,500",
    items: ["2 garlands", "4 hair strands", "Entrance flowers"] },
  { name: "Classic", price: "from ₹4,500", featured: true,
    items: ["Bridal & groom garlands", "10 hair strands", "Stage & door decoration", "Delivery included"] },
  { name: "Grand", price: "Ask for quote",
    items: ["Full hall decoration", "Custom garlands", "Family hair flowers", "On-site team"] },
];
