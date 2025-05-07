import { ProjectData } from "@/types/types";

const basePath = process.env.BASE_PATH || "";

const projectData: ProjectData[] = [
  {
    title: "Book Borrowing System",
    description: "A simple book borrowing system.",
    imageName: "book-lending-app.png",
    cldImgPublicId: "book-lending-app_t350ob",
    cldPublicId: "Book_lending_app_demo_compressed_hdhnc7",
    technologies: [
      "Ruby on Rails",
      "SQLite3",
      "ERB",
      "CSS3",
      "Docker",
      "Open Library API",
    ],
    githubUrl: "https://github.com/MercyKorir/book-lending-app",
  },
  {
    title: "Book Assignment View",
    description:
      "Web application that allows teachers to assign books to students.",
    imageName: "book-assignment-view.png",
    cldImgPublicId: "Screenshot_935_xskiop",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Material-UI",
      "GraphQL",
      "Node.js",
    ],
    webUrl: "https://book-assignment-view.netlify.app/",
    githubUrl: "https://github.com/MercyKorir/book-assignment-view",
  },
  {
    title: "Crypto Dashboard",
    description: "A crypto dashboard web application.",
    imageName: "cryptoapp-img.png",
    cldImgPublicId: "cryptoapp-img_ovf2ok",
    demoUrl: `${basePath}/videos/crypto-dashboard-demo.mp4`,
    cldPublicId: "crypto-dashboard-demo_zbmizt",
    technologies: [
      "React.js",
      "JavaScript",
      "Firebase",
      "Axios",
      "CoinGecko API",
      "CSS3",
    ],
    problem:
      "Imagine being a cryptocurrency enthusiast, constantly keeping an eye on the ever-changing market. You want to stay up-to-date with the latest prices, market caps, and trends, but navigating through multiple websites and tracking spreadsheets can be overwhelming. Wouldn't it be amazing to have a one-stop-shop where you can easily access all the essential information about your favorite cryptocurrencies, right at your fingertips?\
    That's where our cryptocurrency dashboard web application comes in. We set out to create a user-friendly, visually appealing, and feature-rich platform that caters to the needs of crypto enthusiasts like you. Our goal was to provide a seamless experience, allowing you to effortlessly track your investments, discover new opportunities, and stay ahead of the game.",
    solution:
      "Fueled by passion, you crafted a visionary cryptocurrency dashboard web app using React.js, React Router, CSS, Axios, and Firebase Authentication. This masterpiece transcends data display, immersing users in a captivating crypto journey - from the stunning homepage to detailed coin pages with seamless authentication, responsive design across devices, smooth pagination, and graceful error handling. Your dedication shines through this feature-rich application, empowering enthusiasts to navigate the ever-evolving landscape with cutting-edge tech at their fingertips.",
    webUrl: "https://crypto-dashboard-beta-lyart.vercel.app/",
    githubUrl: "https://github.com/MercyKorir/crypto-dashboard",
    imagesPath: [
      "crypto-1.png",
      "crypto-2.png",
      "crypto-3.png",
      "crypto-4.png",
      "crypto-5.png",
      "crypto-6.png",
      "crypto-7.png",
    ],
  },
  {
    title: "Course Management System",
    description: "Full stack course management platform.",
    imageName: "courseapp-img.png",
    cldImgPublicId: "courseapp-img_xtwb0s",
    demoUrl: `${basePath}/videos/course-app-demo.mp4`,
    cldPublicId: "course-app-demo_cia7iv",
    technologies: [
      "React.js",
      "JavaScript",
      "CodeIgniter 4",
      "MySQL",
      "OAuth2",
      "Axios",
      "Webpack",
      "Babel",
      "CSS3",
    ],
    problem:
      "Imagine being an educator, passionately dedicated to providing the best learning experience for your students. You want to streamline the process of managing courses, enrollments, and related activities, eliminating the hassle of juggling multiple tools and spreadsheets. Wouldn't it be a game-changer to have a comprehensive platform that empowers you to focus on what truly matters – delivering exceptional education?\
    That's where our visionary Course Management System comes into play. We set out to create a user-friendly, feature-rich application that revolutionizes the way you manage your courses. Our goal was to provide a seamless experience, allowing you to effortlessly handle administrative tasks, foster collaboration, and unleash the full potential of your educational endeavors.",
    solution:
      "Fueled by a passion for education, we crafted a cutting-edge Course Management System that harmonizes CodeIgniter's robustness with React.js's flexibility. This feature-rich platform empowers you to seamlessly create, manage, and enrich courses with multimedia uploads, user authentication, and responsive design across devices. Streamline administrative tasks through bulk operations, sorting, and filtering. Our iterative approach ensures continuous refinement, incorporating innovative technologies like AI chatbots and rich text editing. Unlock your educational prowess with our visionary solution, revolutionizing course management and inspiring learners worldwide.",
    githubUrl: "https://github.com/MercyKorir/course-app-management-system",
  },
  {
    title: "Blog Design Challenge",
    description: "A Blog Web Application.",
    imageName: "blog-design-img.png",
    cldImgPublicId: "blog-design-img_yf2zai",
    technologies: ["HTML5, CSS3"],
    githubUrl: "https://github.com/MercyKorir/blog-design-challenge",
  },
  {
    title: "TastyBook",
    description: "Full-stack recipe management platform.",
    imageName: "tastybook-img.png",
    cldImgPublicId: "tastybook-img_fw4vjl",
    cldPublicId: "tastybook-demo_o7wibp",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Passport.js",
      "CSS3",
      "Axios",
    ],
    problem:
      "Home cooks and food enthusiasts need a reliable platform to store, organize, and share their recipes. Existing solutions often lack proper organization features and scalability for growing recipe collections.",
    solution:
      "Developed a full-stack recipe management platform that supports over 1000 recipe entries with MongoDB Atlas for cloud scalability. The application provides comprehensive CRUD operations for recipe management with robust authentication.",
    githubUrl: "https://github.com/MercyKorir/TastyBook",
  },
  {
    title: "Bitnine Global Clone",
    description: "A Bitnine Global Website Clone.",
    imageName: "bitnine-img.png",
    cldImgPublicId: "bitnine-img_sculsp",
    technologies: [
      "NextJS",
      "TypeScript",
      "MongoDB",
      "Bcrypt",
      "NextAuth",
      "Tailwind CSS",
    ],
    webUrl: "https://bitnine-clone-gules.vercel.app/",
    githubUrl: "https://github.com/MercyKorir/bitnine-global",
  },
  {
    title: "MeloMeet",
    description:
      "Real-time music synchronization platform with Spotify integration.",
    imageName: "melomeet-img.png",
    cldImgPublicId: "melomeet-img_zn5qmh",
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "SQLite",
      "Spotify API",
      "WebSocket",
      "Material-UI",
    ],
    problem:
      "Music enthusiasts want to share and synchronize their listening experience with friends in real-time, but existing solutions often lack proper synchronization and social features.",
    solution:
      "Engineered a Django application with Spotify API integration that enables real-time playlist synchronization for concurrent users, creating a shared music listening experience.",
    webUrl: "https://mercykorir.github.io/",
    githubUrl: "https://github.com/vivian347/MeloMeet",
  },
  {
    title: "ToDo App",
    description:
      "Firebase-powered task management application with Google authentication.",
    imageName: "todo-img.png",
    cldImgPublicId: "todo-img_dnzzur",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    problem:
      "Users need a reliable and secure task management solution that provides seamless authentication and real-time updates across devices.",
    solution:
      "Built a modern task management application using Next.js and Firebase, featuring Google Sign-in integration and real-time data synchronization.",
    webUrl: "https://todo-app-eight-roan.vercel.app/",
    githubUrl: "https://github.com/MercyKorir/todoList-app",
  },
  {
    title: "Wallpaper Website",
    description: "A personal portfolio website.",
    imageName: "wallpaper-web-img.png",
    cldImgPublicId: "wallpaper-web-img_omiecz",
  },
];

export default projectData;
