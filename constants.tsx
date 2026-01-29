
import { Book } from './types';

export const COLORS = {
  ROYAL_BLUE: '#002366',
  METALLIC_GOLD: '#D4AF37',
  DEEP_MAROON: '#800000',
  PREMIUM_CREAM: '#F5F5DC',
};

export const BRAND = {
  NAME: 'Eklavya Royal Library',
  TAGLINE: 'Dedicated to Elite knowledge',
  MISSION: 'Empowering the self-taught sovereign through precision and dedication.'
};

export const RATING_STATS = {
  SCORE: 4.7,
  TOTAL_REVIEWS: 1240,
  LABEL: 'Sovereign Satisfaction'
};

export const CONTACT_INFO = {
  CENTRE_1: {
    NAME: 'Kidwaipuri Sanctuary (Main)',
    ADDRESS: '5, Rd Number 8, Sri Krishna Nagar, Kidwaipuri, Patna, Bihar 800001',
    MAP_LINK: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.592502804533!2d85.1163462!3d25.6184517!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!2f10!4f13.1!3m3!1m2!1s0x39ed59da6479f649%3A0xc3f8e58f27306202!2sEklavya%20Royal%20Library!5e0!3m2!1sen!2sin!4v1740000000000'
  },
  CENTRE_2: {
    NAME: 'Anandpuri Sanctuary (2nd)',
    ADDRESS: 'House no. 58, North Anandpuri, near Nehru Nagar Road, NALA POOL, Patna, Bihar 800001',
    MAP_LINK: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.625340156734!2d85.1100523!3d25.616641!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!2f10!4f13.1!3m3!1m2!1s0x39ed59585675f15d%3A0xb3636599b51829e2!2sEklavya%20Royal%20Library%202!5e0!3m2!1sen!2sin!4v1740000000001'
  },
  PHONE: '080837 39995',
  HOURS: 'Daily: 7:00 AM – 10:00 PM',
  FULL_HOURS: {
    Monday: '7 am–10 pm',
    Tuesday: '7 am–10 pm',
    Wednesday: '7 am–10 pm',
    Thursday: '7 am–10 pm',
    Friday: '7 am–10 pm',
    Saturday: '7 am–10 pm',
    Sunday: '7 am–10 pm',
  }
};

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Art of Archery and Dedication',
    author: 'Sage Vashistha',
    category: 'Philosophy',
    cover: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=400',
    description: 'An analytical study of Eklavya\'s self-learning techniques applied to modern digital pedagogy.',
    rating: 5,
    isPremium: true
  },
  {
    id: '2',
    title: 'Royal Architectures of Knowledge',
    author: 'Julian Thorne',
    category: 'Art',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400',
    description: 'Exploring the visual vernacular of elite libraries across the globe.',
    rating: 4.8,
    isPremium: true
  }
];

export const STUDENT_REVIEWS = [
  {
    id: 1,
    name: 'Aryan Kumar',
    status: 'UPSC Aspirant',
    comment: 'The silence here is not just absence of noise; it is an active presence of focus. The Royal Sage AI has revolutionized how I curate my research materials.',
    rating: 5,
    initials: 'AK'
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    status: 'Medical Researcher',
    comment: 'Finding a sanctuary that respects intellectual depth in Patna was rare. Eklavya Royal provides the elite environment necessary for high-stakes preparation.',
    rating: 4,
    initials: 'AS'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    status: 'IIT-JEE Scholar',
    comment: 'Precision studio seating and the dedicated shifts allow for 12 hours of uninterrupted mastery. It is truly the gold standard for learners.',
    rating: 5,
    initials: 'VS'
  }
];

export const SANCTUARY_CHAMBERS = [
  { 
    title: 'GRAND HALL', 
    desc: 'Our flagship sanctuary where natural light meets premium wooden craftsmanship for peak scholarship.',
    img: 'https://content3.jdmagicbox.com/comp/patna/t8/0612px612.x612.220321105514.a6t8/catalogue/eklavya-royal-library-anandpuri-patna-libraries-d8q3ket2cw.jpg' 
  },
  { 
    title: 'THE VAULT', 
    desc: 'A secured archive of intense focus, featuring precision seating and a quiet atmosphere.',
    img: 'https://content.jdmagicbox.com/comp/patna/t8/0612px612.x612.220321105514.a6t8/catalogue/eklavya-royal-library-anandpuri-patna-v789qpk377-250.jpg' 
  },
  { 
    title: 'ROYAL SAGE HUB', 
    desc: 'The center for digital research and high-speed scholarly connectivity.',
    img: 'https://content.jdmagicbox.com/comp/patna/z4/0612px612.x612.220127010718.p2z4/catalogue/readers-den-library-khajpura-patna-libraries-ajwyvyczeb-250.jpg' 
  },
  { 
    title: 'SCHOLARLY CIRCLES', 
    desc: 'Designed for high-level collaborative learning and analytical discourse in total comfort.',
    img: 'https://content.jdmagicbox.com/comp/patna/z4/0612px612.x612.220127010718.p2z4/catalogue/readers-den-library-khajpura-patna-libraries-gbtbdlo0p3-250.jpg' 
  },
  { 
    title: 'THE SOVEREIGN WING', 
    desc: 'Individual focus pods providing the ultimate privacy for the archer of knowledge.',
    img: 'https://content.jdmagicbox.com/comp/patna/t8/0612px612.x612.220321105514.a6t8/catalogue/eklavya-royal-library-anandpuri-patna-libraries-ilsq0l0psz-250.jpg' 
  },
  { 
    title: 'PRECISION STUDIO', 
    desc: 'High-performance environment with specialized lighting for marathon study sessions.',
    img: 'https://content.jdmagicbox.com/v2/comp/delhi/n4/011pxx11.xx11.181127132950.b8n4/catalogue/new-era-library-gurgaon-sector-14-gurgaon-libraries-tcwai004hk.jpg' 
  },
  { 
    title: 'ELITE ARCHIVES', 
    desc: 'A modern, tech-enabled chamber designed for advanced research and digital mastery.',
    img: 'https://manage.libnest.com/setting/library-profile/a1/uploads/gallery/ReyanshDigitalLibrary_TarunKumar_106_1_20250820101950.jpeg' 
  },
  { 
    title: 'MASTER\'S RETREAT', 
    desc: 'A sophisticated corner for those who seek the highest level of silence and academic rigor.',
    img: 'https://content.jdmagicbox.com/comp/patna/t8/0612px612.x612.220321105514.a6t8/catalogue/eklavya-royal-library-anandpuri-patna-libraries-d8q3ket2cw-250.jpg' 
  },
  { 
    title: 'HERITAGE CORRIDOR', 
    desc: 'A tranquil space connecting the wings of our library, maintaining a perfect silence.',
    img: 'https://content.jdmagicbox.com/comp/patna/t8/0612px612.x612.220321105514.a6t8/catalogue/eklavya-royal-library-anandpuri-patna-v789qpk377-250.jpg' 
  }
];
