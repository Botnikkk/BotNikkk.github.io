// All portfolio content lives here. Edit this file to update the site.

import javaIcon from './images/Skills/java.svg';
import dartIcon from './images/Skills/dart.svg';
import cIcon from './images/Skills/c.svg';
import pythonIcon from './images/Skills/python.svg';
import sqlIcon from './images/Skills/sql.svg';
import htmlIcon from './images/Skills/html.svg';
import cssIcon from './images/Skills/css.svg';
import jsIcon from './images/Skills/javascript.svg';
import flutterIcon from './images/Skills/flutter.svg';
import reactIcon from './images/Skills/react.svg';
import gitIcon from './images/Skills/git.svg';
import androidIcon from './images/Skills/android.svg';
import fastapiIcon from './images/Skills/fastapi.svg';
import webrtcIcon from './images/Skills/webrtc.svg';
import sanityIcon from './images/Skills/sanity.svg';
import discordIcon from './images/Skills/discord.svg';
import motionIcon from './images/Skills/react-motion.svg';

import naadnetraImg from './images/projects/naadnetra.webp';
import cheenaImg from './images/projects/cheena-makeover.webp';
import blackjackImg from './images/projects/blackjack.webp';
import botImg from './images/projects/xp-bot.webp';

export const profile = {
  name: 'Nikhil Chaudhary',
  handle: 'BotNikkk',
  role: 'Full-stack & mobile developer',
  headline:
    "I'm a B.Tech IT student in Delhi who builds apps and websites. My featured project, Naadnetra, flags AI-cloned voices during phone calls in real time, and I've also built a live website for a paying client.",
  education: 'B.Tech, Information Technology',
  college: 'GGSIPU, Delhi',
  years: '2024 – 2028',
  location: 'Delhi, India',
  availability: 'Open to internships & entry-level roles',
  about: [
    "I'm a B.Tech Information Technology student in Delhi, working mostly in Flutter, React and Python.",
    "So far I've built a Flutter + FastAPI app that detects AI-cloned voices during phone calls, a React website for a paying client, a Discord bot in Python and a blackjack game in plain JavaScript.",
  ],
  personalNote: 'Outside of coding, I enjoy gaming and reading about game development. Major driving force behind my coding is the desire to build things that are useful and fun.',
  email: 'b.nikk.chd@gmail.com',
  emailSubject: 'Connect from portfolio!',
  linkedin: 'https://www.linkedin.com/in/nikhil-chaudhary-85a275269',
  github: 'https://github.com/Botnikkk',
  resume:
    'https://drive.google.com/file/d/1V2KO4CrylBIMpUEPP-ntxJzj09akL8P6/view?usp=sharing',
};

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', img: pythonIcon },
      { name: 'JavaScript', img: jsIcon },
      { name: 'Dart', img: dartIcon },
      { name: 'Java', img: javaIcon },
      { name: 'C++', img: cIcon },
      { name: 'SQL', img: sqlIcon },
    ],
  },
  {
    title: 'Web',
    items: [
      { name: 'React', img: reactIcon },
      { name: 'HTML', img: htmlIcon },
      { name: 'CSS', img: cssIcon },
      { name: 'React Motion', img: motionIcon },
      { name: 'Sanity CMS', img: sanityIcon },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'Flutter', img: flutterIcon },
      { name: 'Android', img: androidIcon },
    ],
  },
  {
    title: 'Backend & Tools',
    items: [
      { name: 'FastAPI', img: fastapiIcon },
      { name: 'WebRTC', img: webrtcIcon },
      { name: 'Discord.py', img: discordIcon },
      { name: 'Git', img: gitIcon },
    ],
  },
];

export const featuredProject = {
  title: 'Naadnetra',
  tagline: 'Real-time detection of AI-cloned voices during phone calls',
  img: naadnetraImg,
  github: 'https://github.com/Botnikkk/naadnetra',
  link: 'https://botnikkk.github.io/naadnetra',
  linkLabel: 'Live demo',
  summary:
    'A Flutter app for web and Android that streams call audio over WebRTC to a FastAPI backend and shows a live AI-risk gauge with a verdict and confidence level.',
  hardPart: '',
  tags: ['Flutter', 'Dart', 'Python', 'FastAPI', 'WebRTC'],
};

export const projects = [
  {
    title: 'Cheena Makeover',
    kind: 'Client website',
    img: cheenaImg,
    github: 'https://github.com/Botnikkk/cheena-makeover',
    link: 'https://cheenamakeover.com',
    description:
      'A live website built for a real client: responsive design, gallery showcases and contact links, with content managed through Sanity.',
    hardPart: '',
    tags: ['React', 'React Motion', 'Sanity API'],
  },
  {
    title: 'BlackJack Game',
    kind: 'Vanilla JavaScript',
    img: blackjackImg,
    github: 'https://github.com/Botnikkk/NikkksBlackJack',
    link: 'https://botnikkk.github.io/NikkksBlackJack',
    description:
      'A classic card game in plain JavaScript with interactive gameplay, score tracking and dynamic DOM updates.',
    hardPart: '',
    tags: ['JavaScript', 'HTML/CSS', 'Game Logic'],
  },
  {
    title: 'XP BOT',
    kind: 'Discord bot',
    img: botImg,
    github: 'https://github.com/Botnikkk/XP-BOT',
    link: null,
    description:
      'A Discord utility bot that tracks experience points and levels and handles moderation commands, built with Discord.py and a SQL database.',
    hardPart: '',
    tags: ['Python', 'Discord.py', 'SQL'],
  },
];
