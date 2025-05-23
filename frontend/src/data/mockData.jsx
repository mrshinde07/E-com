// Mock data for the e-commerce store

export const categories = [
  {
    id: 1,
    name: "Marvel Universe",
    slug: "marvel",
    count: 24,
    image: "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266705/meysam-jarahkar-NMYG69BG_Jg-unsplash_myjlxl.jpg",
  },
  {
    id: 2,
    name: "DC Comics",
    slug: "dc",
    count: 18,
    image: "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266704/mediamodifier-ogmenj2NGho-unsplash_pgyipp.jpg",
  },
  {
    id: 3,
    name: "Anime Superheroes",
    slug: "anime",
    count: 15,
    image: "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266703/rock-staar-2XcbGfYShfk-unsplash_suq1xn.jpg",
  },
  {
    id: 4,
    name: "Classic Comics",
    slug: "classic",
    count: 12,
    image: "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266701/ryan-hoffman-6Nub980bI3I-unsplash_luaog2.jpg",
  },
  {
    id: 5,
    name: "Sci-Fi & Fantasy",
    slug: "scifi",
    count: 10,
    image: "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266700/alex-haigh-fEt6Wd4t4j0-unsplash_gf0x14.jpg",
  },
  {
    id: 6,
    name: "Video Game Heroes",
    slug: "games",
    count: 8,
    image: "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266701/matas-katinas-7ITfJfAxxY4-unsplash_ehjqqm.jpg",
  },
  {
    id: 7,
    name: "Custom Fan Art",
    slug: "fanart",
    count: 14,
    image: "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266700/haryo-setyadi-acn5ERAeSb4-unsplash_azb7q3.jpg",
  },
]

export const products = [
  {
    id: 1,
    name: "Cosmic Spider-Man T-Shirt",
    description:
      "Swing through the stars with this cosmic-themed Spider-Man t-shirt. The vibrant design features Spider-Man against a starry night background inspired by Van Gogh's masterpiece.",
    price: 29.99,
    discount: 0,
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266705/meysam-jarahkar-NMYG69BG_Jg-unsplash_myjlxl.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266705/marlon-alves-A0mSSCEVh9A-unsplash_ce7ncn.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266705/christian-bolt-VW5VjskNXZ8-unsplash_r9msbc.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266704/ian-dooley-FoF0w-d6Z74-unsplash_rcq9s0.jpg",
    ],
    category: "marvel",
    universe: "Marvel",
    type: "Graphic Printed",
    isNew: true,
    createdAt: "2023-05-15T10:00:00Z",
  },
  {
    id: 2,
    name: "Starry Night Batman Tee",
    description:
      "The Dark Knight rises against a swirling starry night sky in this artistic t-shirt that blends the iconic Batman silhouette with Van Gogh's painting style.",
    price: 34.99,
    discount: 15,
    rating: 4.7,
    reviewCount: 98,
    images: [
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266704/mediamodifier-ogmenj2NGho-unsplash_pgyipp.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266703/bao-bao-TysFvOl78u0-unsplash_kpzvq4.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266703/sven-ciupka-x8Vg7Up6TUc-unsplash_vbqzji.jpg",
    ],
    category: "dc",
    universe: "DC Comics",
    type: "Oversized",
    isNew: false,
    createdAt: "2023-04-20T10:00:00Z",
  },
  {
    id: 3,
    name: "Cosmic Captain America Shield",
    description:
      "Show your patriotic spirit with this artistic Captain America shield design set against a cosmic starry background.",
    price: 27.99,
    discount: 0,
    rating: 4.5,
    reviewCount: 76,
    images: [
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266703/rock-staar-2XcbGfYShfk-unsplash_suq1xn.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266703/eye-speak-Ba8JB_A7www-unsplash_vhwsvw.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266701/faith-yarn-Wr0TpKqf26s-unsplash_rggdkk.jpg",
    ],
    category: "marvel",
    universe: "Marvel",
    type: "Sleeveless",
    isNew: false,
    createdAt: "2023-03-10T10:00:00Z",
  },
  {
    id: 4,
    name: "Starry Wonder Woman Tee",
    description:
      "Embrace your inner Amazon with this Wonder Woman t-shirt featuring a powerful silhouette against a swirling starry night background.",
    price: 32.99,
    discount: 10,
    rating: 4.9,
    reviewCount: 112,
    images: [
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266701/ryan-hoffman-6Nub980bI3I-unsplash_luaog2.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266701/matas-katinas-7ITfJfAxxY4-unsplash_ehjqqm.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266701/mediamodifier-7cERndkOyDw-unsplash_o1cuxp.jpg",
    ],
    category: "dc",
    universe: "DC Comics",
    type: "Crop Top",
    isNew: true,
    createdAt: "2023-05-25T10:00:00Z",
  },
  {
    id: 5,
    name: "One Punch Man Cosmic Tee",
    description: "A minimalist design featuring Saitama's iconic silhouette against a cosmic starry background.",
    price: 26.99,
    discount: 0,
    rating: 4.6,
    reviewCount: 87,
    images: [
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266700/alex-haigh-fEt6Wd4t4j0-unsplash_gf0x14.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266700/haryo-setyadi-acn5ERAeSb4-unsplash_azb7q3.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266700/faith-yarn-Wr0TpKqf26s-unsplash_1_ibuajw.jpg",
    ],
    category: "anime",
    universe: "Anime",
    type: "Graphic Printed",
    isNew: false,
    createdAt: "2023-02-15T10:00:00Z",
  },
  {
    id: 6,
    name: "Starry Iron Man Reactor",
    description:
      "The power of Tony Stark's arc reactor glows against a swirling cosmic background in this artistic t-shirt design.",
    price: 29.99,
    discount: 0,
    rating: 4.7,
    reviewCount: 94,
    images: [
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266705/meysam-jarahkar-NMYG69BG_Jg-unsplash_myjlxl.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266703/bao-bao-TysFvOl78u0-unsplash_kpzvq4.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266701/ryan-hoffman-6Nub980bI3I-unsplash_luaog2.jpg",
    ],
    category: "marvel",
    universe: "Marvel",
    type: "Long Sleeve",
    isNew: false,
    createdAt: "2023-01-20T10:00:00Z",
  },
  {
    id: 7,
    name: "Cosmic Superman Logo Tee",
    description:
      'The iconic Superman "S" symbol stands out against a swirling cosmic night sky in this artistic t-shirt.',
    price: 31.99,
    discount: 20,
    rating: 4.8,
    reviewCount: 105,
    images: [
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266704/mediamodifier-ogmenj2NGho-unsplash_pgyipp.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266705/christian-bolt-VW5VjskNXZ8-unsplash_r9msbc.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266703/sven-ciupka-x8Vg7Up6TUc-unsplash_vbqzji.jpg",
    ],
    category: "dc",
    universe: "DC Comics",
    type: "Oversized",
    isNew: false,
    createdAt: "2022-12-10T10:00:00Z",
  },
  {
    id: 8,
    name: "My Hero Academia Stars",
    description:
      "Go beyond with this Plus Ultra t-shirt featuring Deku's silhouette leaping through a starry night sky.",
    price: 28.99,
    discount: 0,
    rating: 4.6,
    reviewCount: 78,
    images: [
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266703/rock-staar-2XcbGfYShfk-unsplash_suq1xn.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266700/haryo-setyadi-acn5ERAeSb4-unsplash_azb7q3.jpg",
      "https://res.cloudinary.com/dkmakj50l/image/upload/v1744266705/marlon-alves-A0mSSCEVh9A-unsplash_ce7ncn.jpg",
    ],
    category: "anime",
    universe: "Anime",
    type: "Graphic Printed",
    isNew: true,
    createdAt: "2023-05-05T10:00:00Z",
  },
]

export const featuredProducts = products.filter((product) => [1, 4, 6, 8].includes(product.id))
