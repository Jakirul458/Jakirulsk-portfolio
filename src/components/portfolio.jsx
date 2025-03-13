import React, { useState, useEffect } from "react";
import "./portfolio.css";
// import profile from "src/assets/profile.jpg";
import profile from '../assets/profile.jpg';
// import hoby from 'src/assets/hoby.jpg';
import hoby from '../assets/hoby.jpg';

export default function Portfolio() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const linkUrl = "https://gfst-frontend.vercel.app/login";

    // Handle scroll event for navbar styling and active section detection
    useEffect(() => {
        const handleScroll = () => {
            // Update navbar styling on scroll
            setIsScrolled(window.scrollY > 50);

            // Determine active section based on scroll position
            const sections = ["home", "about", "education", "skills", "projects", "contact"];
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 200) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking on a nav link
    const handleNavClick = () => {
        setMenuOpen(false);
    };

    // Projects data
    const projects = [
        {
            id: 1,
            title: "Golden Future Supportive Trust ",
            description: " Full stack application for managing user transactions. Built with MERN stack, featuring user authentication, role-based access control, transaction tracking, and responsive dashboard.",
            image: "/api/placeholder/600/300",
            techStack: [" React", "Node.js", "Express", "MongoDB", "JWT", "javaScript"],
            demoLink: "https://gfst-frontend.vercel.app/login",
            githubLink: "https://github.com/Jakirul458/gfst-frontend"
            
        },
        {
            id: 2,
          
            title: "Multi-Platform Search Utility ",
            description: " Tool to search Google, YouTube, and ChatGPT simultaneously. Streamlines research process by providing results from multiple platforms in a single interface with custom filtering options.",
            image: "/api/placeholder/600/300",
            techStack: [" React ", "Next.js ", "RESTful APIs ", "Vercel "],
            demoLink: "https://multi-platform-search-utility.vercel.app/",
            githubLink: "https://github.com/Jakirul458/Multi-Platform-Search-Utility"
        },
        // {
        //   id: 3,
        //   title: "E-Commerce Platform",
        //   description: "Comprehensive e-commerce solution with product management, user authentication, cart functionality, payment integration, and order tracking.",
        //   image: "/api/placeholder/600/300",
        //   techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS S3"],
        //   demoLink: "#",
        //   githubLink: "#"
        // }
    ];

    // Skills data organized by category with unique skills
    const skills = {
        frontend: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        ],
        backend: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        ],
        database: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        ],
        devTools: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
            { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
        ],
    };





    return (
        <div className="portfolio-container">
            {/* Navbar */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar-content">
                        <div className="logo">
                            <a href="#home">JS</a>
                        </div>
                        {/* <div className="logo">
                            <a href="#home">
                                <img src="src/assets/profile.jpg" alt="Logo" className="logo-img" />
                            </a>
                        </div> */}


                        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                            <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                            <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={handleNavClick}>Home</a></li>
                            <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={handleNavClick}>About</a></li>
                            <li><a href="#education" className={activeSection === "education" ? "active" : ""} onClick={handleNavClick}>Education</a></li>
                            <li><a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={handleNavClick}>Skills</a></li>
                            <li><a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={handleNavClick}>Projects</a></li>
                            <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={handleNavClick}>Contact</a></li>
                            {/* <li className="resume-button">
                <a href="/Enhanced_Resume_Jakirul_Sk.pdf" download className="btn-primary" onClick={handleNavClick}>Resume</a>
              </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>
                                <span className="greeting">Hello, I'm </span>
                                <span className="name">Jakirul Sk, </span>
                                <span className="title">Full Stack Developer</span>
                            </h1>
                            <p className="subtitle">I build responsive web applications with the MERN stack</p>
                            <div className="hero-cta">
                                <a href={linkUrl} className="btn-primary">View My Work </a>
                                <a href="#contact" className="btn-secondary">Contact Me</a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src={profile} alt="Jakirul Sk" className="profile-image" />
                            {/* <img src={profile} alt="Jakirul Sk" /> */}
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/jakirul458" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Jakirul458" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://leetcode.com/u/Jakirul_Sk/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fas fa-code"></i>
                        </a>
                        <a href="mailto:rimon458jacky@gmail.com" className="social-icon">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="scroll-down">
                    <a href="#about">
                        <span className="mouse">
                            <span className="wheel"></span>
                        </span>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section about-section">
                <div className="container">
                    <div className="section-header">
                        <h2>About Me</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="about-content">
                        <div className="about-image">
                            {/* <div className="image-frame">
                                <img src="/hoby.jpg" alt="Jakirul Sk" />
                            </div> */}
                            <img src={hoby} alt="Jakirul Sk" />
                        </div>

                        <div className="about-text">
                            <h3>Web Developer & Problem Solver</h3>
                            <p>
                                I'm a Full Stack Developer with a passion for creating efficient, scalable, and user-friendly
                                web applications. With expertise in the MERN stack, I bring ideas to life through clean code
                                and thoughtful design.
                            </p>
                            <p>
                                My journey in web development began during my undergraduate studies, where I developed a
                                strong foundation in computer science principles. Since then, I've honed my skills through
                                personal projects and professional experiences, focusing on building applications that solve
                                real-world problems.
                            </p>
                            {/* <div className="about-stats">
                                <div className="stat">
                                    <span className="stat-value">3+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">10+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">5+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                            </div> */}
                            <div className="about-cta">
                                <a href="/Resume_Jakirul_Sk.pdf" download className="btn-primary"> Resume </a>
                                <a href="#contact" className="btn-secondary">Let's Talk</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="section education-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Education & Qualifications</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">2022 - 2025</div>
                                <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                                <h4>Maulana Abul Kalam Azad University of Technology</h4>
                                <p>
                                    Graduated with honors, focusing on algorithms, data structures, and web development.
                                    Key courses included Database Management Systems, Object-Oriented Programming, and Software Engineering.
                                </p>
                            </div>
                        </div>
                        {/* <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">2016 - 2018</div>
                                <h3>Higher Secondary Education in Science</h3>
                                <h4>Jhargram Raj College</h4>
                                <p>
                                    Completed with distinction in Mathematics, Physics, and Computer Science.
                                    Participated in regional science competitions and programming challenges.
                                </p>

                            </div>
                        </div> */}

                        {/* <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">2023</div>
                                <h3>Full Stack Web Development Certification</h3>
                                <h4>Online Certification Program</h4>
                                <p>
                                    Intensive program covering modern web development technologies including React, Node.js,
                                    Express, and MongoDB. Completed multiple projects with real-world applications.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section skills-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Technical Skills</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="skills-content">
                        <div className="skills-category">
                            <h3>Frontend Development</h3>
                            <div className="skills-grid">
                                <div className="skills-container">
                                    {skills.frontend.map((skill) => (
                                        <img key={skill.name} src={skill.icon} alt={skill.name} className="skill-icon" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="skills-category">
                            <h3>Backend Development</h3>
                            <div className="skills-grid">
                                <div className="skills-grid">
                                    <div className="skills-container">
                                        {skills.backend.map((skill) => (
                                            <img key={skill.name} src={skill.icon} alt={skill.name} className="skill-icon" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-category">
                            <h3>Database & Storage</h3>
                            <div className="skills-grid">
                                <div className="skills-grid">
                                    <div className="skills-container">
                                        {skills.database.map((skill) => (
                                            <img key={skill.name} src={skill.icon} alt={skill.name} className="skill-icon" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-category">
                            <h3>DevOps & Tools</h3>
                            <div className="skills-grid">
                                <div className="skills-grid">
                                    <div className="skills-container">
                                        {skills.devTools.map((skill) => (
                                            <img key={skill.name} src={skill.icon} alt={skill.name} className="skill-icon" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section projects-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Projects</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div className="project-card" key={project.id}>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-links">
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="fas fa-external-link-alt"></i> Live Demo 
                                        </a>
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="fab fa-github"></i> Source Code 
                                        </a>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.techStack.map((tech, index) => (
                                            <span className="tech-tag" key={index}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="projects-cta">
                        <a href="https://github.com/Jakirul458" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            See More Projects <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section contact-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Get In Touch</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Email</h3>
                                    <p>uniuqe369alan@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Phone</h3>
                                    <p>+91 6294527072</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Location</h3>
                                    <p>West Bengal, India</p>
                                </div>
                            </div>
                            <div className="contact-social">
                                <h3>Connect With Me</h3>
                                <div className="social-icons">
                                    <a href="https://linkedin.com/in/jakirul458" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/Jakirul458" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://leetcode.com/u/Jakirul_Sk/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <i className="fas fa-code"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h3>Send Me a Message</h3>
                            <form id="contactForm">
                                <div className="form-group">
                                    <input type="text" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <h3>Jakirul Sk</h3>
                            <p>Full Stack Developer</p>
                        </div>
                        <div className="footer-links">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="footer-social">
                            <a href="https://linkedin.com/in/jakirul458" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Jakirul458" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://leetcode.com/u/Jakirul_Sk/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fas fa-code"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Jakirul Sk. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Scroll to top button */}
            <a href="#home" className="scroll-top">
                <i className="fas fa-chevron-up"></i>
            </a>
        </div>
    );
}