import { AiOutlineHome, AiOutlineCalculator, AiOutlineSetting, AiOutlineShareAlt } from "react-icons/ai"
import { RiUserLine } from "react-icons/ri"
import { FaRegLightbulb, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaShippingFast } from "react-icons/fa"
import { CgCardClubs } from "react-icons/cg"
import { TbMailOpened } from "react-icons/tb"
import { GoMail } from "react-icons/go"
import { GiChart } from "react-icons/gi"
import { FiLayers } from "react-icons/fi"
import { BsPhone } from "react-icons/bs"
import { BsPhoneVibrate, BsVectorPen } from "react-icons/bs"
import { MdShareLocation, MdLocalShipping, MdOutlineLocalShipping } from "react-icons/md"

export const menu = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: "resume",
    url: "/resume",
    icon: <RiUserLine />,
  },
  {
    id: 3,
    text: "portfolio",
    url: "/portfolio",
    icon: <FaRegLightbulb />,
  },
  {
    id: 4,
    text: "blog",
    url: "/blog",
    icon: <CgCardClubs />,
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
    icon: <TbMailOpened />,
  },
]

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    class: "facebook",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    class: "twitter",
  },
  {
    id: 3,
    icon: <FaDribbble />,
    class: "dribbble",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    class: "instagram",
  },
]

export const side = [
  {
    id: 1,
    num: 85,
    text: "Backend Development",
    class: "skill1",
  },
  {
    id: 2,
    num: 92,
    text: "Frontend Development",
    class: "skill2",
  },
  {
    id: 3,
    num: 71,
    text: "Illustration",
    class: "skill3",
  },
]
// src/data/blogData.js
export const blogPosts = [
  {
    id: 1,
    category: "Learning Journey",
    emoji: "📘",
    title: "How I Got Started in Coding",
    description: "My journey from zero to building my first HTML page...",
  },
  {
    id: 2,
    category: "Learning Journey",
    emoji: "📘",
    title: "Why I Chose React Native",
    description: "A beginner’s experience in choosing the right tech stack.",
  },
  {
    id: 3,
    category: "Tutorials & How-Tos",
    emoji: "🛠️",
    title: "Build a Simple To-Do App in React",
    description: "Step-by-step guide with explanation of hooks and components.",
  },
  {
    id: 4,
    category: "Tutorials & How-Tos",
    emoji: "🛠️",
    title: "CSS Flexbox vs Grid",
    description: "Which layout method to use and when.",
  },
  {
    id: 5,
    category: "Tips & Resources",
    emoji: "🧠",
    title: "Top 5 Free Coding Resources I Recommend",
    description: "These helped me learn faster as a beginner.",
  },
  {
    id: 6,
    category: "Tips & Resources",
    emoji: "🧠",
    title: "VS Code Extensions You Should Try",
    description: "Speed up your coding workflow with these tools.",
  },
  {
    id: 7,
    category: "Projects & Experiences",
    emoji: "🚀",
    title: "Behind the Scenes: My Portfolio Build",
    description: "How I structured and styled my personal site.",
  },
  {
    id: 8,
    category: "Projects & Experiences",
    emoji: "🚀",
    title: "Lessons from My First React Native App",
    description: "What went right, what went wrong, and what I learned.",
  },
];

export const about = [
  {
    deatils: [
      {
        text: "My Name",
        value: "Sedem Adabrah Lincoln",
        icon: <RiUserLine />,
      },
      { text: "My Age", value: "24 Years", icon: <AiOutlineCalculator /> },
      { text: "Email Address", value: "lincolnadabrah@gmail.com", icon: <GoMail /> },
      { text: "Phone Number", value: "0205521660", icon: <BsPhoneVibrate /> },
      { text: "Address", value: "Click Here to View Map.", icon: <MdShareLocation /> },
    ],
    bio: [
      {
        para1: "I'm a passionate software developer with a strong foundation in full-stack web development and a sharp eye for clean, efficient code. With several years of hands-on experience in both frontend and backend technologies, I specialize in building dynamic, user-friendly applications using JavaScript, React, Bootstrap ,Tailwind and Laravel. My work often bridges the gap between beautiful design and functional engineering.",
        para2: "Over the years, I’ve contributed to diverse projects — from building responsive websites and e-commerce platforms to creating RESTful APIs and integrating third-party services. Whether collaborating in a startup environment or freelancing with global clients, I focus on delivering scalable, maintainable solutions. I’m especially skilled in working with modern frameworks, version control (Git), and agile workflows. I also enjoy mentoring junior developers and participating in code reviews to promote clean coding standards.",
        para3: "What drives me most is the challenge of solving real-world problems through code and continuously improving as a developer. I'm a curious learner, always exploring new tools and trends in tech. Outside of programming, I enjoy reading, gaming, and occasionally contributing to open-source projects. I believe that good software is built not just with technical skills but also with empathy, communication, and a genuine desire to make things better.",
        images: "./images/bio.png",
      },
    ],

    serives: [
      {
        id: 1,
        icon: <AiOutlineSetting />,
        title: "Web Development",
        text: "from scratch",
        decs: "I build responsive, high-performance websites and web applications from the ground up using modern technologies like HTML, CSS, JavaScript, and frameworks such as React or Next.js.",
      },
      {
        id: 2,
        icon: <BsVectorPen />,
        title: "UX recherche",
        text: "data collection",
        decs: "I conduct user research through surveys, interviews, and usability testing to understand real user needs and translate insights into actionable design decisions.",
      },
      {
        id: 3,
        icon: <FiLayers />,
        title: "UI design",
        text: "creativ design",
        decs: "I create clean and intuitive user interfaces that combine aesthetics with usability, focusing on layout, color theory, typography, and visual hierarchy to enhance user experience.",
      },
      {
        id: 4,
        icon: <BsPhone />,
        title: "Application",
        text: "stand alone",
        decs: "I develop cross-platform mobile and desktop applications that run smoothly and efficiently, offering offline support, native-like performance, and seamless user interaction.",
      },
      {
        id: 5,
        icon: <AiOutlineShareAlt />,
        title: "Social Media",
        text: "digital product",
        decs: "I help design and integrate social media features or tools into your digital product, enabling better user engagement, sharing, and brand visibility across platforms.",
      },
      {
        id: 6,
        icon: <GiChart />,
        title: "Search Engine",
        text: "page rank",
        decs: "I implement SEO best practices and performance optimization to ensure your website ranks higher on search engines, drives organic traffic, and improves online visibility.",
      },
    ],

    review: [
      {
        id: 1,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut1.jpg",
      },
      {
        id: 2,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Gork Coder",
        link: "gorkcoder.com",
        cover: "./images/aut2.jpg",
      },
      {
        id: 3,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut3.jpg",
      },
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "25.00",
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "50.00",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "100.00s",
      },
    ],
  },
]
