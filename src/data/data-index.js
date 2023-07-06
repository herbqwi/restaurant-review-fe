const Locations = ["الخليل", "بيت لحم", "نابلس", "رام الله", "دورا", "يافا", "عكا", "اريحا"]
const restaurantTypes = ["إيطالي", "صيني", "مكسيكي", "فرنسي", "ياباني", "هندي", "أمريكي"];
const foodCategories = [
  { english: "Meat", arabic: "لحوم" },
  { english: "Seafood", arabic: "مأكولات بحرية" },
  { english: "Bakery", arabic: "مخبوزات" },
  { english: "Snacks", arabic: "وجبات خفيفة" },
  { english: "Beverages", arabic: "مشروبات" },
  { english: "Soups", arabic: "شوربات" },
  { english: "Salads", arabic: "سلطات" },
  { english: "Sweets", arabic: "حلويات" },
];


const services = [
  {
    serviceName: "توصيل",
    serviceIcon: "🚚",
  },
  {
    serviceName: "تجهيز الطعام",
    serviceIcon: "🍽️",
  },
  {
    serviceName: "طلبات للخارج",
    serviceIcon: "🥡",
  },
  {
    serviceName: "الحجوزات",
    serviceIcon: "📅",
  },
  {
    serviceName: "تناول الطعام في المطعم",
    serviceIcon: "🍴",
  },
  {
    serviceName: "الدفع الإلكتروني",
    serviceIcon: "💳",
  },
  {
    serviceName: "موقف سيارات",
    serviceIcon: "🅿️",
  },
];






export {
  Locations,
  restaurantTypes,
  services,
  foodCategories
}