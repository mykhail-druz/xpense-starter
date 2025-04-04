// import images
import LogoImg from "../src/assets/img/header/logo.svg";
import HeroImg from "../src/assets/img/hero/image.svg";
import OverviewProductImg from "../src/assets/img/overview/product.svg";
import FacebookImg from "../src/assets/img/overview/brands/facebook.svg";
import GoogleImg from "../src/assets/img/overview/brands/google.svg";
import CocaColaImg from "../src/assets/img/overview/brands/coca-cola.svg";
import LinkedInImg from "../src/assets/img/overview/brands/linkedin.svg";
import SamsungImg from "../src/assets/img/overview/brands/samsung.svg";
import Feature1Img from "../src/assets/img/features/feature1-img.svg";
import Feature2Img from "../src/assets/img/features/feature2-img.svg";
import Feature3Img from "../src/assets/img/features/feature3-img.svg";
import ArrowRightImg from "../src/assets/img/features/arrow-right.svg";
import CardIconImg1 from "../src/assets/img/product/cards/icon1.svg";
import CardIconImg2 from "../src/assets/img/product/cards/icon2.svg";
import CardIconImg3 from "../src/assets/img/product/cards/icon3.svg";
import PricingIcon1 from "../src/assets/img/pricing/icon1.svg";
import PricingIcon2 from "../src/assets/img/pricing/icon2.svg";
import PricingIcon3 from "../src/assets/img/pricing/icon3.svg";
import AvatarImg1 from "../src/assets/img/testimonial/avatar1.png";
import AvatarImg2 from "../src/assets/img/testimonial/avatar2.png";
import AvatarImg3 from "../src/assets/img/testimonial/avatar3.png";
import AvatarImg4 from "../src/assets/img/testimonial/avatar4.png";
import AvatarImg5 from "../src/assets/img/testimonial/avatar5.png";
import CtaImg1 from "../src/assets/img/cta/image1.svg";
import CtaImg2 from "../src/assets/img/cta/image2.svg";
import FacebookIcon from "../src/assets/img/copyright/facebook.svg";
import TwitterIcon from "../src/assets/img/copyright/twitter.svg";
import LinkedinIcon from "../src/assets/img/copyright/linkedin.svg";

export const header = {
  logo: LogoImg,
  btnText: "Request a demo",
};

export const nav = [
  { name: 'Features', href: '/#features' },
  { name: 'About us', href: '/#about' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Feedback', href: '/#feedback' },
];

export const hero = {
  title: "Track your Expenses to Save Money",
  subtitle: "Helps you to organize your income and expenses",
  btnText: "Try free demo",
  compText: "— Web, iOS and Android",
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: "Alwalys online",
    title: "Real-time support with cloud",
    subtitle:
      "Leveraging the power of the cloud to provide immediate assistance and seamless communication.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: "Free some cost",
    title: "Save cost for you and family",
    subtitle:
      "Efficient ways to cut down expenses and increase savings for you and your family.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: "Use anytime",
    title: "Use anytime when you need",
    subtitle:
      "The flexibility of accessing resources and services on-demand, whenever and wherever you require them, for maximum convenience and productivity.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: "The Product we work with.",
  subtitle:
    "Revolutionizing development with cross-platform compatibility, cloud server capabilities, and pure Javascript implementation.",
  cards: [
    {
      icon: CardIconImg1,
      title: "Cross platform",
      subtitle: "Revolutionizing technology with cross-platform capabilities.",
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: "Cloud server",
      subtitle: "Cloud server capabilities",
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: "Pure Javascript",
      subtitle: "Pure Javascript implementation",
      delay: 600,
    },
  ],
};

export const pricing = {
  title: "Choose your flexible plan.",
  cards: [
    {
      icon: PricingIcon1,
      title: "Starter Plan",
      services: [
        { name: "Store unlimited data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$9.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: "Silver Plan",
      services: [
        { name: "Store unlimited data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$19.99",
      userAmount: "up to 5 user + 1.99 per user",
      btnText: "Get this",
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: "Diamond Plan",
      services: [
        { name: "Store unlimited data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$29.99",
      userAmount: "up to 10 user + 1.99 per user",
      btnText: "Get this",
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: "We have millions of best wishers",
  clients: [
    {
      message:
        "The tracker of expenses app is a game-changer! It's made it so much easier for me to stay on top of my spending.",
      image: AvatarImg1,
      name: "Cameron Williamson",
      position: "CEO",
      borderColor: "#FF7235",
    },
    {
      message:
        "I love how user-friendly the app is. It's so simple to use and keeps me accountable for my finances.",
      image: AvatarImg2,
      name: "Shirley Hand",
      position: "Manager",
      borderColor: "#FFBE21",
    },
    {
      message:
        "With the tracker of expenses app, I finally have a clear understanding of where my money is going each month. It's been a huge help for budgeting.",
      image: AvatarImg3,
      name: "Dr. Olivia Hansen",
      position: "Director",
      borderColor: "#4756DF",
    },
    {
      message:
        "I highly recommend this app to anyone who wants to get a handle on their finances. It's definitely worth the download.",
      image: AvatarImg4,
      name: "Aubrey Sanford",
      position: "CEO",
      borderColor: "#3EC1F3",
    },
    {
      message:
        "The tracker of expenses app has helped me identify areas where I was overspending and make adjustments. I feel more in control of my money now.",
      image: AvatarImg5,
      name: "Terri Conroy",
      position: "Developer",
      borderColor: "#BB7259",
    },
  ],
};

export const cta = {
  title: "20M+ downloaded from 32 different countries",
  subtitle: "Try demo for 7 days with full features.",
  btnText: "Try free demo",
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: "Home", href: "/" },
    { name: "About us", href: "/" },
    { name: "Careers", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Features", href: "/" },
    { name: "Blog", href: "/" },
  ],
  legal: [
    { name: "Terms of use", href: "/" },
    { name: "Terms of conditions", href: "/" },
    { name: "Privacy policy", href: "/" },
    { name: "Cookie policy", href: "/" },
  ],
  newsletter: {
    title: "Newsletter",
    subtitle: "Over 25000 people have subscribed",
  },
  form: {
    placeholder: "Enter your email",
    btnText: "Subscribe",
    smallText: "We don’t sell your email and spam",
  },
};

export const copyright = {
  link1: {
    name: "Privacy & Terms",
    href: "/",
  },
  link2: {
    name: "Contact us",
    href: "/",
  },
  copyText: "Copyright @ 2022 xpence",
  social: [
    { icon: FacebookIcon, href: "/" },
    { icon: TwitterIcon, href: "/" },
    { icon: LinkedinIcon, href: "/" },
  ],
};
