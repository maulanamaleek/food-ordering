import {
  E_FOOD_CATEGORY,
  ICartResponse,
  IFood,
  IHistory,
  ISummaryResponse,
  IUser,
} from "@/schema";

/* eslint-disable max-len */
export const mockCart: ICartResponse = {
  total_items: 3,
  items: [
    {
      id: 4,
      name: 'Red Velvet Cake',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
      price: 21000,
      avg_rating: 4.2,
      category: [E_FOOD_CATEGORY.CAKE],
      imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
      is_available: true,
      ordered_amount: 23,
      amount: 1,
    },
    {
      id: 5,
      name: 'Mixed Vegetable Smoothie',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
      price: 24000,
      avg_rating: 4.9,
      category: [E_FOOD_CATEGORY.DRINKS],
      imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
      is_available: true,
      ordered_amount: 6,
      amount: 1,
    },
    {
      id: 6,
      name: 'Fried Chicken + Rice',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
      price: 15000,
      avg_rating: 4.9,
      category: [E_FOOD_CATEGORY.CHICKEN],
      imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
      is_available: true,
      ordered_amount: 211,
      amount: 2,
    },
  ],
};

export const mockHistory: IHistory[] = [
  {
    id: 5,
    name: 'Red Velvet Cake',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 21000,
    avg_rating: 4.2,
    category: [E_FOOD_CATEGORY.CAKE],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 23,
    amount: 1,
    ordered_date: 1688520319389,
  },
  {
    id: 4,
    name: 'Mixed Vegetable Smoothie',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 24000,
    avg_rating: 4.9,
    category: [E_FOOD_CATEGORY.DRINKS],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 6,
    amount: 1,
    ordered_date: 1688520319389,
  },
  {
    id: 3,
    name: 'Fried Chicken + Rice',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 15000,
    avg_rating: 4.9,
    category: [E_FOOD_CATEGORY.CHICKEN],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 211,
    amount: 2,
    ordered_date: 1688520319389,
  },
  {
    id: 2,
    name: 'Beef Teriyaki',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 44000,
    amount: 1,
    avg_rating: 4.6,
    category: [E_FOOD_CATEGORY.BEEF],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 23,
    ordered_date: 1688148997108,
  },
  {
    id: 1,
    name: 'Fried Chicken + Rice',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 15000,
    amount: 3,
    avg_rating: 4.9,
    category: [E_FOOD_CATEGORY.CHICKEN],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 211,
    ordered_date: 1688148997108,
  },
];

export const mockSummary: ISummaryResponse = {
  total_price: 75000,
  items: [
    {
      id: 4,
      name: 'Red Velvet Cake',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
      price: 21000,
      avg_rating: 4.2,
      category: [E_FOOD_CATEGORY.CAKE],
      imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
      is_available: true,
      ordered_amount: 23,
      amount: 1,
    },
    {
      id: 5,
      name: 'Mixed Vegetable Smoothie',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
      price: 24000,
      avg_rating: 4.9,
      category: [E_FOOD_CATEGORY.DRINKS],
      imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
      is_available: true,
      ordered_amount: 6,
      amount: 1,
    },
    {
      id: 6,
      name: 'Fried Chicken + Rice',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
      price: 15000,
      avg_rating: 4.9,
      category: [E_FOOD_CATEGORY.CHICKEN],
      imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
      is_available: true,
      ordered_amount: 211,
      amount: 2,
    },
  ],
};

export const mockUser: IUser = {
  id: 1,
  name: 'Mock User',
  email: 'user@example.com',
  avatar_url: '/assets/user.png',
  cart_items: 3,
};

export const mockFoods: IFood[] = [
  {
    id: 1,
    name: 'Honey Roasted Chicken',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 23000,
    avg_rating: 4.4,
    category: [E_FOOD_CATEGORY.CHICKEN],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 72,
  },
  {
    id: 2,
    name: 'Chicken Katsu Curry Ramen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 46000,
    avg_rating: 4.7,
    category: [E_FOOD_CATEGORY.CHICKEN, E_FOOD_CATEGORY.NOODLES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 14,
  },
  {
    id: 3,
    name: 'Beef Teriyaki',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 44000,
    avg_rating: 4.6,
    category: [E_FOOD_CATEGORY.BEEF],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 23,
  },
  {
    id: 4,
    name: 'Red Velvet Cake',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 21000,
    avg_rating: 4.2,
    category: [E_FOOD_CATEGORY.CAKE],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 23,
  },
  {
    id: 5,
    name: 'Mixed Vegetable Smoothie',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 24000,
    avg_rating: 4.9,
    category: [E_FOOD_CATEGORY.DRINKS],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 6,
  },
  {
    id: 6,
    name: 'Fried Chicken + Rice',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 15000,
    avg_rating: 4.9,
    category: [E_FOOD_CATEGORY.CHICKEN],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 211,
  },
  {
    id: 7,
    name: 'Salmon Nigiri Sushi',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 27000,
    avg_rating: 4.3,
    category: [E_FOOD_CATEGORY.SUSHI],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: false,
    ordered_amount: 46,
  },
  {
    id: 8,
    name: 'Curly Fries',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 22000,
    avg_rating: 4.3,
    category: [E_FOOD_CATEGORY.FRIES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 135,
  },
  {
    id: 9,
    name: 'Lava Cheese Tart',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 22000,
    avg_rating: 4.3,
    category: [E_FOOD_CATEGORY.CAKE],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 12,
  },
  {
    id: 10,
    name: 'Creamy Chicken Ginger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 48000,
    avg_rating: 4.9,
    category: [E_FOOD_CATEGORY.CHICKEN],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 129,
  },
  {
    id: 11,
    name: 'Yoghurt Fruit Cake',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 21000,
    avg_rating: 4.2,
    category: [E_FOOD_CATEGORY.CAKE],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 99,
  },
  {
    id: 12,
    name: 'Lamb in Yoghurt Marinade',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 41000,
    avg_rating: 4.3,
    category: [E_FOOD_CATEGORY.BEEF],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: false,
    ordered_amount: 99,
  },
  {
    id: 13,
    name: 'Beef Kebab Spicy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 35000,
    avg_rating: 4.5,
    category: [E_FOOD_CATEGORY.BEEF],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 101,
  },
  {
    id: 14,
    name: 'Caffe Latte',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 19000,
    avg_rating: 4.8,
    category: [E_FOOD_CATEGORY.DRINKS],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 332,
  },
  {
    id: 15,
    name: 'Ramyeon Noodlse',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 24000,
    avg_rating: 3.8,
    category: [E_FOOD_CATEGORY.NOODLES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: false,
    ordered_amount: 14,
  },
  {
    id: 16,
    name: 'Onion Ring',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 18400,
    avg_rating: 3.8,
    category: [E_FOOD_CATEGORY.FRIES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 48,
  },
  {
    id: 17,
    name: 'PHO - Beef Noodle Soup',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 68500,
    avg_rating: 5,
    category: [E_FOOD_CATEGORY.SOUP, E_FOOD_CATEGORY.BEEF, E_FOOD_CATEGORY.NOODLES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 48,
  },
  {
    id: 18,
    name: 'Spring Roll',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 15000,
    avg_rating: 4.2,
    category: [E_FOOD_CATEGORY.FRIES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 54,
  },
  {
    id: 19,
    name: 'Tempura Shrimp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 22500,
    avg_rating: 4.4,
    category: [E_FOOD_CATEGORY.FRIES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 92,
  },
  {
    id: 20,
    name: 'Jumbo Dragon Roll',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 95000,
    avg_rating: 4.7,
    category: [E_FOOD_CATEGORY.SUSHI],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 17,
  },
  {
    id: 21,
    name: 'Coconut Water',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 17000,
    avg_rating: 4.7,
    category: [E_FOOD_CATEGORY.DRINKS],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 184,
  },
  {
    id: 22,
    name: 'Sparkling Water',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 10000,
    avg_rating: 4.7,
    category: [E_FOOD_CATEGORY.DRINKS],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 4,
  },
  {
    id: 23,
    name: 'Tiramisu Cake',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 175000,
    avg_rating: 4.9,
    category: [E_FOOD_CATEGORY.CAKE],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 17,
  },
  {
    id: 24,
    name: 'Chicken Cordon Bleu',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 43000,
    avg_rating: 4.2,
    category: [E_FOOD_CATEGORY.CHICKEN],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: false,
    ordered_amount: 74,
  },
  {
    id: 25,
    name: 'Miso Soup',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 13000,
    avg_rating: 4.1,
    category: [E_FOOD_CATEGORY.SOUP],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 153,
  },
  {
    id: 26,
    name: 'Indomie - Fried Noodles with egg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 15000,
    avg_rating: 5,
    category: [E_FOOD_CATEGORY.NOODLES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 738,
  },
  {
    id: 27,
    name: 'Iced Lemon Tea',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 17000,
    avg_rating: 4.1,
    category: [E_FOOD_CATEGORY.DRINKS],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 39,
  },
  {
    id: 27,
    name: 'Eclair',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 27000,
    avg_rating: 4.3,
    category: [E_FOOD_CATEGORY.CAKE],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: false,
    ordered_amount: 9,
  },
  {
    id: 28,
    name: 'Vegetable Tempura',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 31000,
    avg_rating: 4.7,
    category: [E_FOOD_CATEGORY.FRIES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 23,
  },
  {
    id: 29,
    name: 'Beef Katsu Curry Rice',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 53500,
    avg_rating: 4.6,
    category: [E_FOOD_CATEGORY.BEEF, E_FOOD_CATEGORY.FRIES],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 53,
  },
  {
    id: 30,
    name: 'Salmon Mentai Sushi',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 37000,
    avg_rating: 4.6,
    category: [E_FOOD_CATEGORY.SUSHI],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 53,
  },
  {
    id: 31,
    name: 'Apple Berry Tea',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.',
    price: 37000,
    avg_rating: 4.6,
    category: [E_FOOD_CATEGORY.DRINKS],
    imageUrl: 'https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg',
    is_available: true,
    ordered_amount: 53,
  },
];