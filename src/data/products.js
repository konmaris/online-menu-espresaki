const products = [
  {
    category: "cold_coffees",
    name: "Freddo Espresso",
    price: 2.2,
    xl_price: 3.2,
  },
  {
    category: "cold_coffees",
    name: "Freddo Cappuccino",
    price: 2.4,
    xl_price: 3.4,
  },
  {
    category: "cold_coffees",
    name: "Iced Latte",
    price: 2.6,
    xl_price: 3.6,
  },
  {
    category: "cold_coffees",
    name: "Iced Espresso",

    price: 2.2,
    xl_price: 3.2,
  },
  {
    category: "cold_coffees",
    name: "Frappe",

    price: 2.0,
    xl_price: 2.6,
  },
  {
    category: "hot_coffees",
    name: "Cappuccino",
    price: 2.5,
    xl_price: 3.5,
  },
  {
    category: "hot_coffees",
    name: "Latte",
    price: 2.6,
    xl_price: 3.6,
  },
  {
    category: "hot_coffees",
    name: "Flat White",
    price: 2.4,
    xl_price: 3.4,
  },
  {
    category: "hot_coffees",
    name: "Espresso",
    price: 2.2,
    xl_price: 3.2,
  },
  {
    category: "hot_coffees",
    name: "Ελληνικός",
    price: 2.2,
    xl_price: 3.2,
  },
  {
    category: "tortillas",
    name: "Caesar's Paradise",
    description: "Ψητό κοτόπουλο, τυρί cheddar, καλαμπόκι, μαρούλι & sauce Caesar",
    price: 3.3,
  },
  {
    category: "tortillas",
    name: "Alternative",
    description: "Καπνιστή γαλοπούλα, τυρί gouda, ντομάτα, μαρούλι & κρέμα τυριού",
    price: 3.2,
  },
  {
    category: "tortillas",
    name: "Rockstar",
    description: "Ψητό κοτόπουλο, καπνιστό μπέικον, τυρί cheddar, καλαμπόκι & μαγιονέζα",
    price: 3.6,
  },
  {
    category: "tortillas",
    name: "American Dream",
    description: "Ψητό κοτόπουλο, καπνιστό μπέικον & τυρί cheddar",
    price: 3.4,
  },
  {
    category: "baguettes",
    name: "Harmony",
    description: "Πάριζα, τυρί gouda, ντομάτα, μαρούλι & μαγιονέζα",
    price: 3.0,
  },
  {
    category: "baguettes",
    name: "Harmony Light",
    description: "Καπνιστή γαλοπούλα, τυρί gouda, ντομάτα, μαρούλι & μαγιονέζα",
    price: 3.2,
  },
  {
    category: "baguettes",
    name: "East Coast",
    description: "Ψητό κοτόπουλο, καπνιστό μπέικον, κρέμα τυριού & ντομάτα",
    price: 3.4,
  },
  {
    category: "baguettes",
    name: "Gangsta Life",
    description: "Ψητό κοτόπουλο, καπνιστό μπέικον, καλαμπόκι, ντομάτα, κρέμα τυριού & μαγιονέζα",
    price: 3.6,
  },
  {
    category: "salads",
    name: "Caesar's Feast",
    description: "Μαρούλι iceberg, ψητό κοτόπουλο, flakes παρμεζάνας, κρουτόν, καλαμπόκι & sauce Caesar",
    price: 5.5,
  },
  {
    category: "salads",
    name: "Italian Sunset",
    description: "Μαρούλι iceberg, ρόκα, ντοματίνια βελανίδια, φρέσκια μοτσαρέλα & παρθένο ελαιόλαδο",
    price: 5.5,
  },
  {
    category: "handmade_sweets",
    name: "Banoffee",
    description: "Βάση απο μπισκότα digestive, κρέμα αλατισμένης καραμέλας γάλακτος, μπανάνα & σαντιγύ",
    price: 3.5,
  },
  {
    category: "handmade_sweets",
    name: "Cheesecake με φράουλα",
    description: "Βάση απο μπισκότα digestive, κρέμα & μαρμελάδα φράουλας",
    price: 3.5,
  },
  {
    category: "handmade_sweets",
    name: "Cheesecake με βύσσινο",
    description: "Βάση απο μπισκότα digestive, κρέμα & μαρμελάδα βύσσινο",
    price: 3.5,
  },
  {
    category: "handmade_sweets",
    name: "Cheesecake με ροδάκινο",
    description: "Βάση απο μπισκότα digestive, κρέμα & μαρμελάδα βερύκοκο",
    price: 3.5,
  },
  {
    category: "beverages",
    name: "Φυσικός Χυμός Πορτοκάλι",
    price: 2.6,
  },
  {
    category: "beverages",
    name: "Σοκολάτα Γάλακτος",
    price: 2.6,
  },
  {
    category: "beverages",
    name: "Σοκολάτα Γάλακτος με Θαλασσινό Αλάτι & Καραμέλα",
    price: 2.8,
  },
  {
    category: "beverages",
    name: "Σοκολάτα Γάλακτος με Bueno",
    price: 2.8,
  },
  {
    category: "beverages",
    name: "Σοκολάτα Γάλακτος με Φράουλα",
    price: 2.8,
  },
  {
    category: "beverages",
    name: "Λευκή σοκολάτα με Ρόδι",
    price: 3.5,
  },
  {
    category: "toasts",
    name: "Τοστ με τυρί",
    price: 1.6,
  },
  {
    category: "toasts",
    name: "Τοστ με καπνιστή γαλοπούλα & τυρί",
    price: 2.0,
  },
  {
    category: "toasts",
    name: "Τοστ με πάριζα & τυρί",
    price: 2.0,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Classic 500ml",
    price: 2.2,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Mango Loco 500ml",
    price: 2.2,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Ultra Zero 500ml",
    price: 2.2,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Pipeline Punch 500ml",
    price: 2.2,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Ripper 500ml",
    price: 2.2,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Pacific Punch 500ml",
    price: 2.2,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Khaotic 500ml",
    price: 2.2,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Absolute Zero 500ml",
    price: 2.2,
  },
  {
    category: "iced_tea",
    name: "FuzeTea Ροδάκινο & Ιβίσκος 500ml",
    price: 2.2,
  },
  {
    category: "iced_tea",
    name: "FuzeTea Ροδάκινο & Τριαντάφυλλο 500ml",
    description: "Χωρίς ζάχαρη",
    price: 2.2,
  },
  {
    category: "iced_tea",
    name: "FuzeTea Λεμόνι & Λουίζα 500ml",
    price: 2.2,
  },
  {
    category: "iced_tea",
    name: "FuzeTea Καρπούζι & Μέντα Χωρίς Ζάχαρη 500ml",
    description: "Χωρίς ζάχαρη",
    price: 2.2,
  },
  {
    category: "soft_drinks",
    name: "Coca-Cola 330ml",
    price: 1.5,
  },
  {
    category: "soft_drinks",
    name: "Coca-Cola Zero 330ml",
    price: 1.5,
  },
  {
    category: "soft_drinks",
    name: "Coca-Cola Zero Lemon 330ml",
    price: 1.5,
  },
  {
    category: "soft_drinks",
    name: "Fanta Κόκκινη 330ml",
    price: 1.5,
  },
  {
    category: "soft_drinks",
    name: "Fanta Μπλε 330ml",
    price: 1.5,
  },
  {
    category: "soft_drinks",
    name: "Schweppes Pomegranate 330ml",
    price: 1.5,
  },
  {
    category: "soft_drinks",
    name: "Schweppes Mojito 330ml",
    price: 1.5,
  },
  {
    category: "soft_drinks",
    name: "Schweppes Pink Grapefruit 330ml",
    price: 1.5,
  },
  {
    category: "soft_drinks",
    name: "Schweppes Soda Water 330ml",
    price: 1.5,
  },
  {
    category: "juices",
    name: "Amita Motion 330ml",
    price: 1.6,
  },
  {
    category: "juices",
    name: "Amita Fun Κόκκινη 250ml",

    price: 1.6,
  },
  {
    category: "juices",
    name: "Amita Fun Μπλε 250ml",

    price: 1.6,
  },
  {
    category: "water",
    name: "Νερό 500ml",
    price: 0.5,
  },
  {
    category: "water",
    name: "Νερό 1.5lt",
    price: 1.0,
  },
  {
    category: "sweet_snacks",
    name: "Donut με πραλίνα σοκολάτας",
    price: 2.0,
  },
  {
    category: "sweet_snacks",
    name: "Donut με πραλίνα bueno",
    price: 2.0,
  },
  {
    category: "sweet_snacks",
    name: "Muffin βανίλια με γέμιση σοκολάτας",
    price: 2.0,
  },
  {
    category: "sweet_snacks",
    name: "Muffin σοκολάτα με γέμιση σοκολάτας",
    price: 2.0,
  },
  {
    category: "sweet_snacks",
    name: "Muffin red velvet με μαρμελάδα βερύκοκο",
    price: 2.2,
  },
  {
    category: "offers",
    name: "Με κάθε καφέ της επιλογής σας, ΔΩΡΟ ένα νερό 500ml!",
    description: "",
    price: 0,
  },
  {
    category: "offers",
    name: "1 καφές της επιλογής σας, 1 σαλάτα, 1 cheesecake & 1 νερό 500ml",
    price: 10.0,
  },
];

export default products;
