import { IMAGES } from './images'

export const PACKAGES = [
  {
    slug: 'hampta-pass',
    name: 'Hampta Pass Crossing',
    tagline: 'Green Kullu to barren Lahaul in five days',
    duration: '5 days, 4 nights',
    altitude: '4,270 m',
    grade: 'Moderate',
    price: 11500,
    season: 'June to October',
    image: IMAGES.hamptaPass,
    span: 'md:col-span-4 md:row-span-2',
  },
  {
    slug: 'chandratal',
    name: 'Chandratal Lake Camp',
    tagline: 'Moon lake, night sky, zero light pollution',
    duration: '3 days, 2 nights',
    altitude: '4,300 m',
    grade: 'Easy drive-in',
    price: 8900,
    season: 'July to September',
    image: IMAGES.chandratalLake,
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    slug: 'bhrigu-lake',
    name: 'Bhrigu Lake Trek',
    tagline: 'Alpine meadows above Gulaba',
    duration: '4 days, 3 nights',
    altitude: '4,250 m',
    grade: 'Easy to moderate',
    price: 8200,
    season: 'May to October',
    image: IMAGES.bhrigu,
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    slug: 'kheerganga',
    name: 'Kheerganga Hot Springs',
    tagline: 'Parvati valley classic',
    duration: '2 days, 1 night',
    altitude: '2,950 m',
    grade: 'Easy',
    price: 3400,
    season: 'All year except deep winter',
    image: IMAGES.kheerganga,
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    slug: 'sar-pass',
    name: 'Sar Pass Traverse',
    tagline: 'Snow slides from Kasol',
    duration: '5 days, 4 nights',
    altitude: '4,220 m',
    grade: 'Moderate',
    price: 10900,
    season: 'April to June',
    image: IMAGES.sarPass,
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    slug: 'tirthan',
    name: 'Tirthan Riverside Camp',
    tagline: 'Trout river, forest walks and the Great Himalayan National Park gate',
    duration: '2 days, 1 night',
    altitude: '1,600 m',
    grade: 'Family friendly',
    price: 3900,
    season: 'All year',
    image: IMAGES.tirthan,
    span: 'md:col-span-2 md:row-span-1',
  },
]

export const HAMPTA_ITINERARY = [
  {
    day: 'Day one',
    place: 'Manali to Jobra to Chika',
    altitude: '3,100 m',
    text: 'A short drive up the Prini hairpins, then an easy three kilometre walk through maple and pine to the Chika meadow. Horses graze by the Rani nala. First camp, first stars.',
    image: IMAGES.chika,
  },
  {
    day: 'Day two',
    place: 'Chika to Balu ka Ghera',
    altitude: '3,600 m',
    text: 'The valley narrows and the trail crosses the river on boulders. Balu ka Ghera is a flat bed of sand and glacial silt, ringed by walls of scree. Acclimatise, hydrate, sleep early.',
    image: IMAGES.hamptaRays,
  },
  {
    day: 'Day three',
    place: 'Balu ka Ghera to Hampta Pass to Shea Goru',
    altitude: '4,270 m',
    text: 'The long day. Two steep pulls take you to the pass by late morning. Behind you, green Kullu. Ahead, the brown bones of Lahaul. A sharp descent lands at Shea Goru beside the river.',
    image: IMAGES.hamptaPass,
  },
  {
    day: 'Day four',
    place: 'Shea Goru to Chhatru, drive to Chandratal',
    altitude: '4,300 m',
    text: 'Gentle walking along the Chandra river to the Chhatru road head. Jeeps take you to Chandratal for a night by the crescent lake if the road is open.',
    image: IMAGES.chandratalCamp,
  },
  {
    day: 'Day five',
    place: 'Chhatru to Manali via the Atal tunnel',
    altitude: '2,050 m',
    text: 'Breakfast by the river, a last look at the Chandra, then the drive home through the tunnel to Manali by afternoon. Trek certificate and hot food on arrival.',
    image: IMAGES.hamptaCamp,
  },
]

export const VALLEYS = [
  {
    name: 'Parvati',
    text: 'Kasol, Tosh, Kheerganga. Hot springs, cedar forest and a river that never stops talking.',
    image: IMAGES.parvati,
  },
  {
    name: 'Tirthan',
    text: 'Quiet trout water, wooden homestays and the front door of the Great Himalayan National Park.',
    image: IMAGES.tirthan,
  },
  {
    name: 'Solang',
    text: 'Paragliding meadows, winter snow, the road to Rohtang and Atal tunnel.',
    image: IMAGES.solang,
  },
  {
    name: 'Upper Beas',
    text: 'Apple orchards at Palchan, snow peaks above Manali and the Bhrigu meadows.',
    image: IMAGES.beasValley,
  },
  {
    name: 'Spiti edge',
    text: 'Chandratal and the Chandra river. Barren, high, silent, closest thing to the moon.',
    image: IMAGES.chandratalLake,
  },
]

export const TESTIMONIALS = [
  {
    quote: 'We were four first-timers. The guides read the weather better than any app and moved camp a day early before the storm. We crossed Hampta in sunshine.',
    name: 'Ritika Sharma',
    from: 'Chandigarh',
    trip: 'Hampta Pass, September',
    seed: 'ritika',
  },
  {
    quote: 'The Tirthan camp was the calmest weekend we have had in years. Kids fished, we walked to the park gate, dinner was cooked over wood.',
    name: 'Devendra and Mira Joshi',
    from: 'Delhi',
    trip: 'Tirthan Riverside, April',
    seed: 'joshi',
  },
  {
    quote: 'Chandratal at night is unreal. They brought a small telescope and hot soup at midnight. Every tent had a proper sleeping bag rated for the cold.',
    name: 'Aarav Mehta',
    from: 'Mumbai',
    trip: 'Chandratal Camp, August',
    seed: 'aarav',
  },
  {
    quote: 'Small group, honest pricing, no hidden charges at the trailhead. The porter and cook were locals from Sethan and knew every shortcut.',
    name: 'Lena Fischer',
    from: 'Berlin',
    trip: 'Bhrigu Lake, June',
    seed: 'lena',
  },
]

export const FAQS = [
  {
    q: 'What is included in a package price?',
    a: 'Transport from Manali or Kasol to the trailhead and back, all meals from the first lunch to the last breakfast, tents, sleeping bags, mattresses, a certified trek leader, local guide, cook and support staff, forest permits and a first-aid kit with oxygen on high passes.',
  },
  {
    q: 'How fit do I need to be for Hampta or Sar Pass?',
    a: 'You should be able to walk five kilometres in under an hour on flat ground and climb ten floors of stairs without stopping. Start brisk walking or jogging four weeks before the trek. We run an acclimatisation walk in Manali before every high-pass departure.',
  },
  {
    q: 'What is the group size?',
    a: 'We cap treks at twelve trekkers with two guides. Camps run at a maximum of twenty guests. Private departures are available for groups of six or more.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Full refund minus payment charges up to 21 days before departure, fifty percent up to 7 days before, and a free date change after that. Weather cancellations by us are refunded in full.',
  },
]
