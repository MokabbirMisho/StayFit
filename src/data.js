export const data = [
  {
    title: "Expert Trainer",
    text: "Highly qualified trainers to help you achieve your goals.",
  },
  {
    title: "Modern Equipment",
    text: "Access to state-of-the-art fitness machines and tools.",
  },
  {
    title: "Award Winning",
    text: "Recognized for excellence in fitness services.",
  },
  {
    title: "Community Driven",
    text: "A supportive community that motivates you.",
  },
];

export const priceList = [
  {
    name: "Beginner Plan",
    monthly: 19.99,

    description: "Best for beginners to start their fitness journey.",
    features: [
      { text: "Access to basic equipment", available: true },
      { text: "One personal training session", available: true },
      { text: "Dietary consultation", available: false },
      { text: "Access to premium classes", available: false },
    ],
  },
  {
    name: "Premium Plan",
    monthly: 29.99,

    description: "Perfect for advanced users with extra perks.",
    features: [
      { text: "Access to all equipment", available: true },
      { text: "Weekly personal training", available: true },
      { text: "Dietary consultation", available: false },
      { text: "Access to premium classes", available: true },
    ],
  },
  {
    name: "Pro Plan",

    yearly: 299.99,
    description: "Ideal for professionals aiming for peak performance.",
    features: [
      { text: "Unlimited gym access", available: true },
      { text: "Daily personal training", available: true },
      { text: "Advanced dietary consultation", available: true },
      { text: "Exclusive premium classes", available: true },
    ],
  },
];

export const reviews = [
  {
    name: "Hexagon",
    text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended for anyone seeking top-notch service.",
    stars: 4.5,
    color: "text-blue-500",
  },
  {
    name: "Digital",
    text: "Incredible experience! Highly recommend to everyone. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    stars: 4,
    color: "text-purple-500",
  },
  {
    name: "Services",
    text: "Great platform with some room for improvement. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stars: 3.5,
    color: "text-green-500",
  },
  {
    name: "Momentum",
    text: "Amazing facilities and trainers. They truly care about your fitness journey.",
    stars: 5,
    color: "text-yellow-500",
  },
  {
    name: "Pulse",
    text: "Fantastic support system and modern equipment. I couldn’t ask for more!",
    stars: 4.5,
    color: "text-red-500",
  },
  {
    name: "Zenith",
    text: "The community atmosphere is truly inspiring! A perfect place to grow.",
    stars: 4.8,
    color: "text-indigo-500",
  },
];
export const links = [
  {
    title: "Usefull Links",
    items: ["Home", "Trainer", "Price", "Contact"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Newsletter", "FAQ"],
  },
];
