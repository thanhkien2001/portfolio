import emoji from "react-easy-emoji";

const translations = {
  en: {
    nav: {
      skills: "Skills",
      education: "Education",
      experience: "Work Experiences",
      projects: "Projects",
      achievements: "Achievements",
      resume: "Resume",
      contact: "Contact Me"
    },
    greeting: {
      username: "Chế Thanh Kiên",
      title: "Hi all, I'm Kien",
      subTitle: emoji(
        "A passionate Fullstack Developer 🚀 with 2+ years of experience in Web/Mobile App development and RESTful APIs. Successfully built and maintained large-scale Production systems (Fintech, E-commerce, Blockchain). Proficient in SDLC, CI/CD, and highly effective in international Agile environments. Passionate about Clean Architecture, performance optimization, and writing highly maintainable code."
      ),
      contactBtn: "Contact me",
      resumeBtn: "Download my resume",
      resumeFileName: "Che_Thanh_Kien_Fullstack_Developer_EN.pdf",
      resumeFile: "/Che_Thanh_Kien_Fullstack_Developer_EN.pdf",
      displayGreeting: true
    },
    skillsSection: {
      title: "What I do",
      subTitle:
        "FULLSTACK DEVELOPER SPECIALIZING IN SCALABLE WEB APIS, CLEAN ARCHITECTURE & HIGH PERFORMANCE",
      skills: [
        emoji(
          "⚡ Develop responsive, performant Front-end & User Interfaces using Vue 3, React, TailwindCSS, and SCSS"
        ),
        emoji(
          "⚡ Architect and build robust backend RESTful APIs with PHP (Laravel), NodeJS, and Clean Architecture"
        ),
        emoji(
          "⚡ High-performance database design, caching & full-text search with MySQL, MongoDB, Redis, and Elasticsearch"
        ),
        emoji(
          "⚡ Enterprise multi-tenancy & multisite architecture, CI/CD pipelines, Docker containerization, and Nginx/Linux DevOps"
        )
      ]
    },
    techStack: {
      title: "Core Proficiency",
      subtitle: "SPECIALIZED DOMAINS & PRODUCTION EXPERTISE",
      domains: [
        {
          title: "Backend Engineering",
          role: "Architecture & RESTful APIs",
          level: "Core Strength",
          icon: "fas fa-server",
          color: "indigo",
          desc: "Architecting resilient RESTful APIs, Clean Architecture, enterprise multisite systems, multi-tenancy, and high-performance server logic.",
          skills: [
            "PHP",
            "Laravel",
            "NodeJS",
            "RESTful API",
            "Clean Architecture"
          ]
        },
        {
          title: "Frontend Engineering",
          role: "Reactive UI & SPAs",
          level: "Modern UI",
          icon: "fas fa-laptop-code",
          color: "cyan",
          desc: "Building reactive, high-performance SPAs and interfaces with modern state management, responsive styling, and animations.",
          skills: ["Vue 3", "React", "TailwindCSS", "SCSS", "JavaScript ES6+"]
        },
        {
          title: "Database & Caching",
          role: "Storage & Query Optimization",
          level: "High Speed",
          icon: "fas fa-database",
          color: "amber",
          desc: "Relational and NoSQL schemas, database indexing, query fine-tuning, Redis caching layers, and Elasticsearch retrieval.",
          skills: [
            "MySQL",
            "MongoDB",
            "Redis",
            "Elasticsearch",
            "Query Tuning"
          ]
        },
        {
          title: "DevOps & Infrastructure",
          role: "Containerization & Cloud",
          level: "Production Ready",
          icon: "fas fa-cloud",
          color: "emerald",
          desc: "Docker containerization, Nginx reverse proxy, Cloudflare CDN/security, Linux server administration, and Git workflows.",
          skills: ["Docker", "Nginx", "Cloudflare", "Linux", "Git"]
        }
      ]
    },
    educationInfo: {
      title: "Education",
      schools: [
        {
          schoolName: "Can Tho University (CTU)",
          logo: require("../assets/images/ctuLogo.png"),
          subHeader: "Bachelor of Information Technology (Kỹ sư CNTT)",
          duration: "August 2019 - June 2024",
          desc: "Graduated with a Bachelor's Degree in Information Technology. Solid foundation in software engineering, system architecture, database design, telecommunications, and clean code practices.",
          descBullets: [
            "Specialized in Software Engineering & Application Development",
            "English B1 Certificate (2022) & TOEIC 600 (May 2023)"
          ]
        }
      ]
    },
    workExperiences: {
      title: "Work Experiences",
      experience: [
        {
          role: "Fullstack Developer & DevOps Engineer",
          company: "CÔNG TY TNHH VISUAL WEBER",
          companylogo: require("../assets/images/visualWeberLogo.png"),
          date: "July 2024 – Present · 2+ years",
          desc: "Designed system architecture, built backend APIs, and developed frontend for enterprise software products (Fintech, E-commerce, Healthcare).",
          descBullets: [
            "Worked directly with clients to gather requirements, analyze business logic, and propose suitable technical solutions for projects.",
            "Engineered scalable RESTful APIs, optimized database queries, and implemented caching mechanisms.",
            "Set up Docker environments, Nginx reverse proxy, and CI/CD pipelines ensuring high availability, security, and performance."
          ]
        },
        {
          role: "C/C++ & Telecom, Networking Intern",
          company: "TMA Solutions Binh Dinh",
          companylogo: require("../assets/images/tmaLogo.png"),
          date: "June 2023 – October 2023",
          desc: "Internship in telecommunication systems and low-level software engineering.",
          descBullets: [
            "Researched and familiarized with telecommunication network protocols.",
            "Participated in bug fixing and supported the development of software modules in C/C++ under mentorship."
          ]
        }
      ]
    },
    bigProjects: {
      title: "Highlighted Projects",
      subtitle: "KEY ENTERPRISE & PRODUCTION SYSTEMS ARCHITECTED AND DELIVERED",
      projects: [
        {
          image: require("../assets/images/thacoLogo.png"),
          projectName: "Thaco Auto Multi-Brand",
          role: "Enterprise Multisite & High-Traffic Architecture",
          projectDesc:
            "Developed and maintained an enterprise website system for THACO AUTO. Implemented a multisite architecture combined with Laravel Tenancy for synchronized data management across dozens of regional dealerships. Optimized Redis cache and fine-tuned database queries for fast response times and high stability under heavy B2B load.",
          techStack: [
            "PHP",
            "Vue 3",
            "MySQL",
            "Redis",
            "Docker",
            "Laravel Tenancy"
          ],
          btnText: "Visit Website",
          btnUrl: "https://thacoautotphcm.vn"
        },
        {
          image: require("../assets/images/pkhlLogo.png"),
          projectName: "PKHL (Hong Linh Clinic)",
          role: "Internal Hospital & Clinic ERP System",
          projectDesc:
            "Designed and developed comprehensive internal management software for the clinic. Digitized workflows including patient records, appointments, billing, inventory, and medical reporting. Leveraged Elasticsearch to enhance large-scale data retrieval speed and implemented strict multi-role security authorization.",
          techStack: [
            "Laravel",
            "Vue 3",
            "Elasticsearch",
            "Docker",
            "RESTful API"
          ],
          btnText: "Visit Website",
          btnUrl: "https://tieuhoaganhonglinh.vn"
        },
        {
          image: require("../assets/images/pullvnLogo.png"),
          projectName: "PULLVN CRM",
          role: "Omnichannel Lead & Customer Automation",
          projectDesc:
            "Developed a multi-channel CRM platform to automate lead capture and management from Facebook, Zalo, TikTok, Google Ads, and WebForms. Deeply integrated APIs with partner CRM/CMS systems, providing centralized conversations, detailed role-based access control, and automated customer care workflows.",
          techStack: ["Vue 3", "Laravel", "Docker", "Redis", "RESTful API"],
          btnText: "Visit Website",
          btnUrl: "https://apps.pull.vn"
        },
        {
          image: require("../assets/images/elevatorLogo.png"),
          projectName: "Online Elevator Platform",
          role: "Multi-Vendor B2B/B2C Marketplace",
          projectDesc:
            "Specialized Multi-Vendor e-commerce platform for the elevator industry. Enables diverse vendors to list products, components, and services with a smart automated quoting mechanism, optimizing connections and transactions between businesses and clients.",
          techStack: ["Vue 3", "Laravel", "Redis", "MultiVendor"],
          btnText: "Visit Website",
          btnUrl: "https://vnliftforum.com"
        },
        {
          image: require("../assets/images/tonGameLogo.png"),
          projectName: "TON Blockchain NFT Game",
          role: "Web3 Gaming & Smart Contract",
          projectDesc:
            "Participated in developing an NFT Game project on the TON Blockchain. Programmed and integrated Smart Contracts, and built an interactive user interface (frontend) ensuring a smooth gaming experience and secure Web3 wallet connections.",
          techStack: ["TON Blockchain", "Node.js", "React", "Smart Contract"],
          btnText: "GitHub / Web3",
          btnUrl: "https://github.com/thanhkien2001"
        }
      ]
    },
    achievementSection: {
      title: emoji("Achievements & Certifications 🏆"),
      subtitle: "Academic Degrees, Languages and Professional Credentials",
      cards: [
        {
          title: "TOEIC 600",
          subtitle:
            "Achieved TOEIC Score 600 (issued 05/2023), confirming effective working proficiency and technical communication in international Agile environments.",
          image: require("../assets/images/toeicLogo.png"),
          imageAlt: "TOEIC 600 Certificate",
          tagText: "Score 600 (05/2023)",
          tagUrl: ""
        },
        {
          title: "English B1 Certificate",
          subtitle:
            "Certified English Level B1 (issued 2022) according to the CEFR framework.",
          image: require("../assets/images/englishB1Logo.png"),
          imageAlt: "English B1 Certificate",
          tagText: "Certified (2022)",
          tagUrl: ""
        },
        {
          title: "Bachelor of Information Technology",
          subtitle:
            "Graduated from Can Tho University (CTU) with Bachelor's Degree in Information Technology (Kỹ sư Công Nghệ Thông Tin) (2019 - 2024).",
          image: require("../assets/images/ctuLogo.png"),
          imageAlt: "Can Tho University Degree",
          tagText: "Can Tho University",
          tagUrl: "https://www.ctu.edu.vn"
        }
      ]
    },
    contact: {
      title: "Reach Out to me!",
      subtitle:
        "Discuss a project, full-time opportunity, or just want to say hi? My inbox is always open!",
      hireableText: "Open for opportunities",
      occupiedText: "Currently occupied",
      bio: "Fullstack Developer with 2+ years of experience in Web/Mobile App development, enterprise ERP systems, and high-performance RESTful APIs.",
      locationLabel: "Location",
      locationVal: "Quang Ngai, Vietnam",
      phoneLabel: "Phone",
      emailLabel: "Email",
      socialLabel: "Connect with me:"
    },
    footer: {
      madeWith: "Made with ❤️ by Chế Thanh Kiên"
    }
  },

  vi: {
    nav: {
      skills: "Kỹ năng",
      education: "Học vấn",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      achievements: "Chứng chỉ",
      resume: "Hồ sơ CV",
      contact: "Liên hệ"
    },
    greeting: {
      username: "Chế Thanh Kiên",
      title: "Xin chào, tôi là Kiên",
      subTitle: emoji(
        "Fullstack Developer với hơn 2 năm kinh nghiệm phát triển Web/Mobile App và hệ thống RESTful API 🚀. Từng trực tiếp xây dựng, vận hành các hệ thống Production quy mô lớn (Fintech, E-commerce, Blockchain). Thành thạo quy trình SDLC, CI/CD và làm việc hiệu quả trong môi trường Agile quốc tế. Thiết kế kiến trúc sạch (Clean Architecture), chú trọng tối ưu hiệu suất và chất lượng mã nguồn."
      ),
      contactBtn: "Liên hệ tôi",
      resumeBtn: "Tải CV tiếng Việt",
      resumeFileName: "Che_Thanh_Kien_Fullstack_Developer_VN.pdf",
      resumeFile: "/Che_Thanh_Kien_Fullstack_Developer_VN.pdf",
      displayGreeting: true
    },
    skillsSection: {
      title: "Lĩnh vực chuyên môn",
      subTitle:
        "FULLSTACK DEVELOPER CHUYÊN XÂY DỰNG WEB APIS, CLEAN ARCHITECTURE & HIỆU SUẤT CAO",
      skills: [
        emoji(
          "⚡ Phát triển giao diện người dùng (Frontend & UI) mượt mà, tối ưu hiệu năng với Vue 3, React, TailwindCSS và SCSS"
        ),
        emoji(
          "⚡ Thiết kế kiến trúc hệ thống và xây dựng backend RESTful API mạnh mẽ bằng PHP (Laravel), NodeJS và Clean Architecture"
        ),
        emoji(
          "⚡ Thiết kế cơ sở dữ liệu tốc độ cao, lập chỉ mục, tầng đệm Redis cache và tìm kiếm toàn văn Elasticsearch"
        ),
        emoji(
          "⚡ Triển khai kiến trúc multisite & multi-tenancy cho doanh nghiệp, quy trình CI/CD, Docker hóa và quản trị máy chủ Nginx/Linux"
        )
      ]
    },
    techStack: {
      title: "Năng lực cốt lõi",
      subtitle: "CÁC MẢNG CHUYÊN MÔN & KINH NGHIỆM PRODUCTION",
      domains: [
        {
          title: "Phát triển Backend",
          role: "Kiến trúc hệ thống & RESTful API",
          level: "Thế mạnh cốt lõi",
          icon: "fas fa-server",
          color: "indigo",
          desc: "Thiết kế RESTful API mở rộng, Clean Architecture, hệ thống multisite cho doanh nghiệp, kiến trúc multi-tenancy và tối ưu hóa xử lý phía server.",
          skills: [
            "PHP",
            "Laravel",
            "NodeJS",
            "RESTful API",
            "Clean Architecture"
          ]
        },
        {
          title: "Phát triển Frontend",
          role: "Giao diện Reactive & SPAs",
          level: "Giao diện hiện đại",
          icon: "fas fa-laptop-code",
          color: "cyan",
          desc: "Xây dựng ứng dụng đơn trang (SPA) phản hồi nhanh, giao diện tương tác cao với quản lý trạng thái hiện đại, thiết kế đáp ứng (responsive) và hiệu ứng mượt mà.",
          skills: ["Vue 3", "React", "TailwindCSS", "SCSS", "JavaScript ES6+"]
        },
        {
          title: "Cơ sở dữ liệu & Caching",
          role: "Lưu trữ & Tối ưu truy vấn",
          level: "Tốc độ xử lý cao",
          icon: "fas fa-database",
          color: "amber",
          desc: "Thiết kế mô hình dữ liệu quan hệ và NoSQL, đánh chỉ mục (indexing), tinh chỉnh truy vấn, tầng đệm Redis cache và tìm kiếm dữ liệu lớn Elasticsearch.",
          skills: [
            "MySQL",
            "MongoDB",
            "Redis",
            "Elasticsearch",
            "Query Tuning"
          ]
        },
        {
          title: "DevOps & Hạ tầng Cloud",
          role: "Docker hóa & Máy chủ",
          level: "Sẵn sàng Production",
          icon: "fas fa-cloud",
          color: "emerald",
          desc: "Đóng gói ứng dụng với Docker, cấu hình reverse proxy Nginx, tối ưu bảo mật & CDN Cloudflare, quản trị máy chủ Linux và quy trình tự động hóa Git CI/CD.",
          skills: ["Docker", "Nginx", "Cloudflare", "Linux", "Git"]
        }
      ]
    },
    educationInfo: {
      title: "Học vấn & Bằng cấp",
      schools: [
        {
          schoolName: "Trường Đại Học Cần Thơ (CTU)",
          logo: require("../assets/images/ctuLogo.png"),
          subHeader: "Kỹ sư Công Nghệ Thông Tin (Bachelor of IT)",
          duration: "08/2019 – 06/2024",
          desc: "Tốt nghiệp Kỹ sư ngành Công nghệ Thông tin. Nền tảng vững chắc về kỹ thuật phần mềm, cấu trúc dữ liệu giải thuật, kiến trúc hệ thống, viễn thông mạng và nguyên lý viết mã sạch.",
          descBullets: [
            "Chuyên sâu Kỹ thuật phần mềm & Phát triển ứng dụng Web/Mobile",
            "Chứng chỉ Tiếng Anh B1 (2022) & TOEIC 600 (05/2023)"
          ]
        }
      ]
    },
    workExperiences: {
      title: "Kinh nghiệm làm việc",
      experience: [
        {
          role: "Fullstack Developer & DevOps Engineer",
          company: "CÔNG TY TNHH VISUAL WEBER",
          companylogo: require("../assets/images/visualWeberLogo.png"),
          date: "07/2024 – Hiện tại · 2+ năm",
          desc: "Thiết kế kiến trúc hệ thống, xây dựng backend API và phát triển frontend cho các sản phẩm phần mềm của khách hàng doanh nghiệp (Fintech, E-commerce, Y tế).",
          descBullets: [
            "Thiết kế kiến trúc hệ thống, xây dựng backend API và phát triển frontend cho các sản phẩm phần mềm doanh nghiệp.",
            "Làm việc trực tiếp với khách hàng để tiếp nhận yêu cầu, phân tích nghiệp vụ và đề xuất giải pháp kỹ thuật tối ưu.",
            "Cấu hình môi trường Docker, reverse proxy Nginx và thiết lập luồng CI/CD đảm bảo hệ thống vận hành liên tục, an toàn và hiệu năng cao."
          ]
        },
        {
          role: "Thực tập sinh C/C++ & Telecom, Networking",
          company: "TMA Solutions Binh Dinh",
          companylogo: require("../assets/images/tmaLogo.png"),
          date: "06/2023 – 10/2023",
          desc: "Thực tập nghiên cứu hệ thống viễn thông và lập trình module phần mềm cấp thấp.",
          descBullets: [
            "Nghiên cứu và làm quen với các giao thức mạng viễn thông.",
            "Tham gia fix bug và hỗ trợ phát triển một số module phần mềm bằng C/C++ dưới sự hướng dẫn của mentor."
          ]
        }
      ]
    },
    bigProjects: {
      title: "Dự án nổi bật",
      subtitle: "CÁC HỆ THỐNG DOANH NGHIỆP & PRODUCTION QUY MÔ LỚN ĐÃ THỰC HIỆN",
      projects: [
        {
          image: require("../assets/images/thacoLogo.png"),
          projectName: "Thaco Auto Đa Thương Hiệu",
          role: "Kiến trúc Multisite & Lưu lượng lớn",
          projectDesc:
            "Phát triển và bảo trì hệ thống website doanh nghiệp cho THACO AUTO. Áp dụng kiến trúc multisite kết hợp Laravel Tenancy để quản lý đồng bộ dữ liệu cho hệ thống gồm hàng chục đại lý phân phối theo khu vực. Tối ưu hóa hiệu suất với Redis cache và tinh chỉnh truy vấn cơ sở dữ liệu, đảm bảo thời gian phản hồi nhanh chóng và hệ thống vận hành ổn định dưới tải trọng B2B lớn.",
          techStack: [
            "PHP",
            "Vue 3",
            "MySQL",
            "Redis",
            "Docker",
            "Laravel Tenancy"
          ],
          btnText: "Xem website",
          btnUrl: "https://thacoautotphcm.vn"
        },
        {
          image: require("../assets/images/pkhlLogo.png"),
          projectName: "PKHL (Phòng Khám Gan Mật Hồng Lĩnh)",
          role: "Phần mềm ERP Quản lý Phòng khám",
          projectDesc:
            "Thiết kế và phát triển phần mềm quản lý nội bộ toàn diện cho phòng khám. Số hóa và tối ưu hóa các quy trình nghiệp vụ: quản lý hồ sơ bệnh nhân, lịch hẹn, thanh toán, tồn kho và xuất báo cáo y tế. Ứng dụng Elasticsearch để nâng cao tốc độ truy xuất dữ liệu lớn và xây dựng cơ chế phân quyền bảo mật chặt chẽ cho từng nhóm đối tượng sử dụng.",
          techStack: [
            "Laravel",
            "Vue 3",
            "Elasticsearch",
            "Docker",
            "RESTful API"
          ],
          btnText: "Xem website",
          btnUrl: "https://tieuhoaganhonglinh.vn"
        },
        {
          image: require("../assets/images/pullvnLogo.png"),
          projectName: "PULLVN CRM",
          role: "Tự động hóa Khách hàng & Lead Đa kênh",
          projectDesc:
            "Phát triển nền tảng CRM đa kênh, tự động hóa quy trình thu thập và quản lý khách hàng tiềm năng (leads) từ nhiều nguồn (Facebook, Zalo, TikTok, Google Ads, WebForms). Tích hợp sâu API với các hệ thống CRM/CMS đối tác, cung cấp giải pháp quản lý hội thoại tập trung, phân quyền chi tiết và thiết lập các luồng tự động hóa chăm sóc khách hàng.",
          techStack: ["Vue 3", "Laravel", "Docker", "Redis", "RESTful API"],
          btnText: "Xem website",
          btnUrl: "https://apps.pull.vn"
        },
        {
          image: require("../assets/images/elevatorLogo.png"),
          projectName: "Sàn Giao Dịch Thang Máy Trực Tuyến",
          role: "Sàn TMĐT B2B/B2C Multi-Vendor",
          projectDesc:
            "Phát triển nền tảng thương mại điện tử mô hình Multi-Vendor chuyên biệt cho ngành thang máy. Cung cấp hệ thống cho phép đa dạng nhà cung cấp đăng bán sản phẩm, linh kiện và dịch vụ. Thiết kế cơ chế báo giá tự động thông minh, tối ưu hóa quá trình kết nối và giao dịch giữa doanh nghiệp và khách hàng.",
          techStack: ["Vue 3", "Laravel", "Redis", "MultiVendor"],
          btnText: "Xem website",
          btnUrl: "https://vnliftforum.com"
        },
        {
          image: require("../assets/images/tonGameLogo.png"),
          projectName: "TON Blockchain NFT Game",
          role: "Game Web3 & Smart Contract",
          projectDesc:
            "Tham gia phát triển dự án Game NFT trên nền tảng TON Blockchain. Lập trình và tích hợp Smart Contract, đồng thời xây dựng giao diện tương tác người dùng (frontend) đảm bảo trải nghiệm chơi game mượt mà và kết nối ví Web3 an toàn.",
          techStack: ["TON Blockchain", "Node.js", "React", "Smart Contract"],
          btnText: "Xem GitHub / Web3",
          btnUrl: "https://github.com/thanhkien2001"
        }
      ]
    },
    achievementSection: {
      title: emoji("Chứng chỉ & Bằng cấp 🏆"),
      subtitle: "Bằng đại học, Ngoại ngữ và Chứng chỉ chuyên môn",
      cards: [
        {
          title: "TOEIC 600",
          subtitle:
            "Đạt điểm số TOEIC 600 (cấp tháng 05/2023), khẳng định khả năng giao tiếp, đọc hiểu tài liệu kỹ thuật và làm việc hiệu quả trong môi trường quốc tế / Agile.",
          image: require("../assets/images/toeicLogo.png"),
          imageAlt: "Chứng chỉ TOEIC 600",
          tagText: "Điểm 600 (05/2023)",
          tagUrl: ""
        },
        {
          title: "Chứng chỉ Tiếng Anh B1",
          subtitle:
            "Chứng chỉ trình độ Tiếng Anh B1 (cấp năm 2022) theo khung tham chiếu châu Âu (CEFR).",
          image: require("../assets/images/englishB1Logo.png"),
          imageAlt: "Chứng chỉ B1 Tiếng Anh",
          tagText: "Đạt chuẩn (2022)",
          tagUrl: ""
        },
        {
          title: "Kỹ sư Công Nghệ Thông Tin",
          subtitle:
            "Tốt nghiệp Trường Đại Học Cần Thơ (CTU) - Khoa Công nghệ Thông tin & Truyền thông (2019 - 2024).",
          image: require("../assets/images/ctuLogo.png"),
          imageAlt: "Bằng Kỹ sư Đại học Cần Thơ",
          tagText: "Đại học Cần Thơ",
          tagUrl: "https://www.ctu.edu.vn"
        }
      ]
    },
    contact: {
      title: "Kết nối với tôi!",
      subtitle:
        "Trao đổi về cơ hội việc làm Fullstack, dự án doanh nghiệp hoặc trao đổi kỹ thuật? Hộp thư của tôi luôn sẵn sàng chào đón bạn!",
      hireableText: "Sẵn sàng đón nhận cơ hội mới",
      occupiedText: "Đang bận dự án",
      bio: "Kỹ sư Lập trình Fullstack với 2+ năm kinh nghiệm phát triển Web/Mobile App, hệ thống ERP quản trị và RESTful API hiệu năng cao.",
      locationLabel: "Địa chỉ",
      locationVal: "Quảng Ngãi, Việt Nam",
      phoneLabel: "Điện thoại",
      emailLabel: "Email",
      socialLabel: "Kết nối mạng xã hội:"
    },
    footer: {
      madeWith: "Được tạo với ❤️ bởi Chế Thanh Kiên"
    }
  }
};

export default translations;
