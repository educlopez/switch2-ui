interface MediaItem {
  type: "image" | "video"
  src: string
  thumbnail?: string
}

interface Game {
  id: string
  slug: string
  title: string
  publisher: string
  price: string
  image: string
  hasInGamePurchases?: boolean
  media?: MediaItem[]
  isWide?: boolean
}

export const games: Game[] = [
  {
    id: "mario-kart",
    slug: "mario-kart",
    title: "Mario Kart World",
    publisher: "Nintendo",
    price: "$59.99",
    image:
      "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/mariokartworld/2x1_NSwitch2_MarioKartWorld_image800w.jpg",
    media: [
      {
        type: "image",
        src: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/mariokartworld/2x1_NSwitch2_MarioKartWorld_image800w.jpg",
      },
    ],
  },
  {
    id: "zelda",
    slug: "zelda-tears-of-the-kingdom",
    title: "The Legend of Zelda™: Tears of the Kingdom",
    publisher: "Nintendo",
    price: "$69.99",
    image:
      "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/thelegendofzeldatearsofthekingdomnintendoswitch2edition/2x1_HP_NSwitch2_TLoZTotKN_image800w.jpg",
    hasInGamePurchases: true,
    media: [
      {
        type: "image",
        src: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/thelegendofzeldatearsofthekingdomnintendoswitch2edition/2x1_HP_NSwitch2_TLoZTotKN_image800w.jpg",
      },
    ],
  },
  {
    id: "mario-party",
    slug: "mario-party-jamboree",
    title: "Super Mario Party + Jamboree TV Nintendo Switch 2 Edition",
    publisher: "Nintendo",
    price: "$49.99",
    image:
      "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/super_mario_party_jamboree_nintendo_switch_2_edition_jamboree_tv/nswitch2_supermariopartyjamboreeplusjamboreetv/2x1_NSwitch2_SMPJamboreeNSW2PlusJTV_image800w.jpg",
    media: [
      {
        type: "image",
        src: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/super_mario_party_jamboree_nintendo_switch_2_edition_jamboree_tv/nswitch2_supermariopartyjamboreeplusjamboreetv/2x1_NSwitch2_SMPJamboreeNSW2PlusJTV_image800w.jpg",
      },
    ],
  },
  {
    id: "metroid",
    slug: "metroid-prime-4",
    title: "Metroid Prime 4",
    publisher: "Nintendo",
    price: "$59.99",
    image:
      "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/metroid_prime_4_nintendo_switch_2_edition/2x1_NSwitch2_MetroidPrime4BeyondNS2Ed_image800w.jpg",
    media: [
      {
        type: "image",
        src: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/metroid_prime_4_nintendo_switch_2_edition/2x1_NSwitch2_MetroidPrime4BeyondNS2Ed_image800w.jpg",
      },
    ],
  },
]

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug)
}
