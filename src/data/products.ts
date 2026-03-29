export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  duration: string
  difficulty: string
  emoji: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'La Chasse aux Œufs',
    image: '/placeholder.png',
    emoji: '🥚',
    description:
      "Partez à la recherche des œufs cachés dans le grand parc ! Les enfants devront explorer chaque recoin, derrière les buissons, sous les bancs et au pied des arbres pour trouver un maximum d'œufs en chocolat. Une activité classique et incontournable pour petits et grands.",
    shortDescription:
      "Trouvez les œufs en chocolat cachés dans le parc. Une aventure pour toute la famille !",
    duration: '45 min',
    difficulty: 'Facile',
  },
  {
    id: 2,
    name: 'L\'Atelier du Lapin',
    image: '/placeholder.png',
    emoji: '🐰',
    description:
      "Installez-vous dans notre atelier créatif et laissez parler votre imagination ! Peinture d'œufs, fabrication de paniers de Pâques, décoration de lapins en carton… Chaque participant repart avec sa création. Matériel fourni, tabliers disponibles sur place.",
    shortDescription:
      "Atelier créatif pour décorer des œufs et fabriquer des paniers de Pâques.",
    duration: '1h',
    difficulty: 'Facile',
  },
  {
    id: 3,
    name: 'Le Parcours Énigme',
    image: '/placeholder.png',
    emoji: '🔍',
    description:
      "Résolvez les énigmes disséminées le long du parcours pour découvrir où se cache le trésor de Pâques ! Chaque étape vous donne un indice. Logique, observation et esprit d'équipe seront vos meilleurs alliés. Idéal pour les enfants de 7 à 12 ans.",
    shortDescription:
      "Un parcours d'énigmes pour trouver le trésor caché de Pâques.",
    duration: '1h30',
    difficulty: 'Moyen',
  },
  {
    id: 4,
    name: 'La Course des Cuillères',
    image: '/placeholder.png',
    emoji: '🏃',
    description:
      "La traditionnelle course de l'œuf à la cuillère ! Tenez votre œuf en équilibre et franchissez la ligne d'arrivée sans le faire tomber. Plusieurs manches et catégories d'âge. Des prix chocolatés pour les gagnants et les participants !",
    shortDescription:
      "Course de l'œuf à la cuillère avec des récompenses chocolatées.",
    duration: '30 min',
    difficulty: 'Facile',
  },
  {
    id: 5,
    name: 'Le Jardin Enchanté',
    image: '/placeholder.png',
    emoji: '🌷',
    description:
      "Promenez-vous dans notre jardin spécialement décoré pour Pâques. Découvrez les installations artistiques, les sculptures florales et les surprises cachées dans la végétation. Un parcours sensoriel et poétique, ponctué de dégustations de chocolat artisanal.",
    shortDescription:
      "Balade féerique dans un jardin décoré avec dégustations de chocolat.",
    duration: '1h',
    difficulty: 'Facile',
  },
  {
    id: 6,
    name: 'Le Grand Quiz de Pâques',
    image: '/placeholder.png',
    emoji: '🧠',
    description:
      "Testez vos connaissances sur les traditions de Pâques à travers le monde ! Quiz interactif en équipes avec des questions pour tous les âges. Apprenez des anecdotes surprenantes tout en vous amusant. Les meilleures équipes repartent avec des paniers gourmands.",
    shortDescription:
      "Quiz en équipes sur les traditions de Pâques du monde entier.",
    duration: '45 min',
    difficulty: 'Moyen',
  },
]

export default products
