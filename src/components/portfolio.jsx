import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./portfolio.css";
import profile from '../assets/profile.jpg';
import profileImg from "../assets/profile.jpg";
import about from '../assets/about.jpg';
import gfst from '../assets/gfst.svg';
import multiSearch from "../assets/multiSearch.svg";
import img1 from "../assets/hobby/img1.jpg";
import img2 from "../assets/hobby/img2.jpg";
import img3 from "../assets/hobby/img3.jpg";
import img4 from "../assets/hobby/img4.jpg";
import img5 from "../assets/hobby/img5.jpg";
import img6 from "../assets/hobby/img6.jpg";
import img7 from "../assets/hobby/img7.jpg";
import img8 from "../assets/hobby/img8.jpg";
import img9 from "../assets/hobby/img9.jpg";
import img10 from "../assets/hobby/img10.jpg";
import img11 from "../assets/hobby/img11.jpg";
import img12 from "../assets/hobby/img12.jpg";
import img13 from "../assets/hobby/img13.jpg";
import img14 from "../assets/hobby/img14.jpg";
import img15 from "../assets/hobby/img15.jpg";

export default function Portfolio() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const linkUrl = "https://github.com/Jakirul458";
    useEffect(() => {
        const handleScroll = () => {

            setIsScrolled(window.scrollY > 50);
            const sections = ["home", "about", "education", "skills", "projects", "hobby", "contact"];
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
    const handleNavClick = () => {
        setMenuOpen(false);
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        drive_link: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: form,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", subject: "", message: "", drive_link: "" });
                } else {
                    alert("Failed to send message. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

    const CustomPrevArrow = ({ onClick }) => (
        <button className="custom-prev" onClick={onClick}>
            &#10094;
        </button>
    );
    const CustomNextArrow = ({ onClick }) => (
        <button className="custom-next" onClick={onClick}>
            &#10095;
        </button>
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };


    const projects = [
        {
            id: 1,
            title: "Golden Future Supportive Trust",
            description:
                "Full stack application for managing user transactions. Built with MERN stack, featuring user authentication, role-based access control, transaction tracking, and responsive dashboard.",
            image: gfst,
            techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "JavaScript",],
            demoLink: "https://gfst-frontend.vercel.app/login",
            githubLink: "https://github.com/Jakirul458/gfst-frontend",
        },
        {
            id: 2,
            title: "Multi-Platform Search Utility",
            description:
                "Tool to search Google, YouTube, and ChatGPT simultaneously. Streamlines research process by providing results from multiple platforms in a single interface with custom filtering options.",
            image: multiSearch,
            techStack: ["React", "JavaScript"],
            demoLink: "https://multi-platform-search-utility.vercel.app/",
            githubLink: "https://github.com/Jakirul458/Multi-Platform-Search-Utility",
        },
    ];

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
            { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
            { name: "Postman API", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" }
        ],
    };

    return (
        <div className="portfolio-container">
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar-content">
                        <div className="logo">
                            <a href="#home">JS</a>
                            {/* <img src={profileImg} alt="Logo" className="logo-img" /> */}
                        </div>
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
                            <li><a href="#hobby" className={activeSection === "hobby" ? "active" : ""} onClick={handleNavClick}>Hobby</a></li>
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

            <section id="about" className="about-section">
                <div className="container">
                    <div className="section-header">
                        <h2>About Me</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="about-content">
                        {/* About Card */}
                        <div className="about-card">
                            <div className="about-image">
                                <img src={about} alt="Jakirul Sk" />
                            </div>

                            <div className="about-text">
                                <h3>Full Stack Developer</h3>
                                <p>
                                    I'm a Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications.
                                    With expertise in the MERN stack, I bring ideas to life through clean code and thoughtful design.
                                </p>
                                <p>
                                    My journey in web development began during my undergraduate studies, where I developed a strong foundation in computer science principles.
                                    Since then, I've honed my skills through personal projects and professional experiences, focusing on building applications that solve real-world problems.
                                </p>

                                <div className="about-cta">
                                    <a href="#contact" className="btn-secondary">
                                        Let's Talk
                                    </a>
                                </div>
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

                            <div className="timeline-content">
                                <div className="timeline-date">2022 - 2025</div>
                                <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                                <h4>kalyani Government Engineering College <br />Under the <br /></h4>
                                <h4>Maulana Abul Kalam Azad University of Technology</h4>
                                <p>
                                    Graduated with honors, focusing on algorithms, data structures, and web development.
                                    Key courses included Database Management Systems, Object-Oriented Programming, and Software Engineering.
                                </p>
                            </div>

                        </div>

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
                                    <img src={project.image} alt={project.title} width="200" />
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

            {/* Hobby Section */}
            <section id="hobby" className="section hobby-section">
                <div className="container">
                    <div className="section-header">
                        <h2>My Hobby</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="hobby-content">
                        <div className="hobby-image">
                            <Slider {...settings}>
                                {images.map((img, index) => (
                                    <div key={index} className="slider-item">
                                        <img src={img} alt={`Ride ${index + 1}`} className="slider-image" />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        <div className="hobby-text">
                            <h3>Bike Riding</h3>
                            <p>
                                I love bike riding, exploring breathtaking landscapes, and experiencing the thrill of long journeys.
                                The open road gives me a sense of freedom and adventure.
                                Riding through the curves, feeling the rush as the mountains call and our bike answers with every turn!
                            </p>
                            <p>
                                My previous rides include thrilling trips to Jharkhand, Purulia, Sikkim, and Meghalaya
                                each offering unique beauty and unforgettable experiences.
                            </p>

                            <div className="hobby-cta">
                                <a href="#contact" className="btn-primary">Let's Ride Together</a>
                            </div>
                        </div>
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
                                    <p>jakirulsk312@gmail.com</p>
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
                        </div>

                        <div className="contact-social">
                            <h4>Connect With Me</h4>
                            <div className="social-icons">
                                <a href="https://linkedin.com/in/jakirul458" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/Jakirul458" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://leetcode.com/u/Jakirul_Sk/" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-code"></i>
                                </a>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h3>Drop me a message</h3>
                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="access_key" value="e960a4c6-cee5-42d6-95f7-1d7ad29cb908" />

                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="url" name="drive_link" placeholder="If you want to attach a file, please provide a drive link." value={formData.drive_link} onChange={handleChange} />
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
                            <a href="#home">Home </a>
                            <a href="#about">About </a>
                            <a href="#skills">Skills </a>
                            <a href="#projects">Projects </a>
                            <a href="#hobby">Hobby </a>
                            <a href="#contact">Contact </a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Jakirul Sk. All rights reserved.</p>
                    </div>
                </div>
            </footer>          
            <a href="#home" className="scroll-top">
                <i className="fas fa-chevron-up"></i>
            </a>
        </div>
    );
}