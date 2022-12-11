import Htn from './assets/htn.svg';
import Bobbinet from './assets/bobbinet.svg';
import Habba from './assets/habba.svg';
import Abit from './assets/abit.svg';
import Allay from './assets/allay.svg';
import Engposts from './assets/engposts.svg';
import Orakl from './assets/orakl.svg';
import Funnel from './assets/funnel.svg';
import Bot from './assets/bot.svg';
import Dodoer from './assets/dodoer.svg';
import VelvetMind from './assets/velvetmind.svg';
import TimeCross from './assets/timecross.png';

export const projects = [
  {
    title: 'Habba Go',
    image: Habba,
    link: 'https://habba.app',
    posts: [
      {
        title: 'vc.ru',
        href: 'https://vc.ru/tribuna/494193-habba-ocheredi-bez-lishnego',
      },
    ],
    stack: 'Preact, Koa, MongoDB, YooKassa',
    comment: 'Electronic queues made super easy',
  },
  // {
  //   title: 'TimeCross',
  //   subtitle: 'release soon',
  //   image: TimeCross,
  //   stack: 'Ruby on Rails, Turbo Streams',
  //   comment: 'Time management for remote teams',
  // },
  {
    title: 'VelvetMind',
    subtitle: 'open-source',
    image: VelvetMind,
    link: 'https://velvetmind.space/',
    comment: 'Your personal encrypted diary',
    stack: 'React, Koa, MongoDB',
  },
  // {
  //   title: 'Dodoer',
  //   subtitle: 'release soon',
  //   image: Dodoer,
  //   comment: 'The best place to fund your startups',
  // },
  {
    title: 'HTN Coach',
    subtitle: 'in pilot',
    image: Htn,
    link: 'https://htn.ai',
    stack: 'React, NestJS, MongoDB, Flask (microservices), Redis, Flutter',
    comment:
      'Service for monitoring patients with chronic diseases of the cardiovascular system in partnership with Omron',
  },
  {
    title: 'Orakl Lab',
    subtitle: 'pilot soon',
    image: Orakl,
    link: 'https://orakllab.xyz/',
    comment: 'Decentralized zero-knowledge wellness proof solutions',
  },
  {
    title: 'Bobbinet',
    image: Bobbinet,
    subtitle: 'pilot soon',
    link: 'https://bobbinet.com',
    comment: 'Decentralized health 4.0 application powered by AI',
    stack: 'Solidity, TypeScript, Flutter',
  },
  {
    title: 'Abit',
    subtitle: 'pilot has ended, info soon',
    image: Abit,
    stack: 'Django 4, Vue 2, Redis, NestJS (microservices), PostgreSQL',
    comment: 'University highload database solutions',
  },
  {
    title: 'Allay',
    subtitle: 'coming soon',
    image: Allay,
    comment:
      'Application to support patients with chronic pain by generating sounds generated by ML',
    stack: 'Python, scikit-learn, PostgreSQL, Flutter',
  },
  {
    title: 'EngPosts',
    image: Engposts,
    stack: 'Vue 2, Koa, MongoDB, Strapi',
    link: 'https://engposts.com',
    comment:
      'Flashcards that increase vocabulary, improve pronunciation and develop listening comprehension',
  },
  {
    title: 'Open Funnels',
    subtitle: 'open-source',
    image: Funnel,
    link: 'https://github.com/Borodutch/open-funnels-backend',
    stack: 'NestJS, Vue 2, MongoDB',
    comment:
      'Open-source solutions for intuitive way of tracking and analyzing user behavior',
  },
  {
    title: 'Bot finder',
    subtitle: 'open-source',
    image: Bot,
    stack: 'JavaScript',
    link: 'https://github.com/Borodutch/bot-finder',
    comment: 'Browser extension for vc.ru, TJ and DTF',
  },
];
