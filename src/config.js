// ====== EDIT YOUR SHOP DETAILS HERE ======
export const SHOP = {
  name: "VNP Flower Shop",
  phone: "+91 9952555780",
  whatsapp: "91 7094136570", // country code + number, no "+" or spaces
  email: "vnpflowershop@gmail.com",
  address: "VNP flower shop, Rc church, Sivaganga, Tamil Nadu 630561",
  hours: "Daily · 8:00 AM – 9:00 PM",
};

export const waLink = (text) =>
  `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
