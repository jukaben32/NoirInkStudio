export type KnowledgeTemplateCategoryKey =
  | 'appointments'
  | 'deposits-pricing'
  | 'hours-location'
  | 'new-clients'
  | 'age-consent'
  | 'aftercare'
  | 'cover-ups-reworks'
  | 'piercing'
  | 'hygiene-safety'
  | 'guest-artists'
  | 'cancellations'
  | 'privacy-policy'

export type KnowledgeTemplateTone = 'teal' | 'emerald' | 'blue' | 'amber' | 'rose' | 'slate'

export type KnowledgeTemplateCategory = {
  key: 'all' | KnowledgeTemplateCategoryKey
  label: string
  tone: KnowledgeTemplateTone
}

export type KnowledgeTemplate = {
  key: string
  category: KnowledgeTemplateCategoryKey
  question: string
  answer: string
}

export const KNOWLEDGE_TEMPLATE_CATEGORIES: KnowledgeTemplateCategory[] = [
  { key: 'all', label: 'All Topics', tone: 'slate' },
  { key: 'appointments', label: 'Appointments', tone: 'teal' },
  { key: 'deposits-pricing', label: 'Deposits & Pricing', tone: 'blue' },
  { key: 'hours-location', label: 'Hours & Location', tone: 'emerald' },
  { key: 'new-clients', label: 'New Clients', tone: 'amber' },
  { key: 'age-consent', label: 'Age & Consent', tone: 'rose' },
  { key: 'aftercare', label: 'Aftercare & Healing', tone: 'blue' },
  { key: 'cover-ups-reworks', label: 'Cover-Ups & Reworks', tone: 'teal' },
  { key: 'piercing', label: 'Piercing', tone: 'emerald' },
  { key: 'hygiene-safety', label: 'Hygiene & Safety', tone: 'amber' },
  { key: 'guest-artists', label: 'Guest Artists', tone: 'rose' },
  { key: 'cancellations', label: 'Cancellations', tone: 'amber' },
  { key: 'privacy-policy', label: 'Privacy & Photo Policy', tone: 'slate' },
]

type TemplateSeed = {
  question: string
  answer: string
}

const TEMPLATE_SEEDS: Record<KnowledgeTemplateCategoryKey, TemplateSeed[]> = {
  appointments: [
    {
      question: 'How do I book a session?',
      answer: 'You can book by phone, through the client portal, or with the website widget. We will confirm your artist, style, and time.',
    },
    {
      question: 'Can I book online?',
      answer: 'Yes. Use the portal or website widget to request a design consultation or session and we will follow up with a confirmation.',
    },
    {
      question: 'How early should I arrive?',
      answer: 'Please arrive 10 to 15 minutes early so we can prep your stencil, review placement, and complete any required forms.',
    },
    {
      question: 'Can I reschedule my session?',
      answer: 'Yes, with at least 48 hours notice. Contact the studio as early as possible and we will move you to the next available slot without losing your deposit.',
    },
    {
      question: 'Do you take walk-ins?',
      answer: 'Walk-ins are welcome for flash pieces when an artist has an open slot. Custom and large-scale work is by appointment only.',
    },
    {
      question: 'How long will my session take?',
      answer: 'Small pieces usually take under 2 hours. Larger custom work is booked in multi-hour session blocks — your artist will give you a time estimate at the consultation.',
    },
    {
      question: 'How do I check my appointment time?',
      answer: 'You can see your scheduled time in the client portal and in the confirmation message we send after booking.',
    },
  ],
  'deposits-pricing': [
    {
      question: 'Do you require a deposit?',
      answer: 'Yes. A non-refundable deposit holds your slot and is applied toward the final price of your tattoo.',
    },
    {
      question: 'How much does a tattoo cost?',
      answer: 'Pricing depends on size, detail, and placement. Flash pieces are fixed-price; custom and large-scale work is quoted after your design consultation.',
    },
    {
      question: 'Do you have a shop minimum?',
      answer: 'Yes, most studios apply a minimum charge per session regardless of size — ask your artist for the current rate.',
    },
    {
      question: 'Can I pay online?',
      answer: 'Yes. You can pay your deposit and settle the balance securely through the portal, or pay in-studio.',
    },
    {
      question: 'Do you accept card payments in-studio?',
      answer: 'Yes, most studios accept cards in addition to cash — check with the front desk for the exact options available.',
    },
    {
      question: 'What happens to my deposit if I no-show?',
      answer: 'No-show deposits are forfeited. Rescheduling with proper notice keeps your deposit applied to the new date.',
    },
  ],
  'hours-location': [
    {
      question: 'What are your studio hours?',
      answer: 'Hours vary by studio, but the current schedule is listed in the portal and on the website.',
    },
    {
      question: 'Where are you located?',
      answer: 'You can find our address, directions, and a maps link in the studio profile and footer contact section.',
    },
    {
      question: 'Is parking available?',
      answer: 'Most studios offer nearby street or lot parking. We can share the exact details when you book.',
    },
    {
      question: 'Are you open on weekends?',
      answer: 'Weekend availability depends on the studio schedule — check the posted hours or ask the front desk team.',
    },
  ],
  'new-clients': [
    {
      question: 'Is this my first tattoo — what should I know?',
      answer: 'We are happy to walk first-timers through everything: placement, pain expectations, session length, and aftercare, at your design consultation.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring a valid photo ID, any reference images for your design, and a full stomach — eat before your session.',
    },
    {
      question: 'How do I complete my client intake forms?',
      answer: 'You can complete consent and health-history forms in the portal before your appointment, or fill them out on arrival.',
    },
    {
      question: 'How long is a design consultation?',
      answer: 'Consultations usually run 20 to 30 minutes so we can review placement, sizing, and your reference images in detail.',
    },
    {
      question: 'What should I avoid before my session?',
      answer: 'Avoid alcohol for 24 hours and blood thinners (including aspirin) if possible — both increase bleeding and affect how the ink sets.',
    },
  ],
  'age-consent': [
    {
      question: 'What is your minimum age for tattoos?',
      answer: 'Clients must be 18 or older with valid photo ID. We do not tattoo minors, even with parental consent, unless local law and studio policy explicitly allow it.',
    },
    {
      question: 'Can minors get pierced with a parent present?',
      answer: 'Some piercings are available for minors with a parent or legal guardian present and signing consent in person — this varies by piercing type and local law.',
    },
    {
      question: 'What ID do you accept?',
      answer: 'A valid government-issued photo ID (driver\'s license, passport, or state ID) is required at every first session.',
    },
    {
      question: 'Do you tattoo visible areas like hands, neck, or face?',
      answer: 'Some artists take hand, neck, or face work case by case, often after the client already has other tattoos — this is discussed and approved at consultation.',
    },
  ],
  aftercare: [
    {
      question: 'How do I care for a new tattoo?',
      answer: 'Keep the bandage on as instructed, wash gently with fragrance-free soap, pat dry, and apply a thin layer of aftercare ointment 2-3 times a day.',
    },
    {
      question: 'How long does a tattoo take to heal?',
      answer: 'Surface healing typically takes 2-3 weeks; full healing beneath the skin can take up to 4-6 weeks. Avoid picking or scratching throughout.',
    },
    {
      question: 'Can I go swimming or use a sauna while healing?',
      answer: 'No — avoid pools, saunas, and soaking baths until the tattoo is fully healed, since prolonged water exposure can pull out ink and invite infection.',
    },
    {
      question: 'Is peeling and itching normal?',
      answer: 'Yes, mild peeling and itching are a normal part of healing. Avoid scratching — pat or gently moisturize instead.',
    },
    {
      question: 'What aftercare products do you recommend?',
      answer: 'Your artist will recommend a specific fragrance-free healing ointment and lotion at the end of your session — we also stock studio-approved aftercare kits.',
    },
    {
      question: 'When should I get a touch-up?',
      answer: 'Book a touch-up once fully healed, typically 4-6 weeks out, if you notice patchy color or faded lines.',
    },
  ],
  'cover-ups-reworks': [
    {
      question: 'Can any tattoo be covered up?',
      answer: 'Most can, though very dark or large existing tattoos may limit design options. Bring a photo to your consultation so your artist can assess it honestly.',
    },
    {
      question: 'Will a cover-up hurt more than a new tattoo?',
      answer: 'Cover-ups can feel similar to tattooing over already-tattooed skin, which some clients find slightly more sensitive, but it is manageable for most people.',
    },
    {
      question: 'Do you offer laser removal or fading before a cover-up?',
      answer: 'We can refer you to a trusted laser removal partner for partial fading if your existing tattoo is too dark or detailed to cover directly.',
    },
    {
      question: 'How much bigger will the cover-up need to be?',
      answer: 'Cover-ups are almost always larger than the original tattoo to fully conceal it — your artist will show you the minimum size needed at consultation.',
    },
  ],
  piercing: [
    {
      question: 'Do you pierce with a needle or a gun?',
      answer: 'Needle only. We use single-use, sterile needles for all piercings — piercing guns are not hygienic for cartilage or facial piercings.',
    },
    {
      question: 'What jewelry do you use?',
      answer: 'Implant-grade titanium or surgical steel, included in the piercing price. Upgrades to gold or specialty jewelry are available.',
    },
    {
      question: 'How long until I can change my piercing jewelry?',
      answer: 'Healing times vary by placement — lobes heal in about 6-8 weeks, cartilage and other piercings can take 3-12 months. Your piercer will give you a specific timeline.',
    },
    {
      question: 'Can I get pierced and tattooed the same day?',
      answer: 'Generally yes, as long as they are not in the same immediate area — ask the front desk when booking.',
    },
  ],
  'hygiene-safety': [
    {
      question: 'What hygiene standards do you follow?',
      answer: 'All needles are single-use and disposed of after every client, all equipment is sterilized in an autoclave, and every artist wears fresh gloves per session.',
    },
    {
      question: 'Are your artists licensed?',
      answer: 'Yes. All artists and piercers hold current local licensing and bloodborne pathogen certification.',
    },
    {
      question: 'Can I see the studio\'s sterilization process?',
      answer: 'Absolutely — ask your artist for a walkthrough before your session. Transparency about hygiene is standard practice here.',
    },
    {
      question: 'What if I have a skin condition or allergy?',
      answer: 'Let us know at booking or consultation — certain skin conditions, allergies (including to specific pigments), or medications may require a doctor\'s clearance first.',
    },
  ],
  'guest-artists': [
    {
      question: 'Do you host guest artists?',
      answer: 'Yes, periodically. Guest artist residencies and flash days are announced in advance with limited slots — book early as these fill fast.',
    },
    {
      question: 'How do I book with a guest artist?',
      answer: 'Guest slots open through the portal or by phone once a residency is announced, and typically require a deposit at booking.',
    },
    {
      question: 'Can guest artists do custom work?',
      answer: 'Some guest residencies are flash-only, others take limited custom bookings — check the specific announcement for that artist\'s residency.',
    },
  ],
  cancellations: [
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations with less than 48 hours notice forfeit the deposit. We understand emergencies happen — contact us as soon as you can.',
    },
    {
      question: 'Can I cancel through the portal?',
      answer: 'Yes, you can cancel or request a reschedule through the portal, or call the studio directly.',
    },
    {
      question: 'What if my artist has to reschedule me?',
      answer: 'If the studio needs to reschedule your session, your deposit carries over in full to the new date — no penalty on your side.',
    },
  ],
  'privacy-policy': [
    {
      question: 'Is my information protected?',
      answer: 'Yes. We protect client data — contact details, health forms, and payment information — using industry-standard security controls.',
    },
    {
      question: 'Will you post photos of my tattoo on social media?',
      answer: 'Only with your explicit consent, asked at the end of your session. You can decline and we will not post any photos of your piece.',
    },
    {
      question: 'How do I request my records or forms?',
      answer: 'You can request a copy of your consent forms or booking history through the client portal or by contacting the studio directly.',
    },
  ],
}

export const KNOWLEDGE_TEMPLATE_BANK: KnowledgeTemplate[] = (Object.entries(TEMPLATE_SEEDS) as Array<
  [KnowledgeTemplateCategoryKey, TemplateSeed[]]
>).flatMap(([category, items]) =>
  items.map((item, index) => ({
    key: `${category}-${index + 1}`,
    category,
    question: item.question,
    answer: item.answer,
  })),
)

export function getKnowledgeTemplateCategoryLabel(categoryKey: KnowledgeTemplateCategoryKey | 'all') {
  return KNOWLEDGE_TEMPLATE_CATEGORIES.find((category) => category.key === categoryKey)?.label ?? 'All Topics'
}

export function getKnowledgeTemplateCategoryTone(categoryKey: KnowledgeTemplateCategoryKey | 'all'): KnowledgeTemplateTone {
  return KNOWLEDGE_TEMPLATE_CATEGORIES.find((category) => category.key === categoryKey)?.tone ?? 'slate'
}
