import {
  carrent,
  jobit,
  tripguide,
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
  {
    id:"calculator",
    title:"Döviz Hesaplayıcı"
  }
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
    company_name: "",
    icon: orangeup,
    iconBg: "#383E56",
    date: "Mart 2013 - Nisan 2014",
    points: [
      "Kurtuluş Caddesi, Ozanköy,Lemar Yolu, Girne 99300.",
      
    ],
  },
  {
    title: "Günce Döviz kurları Nelerdir",
    company_name: "",
    icon: orangeupother,
    iconBg: "#E6DEDD",
    date: "Mayıs 2014 - Haziran 2014",
    points: [
      "Güncel Döviz Kurlarımıza isterseniz anasayfamızdan istersenizde Döviz sayfamızdan ulaşabilirsiniz",
    ],
  },
  {
    title: "Size Neden Güvenmeliyim ?",
    company_name: "",
    icon: orangeup,
    iconBg: "#383E56",
    date: "Kasım 2016 - Şubat 2017",
    points: [
      "Musmer Exchange, bir MUSMER LIMITED kuruluşudur. 10 yılı aşkın deneyimi ve iş tecrübesini yaptığı başarılar ve müşteri memnuniyetiyle birleştiren Musmer Limited güçlü sermayesi ve müşteri memnuniyeti ve gizliliğine en üst önemi vermektedir..", 
    ],
  },
  {
    title: "Güncel Kurlar ve Özel Teklifler için size nasıl ulaşabilirim ?",
    company_name: "",
    icon: orangeupother,
    iconBg: "#E6DEDD",
    date: "Ağustos 2023 - Şimdiye",
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
      "Siz değerli müşterilerimiz için döviz piyasasındaki en uygun kurları buluyor ve işlem yapıyoruz",
    tags: [
      {
        name: "Hızlı",
        color: "blue-text-gradient",
      },
      {
        name: "Güvenilir",
        color: "green-text-gradient",
      },
      {
        name: "Doğru",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Güvenilir ve güler yüzlü hizmet ile sizin memnuniyetiniz için çalışıyoruz.",
    tags: [
      {
        name: "Çalışkan",
        color: "blue-text-gradient",
      },
      {
        name: "Dürüst",
        color: "green-text-gradient",
      },
      {
        name: "Gerçek",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Büromuza giren her müşterimiz bizim için değerlidir. Müşterilerimizin mutluluğu için hizmetinizdeyiz.",
    tags: [
      {
        name: "Yükselen",
        color: "blue-text-gradient",
      },
      {
        name: "Stabil",
        color: "green-text-gradient",
      },
      {
        name: "En iyi oranlar",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
