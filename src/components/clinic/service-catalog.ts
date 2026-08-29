import type { ServicePriceType } from '@/types'

export type ServiceCatalogCategoryKey =
  | 'consultation-design'
  | 'fine-line-minimal'
  | 'blackwork-linework'
  | 'realism-portrait'
  | 'neo-traditional-color'
  | 'japanese-irezumi'
  | 'cover-ups-reworks'
  | 'flash-walk-in'
  | 'large-scale'
  | 'touch-ups-aftercare'
  | 'piercing'

export type ServiceCatalogTemplate = {
  key: string
  category: ServiceCatalogCategoryKey
  name: string
  description: string
  durationMinutes: number
  priceType: ServicePriceType
  price?: number | null
  priceMin?: number | null
  priceMax?: number | null
}

export const SERVICE_CATALOG_CATEGORIES: Array<{ key: 'all' | ServiceCatalogCategoryKey; label: string }> = [
  { key: 'all', label: 'All Styles' },
  { key: 'consultation-design', label: 'Consultation & Design' },
  { key: 'fine-line-minimal', label: 'Fine Line & Minimalist' },
  { key: 'blackwork-linework', label: 'Blackwork & Linework' },
  { key: 'realism-portrait', label: 'Realism & Portraiture' },
  { key: 'neo-traditional-color', label: 'Neo-Traditional & Color' },
  { key: 'japanese-irezumi', label: 'Japanese / Irezumi' },
  { key: 'cover-ups-reworks', label: 'Cover-Ups & Reworks' },
  { key: 'flash-walk-in', label: 'Flash & Walk-In' },
  { key: 'large-scale', label: 'Sleeves & Large-Scale' },
  { key: 'touch-ups-aftercare', label: 'Touch-Ups & Aftercare' },
  { key: 'piercing', label: 'Piercing' },
]

const CONSULTATION_DESIGN: ServiceCatalogTemplate[] = [
  {
    key: 'design-consultation',
    category: 'consultation-design',
    name: 'Design Consultation',
    description: 'One-on-one sit-down with your artist to discuss placement, scale, references, and a custom concept before any ink touches skin.',
    durationMinutes: 30,
    priceType: 'fixed',
    price: 50,
  },
  {
    key: 'custom-artwork-development',
    category: 'consultation-design',
    name: 'Custom Artwork Development',
    description: 'Your artist hand-draws an original design from your consultation notes, with one round of revisions before the session.',
    durationMinutes: 45,
    priceType: 'starting_at',
    price: 100,
  },
  {
    key: 'placement-sizing-session',
    category: 'consultation-design',
    name: 'Placement & Sizing Session',
    description: 'Stencil fitting and body-flow assessment to confirm scale and placement before committing to a full session.',
    durationMinutes: 20,
    priceType: 'fixed',
    price: 30,
  },
  {
    key: 'virtual-design-review',
    category: 'consultation-design',
    name: 'Virtual Design Review',
    description: 'Remote video consultation for out-of-town clients to lock in concept and references ahead of an in-studio visit.',
    durationMinutes: 20,
    priceType: 'fixed',
    price: 40,
  },
]

const FINE_LINE_MINIMAL: ServiceCatalogTemplate[] = [
  {
    key: 'fine-line-small',
    category: 'fine-line-minimal',
    name: 'Fine Line Small Piece',
    description: 'Delicate single-needle linework, up to palm-sized — script, botanicals, symbols.',
    durationMinutes: 60,
    priceType: 'fixed',
    price: 150,
  },
  {
    key: 'minimalist-medium-piece',
    category: 'fine-line-minimal',
    name: 'Minimalist Medium Piece',
    description: 'Clean single-line or micro-detail work in the 3-5 inch range, forearm or ribs.',
    durationMinutes: 120,
    priceType: 'starting_at',
    price: 280,
  },
  {
    key: 'fine-line-lettering',
    category: 'fine-line-minimal',
    name: 'Fine Line Lettering / Script',
    description: 'Custom calligraphy or typography in delicate single-needle style.',
    durationMinutes: 45,
    priceType: 'starting_at',
    price: 120,
  },
  {
    key: 'micro-tattoo',
    category: 'fine-line-minimal',
    name: 'Micro Tattoo',
    description: 'Coin-sized minimalist symbol or icon — a first tattoo or a discreet add-on.',
    durationMinutes: 30,
    priceType: 'fixed',
    price: 80,
  },
]

const BLACKWORK_LINEWORK: ServiceCatalogTemplate[] = [
  {
    key: 'blackwork-small',
    category: 'blackwork-linework',
    name: 'Blackwork Small Piece',
    description: 'Bold solid-black geometric or ornamental design, palm to hand sized.',
    durationMinutes: 90,
    priceType: 'starting_at',
    price: 220,
  },
  {
    key: 'geometric-pattern-work',
    category: 'blackwork-linework',
    name: 'Geometric Pattern Work',
    description: 'Precision dotwork or linework mandalas, sacred geometry, and structured patterning.',
    durationMinutes: 150,
    priceType: 'starting_at',
    priceMin: 350,
    priceMax: 900,
  },
  {
    key: 'blackout-shading-session',
    category: 'blackwork-linework',
    name: 'Blackout / Heavy Shading Session',
    description: 'Dense solid-black coverage session, priced per hour due to variable scale.',
    durationMinutes: 180,
    priceType: 'starting_at',
    price: 180,
  },
  {
    key: 'tribal-ornamental',
    category: 'blackwork-linework',
    name: 'Tribal & Ornamental',
    description: 'Bold flowing blackwork inspired by tribal and ornamental traditions, tailored to body flow.',
    durationMinutes: 120,
    priceType: 'starting_at',
    price: 260,
  },
]

const REALISM_PORTRAIT: ServiceCatalogTemplate[] = [
  {
    key: 'realism-portrait-session',
    category: 'realism-portrait',
    name: 'Realism Portrait Session',
    description: 'Photorealistic black & grey portrait work — people, pets, or fine-detail objects. Multi-session for larger scale.',
    durationMinutes: 240,
    priceType: 'starting_at',
    price: 180,
  },
  {
    key: 'black-grey-realism-piece',
    category: 'realism-portrait',
    name: 'Black & Grey Realism Piece',
    description: 'Photorealistic shading and depth work for nature, animals, or symbolic imagery.',
    durationMinutes: 180,
    priceType: 'starting_at',
    price: 180,
  },
  {
    key: 'color-realism-piece',
    category: 'realism-portrait',
    name: 'Color Realism Piece',
    description: 'Full-color hyperrealistic rendering — highest technical tier, priced per session.',
    durationMinutes: 240,
    priceType: 'starting_at',
    price: 220,
  },
]

const NEO_TRADITIONAL_COLOR: ServiceCatalogTemplate[] = [
  {
    key: 'neo-traditional-small',
    category: 'neo-traditional-color',
    name: 'Neo-Traditional Small Piece',
    description: 'Bold outlined color work with illustrative shading — flash-inspired, custom-sized.',
    durationMinutes: 120,
    priceType: 'starting_at',
    price: 250,
  },
  {
    key: 'color-piece-large',
    category: 'neo-traditional-color',
    name: 'Large Color Piece',
    description: 'Full-color illustrative work spanning a full sleeve section or back panel — multi-session.',
    durationMinutes: 240,
    priceType: 'starting_at',
    price: 200,
  },
  {
    key: 'watercolor-style-piece',
    category: 'neo-traditional-color',
    name: 'Watercolor-Style Piece',
    description: 'Soft color-blend technique layered over fine linework for a painterly finish.',
    durationMinutes: 150,
    priceType: 'starting_at',
    price: 300,
  },
]

const JAPANESE_IREZUMI: ServiceCatalogTemplate[] = [
  {
    key: 'irezumi-consultation-session',
    category: 'japanese-irezumi',
    name: 'Irezumi Panel Session',
    description: 'Traditional Japanese large-scale panel work (dragons, koi, waves, florals) — booked as an ongoing multi-session project.',
    durationMinutes: 240,
    priceType: 'starting_at',
    price: 200,
  },
  {
    key: 'japanese-motif-piece',
    category: 'japanese-irezumi',
    name: 'Japanese Motif Piece',
    description: 'Single traditional motif — koi, hannya, sakura, wave — sized to fit arm, calf, or chest.',
    durationMinutes: 180,
    priceType: 'starting_at',
    price: 220,
  },
]

const COVER_UPS_REWORKS: ServiceCatalogTemplate[] = [
  {
    key: 'cover-up-consultation',
    category: 'cover-ups-reworks',
    name: 'Cover-Up Consultation',
    description: 'In-depth assessment of an existing tattoo to design a concept that fully conceals it.',
    durationMinutes: 30,
    priceType: 'fixed',
    price: 60,
  },
  {
    key: 'small-cover-up',
    category: 'cover-ups-reworks',
    name: 'Small Cover-Up Session',
    description: 'Full redesign and coverage of an existing small tattoo.',
    durationMinutes: 120,
    priceType: 'starting_at',
    price: 280,
  },
  {
    key: 'large-cover-up-rework',
    category: 'cover-ups-reworks',
    name: 'Large Cover-Up / Rework',
    description: 'Multi-session concealment or blending rework for larger or older pieces.',
    durationMinutes: 240,
    priceType: 'starting_at',
    price: 200,
  },
]

const FLASH_WALK_IN: ServiceCatalogTemplate[] = [
  {
    key: 'flash-tattoo-small',
    category: 'flash-walk-in',
    name: 'Flash Tattoo — Small',
    description: 'Ready-to-ink design from the studio\'s flash wall, no design fee — walk-ins welcome, subject to artist availability.',
    durationMinutes: 45,
    priceType: 'fixed',
    price: 100,
  },
  {
    key: 'flash-tattoo-medium',
    category: 'flash-walk-in',
    name: 'Flash Tattoo — Medium',
    description: 'Mid-sized flash design, single session, minimal customization.',
    durationMinutes: 90,
    priceType: 'starting_at',
    price: 180,
  },
  {
    key: 'guest-artist-flash-day',
    category: 'flash-walk-in',
    name: 'Guest Artist Flash Day',
    description: 'Limited-availability flash slots during a visiting guest artist\'s residency — booked in advance.',
    durationMinutes: 60,
    priceType: 'starting_at',
    price: 150,
  },
]

const LARGE_SCALE: ServiceCatalogTemplate[] = [
  {
    key: 'half-sleeve-project',
    category: 'large-scale',
    name: 'Half Sleeve Project',
    description: 'Multi-session custom sleeve project, quoted after design consultation and booked as a recurring session block.',
    durationMinutes: 240,
    priceType: 'starting_at',
    price: 200,
  },
  {
    key: 'full-sleeve-project',
    category: 'large-scale',
    name: 'Full Sleeve Project',
    description: 'Full-arm custom project spanning several multi-hour sessions, tracked as one client project.',
    durationMinutes: 300,
    priceType: 'starting_at',
    price: 200,
  },
  {
    key: 'back-piece-project',
    category: 'large-scale',
    name: 'Back Piece Project',
    description: 'Large-format back or chest panel, custom-designed and booked across multiple long sessions.',
    durationMinutes: 300,
    priceType: 'starting_at',
    price: 220,
  },
]

const TOUCH_UPS_AFTERCARE: ServiceCatalogTemplate[] = [
  {
    key: 'free-touch-up',
    category: 'touch-ups-aftercare',
    name: 'Complimentary Touch-Up',
    description: 'Free minor touch-up within 60 days of the original session, subject to aftercare compliance.',
    durationMinutes: 30,
    priceType: 'fixed',
    price: 0,
  },
  {
    key: 'paid-touch-up',
    category: 'touch-ups-aftercare',
    name: 'Touch-Up Session',
    description: 'Color or line refresh for older tattoos outside the complimentary touch-up window.',
    durationMinutes: 45,
    priceType: 'starting_at',
    price: 80,
  },
  {
    key: 'healing-check-in',
    category: 'touch-ups-aftercare',
    name: 'Healing Check-In',
    description: 'Quick in-person review of how a tattoo is healing, with aftercare product recommendations.',
    durationMinutes: 15,
    priceType: 'fixed',
    price: 0,
  },
]

const PIERCING: ServiceCatalogTemplate[] = [
  {
    key: 'ear-piercing',
    category: 'piercing',
    name: 'Ear Piercing',
    description: 'Lobe or cartilage piercing with implant-grade jewelry, includes aftercare kit.',
    durationMinutes: 20,
    priceType: 'starting_at',
    priceMin: 35,
    priceMax: 80,
  },
  {
    key: 'facial-piercing',
    category: 'piercing',
    name: 'Facial Piercing',
    description: 'Nose, septum, eyebrow, or lip piercing with implant-grade jewelry.',
    durationMinutes: 20,
    priceType: 'starting_at',
    priceMin: 40,
    priceMax: 90,
  },
  {
    key: 'jewelry-change',
    category: 'piercing',
    name: 'Jewelry Change',
    description: 'Swap or upgrade existing piercing jewelry, hygienically fitted by a studio piercer.',
    durationMinutes: 15,
    priceType: 'fixed',
    price: 20,
  },
]

export const SERVICE_CATALOG_TEMPLATES: ServiceCatalogTemplate[] = [
  ...CONSULTATION_DESIGN,
  ...FINE_LINE_MINIMAL,
  ...BLACKWORK_LINEWORK,
  ...REALISM_PORTRAIT,
  ...NEO_TRADITIONAL_COLOR,
  ...JAPANESE_IREZUMI,
  ...COVER_UPS_REWORKS,
  ...FLASH_WALK_IN,
  ...LARGE_SCALE,
  ...TOUCH_UPS_AFTERCARE,
  ...PIERCING,
]
