import { IEvent } from 'shared/types/models';

// tslint:disable
const events: IEvent[] = [

  {
    eventName: 'The Next Web 2019',
    link: 'https://thenextweb.com/conference/',
    location: 'Amsterdam', 
    description: 'The Next Web conference is a two day technology festival that brings together 15,000 digital minds to predict, discuss and invent the future. It will take place on May 9-10 in Amsterdam, Netherlands, with over 200 speakers sharing insights about AI, blockchain, design thinking, machine learning, trading, future of work and more.',
    startDate: '05.09.2019',
    finishDate: '05.10.2019',
    image1x: require('./imgs/Amsterdam@660w.png'),
    image2x: require('./imgs/Amsterdam@1320w.png'),
  }, 

  { 
    eventName: 'ETH Cape Town Hackathone',
    link: 'https://ethcapetown.com/',
    location: 'Cape Town', 
    description: 'ETHCapeTown Hackathon is the first Africa\'s ETHGlobal event that will take place in Cape Town, South Africa, on April 19-21. It will bring together over 200 international hackers, developers and curious minds to collaborate on building a decentralized future using Ethereum. The occasion will be inclusive and educational, inspiring communities through the creative design of blockchain applications.',
    startDate: '04.19.2019',
    finishDate: '04.21.2019',
    image1x: require('./imgs/Capetown@660w .png'),
    image2x: require('./imgs/Capetown@1320w.png'),
  },

  {
    eventName: 'DeFi Cape Town: Decentralised Financial Inclusion',
    link: 'https://www.eventbrite.com/e/defi-cape-town-decentralised-financial-inclusion-registration-59050781477',
    location: 'Cape Town', 
    description: 'DeFi Cape Town: Decentralised Financial Inclusion is a DeFi event that will happen on April 18 in a Cape Town as a part of the upcoming Blockchain Week ZA. It will focus on highlighting the challenges of financial inclusion in the region and sharing insights from developing solutions in the open DeFi ecosystem, such as ensuring a stable monetary infrastructure, expanding financing opportunities to MSME\’s,  enabling faster and cheaper remittances and much more.',
    startDate: '04.18.2019',
    image1x: require('./imgs/Capetown2@660w.png'),
    image2x: require('./imgs/Capetown2@1320.png'),
  },

  {
    eventName: 'EDCON 2019',
    link: 'https://www.edcon.io',
    location: 'Sydney',
    description: 'EDCON 2019 (Community Ethereum Development Conference) is a non-profit global conference which will happen in Sydney, Australia on 8-14 April 2019. The purpose of the conference is to improve communication among various Ethereum communities and to promote Ethereum ecosystem development on a global scale. EDCON is organized as a conference series, once a year in different countries.',
    startDate: '04.08.2019',
    finishDate: '04.14.2019',
    image1x: require('./imgs/Sydney@660w.png'),
    image2x: require('./imgs/Sydney@1320w.png'),
  },
  {
    eventName: 'Financial Inclusion Summit 2019',
    link: 'https://financial-inclusion.com',
    location: 'Oslo',
    description: 'Akropolis Founder Ana Andria will be attending an invite-only Financial Inclusion Summit 2019 with MakerDAO Head of Product Soren Peter Nielsen. The Summit convenes an international gathering of stakeholders from governments and the public sector, financial institutions and fintech innovators with the goal to identify viable long-term solutions to financial inclusion, aided by latest advances in financial technology, that reduce poverty and drive economic growth.',
    startDate: '03.28.2019',
    image1x: require('./imgs/oslo.png'),
    image2x: require('./imgs/oslo@2x.png'),
  },
  {
    eventName: 'Blockchain In Digital Economy 2019',
    link: 'http://londonblockchainlabs.com/bide2019/',
    location: 'London',
    description: 'Bank of England, HSBC, Barclays Bank, academics, blockchain practitioners and investors will gather at the prestigious Imperial College London for the Blockchain in Digital Economy conference. This event brings together the UK\'s best blockchain talent, policymakers and business decision-makers. Akropolis Founder Ana Andria will be moderating a fintech panel.',
    startDate: '03.23.2019',
    image1x: require('./imgs/london.png'),
    image2x: require('./imgs/london@2x.png'),
  },
  {
    eventName: 'Ethereum Meetup March - DAO edition',
    link: 'https://www.meetup.com/Berlin-Ethereum-Meetup/events/259557778/',
    location: 'Berlin',
    description: 'Join us at DAO governance meetup at Berlin’s blockchain centre, FullNode. The panel will feature speakers from DAOStack, Aragon’s ecosystem AutarkLabs, Gnosis, InBlock and Akropolis. The panelists will discuss various blockchain governance approaches, with Akropolis focussing on practical examples of collective governance from the African saving circles.',
    startDate: '03.14.2019',
    image1x: require('./imgs/Berlin3@660w.png'),
    image2x: require('./imgs/Berlin3@1320w.png'),
  },
  {
    eventName: 'ETH Paris',
    link: 'https://ethparis.com/',
    location: 'Paris',
    description: 'ETHParis brings together over 350 curious minds, industry experts and companies pushing the way forward in crypto space to collaborate together on decentralized applications using Ethereum. We see it as a great opportunity to catch up with our friends and colleagues from Asure Network, AAVE, Celo, and many others to discuss product-market fit and adoption in crypto industry.',
    startDate: '03.08.2019',
    finishDate: '03.10.2019',
    image1x: require('./imgs/Paris@660w.png'),
    image2x: require('./imgs/Paris@1320w.png'),
  },
  {
    eventName: 'ETHcc: Ethereum Community Conference',
    link: 'https://ethcc.io/',
    location: 'Paris',
    description: 'EthCC 2019 (Ethereum Community Conference) is the second edition of a series of conferences and workshops that bring together and strengthen the international Ethereum community. EthCC will take place in Paris, on March 5th, 6th, and 7th. Meet us to discuss decentralization, informal financial systems in emerging markets, and our new financial primitive Commitments to Future Cashflows (C2FC).',
    startDate: '03.05.2019',
    finishDate: '03.07.2019',
    image1x: require('./imgs/Paris2@660w.png'),
    image2x: require('./imgs/Paris2@1320w.png'),
  },
  {
    eventName: 'M-1: Asset Management 3.0',
    link: 'https://m-1.melonport.com/',
    location: 'Zug',
    description: 'After laying down the framework for asset management 3.0 at M-0, Melonport team bringing the key ecosystem players together again at M-1 to examine the progress industry has been made in the last year and focus our attention on the years to come. Come to meet Akropolis development team in Zug: we are happy to share our vision and discuss problems that the industry is facing and how we can use Web3 stack to solve those problems.',
    startDate: '02.07.2019',
    finishDate: '02.08.2019',
    image1x: require('./imgs/Zug@660w.png'),
    image2x: require('./imgs/Zug@1320w.png'),
  },
  {
    eventName: 'Parity Moscow Meetup: Substrate and Libp2p',
    link: 'https://www.meetup.com/paritytech-moscow/events/256838073/',
    location: 'Moscow',
    description: 'Great opportunity to watch presentations and chat with some of the people behind Parity Substrate and Polkadot who are not often in Moscow. The Parity team will speak on Parity Substrate, a framework for quickly creating custom blockchains. The Akropolis team will be there to discuss Polkadot ecosystem development and creation of custom Polkadot parachain to implement tokenized cashflow framework.',
    startDate: '12.16.2018',
    image1x: require('./imgs/Moscow@660w.png'),
    image2x: require('./imgs/Moscow@1320w.png'),
  },
  {
    eventName: 'Rust Developer Conference',
    link: 'https://rustrush.ru/',
    location: 'Moscow',
    description: 'Organizers of the Rust developer conference in Moscow will bring some of the best speakers from the industry: Rust Core Team Members and leading Rust programmers and researchers from Parity, Birfury, Baidu X-Lab, Maidsafe and others. Meet our development team during the conference to discuss Web3, blockchain, high performance and systems programming.',
    startDate: '12.15.2018',
    finishDate: '12.16.2018',
    image1x: require('./imgs/Moscow2@660w.png'),
    image2x: require('./imgs/Moscow2@1320w.png'),
  },
  {
    eventName: 'DevCon 4',
    link: 'https://devcon4.ethereum.org/',
    location: 'Prague',
    description: 'DevCon is the main conference for Ethereum builders: designers, UX researchers, smart contract devs, blockchain researchers, client implementers, test engineers, infrastructure operators, community organizers, and even artists in the community.',
    startDate: '10.30.2018',
    finishDate: '11.02.2018',
    image1x: require('./imgs/Prague@660w.png'),
    image2x: require('./imgs/Prague@1320w.png'),
  },
  {
    eventName: 'Web3 Summit',
    link: 'https://web3summit.com/',
    location: 'Berlin',
    description: 'Web3 Summit is organized around a single rallying call: to facilitate a fully functional and user-friendly decentralized web. Every year the devs and researchers working on lower level protocols and others interested in the latest developments in the decentralized web come together for an immersive and collaborative gathering focusing on the Web3 technology stack.',
    startDate: '10.22.2018',
    finishDate: '10.24.2018',
    image1x: require('./imgs/Berlin@660w.png'),
    image2x: require('./imgs/Berlin@1320w.png'),
  },
  {
    eventName: 'Berlin Blockchain Week',
    link: 'https://blockchainweek.berlin',
    location: 'Berlin',
    description: 'Berlin Blockchain Week is a community-organized initiative. It is an agnostic movement based on the premise that self-organization is the backbone of the ecosystem. Berlin Blockchain Week is committed to reduce the noise from the market and focus on education, in order to push mass adoption via providing first hand information about the industry.',
    startDate: '09.05.2018',
    finishDate: '09.11.2018',
    image1x: require('./imgs/Berlin2@660w.png'),
    image2x: require('./imgs/Berlin2@1320w.png'),
  },
  {
    eventName: 'Beyond Blocks Summit Seoul',
    link: 'https://beyondblocks.com/history/beyond-blocks-summit-seoul-korea-2018-july-17-18/',
    location: 'Seoul',
    description: 'Beyond Blocks is where financial and business incumbents, fintech start ups, developers and VC investors from Asia will gather together to discuss real world applicability for the finance and business industry.',
    startDate: '07.17.2018',
    finishDate: '07.18.2018',
    image1x: require('./imgs/Seoul@660w.png'),
    image2x: require('./imgs/Seoul@1320w.png'),
  },
  {
    eventName: 'BlockShow Europe',
    link: 'https://blockshoweurope.com/',
    location: 'Berlin',
    description: 'BlockShow is a major international event for showcasing established Blockchain solutions. If you yearn to gain real insight into the Blockchain, join our events and avail yourself of the opportunity to meet and partner with the world’s key Blockchain value generators. You will get first-hand practical knowledge of how technology has been successfully implemented in different parts of the world and what a dramatic impact it has already had on the markets.',
    startDate: '05.28.2018',
    finishDate: '05.29.2018',
    image1x: require('./imgs/Berlin3@660w.png'),
    image2x: require('./imgs/Berlin3@1320w.png'),
  },
  {
    eventName: 'Consensus 2018',
    link: 'https://www.coindesk.com/events/consensus-2018',
    location: 'New York',
    description: 'Consensus 2018 is the 4th annual blockchain technology summit organized by CoinDesk at the New York Hilton Midtown. It will feature 250+ speakers and 4,000+ attendees from the leading industry startups, investors, financial institutions, enterprise tech leaders, and academic and policy groups who are building the foundations of the blockchain and digital currency economy.',
    startDate: '05.14.2018',
    finishDate: '05.16.2018',
    image1x: require('./imgs/Newyork@660w.png'),
    image2x: require('./imgs/Newyork@1320w.png'),
  },
  {
    eventName: 'ETHEREAL Summit',
    link: 'https://etherealsummit.com/events/ethereal-summit-ny-2018/',
    location: 'New York',
    description: 'Ethereal brings futurists, entrepreneurs, investors, media icons, government officials, artists, musicians, and humanitarians for a day of storytelling and knowledge sharing.',
    startDate: '05.11.2018',
    finishDate: '05.12.2018',
    image1x: require('./imgs/Newyork2@660w.png'),
    image2x: require('./imgs/Newyork2@1320w.png'),
  },
  {
    eventName: 'DApp DEV',
    link: 'http://dappdev.org/consulting',
    location: 'Kyiv',
    description: 'DApp DEV Ethereum Conference is a place where developers, designers and professionals will get an opportunity to come together and share knowledge about cutting edge products based on blockchain protocols.',
    startDate: '04.16.2018',
    image1x: require('./imgs/Kyiv@660w.png'),
    image2x: require('./imgs/Kyiv@1320w.png'),
  },
  {
    eventName: 'Token 2049',
    link: 'https://www.token2049.com/2018-recap',
    location: 'Hong Kong',
    description: 'TOKEN2049 organizes the largest digital asset event in Asia on 20-21 March 2018 in Hong Kongю Meet the pioneers, the early believers, highly influential and established opinion leaders. People from some of the most exciting crypto projects and leading digital asset funds will come to Hong Kong to share their knowledge and stories, providing exceptional insights into the ever-larger growing crypto ecosystem.',
    startDate: '03.20.2018',
    finishDate: '03.21.2018',
    image1x: require('./imgs/Hongkong@660w.png'),
    image2x: require('./imgs/Hongkong@1320w.png'),
  },
  {
    eventName: 'SydETH MeetUp',
    link: 'https://www.meetup.com/web3sydney/events/237360206/',
    location: 'Sydney',
    description: 'Join our Founder Ana Andria and Security Advisor Bokky Poobah at the first official SydEthereum meetup of 2018. Two panel discussions, individual talks, and great networking. Time to scale up, teach and learn, build dapps and open platforms, collaborate, share the knowledge and love, and enjoy good company.',
    startDate: '02.22.2018',
    image1x: require('./imgs/Sydney@660w.png'),
    image2x: require('./imgs/Sydney@1320w.png'),
  },
  {
    eventName: 'Akropolis Blockathon Sydney',
    link: 'https://www.meetup.com/BokkyPooBahs-Ethereum-Workshop/events/247793778/',
    location: 'Sydney',
    description: 'Akropolis’ first-ever blockathon will take place at Tyro FinTech Hub in Sydney on February 17. Before the blockathon our Founder, Anastasia Andrianova who is also an Advisor to the Web3 foundation to come along and talk about the implications of building a much more transparent pension system. Join us to hear from her and hack away at some awesome solutions facing the industry.',
    startDate: '02.17.2018',
    image1x: require('./imgs/Sydney2@660w.png'),
    image2x: require('./imgs/Sydney2@1320w.png'),
  },
];

export default events;
