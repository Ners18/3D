import {
  carrent,
  jobit,
  tripguide,
  threejs,
  dollar,
  Euro,
  yen,
  Russian,
  Pound1,
  swiss,
  tl,
  yuan,
  australian,
  indian,
  canadian,
  south,
  dimension,
  dolargif,
  Poundgif,
  orangeup,
  orangeupother,
 
} from "../assets";

export const navLinks = [
  {
    id: "Hero",
    title: "Canlı Kur",
  },
  {
    id: "work",
    title: "Hakkımızda",
  },
  {
    id: "contact",
    title: "Bize Ulaşın",
  },
];

let services = [
  {
    title: "Dollar", 
    icon: dolargif,
  },
  {
    title: "Euro",
    icon: dimension,
  },
  {
    title: "Pound",
    icon: Poundgif,
  },
 
];
let RedServices = [
  {
    title: "Dolar", 
    icon: dolargif,
  },
  {
    title: "Euro",
    icon: dimension,
  },
  {
    title: "Pound",
    icon: Poundgif,
  },
 
];

const technologies = [
  {
    name: "Dolar",
    icon: dollar,
  },
  {
    name: "Euro",
    icon: Euro,
  },
  {
    name: "Pound",
    icon: Pound1,
  },
  {
    name: "yen",
    icon: yen,
  },
  {
    name: "Russian",
    icon: Russian,
  },
  {
    name: "Pound1",
    icon: Pound1,
  },
  {
    name: "swiss",
    icon: swiss,
  },
  {
    name: "tl",
    icon: tl,
  },
  {
    name: "yuan",
    icon: yuan,
  },
  {
    name: "australian",
    icon: australian,
  },
  {
    name: "indian",
    icon: indian,
  },
  {
    name: "canadian",
    icon: canadian,
  },
  {
    name: "south",
    icon: south,
  },
];

const experiences = [
  {
    title: "Musmer Exchange Nerdedir?",
    company_name: "musmer",
    icon: orangeup,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Kurtuluş Caddesi, Ozanköy,Lemar Yolu, Girne 99300.",
      
    ],
  },
  {
    title: "Günce Döviz kurları Nelerdir",
    company_name: "musmer",
    icon: orangeupother,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Güncel Döviz Kurlarımıza isterseniz anasayfamızdan istersenizde Döviz sayfamızdan ulaşabilirsiniz",
    ],
  },
  {
    title: "Size Neden Güvenmeliyim ?",
    company_name: "mumer",
    icon: orangeup,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Musmer Exchange, bir MUSMER LIMITED kuruluşudur. 10 yılı aşkın deneyimi ve iş tecrübesini yaptığı başarılar ve müşteri memnuniyetiyle birleştiren Musmer Limited güçlü sermayesi ve müşteri memnuniyeti ve gizliliğine en üst önemi vermektedir..", 
    ],
  },
  {
    title: "Güncel Kurlar ve Özel Teklifler için size nasıl ulaşabilirim ?",
    company_name: "musmer",
    icon: orangeupother,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Bize İLETİŞİM sayfamızda bulunan telefon numaralarımızdan gerek Whatsapp gerek aram yolu ile gerek ise email adreslerimizden ulaşabilirsiniz.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Siz değerli müşterilerimiz için döviz piyasasındaki en uygun kurları buluyor ve işlem yapıyoruz",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Güvenilir ve güler yüzlü hizmet ile sizin memnuniyetiniz için çalışıyoruz.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Büromuza giren her müşterimiz bizim için değerlidir. Müşterilerimizin mutluluğu için hizmetinizdeyiz.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
