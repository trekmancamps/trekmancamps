// Every photo is an open-licence image from Wikimedia Commons (CC0, CC BY or CC BY-SA).
// Attribution for each file is listed in the footer and in CREDITS.md.

const commons = (file, width = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`

export const IMAGES = {
  hero: {
    src: commons('Chandra River from Rohtang Himachal Jul19.jpg', 2000),
    alt: 'Chandra river valley seen from the Rohtang side, snow ridges under cloud',
    credit: 'Tagooty, CC BY-SA 4.0',
  },
  hamptaPass: {
    src: commons('Hampta Pass Himachal Pradesh India.jpg'),
    alt: 'Boulder field below Hampta Pass with snow peaks',
    credit: 'CC BY 2.0',
  },
  hamptaRays: {
    src: commons('Mesmerising beauty of Hampta pass on Chandrataal Trek Himachal India.jpg'),
    alt: 'Sun rays over the Hampta valley in winter',
    credit: 'CC0',
  },
  hamptaCamp: {
    src: commons('Himalayas in hampta pass.jpg'),
    alt: 'Tents pitched below the Hampta glacier at dawn',
    credit: 'CC BY-SA 4.0',
  },
  chandratalCamp: {
    src: commons('Chandra Taal (Lake) Campsite, HP, India,D35 7502 nx01 01.jpg'),
    alt: 'Rows of tents at the Chandratal campsite',
    credit: 'ADARSHl, CC BY-SA 4.0',
  },
  chandratalLake: {
    src: commons('Chandra Taal (Lake), HP, India, D35 7333 nx01.jpg'),
    alt: 'Chandratal lake ringed by brown Spiti hills',
    credit: 'ADARSHl, CC BY-SA 4.0',
  },
  beasValley: {
    src: commons('Beas Valley - Palchan - Kullu 2014-05-10 (edit).jpg'),
    alt: 'Beas valley at Palchan with orchards and snow peaks',
    credit: 'CC BY 3.0',
  },
  kheerganga: {
    src: commons('The Campsite for Kheerganga trek in Himachal India.jpg'),
    alt: 'Kheerganga meadow campsite in the pines',
    credit: 'CC0',
  },
  bhrigu: {
    src: commons('Bhrigu Lake by Ahmad Faiz Mustafa (3).jpg'),
    alt: 'Bhrigu Lake in the alpine meadows above Gulaba',
    credit: 'Ahmad Faiz Mustafa, CC BY 4.0',
  },
  tirthan: {
    src: commons('Tirthan River Tirthan Valley DSC00968.jpg'),
    alt: 'Clear water of the Tirthan river over stones',
    credit: 'CC BY-SA 4.0',
  },
  chika: {
    src: commons('Chika Day one base camp of Chandrataal trek Himachal India.jpg'),
    alt: 'Horses grazing at Chika meadow, day one of the Hampta trek',
    credit: 'CC0',
  },
  solang: {
    src: commons('Solang Valley, Paragliding, India.jpg'),
    alt: 'Paraglider over the Solang valley',
    credit: 'Argenberg, CC BY 4.0',
  },
  parvati: {
    src: commons('Parvati Valley from Ratocha Village.jpg'),
    alt: 'Evening sky over the Parvati valley ridges',
    credit: 'CC BY 3.0',
  },
  sarPass: {
    src: commons('Sar pass, himachal pradesh.jpg', 2000),
    alt: 'Snowfield panorama at the Sar Pass crossing',
    credit: 'CC BY-SA 4.0',
  },
  kulluMist: {
    src: commons('Kullu Valley, Panoramic views, India.jpg'),
    alt: 'Mist over the Kullu valley and deodar forest',
    credit: 'Argenberg, CC BY 4.0',
  },
}
