import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nick Schepers', // e.g: 'Name | Developer'
  lang: 'nl', // e.g: en, es, fr, jp
  description: 'Dit een een showcase-portfolio van al de projecten waar ik in 2DI aan gewerkt heb.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Portfolio van',
  name: 'Nick Schepers',
  subtitle: '2020 - 2021',
  cta: 'Lees meer...',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Camp2CampProject.jpg',
    title: 'Camp2Camp',
    info: 'Een vernieuwde website maken, waarop zowel informatie over Camp2Camp kan gevonden worden en waarop een webshop voor de producten en campings ter beschikking is.',
    info2: '+ Een back-end, geschreven in C#, waarop Camp2Camp hun producten kan beheren.',
    url: 'http://camping.easy-cms.be/', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DeWaaiburgProject.jpg',
    title: 'De Waaiburg',
    info: 'Een informatieve app maken, waarop de gebruiker zowel informatie van de verschillende afdelingen van De Waaiburg kan vinden.',
    info2: 'Deze app zou uiteindelijk ook een account-systeem bevatten, waarop de gebruiker dan zijn vooruitgang kan bezichtigen, feedback kan geven, zijn "doelenboom" kan bekijken, enz..',
    url: 'https://www.figma.com/proto/BP26XtdA5cJC1rxU8LEivT/Waaiburg-App?node-id=37%3A65&scaling=min-zoom&page-id=0%3A1',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CoeckNVProject.jpg',
    title: 'Coeck NV: A-frames volgen',
    info: 'Een low-power tracker maken die de A-frames in kaart kan brengen. Dit wordt verwezelijkt dankzij LoRaWan- en GPS-module.',
    info2: '',
    url: '', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GatsbyProject.jpg',
    title: 'Gatsby: Wiki-like site',
    info: 'Gatsby gebruiken om een moderne Wiki-like site op te bouwen. D.m.v. het React-gebasseerde framework, met markdown de data toonbaar maken op een website.',
    info2: '',
    url: '', // if no url, the button will not show up
    repo: 'https://github.com/Nick-Schepers/Gatsby-Wiki', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MrSchepers',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nick-schepers-16602b1b8/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Nick-Schepers',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/schepers.nick/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
