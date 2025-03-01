const products = [
  {
    category: "cold_coffees",
    name: "Freddo Espresso",
    price: 2.3,
    xl_price: 3.3,
  },
  {
    category: "cold_coffees",
    name: "Freddo Cappuccino",
    price: 2.5,
    xl_price: 3.5,
  },
  {
    category: "cold_coffees",
    name: "Freddo Cappuccino Crema",
    price: 2.8,
    xl_price: 3.8,
  },
  {
    category: "cold_coffees",
    name: "Freddo Flat White",
    price: 2.5,
    xl_price: 3.5,
  },
  {
    category: "cold_coffees",
    name: "Freddo Latte",
    price: 2.6,
    xl_price: 3.6,
  },
  {
    category: "cold_coffees",
    name: "Iced Latte",
    price: 2.6,
    xl_price: 3.6,
  },
  {
    category: "cold_coffees",
    name: "Frappe",

    price: 1.8,
    xl_price: 2.4,
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
    price: 2.5,
    xl_price: 3.5,
  },
  {
    category: "hot_coffees",
    name: "Espresso",
    price: 2.3,
    xl_price: 3.3,
  },
  {
    category: "hot_coffees",
    name: "Ελληνικός",
    price: 2.0,
    xl_price: 2.6,
  },
  {
    category: "hot_coffees",
    name: "Nes (στιγμιαίος)",
    price: 1.8,
    xl_price: 2.4,
  },
  {
    category: "tortillas",
    name: "Bagel με γαλοπούλα",
    description:
      "Κουλούρι bagel με παπαρουνόσπορο γεμιστό με καπνιστή γαλοπούλα & κρέμα τυριού",
    price: 2.8,
  },
  {
    category: "tortillas",
    name: "Τορτίγια Caesar's με κοτόπουλο",
    description:
      "Ψητό κοτόπουλο, τριμμένη παρμεζάνα, καλαμπόκι, μαρούλι & sauce Caesar's",
    price: 3.6,
  },
  {
    category: "tortillas",
    name: "Τορτίγια με γαλοπούλα",
    description:
      "Καπνιστή γαλοπούλα, τυρί gouda, ντομάτα, μαρούλι & κρέμα τυριού",
    price: 3.3,
  },
  {
    category: "tortillas",
    name: "Sando με κοτόπουλο",
    description: "Ψητό κοτόπουλο, καπνιστό τυρί, iceberg & mustard mayo",
    price: 3.5,
  },
  {
    category: "tortillas",
    name: "Μπαγκέτα λευκή με κοτόπουλο",
    description:
      "Ψητό κοτόπουλο, τριμμένη παρμεζάνα, καπνιστό τυρί, καλαμπόκι, iceberg & mustard mayo",
    price: 3.4,
  },
  {
    category: "tortillas",
    name: "Μπαγκέτα λευκή με πάριζα",
    description: "Πάριζα, τυρί gouda, ντομάτα, μαρούλι & μαγιονέζα",
    price: 3.2,
  },
  {
    category: "tortillas",
    name: "Μπαγκέτα ολικής με γαλοπούλα",
    description: "Καπνιστή γαλοπούλα, τυρί gouda, ντομάτα, μαρούλι & μαγιονέζα",
    price: 3.4,
  },
  {
    category: "tortillas",
    name: "Ciabatta με σαλάμι αέρος",
    description: "Σαλάμι αέρος, κρέμα τυριού & ντομάτα",
    price: 3.6,
  },
  {
    category: "tortillas",
    name: "Ciabatta με καπνιστή μπριζόλα",
    description:
      "Καπνιστή χοιρινή μπριζόλα, τριμμένη παρμεζάνα, ντομάτα & mustard mayo",
    price: 3.6,
  },
  {
    category: "tortillas",
    name: "Ciabatta με κοτόπουλο",
    description: "Ψητό κοτόπουλο, καπνιστό μπέικον, κρέμα τυριού & ντομάτα",
    price: 3.7,
  },
  {
    category: "salads",
    name: "Caesar's Feast",
    description:
      "Μαρούλι iceberg, ψητό κοτόπουλο, flakes παρμεζάνας, κρουτόν, καλαμπόκι & sauce Caesar's",
    price: 6.0,
  },
  {
    category: "handmade_sweets",
    name: "Soft cookie double choco (130gr)",
    description:
      "Μαλακό, τραγανό και μαστιχωτό ταυτόχρονα με μεγάλα κομματάκια λευκής & σοκολάτας γάλακτος σε ζύμη βανίλιας.",
    price: 4.0,
  },
  {
    category: "handmade_sweets",
    name: "Profiterole (300gr)",
    description:
      "Γεμιστά choux με κρέμα βανίλιας, namelaka σοκολάτας & κρέμα βανίλιας σε γυάλινο βαζάκι.",
    price: 4.5,
  },
  {
    category: "handmade_sweets",
    name: "Cheesecake (200gr)",
    description:
      "Βάση απο μπισκότα digestive, κρέμα & μαρμελάδα φράουλα ή κεράσι σε γυάλινο βαζάκι.",
    price: 3.5,
  },
  {
    category: "handmade_sweets",
    name: "Tiramisu (200gr)",
    description:
      "Ζουμερά σαβαγιάρ μπισκότα βουτηγμένα σε single origin espresso από την Αιθιοπία, κρέμα mascarpone & κακάο σε γυάλινο βαζάκι.",
    price: 4.0,
  },

  {
    category: "juices",
    name: "Φρεσκοστυμμένος χυμός πορτοκάλι",
    description:
      "Χυμός από φρέσκα πορτοκάλια σε γυάλινη φιάλη 250ml, εμφιαλωμένος καθημερινά απο εμάς.",
    price: 2.8,
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
    price: 1.8,
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
    price: 2.0,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Mango Loco 500ml",
    price: 2.0,
  },
  {
    category: "energy_drinks",
    name: "Monster Energy Ultra Zero 500ml",
    price: 2.0,
  },

  {
    category: "energy_drinks",
    name: "Monster Energy Absolute Zero 500ml",
    price: 2.0,
  },

  {
    category: "soft_drinks",
    name: "Coca-Cola 330ml",
    price: 1.7,
  },
  {
    category: "soft_drinks",
    name: "Coca-Cola Zero 330ml",
    price: 1.7,
  },

  {
    category: "soft_drinks",
    name: "Fanta Κόκκινη 330ml",
    price: 1.7,
  },
  {
    category: "soft_drinks",
    name: "Fanta Μπλε 330ml",
    price: 1.7,
  },
  {
    category: "soft_drinks",
    name: "Amita Motion 330ml",
    price: 1.7,
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
    category: "offers",
    name: "Με κάθε καφέ της επιλογής σας, ΔΩΡΟ ένα νερό 500ml!",
    description: "",
    price: -1,
  },
  {
    category: "offers",
    name: "1 καφές της επιλογής σας, 1 σαλάτα, 1 cheesecake & 1 νερό 500ml",
    price: -10.0,
  },
  {
    category: "single_origin",
    name: "🇪🇹 Ethiopia Murago",
    description:
      "Επεξεργασία: Natural Washed, Ποικιλία: Bourbon, Περιοχή: Murago, Υψόμετρο: 1460 m.a.s.l",
    price: 0.5,
  },
  {
    category: "single_origin",
    name: "🇸🇻 El Salvador Hermanos Mena",
    description:
      "Επεξεργασία: Natural Anaerobic, Ποικιλία: Bourbon, Περιοχή: Apaneca-Ilamatepec, Υψόμετρο: 1370 m.a.s.l",
    price: 0.5,
  },
  {
    category: "single_origin",
    name: "🇨🇴 Colombia Tumbaga (Decaffeine)",
    description:
      "Επεξεργασία: Sugarcane Water Proccess, Περιοχή: Tolima, Υψόμετρο: 1560 m.a.s.l",
    price: 0.3,
  },
];

export default products;
