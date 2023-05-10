import { facebook, instagram, linkedin, twitter, debt, shield, star, testimonials1, testimonials2, testimonials3, Account, Mobile, Cards, Payments, Settings, World, Credit, Savings, Customer  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "resources",
    title: "Resources",
    subLinks: [
      {
        id: "upcoming-events",
        title: "",
      },
      {
        id: "blog",
        title: "Blog",
      },
      {
        id: "faqs",
        title: "FAQs",
      },
    ]
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const products = [
  {
    id: "product-1",
    icon: Account,
    title: "Online Account Opening",
    content:
      "We at finance fluent offer the convenience of opening bank accounts online without the need to visit a physical branch. Customers can provide their information, complete the necessary documentation, and verify their identity electronically. This allows for a streamlined account opening process and faster access to banking services.",
  },
  {
    id: "product-2",
    icon: Mobile,
    title: "Mobile Banking App",
    content:
      "Our digital bank provides mobile banking applications that enable customers to access their accounts and perform various banking activities directly from their smartphones or tablets. These apps offer features such as checking balances, transferring funds, making payments, depositing checks through mobile check capture, and managing account settings.",
  },
  {
    id: "product-3",
    icon: Cards,
    title: "Cards (Physical & Virtual)",
    content:
      "We issue both physical and virtual payment cards to their customers. Physical cards, like debit or credit cards, can be used for in-person transactions at merchant locations. Virtual cards are primarily designed for online purchases and provide customers with unique card numbers for enhanced security and control over their transactions.",
  },
  {
    id: "product-4",
    icon: Payments,
    title: "Virtual Payment Solutions:",
    content:
      "We offer virtual payment solutions that allow customers to make payments electronically without using physical cash. This may include peer-to-peer (P2P) transfers, QR code payments, digital wallets, or other forms of contactless payments.",
  },
  {
    id: "product-5",
    icon: Settings,
    title: "Personal Finance Management Tools:",
    content:
      "We provide personal finance management tools within our platforms or mobile apps. These tools help customers track their expenses, set budgets, categorize transactions, and gain insights into their spending habits. We may also provide personalized recommendations and financial goal-setting features.",
  },
  {
    id: "product-6",
    icon: World,
    title: "International Money Transfer",
    content:
      "We offer efficient and cost-effective solutions for international money transfers. We leverage digital platforms and partnerships to facilitate cross-border payments, allowing customers to send and receive funds internationally with competitive exchange rates and lower fees compared to traditional banks.",
  },
  {
    id: "product-7",
    icon: Credit,
    title: "Loans & Credits",
    content:
      "Digital banks provide loan and credit products, such as personal loans, mortgages, or credit lines, through their digital platforms. They offer streamlined application processes, quick approvals, and transparent terms. Digital banks may leverage technology and data analytics to assess creditworthiness and provide personalized loan offers.",
  },
  {
    id: "product-8",
    icon: Savings,
    title: "Savings & Investments Account",
    content:
      "Digital banks offer savings and investment accounts that allow customers to grow their money. These accounts often provide competitive interest rates and flexible options for depositing and withdrawing funds. Some digital banks may also offer investment products, such as mutual funds or robo-advisory services, to help customers manage their investments",
  },
  {
    id: "product-9",
    icon: debt,
    title: "Debt management",
    content:
      "The webapp provides powerful tools for debt management, such as debt tracking and consolidation, payment scheduling, and personalized repayment plans to help users pay off debt faster and more efficiently.",
  },
  {
    id: "product-10",
    icon: Customer,
    title: "Customer support and social media support",
    content:
      "Digital banks provide customer support services through various channels, including phone, email, chat, or in-app messaging. They assist customers with inquiries, issues, or complex transactions, ensuring a positive customer experience and timely resolution of problems. We also have integrated social media channels like Twitter and Facebook to provide customer support. Customers can directly message or tweet their queries to the bank's social media account and receive real-time responses.",
  },
  {
    id: "product-11",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and financial statements are secure.",
  },
  
];

export const feedback = [
  {
   id: "feedback-1",
   content: "Great job on creating a digital bank example! The layout is clean and easy to navigate. The use of a consistent color scheme and font family throughout the website makes it look professional and cohesive.",
   name: "John Doe",
   title: "C.E.O",
   img: testimonials1
  },
  {
    id: "feedback-2",
   content: "Overall, the website effectively communicates the bank's brand and values, and would likely be appealing to potential customers.",
   name: "Jane Doe",
   title: "C.O.O",
   img: testimonials2
  },
  {
    id: "feedback-3",
   content: "The information provided about the bank's services and offerings is clear and concise, which is helpful for users who are new to banking or looking for a new provider. ",
   name: "Jill Doe",
   title: "Operations Manager",
   img: testimonials3
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Accounts Created",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create Account",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
      {
        name: "FAQs",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    
  },
  {
    
  },
  {
   
  },
  {
    
  },
];