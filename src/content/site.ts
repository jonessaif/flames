export const site = {
  name: "Flames",
  city: "Lucknow",
  tagline: "Lucknow's Social Club",
  address: "B-1/3, Vishesh Khand 2, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
  phone: "+91 73807 79789",
  whatsappNumber: "917380779789",
  logo: {
    src: "/images/flames-logo.jpg",
    alt: "Flames of Arabia logo"
  },
  contacts: {
    arabia: {
      label: "Flames of Arabia",
      phone: "+91 73807 79789",
      whatsappNumber: "917380779789",
      instagram: "https://www.instagram.com/flames_of_arabia/"
    },
    flames147: {
      label: "Flames 147",
      phone: "+91 80905 82902",
      whatsappNumber: "918090582902",
      instagram: "https://www.instagram.com/flames_147/"
    }
  },
  email: "reservations@flamesofarabia.in",
  mapLabel: "Two-floor destination in Vishesh Khand, Gomti Nagar",
  defaultWhatsAppMessage: "Hi Flames, I want to reserve my evening.",
  instagram: "https://www.instagram.com/flames_of_arabia/",
  hours: [
    { day: "Flames 147", time: "Open 24 hours" },
    { day: "Flames of Arabia rooftop", time: "11 AM – 5 AM" },
    { day: "Arabia cafe seating", time: "Available all night" }
  ]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Arabia", href: "/hookah-lounge" },
  { label: "Flames 147", href: "/flames-147" },
  { label: "Gallery", href: "/gallery" },
  { label: "Menu", href: "/menu" },
  { label: "Reserve", href: "/contact" }
];

export const hero = {
  eyebrow: "Lucknow's Social Club",
  title: "Play Downstairs.\nRelax Upstairs.",
  subtitle: "Rooftop lounge, live music and premium hookah upstairs. Snooker, pool and gaming downstairs.",
  image: "/images/venue-rooftop-ambience.jpg",
  stats: [
    { value: "ARABIA", label: "Rooftop lounge upstairs" },
    { value: "147", label: "Snooker and gaming downstairs" },
    { value: "ONE VENUE", label: "Food, drinks and hookah" }
  ]
};

export const destinationExperiences = [
  {
    id: "flames-arabia",
    name: "Flames of Arabia",
    eyebrow: "Rooftop Lounge",
    description: "Live music, hookah, warm lights.",
    details: [
      "Rooftop Cafe",
      "Live Music",
      "Premium Hookah"
    ],
    image: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
    position: "center 58%",
    href: "/hookah-lounge",
    cta: "Explore Arabia"
  },
  {
    id: "flames-147",
    name: "Flames 147",
    eyebrow: "Games Lounge",
    description: "Snooker, pool, PS5, hookah.",
    details: [
      "Professional Snooker",
      "Pool Tables",
      "PS5 Gaming",
      "Hookah Lounge"
    ],
    image: "/images/flames-147-snooker-player-new.jpg",
    position: "center 50%",
    href: "/flames-147",
    cta: "Explore 147"
  }
];

export const destinationHighlights = [
  {
    title: "Live Music",
    description: "Acoustic nights and open-mic energy that give the rooftop its pulse."
  },
  {
    title: "Rooftop Lounge",
    description: "Open-air seating, warm lighting and the kind of city-night mood people plan around."
  },
  {
    title: "Professional Snooker",
    description: "A focused games floor for serious frames, friendly rivalries and longer group plans."
  },
  {
    title: "PS5 Gaming",
    description: "FIFA challenges, multiplayer nights and couch energy before or after the rooftop."
  },
  {
    title: "Premium Hookah",
    description: "Premium hookah experiences for slow conversations across both floors."
  },
  {
    title: "Late Night Dining",
    description: "Food designed for long conversations, shared tables and post-game hunger."
  }
];

export const features = [
  {
    title: "Live Music",
    kicker: "Arabia rooftop",
    description: "Acoustic nights and open-mic energy that give the rooftop its pulse."
  },
  {
    title: "Rooftop Vibes",
    kicker: "Open air",
    description: "Open-air seating, warm lighting and the kind of city-night mood people plan around."
  },
  {
    title: "Premium Hookah",
    kicker: "Both floors",
    description: "Premium hookah experiences for slow conversations across Arabia and 147."
  }
];

export const homeSections = {
  chooseTitle: "Choose Your Experience",
  chooseDescription: "Two floors. Two moods. One night out.",
  differentTitle: "What Makes Flames Different",
  differentDescription: "Multiple reasons to visit in one address: music, games, hookah, coffee, mocktails, desserts and food built around the evening.",
  galleryTitle: "Real Moments",
  galleryDescription: "Rooftop nights, hookah tables, games and live energy.",
  eventsTitle: "Tonight At Flames",
  eventsDescription: "Live sets, tournaments, gaming nights and rooftop plans.",
  menuTitle: "The Menu",
  menuDescription: "Combo plans, hookah, drinks, sharing plates and sweet finishes."
};

export const experiences = [
  {
    title: "Rooftop Evenings",
    description: "Warm air, city-night energy, handcrafted drinks and live music upstairs at Flames of Arabia.",
    image: "/images/venue-rooftop-ambience.jpg"
  },
  {
    title: "Snooker Games",
    description: "A dedicated games-floor mood for focused frames, friendly pressure and group plans that last.",
    image: "/images/flames-147-snooker-room.jpg"
  },
  {
    title: "Hookah Sessions",
    description: "Premium hookah experiences designed for slow conversations on either floor.",
    image: "/images/flames-rooftop-hookah-night.jpg"
  },
  {
    title: "Date Nights",
    description: "Start with rooftop music, stay for dessert, or make it a full evening across both floors.",
    image: "/images/venue-rooftop-seating.jpg"
  }
];

export const galleryImages = [
  {
    src: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
    alt: "Guests enjoying hookah on the Flames of Arabia rooftop",
    title: "Rooftop Hookah Crowd",
    category: "Arabia",
    position: "center 58%"
  },
  {
    src: "/images/flames-147-snooker-player-new.jpg",
    alt: "Guest lining up a shot on the professional snooker table at Flames 147",
    title: "Professional Frames",
    category: "Flames 147",
    position: "center 50%"
  },
  {
    src: "/images/flames-arabia-rooftop-hookah-table-new.jpg",
    alt: "Hookah table and guests on the Flames rooftop at night",
    title: "Rooftop Sessions",
    category: "Hookah",
    position: "center 58%"
  },
  {
    src: "/images/flames-147-ps5-cafe-new.jpg",
    alt: "Flames 147 cafe seating with PS5 screens and warm lighting",
    title: "PS5 Cafe Lounge",
    category: "Gaming",
    position: "center 56%"
  },
  {
    src: "/images/flames-rooftop-live-music-night.jpg",
    alt: "Live music night with hookah tables on the Flames of Arabia rooftop",
    title: "Live Music Nights",
    category: "Arabia",
    position: "center 50%"
  },
  {
    src: "/images/flames-147-reception-new.jpg",
    alt: "Flames 147 reception and cafe snooker club signage",
    title: "147 Arrival",
    category: "Flames 147",
    position: "center 50%"
  },
  {
    src: "/images/flames-rooftop-evening-crowd.jpg",
    alt: "Evening crowd on the Flames of Arabia rooftop lounge",
    title: "Rooftop Crowd",
    category: "Rooftop",
    position: "center 55%"
  },
  {
    src: "/images/flames-147-corner-table-new.jpg",
    alt: "Warm corner table seating inside Flames 147",
    title: "Cafe Corners",
    category: "Lounge",
    position: "center 56%"
  },
  {
    src: "/images/flames-147-snooker-room.jpg",
    alt: "Professional snooker tables at Flames 147 in Lucknow",
    title: "147 Snooker Floor",
    category: "Flames 147"
  },
  {
    src: "/images/flames-147-lounge-counter-new.jpg",
    alt: "Flames 147 lounge counter with warm lighting and greenery",
    title: "Lounge Counter",
    category: "Flames 147"
  },
  {
    src: "/images/flames-147-snooker-art-new.jpg",
    alt: "Snooker room artwork and table mood inside Flames 147",
    title: "Snooker Mood",
    category: "Flames 147"
  },
  {
    src: "/images/flames-147-pool-table.jpg",
    alt: "Pool table and neon billiards sign inside Flames 147",
    title: "Pool Nights",
    category: "Flames 147"
  },
  {
    src: "/images/flames-147-ps5-lounge.jpg",
    alt: "Flames 147 lounge seating with PS5 and screen setup",
    title: "PS5 Lounge",
    category: "Gaming"
  },
  {
    src: "/images/date-night.png",
    alt: "Date night table mood at Flames",
    title: "Couple Moments",
    category: "Date Night"
  },
  {
    src: "/images/venue-live-stage.jpg",
    alt: "Live stage lights at Flames",
    title: "Live Stage",
    category: "Music"
  },
  {
    src: "/images/flames-147-entrance.jpg",
    alt: "Flames 147 Cafe and Snooker Club entrance signage",
    title: "Flames 147 Entry",
    category: "Arrival"
  }
];

export const events = [
  {
    title: "Friday Acoustic Night",
    date: "Every Friday",
    time: "8 PM",
    meta: "Arabia rooftop",
    description: "Rooftop music for slow tables.",
    cta: "Reserve rooftop",
    message: "Hi Flames, I want to reserve Friday Acoustic Night at Arabia.",
    image: "/images/flames-arabia-rooftop-hookah-table-new.jpg",
    position: "center 58%"
  },
  {
    title: "Weekend Snooker Tournament",
    date: "Every Saturday",
    time: "6 PM",
    meta: "Flames 147",
    description: "Frames, rivalries and weekend energy.",
    cta: "Book a frame",
    message: "Hi Flames, I want to join the Weekend Snooker Tournament at Flames 147.",
    image: "/images/flames-147-snooker-player-new.jpg",
    position: "center 50%"
  },
  {
    title: "PS5 FIFA Challenge",
    date: "Every Sunday",
    time: "5 PM",
    meta: "Flames 147",
    description: "FIFA, groups and late-night snacks.",
    cta: "Join challenge",
    message: "Hi Flames, I want to join the PS5 FIFA Challenge at Flames 147.",
    image: "/images/flames-147-ps5-cafe-new.jpg",
    position: "center 56%"
  },
  {
    title: "Couples Evening",
    date: "Every Thursday",
    time: "7 PM",
    meta: "Arabia + 147",
    description: "Rooftop ambience, games and dessert.",
    cta: "Plan a date",
    message: "Hi Flames, I want to reserve Couples Night.",
    image: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
    position: "center 58%"
  },
  {
    title: "Rooftop Chill Session",
    date: "Monthly",
    time: "8 PM",
    meta: "Arabia rooftop",
    description: "Open-air tables and relaxed music.",
    cta: "Ask schedule",
    message: "Hi Flames, I want to know the next Open Mic date.",
    image: "/images/flames-arabia-rooftop-hookah-table-new.jpg",
    position: "center 58%"
  }
];

export const statsStrip = [
  {
    value: "2",
    label: "Floors",
    description: "Arabia upstairs. 147 downstairs."
  },
  {
    value: "30+",
    label: "Hookah Blends",
    description: "Signature sessions across both floors."
  },
  {
    value: "Every Weekend",
    label: "Live Music",
    description: "Rooftop sets that make the evening."
  },
  {
    value: "Pro",
    label: "Snooker Tables",
    description: "Built for serious frames and friendly rivalries."
  },
  {
    value: "Late",
    label: "Night Hours",
    description: "A destination for plans that keep moving."
  }
];

export const liveMusicFeature = {
  eyebrow: "Live Music Nights",
  title: "The Soundtrack To Your Evening",
  description: "Live performances that turn ordinary nights into memorable experiences.",
  image: "/images/flames-rooftop-live-music-night.jpg",
  details: [
    "Acoustic sets that make the rooftop feel intimate",
    "A warm evening atmosphere for couples and friend groups",
    "Hookah, handcrafted drinks and sharing plates served around the music"
  ]
};

export const testimonials = [
  {
    name: "Aarav S.",
    rating: "5.0",
    source: "Google",
    photo: "/images/flames-147-snooker-room.jpg",
    text: "The best part is having options. We played downstairs, then moved upstairs for hookah and music."
  },
  {
    name: "Meher K.",
    rating: "5.0",
    source: "Google",
    photo: "/images/flames-rooftop-hookah-night.jpg",
    text: "It feels like a full evening plan, not just a place to sit. Perfect for dates and friend groups."
  },
  {
    name: "Rohan P.",
    rating: "4.9",
    source: "Google",
    photo: "/images/flames-rooftop-live-music-night.jpg",
    text: "Snooker, PS5, rooftop, mocktails and hookah in one spot. That is the reason to go."
  }
];

export const socialProof = {
  eyebrow: "Guest proof",
  title: "Nights People Talk About",
  description: "Real reviews, rooftop photos and games-floor moments from people who turned one plan into a full night at Flames.",
  averageRating: "4.5",
  reviewCount: "127 Google reviews",
  note: "Public listing snapshot as of June 2026; update from the Google Business Profile before final launch.",
  userPhotos: [
    "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
    "/images/flames-147-snooker-player-new.jpg",
    "/images/flames-147-ps5-cafe-new.jpg",
    "/images/flames-arabia-rooftop-hookah-table-new.jpg"
  ]
};

export const faqs = [
  {
    question: "Is hookah available at Flames 147?",
    answer: "Yes. Hookah is available at Flames 147 downstairs and Flames of Arabia upstairs. All available hookah flavours are priced at Rs. 600."
  },
  {
    question: "What is the snooker rate at Flames 147 in Lucknow?",
    answer: "Flames 147 pricing is Rs. 4 per minute for Indian Pool, Rs. 5 per minute for American Pool, Rs. 6 per minute for Snooker, and Rs. 200 per hour for PS5."
  },
  {
    question: "Does Flames 147 have a private cabin?",
    answer: "Yes. Flames 147 has a private snooker cabin for guests who want more privacy, focus, or a quieter small-group games session."
  },
  {
    question: "Is Flames open 24 hours?",
    answer: "Flames 147 is open 24 hours. Flames of Arabia rooftop runs from 11 AM to 5 AM, and Arabia cafe seating is available all night. For live music schedules or larger group plans, WhatsApp before arriving."
  },
  {
    question: "Where is Flames located in Lucknow?",
    answer: "Flames is at B-1/3, Vishesh Khand 2, Gomti Nagar, Lucknow, Uttar Pradesh 226010."
  },
  {
    question: "Is live music available at Flames of Arabia?",
    answer: "Yes. Flames of Arabia hosts live music nights on the rooftop, with acoustic and social evening events. Check WhatsApp for the current weekend schedule."
  }
];

export const menuPreview = [
  {
    title: "Combo Menu",
    description: "Best-value plans for Arabia and 147.",
    image: "/images/flames-147-snooker-player-new.jpg",
    href: "/menu"
  },
  {
    title: "Hookah",
    description: "One price for all available flavours.",
    image: "/images/flames-arabia-rooftop-hookah-table-new.jpg",
    href: "/menu"
  },
  {
    title: "Coffee & Mocktails",
    description: "Late-night catchups and handcrafted drinks.",
    image: "/images/flames-147-corner-table-new.jpg",
    href: "/menu"
  },
  {
    title: "Comfort Food",
    description: "Sharing plates for long conversations.",
    image: "/images/flames-147-ps5-cafe-new.jpg",
    href: "/menu"
  }
];

export const crossExperience = {
  eyebrow: "Two floors / one plan",
  title: "Why Choose One?",
  description: "Play downstairs.\nRelax upstairs.",
  body: "Start with games. End with rooftop music, hookah and warm city-night energy.",
  image: "/images/flames-147-snooker-player-new.jpg",
  panels: [
    {
      name: "Flames 147",
      label: "Downstairs",
      image: "/images/flames-147-snooker-player-new.jpg",
      position: "center 50%",
      description: "Snooker, pool, PS5 and hookah."
    },
    {
      name: "Flames of Arabia",
      label: "Upstairs",
      image: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
      position: "center 58%",
      description: "Live music, rooftop lights and premium hookah."
    }
  ]
};

export const reservationCta = {
  eyebrow: "Reserve / WhatsApp",
  title: "Reserve Your Evening",
  description: "Choose Arabia for rooftop live music, 147 for snooker and gaming, or both for the full Flames night.",
  image: "/images/flames-arabia-rooftop-hookah-crowd-new.jpg",
  choices: [
    { label: "Arabia", message: "Hi Flames, I want to reserve Flames of Arabia for rooftop live music and hookah." },
    { label: "147", message: "Hi Flames, I want to reserve Flames 147 for snooker, pool, PS5 and hookah." },
    { label: "Both", message: "Hi Flames, I want to plan both floors for tonight." }
  ],
  groupSizes: ["2", "3", "4", "5", "6", "8+"],
  occasions: ["Birthday", "Date Night", "Corporate Gathering", "Tournament", "Friends Hangout"],
  footerCta: "Planning an evening with friends?",
  footerMessage: "Reserve both experiences."
};

export const menuSections = [
  {
    title: "Arabia Platter Combos",
    note: "Best-value rooftop combos for Flames of Arabia. In this menu, platter means hookah.",
    items: [
      { name: "Micro Combo", description: "1 platter plus fries for a compact rooftop session.", price: "Rs. 699" },
      { name: "Mini Combo", description: "1 platter, 2 mocktails and fries for a relaxed table.", price: "Rs. 799" },
      { name: "Regular Combo", description: "1 platter, 2 shakes and honey chilli potato.", price: "Rs. 999" },
      { name: "Classic Combo", description: "1 platter, 2 mocktails, veg noodles and fries.", price: "Rs. 1049" },
      { name: "Redbull Combo", description: "1 platter, 2 Red Bull, veg Singaporei noodles and fries.", price: "Rs. 1099" },
      { name: "Coffee Combo", description: "1 platter, 2 frappe, 2 burgers and fries.", price: "Rs. 1099" },
      { name: "Group Combo", description: "2 platters, 4 mocktails and fries for a small group.", price: "Rs. 1499" },
      { name: "Large Combo", description: "2 platters, 4 shakes, margherita pizza and fries.", price: "Rs. 1899" },
      { name: "Party Combo", description: "2 platters, 4 mocktails, pasta, veg Singaporei noodles and honey chilli potato.", price: "Rs. 1999" }
    ]
  },
  {
    title: "Flames 147 Combos",
    note: "Snooker-first combo plans for the downstairs games floor.",
    items: [
      { name: "Starter Break Combo", description: "60 minutes snooker, 2 mocktails or coffee, and fries.", price: "Rs. 699" },
      { name: "Chicken Break Combo", description: "60 minutes snooker, 2 mocktails or coffee, and chicken popcorn.", price: "Rs. 799" },
      { name: "Chill Combo", description: "60 minutes snooker plus 1 platter hookah.", price: "Rs. 799" },
      { name: "Extended Chill Combo", description: "120 minutes snooker, 1 platter hookah, 2 mocktails and chicken strips.", price: "Rs. 1299" },
      { name: "Energy Boost Combo", description: "120 minutes snooker, 1 platter hookah, 2 Red Bull and chicken strips.", price: "Rs. 1399" },
      { name: "Twin Cloud Combo", description: "120 minutes snooker with 2 platter hookahs.", price: "Rs. 1499" },
      { name: "Flames 147 Mega Combo", description: "120 minutes snooker, 2 platter hookahs, 4 mocktails, chicken strips and loaded fries.", price: "Rs. 2299" }
    ]
  },
  {
    title: "Hookah",
    note: "One clear hookah price across available flavours.",
    items: [
      { name: "All Hookah Flavours", description: "Choose from the available flavour lineup for Arabia or 147. Ask the team for current availability.", price: "Rs. 600" }
    ]
  },
  {
    title: "Coffee",
    note: "Coffee dates, gaming breaks and late-night catchups.",
    items: [
      { name: "Espresso", description: "A bold, concentrated shot for a quick reset.", price: "Rs. 129" },
      { name: "Americano", description: "Smooth espresso stretched with hot water for an easy sip.", price: "Rs. 159" },
      { name: "Cappuccino", description: "Espresso, steamed milk and airy foam for slow tables.", price: "Rs. 169" },
      { name: "Cafe Latte", description: "Silky steamed milk blended with mellow espresso.", price: "Rs. 169" },
      { name: "Cafe Mocha", description: "Coffee meets chocolate for a dessert-style cup.", price: "Rs. 189" },
      { name: "Hot Chocolate", description: "Creamy cocoa for late-night comfort.", price: "Rs. 179" },
      { name: "Espresso Hot Chocolate", description: "Hot chocolate with an espresso edge.", price: "Rs. 199" },
      { name: "Iced Americano", description: "Crisp espresso over ice for warm rooftop evenings.", price: "Rs. 179" },
      { name: "Iced Cappuccino", description: "Chilled cappuccino for warm evenings and game breaks.", price: "Rs. 249" },
      { name: "Cafe Frappe", description: "Frothy, chilled coffee for catchups and game breaks.", price: "Rs. 249" },
      { name: "Black Fantasy", description: "A richer cold coffee pour for dessert-style moods.", price: "Rs. 299" },
      { name: "Frappe with Ice Cream", description: "Cold coffee topped with ice cream for a richer finish.", price: "Rs. 279" },
      { name: "Tiramisu Frappe", description: "A coffee-dessert mood inspired by tiramisu.", price: "Rs. 299" },
      { name: "Hazelnut Frappe", description: "Cold coffee with a smooth hazelnut finish.", price: "Rs. 299" },
      { name: "Caramel Frappe", description: "Icy coffee with a smooth caramel finish.", price: "Rs. 299" },
      { name: "Affogato", description: "Vanilla ice cream with a hot espresso pour.", price: "Rs. 249" },
      { name: "Cranberry Coffee", description: "Chilled coffee with a cranberry twist.", price: "Rs. 249" }
    ]
  },
  {
    title: "Cold Beverages",
    note: "Easy cold pours for rooftop tables and games-floor breaks.",
    items: [
      { name: "Lemon Iced Tea", description: "Classic chilled tea with a bright citrus lift.", price: "Rs. 189" },
      { name: "Raspberry Iced Tea", description: "Black tea with a juicy berry edge.", price: "Rs. 199" },
      { name: "Pomegranate Iced Tea", description: "Cold-brewed tea with a tart pomegranate finish.", price: "Rs. 219" },
      { name: "Peach Iced Tea", description: "Smooth peach notes for easy evening sipping.", price: "Rs. 199" },
      { name: "Hibiscus Iced Tea", description: "Floral, tangy and refreshing over ice.", price: "Rs. 229" },
      { name: "Passion Fruit Slush", description: "Tropical, icy and built for warm nights.", price: "Rs. 189" },
      { name: "Cold Blue", description: "Electric blue citrus slush with a chilled finish.", price: "Rs. 179" },
      { name: "Green Apple Slush", description: "Green apple chill with a bright finish.", price: "Rs. 179" },
      { name: "Mojito Slush", description: "Mint-lime slush for a sharper cold sip.", price: "Rs. 169" },
      { name: "Strawberry Slush", description: "Sweet strawberry ice for easy table rounds.", price: "Rs. 169" },
      { name: "Chai", description: "Classic tea for slower conversations.", price: "Rs. 59" },
      { name: "Masala Chai", description: "Spiced tea with a warm finish.", price: "Rs. 69" },
      { name: "Ginger / Elaichi Tea", description: "Aromatic tea with ginger or cardamom.", price: "Rs. 79" },
      { name: "Green / Lemon Tea", description: "A lighter tea pour after food or games.", price: "Rs. 49" },
      { name: "Water", description: "Bottled water.", price: "Rs. 35" },
      { name: "Cold Drink Can", description: "Chilled canned soft drink.", price: "Rs. 135" },
      { name: "Red Bull", description: "Energy drink for longer nights.", price: "Rs. 199" }
    ]
  },
  {
    title: "Shakes",
    note: "Dessert-style drinks for dates, birthdays and late-night photos.",
    items: [
      { name: "Chocolate Shake", description: "Rich chocolate blended into a thick cold pour.", price: "Rs. 279" },
      { name: "Brownie Shake", description: "Chocolate shake with brownie chunks for a dessert mood.", price: "Rs. 289" },
      { name: "Oreo Shake", description: "Creamy shake blended with Oreo crunch.", price: "Rs. 299" },
      { name: "Blueberry Shake", description: "Sweet berry notes in a chilled creamy blend.", price: "Rs. 249" },
      { name: "Pineapple Shake", description: "Tropical, chilled and creamy.", price: "Rs. 179" },
      { name: "Banana Shake", description: "Classic, smooth and easy after games.", price: "Rs. 179" },
      { name: "Strawberry Shake", description: "Pink, creamy and built for casual cafe dates.", price: "Rs. 219" },
      { name: "Vanilla Shake", description: "A clean, creamy classic.", price: "Rs. 179" },
      { name: "Mango Shake", description: "Sweet mango in a cold cafe-style pour.", price: "Rs. 179" },
      { name: "KitKat Shake", description: "Chocolate shake with crisp KitKat pieces.", price: "Rs. 299" }
    ]
  },
  {
    title: "Mocktails",
    note: "Colorful, zero-proof pours for social tables.",
    items: [
      { name: "Mojito", description: "Lime, chilled soda and crushed mint.", price: "Rs. 179" },
      { name: "Mint Mojito", description: "Fresh mint, lime and soda with a crisp finish.", price: "Rs. 189" },
      { name: "Watermelon Mojito", description: "Watermelon with minty lime fizz.", price: "Rs. 189" },
      { name: "Lemon Shine", description: "Bright lemon sparkle with a tangy lift.", price: "Rs. 189" },
      { name: "Blue Lagoon Mojito", description: "A blue citrus-mint pour for night photos.", price: "Rs. 199" },
      { name: "Pinch of Mars", description: "A bold, colorful mocktail for group tables.", price: "Rs. 199" },
      { name: "Monsoon Drops", description: "A refreshing house-style mocktail.", price: "Rs. 199" },
      { name: "Deep Dive", description: "A deeper citrus-led cold pour.", price: "Rs. 199" },
      { name: "Pina Colada", description: "Pineapple and coconut in a creamy tropical blend.", price: "Rs. 199" },
      { name: "Fresh Lime", description: "Classic lime refreshment over ice.", price: "Rs. 179" },
      { name: "Green Apple", description: "Green apple sparkle for a clean finish.", price: "Rs. 189" },
      { name: "Raspberry", description: "Berry-led, chilled and bright.", price: "Rs. 179" },
      { name: "Orange Berry", description: "Orange and berry notes in a social table pour.", price: "Rs. 189" },
      { name: "Triple Sensation", description: "Three bold flavors in one colorful chilled glass.", price: "Rs. 219" },
      { name: "Shirley Temple", description: "Grenadine, soda and lime with a sweet sparkle.", price: "Rs. 299" }
    ]
  },
  {
    title: "Quickbites & Starters",
    note: "Sharing plates for long conversations, live sets and friendly rivalries.",
    items: [
      { name: "Chicken Strips", description: "Crisp strips for games-floor sharing.", price: "Rs. 199" },
      { name: "Chicken Popcorn", description: "Bite-sized chicken for quick table rounds.", price: "Rs. 199" },
      { name: "Chicken Wings", description: "A heavier sharing plate for friend groups.", price: "Rs. 349" },
      { name: "Crispy Corn", description: "Crisp corn tossed for snackable conversations.", price: "Rs. 199" },
      { name: "Veg Cheese Balls", description: "Cheesy bites for lighter group orders.", price: "Rs. 179" },
      { name: "Chicken Lollipop", description: "Classic party-style chicken bites.", price: "Rs. 449" },
      { name: "Cheesy Chicken Roll", description: "A compact roll for quick breaks.", price: "Rs. 169" },
      { name: "Classic Salted Fries", description: "Crisp salted fries for every table.", price: "Rs. 129" },
      { name: "Peri Peri Fries", description: "Fries dusted with peri peri spice.", price: "Rs. 139" },
      { name: "Cheese Loaded Fries", description: "Loaded fries for longer conversations.", price: "Rs. 149" },
      { name: "Peri Peri Chicken Cheese Fries", description: "Loaded chicken fries with a peri peri kick.", price: "Rs. 199" },
      { name: "Classic Chicken Cheese Fries", description: "Chicken cheese fries for bigger hunger.", price: "Rs. 219" },
      { name: "Cheese Garlic Bread", description: "Warm garlic bread with melted cheese.", price: "Rs. 169" },
      { name: "Veg Cheese Toastie", description: "Cheesy vegetarian toastie for cafe breaks.", price: "Rs. 199" },
      { name: "Chicken Cheese Toastie", description: "Chicken toastie with a cheesy finish.", price: "Rs. 249" }
    ]
  },
  {
    title: "Mains & Pasta",
    note: "Comfort bowls and plates that keep the evening moving.",
    items: [
      { name: "Plain Maggi", description: "Simple Maggi for late-night cravings.", price: "Rs. 99" },
      { name: "Veg Masala Maggi", description: "Masala Maggi with a vegetarian spin.", price: "Rs. 139" },
      { name: "Cheese Maggi", description: "Maggi with a cheesy finish.", price: "Rs. 159" },
      { name: "Veg Noodles", description: "Stir-fried noodles with mixed vegetables and aromatic spices.", price: "Rs. 199" },
      { name: "Chicken Noodles", description: "Noodles with tender chicken and vegetables in a savory sauce.", price: "Rs. 299" },
      { name: "Veg Fried Rice", description: "Fragrant rice stir-fried with vegetables and Indo-Chinese flavors.", price: "Rs. 219" },
      { name: "Chicken Fried Rice", description: "Fried rice with tender chicken pieces and Chinese sauces.", price: "Rs. 329" },
      { name: "Honey Chilli Potato", description: "Potato sticks glazed in a sweet-spicy honey chilli sauce.", price: "Rs. 199" },
      { name: "Chilli Chicken Dry", description: "Chicken with peppers and a fiery chilli garlic sauce.", price: "Rs. 449" },
      { name: "White Sauce Pasta", description: "Creamy pasta tossed with herbs for a lounge-friendly plate.", price: "Rs. 249" },
      { name: "Red Sauce Pasta", description: "Tangy tomato pasta with Italian spices and a light chilli note.", price: "Rs. 249" },
      { name: "Pink Sauce Pasta", description: "A creamy tomato fusion for easy sharing.", price: "Rs. 249" }
    ]
  },
  {
    title: "Pizza / Burgers / Wraps",
    note: "Casual table food for game nights, dates and rooftop catchups.",
    items: [
      { name: "Double Cheese Margherita Pizza", description: "Double cheese pizza with tomato sauce and mozzarella.", price: "Rs. 199" },
      { name: "Veg Supreme Pizza", description: "Assorted vegetables on a cheesy base.", price: "Rs. 299" },
      { name: "Paneer Pepprika Pizza", description: "Paneer and pepper-led toppings for sharing.", price: "Rs. 249" },
      { name: "BBQ Chicken Pizza", description: "BBQ chicken with rich sauce and melted cheese.", price: "Rs. 299" },
      { name: "Paneer Tikka Wrap", description: "Grilled paneer and fresh vegetables wrapped for easy sharing.", price: "Rs. 159" },
      { name: "Chicken Tikka Wrap", description: "Spiced chicken tikka rolled with sauces and crunch.", price: "Rs. 189" },
      { name: "Crispy Chicken Burger", description: "Crisp chicken burger for game-night hunger.", price: "Rs. 199" },
      { name: "BBQ Chicken Burger", description: "Chicken burger with a smoky BBQ finish.", price: "Rs. 249" },
      { name: "OG Veggie Burger", description: "A simple vegetarian cafe burger.", price: "Rs. 179" },
      { name: "OG Aloo Tikki Burger", description: "Aloo tikki burger for quick breaks.", price: "Rs. 149" },
      { name: "BBQ Paneer Burger", description: "Paneer burger with a smoky BBQ finish.", price: "Rs. 189" },
      { name: "Cheesy Veg Grilled Sandwich", description: "Grilled veg sandwich with a cheesy pull.", price: "Rs. 199" },
      { name: "Peri Peri Paneer Cheese Sandwich", description: "Paneer cheese sandwich with peri peri heat.", price: "Rs. 249" },
      { name: "Corn & Cheese Sandwich", description: "Corn and cheese sandwich for casual tables.", price: "Rs. 239" },
      { name: "Peri Peri Chicken Cheese Sandwich", description: "Chicken cheese sandwich with peri peri heat.", price: "Rs. 299" }
    ]
  },
  {
    title: "Desserts",
    note: "Sweet finishes for date nights, wins, birthdays and last photos.",
    items: [
      { name: "Classic Kunafa", description: "A warm Middle Eastern-style dessert with sweet syrup.", price: "Rs. 399" },
      { name: "Cream Kunafa", description: "Layered kunafa with a rich cream finish.", price: "Rs. 399" },
      { name: "Butterscotch Kunafa", description: "Kunafa with a butterscotch twist.", price: "Rs. 449" },
      { name: "Nutella Kunafa", description: "Kunafa with a gooey Nutella-style finish.", price: "Rs. 449" },
      { name: "Brownie Nut Sundae", description: "Warm brownie with ice cream, nuts and chocolate syrup.", price: "Rs. 199" }
    ]
  }
];

export const hookahHighlights = [
  "Premium hookah experiences for Arabia and 147 guests",
  "Rooftop and games-floor seating for couples and small groups",
  "Smooth service rhythm for longer evening sessions",
  "Warm low-light ambience designed for photos, music, games and conversation"
];

export const flames147Highlights = [
  "Professional snooker and pool tables with a dedicated games-floor mood",
  "PS5 gaming nights with food, drinks and hookah close by",
  "A downstairs social floor that pairs naturally with the rooftop",
  "Easy booking for 147 only or both Flames experiences"
];

export const aboutPillars = [
  {
    title: "Two Experiences",
    description: "Flames brings together Arabia upstairs and 147 downstairs so guests can choose music, games, hookah or all of it."
  },
  {
    title: "Social Energy",
    description: "The venue is built for couples, young professionals, hookah customers and friend groups looking for an active night out."
  },
  {
    title: "Shared Services",
    description: "Kitchen, coffee, mocktails, desserts and hookah support both floors so the experience stays easy."
  }
];
