import React from 'react';
import '../styles/CV.css';

const CV = () => {
    const cvData = {
        personal: {
            name: 'Indo Halim',
            title: 'Web Fullstack Developer',
            birthPlace: 'Jakarta',
            birthDate: '12 October 1987',
            gender: 'Male',
            maritalStatus: 'Single',
            email: 'mde50526@gmail.com',
            phone: '+6281999041167 (whatsapp)',
            linkedin: 'linkedin.com/in/indo-halim'
        },
        summary: 'Experienced Frontend Developer with 4 years of experience in building responsive and user-friendly applications. Skilled in writing clean, well-structured, and scalable code with a strong focus on security and pixel-perfect implementation. Proven ability to standardize code practices across teams for maintainability and performance. In addition to frontend expertise, also familiar with backend concepts and programming in Rust. Currently exploring and interested in learning artificial intelligence to expand problem-solving capabilities and system design knowledge.',
        education: [
            {
                type: 'Non Formal Education',
                school: 'Hacktiv8 Coding Bootcamp',
                degree: 'Fullstack Web Development Javascript',
                year: '2021',
                grade: 'Grade: 95%'
            },
            {
                type: 'Formal Education',
                school: "King's College, University of London",
                degree: "Bachelor's in Computer Engineering",
                year: '2006 - 2009',
                grade: 'Grade: Upper second class degree (or equal to GPA 3.3+)'
            }
        ],
        experiences: [
            {
                title: 'Web Developer - Front End',
                company: 'Astra International',
                duration: '2026 May - Present',
                duties: [
                    'Developed and maintained responsive Content Management System (CMS) platforms and corporate websites using React.js and TypeScript.',
                    'Translated Figma designs into pixel-perfect, responsive, and reusable user interfaces.',
                    'Collaborated closely with backend engineers to integrate REST APIs and ensure seamless frontend-backend communication.',
                    'Performed bug fixing, troubleshooting, and performance optimization to improve application stability and user experience.',
                    'Conducted code reviews to maintain high code quality, consistency, and best practices.',
                    'Utilized AI-assisted development tools such as Claude to accelerate implementation, debugging, and code quality improvements.',
                    'Worked within an Agile development environment, participating in planning, implementation, testing, and deployment activities.'
                ]
            },
            {
                title: 'Web Developer - Front End',
                company: 'Telkom Indonesia',
                duration: '2021 May - 2025 March',
                duties: [
                    'Designed, built, and maintained web applications focusing on user interfaces and responsive design.',
                    'Worked closely with cross-functional teams, including backend and QA engineers, to ensure smooth integration.',
                    'Testing and debugging to ensure flawless performance.',
                    'Code reviews to uphold high coding standards. Wrote well-structured and easy-to-maintain code.',
                    'Mentored junior frontend developers, enhancing their technical skills and project contributions.',
                    'Developed UI components with pixel-perfect accuracy.'
                ]
            },
            {
                title: 'Mentor Samsung Solve For Tomorrow',
                company: 'Samsung',
                duration: '2025 Jun - 2025 Sep',
                duties: [
                    'Mentored students in a STEM-based innovation competition focused on problem-solving and creating positive social and environmental impact.',
                    'Facilitated workshops on Design Thinking, teamwork, and 4C skills (Communication, Collaboration, Critical Thinking, Creativity).',
                    'Supported participants with AI and digital training while sharing practical insights alongside Samsung experts and partners.'
                ]
            },
            {
                title: 'Web Designer',
                company: 'Self-Employed',
                duration: '2019 Feb - 2020 Nov',
                duties: [
                    'Designed and developed visually appealing, responsive websites using HTML, CSS, and JavaScript, ensuring optimal performance across all devices.',
                    'Focused on user experience by keeping designs simple, clean, and easy to use.',
                    'Improved site speed and performance by optimizing code, images, and assets.',
                    'Regularly updated websites with new content, features, or design tweaks based on feedback.'
                ]
            },
            {
                title: 'Construction Manager',
                company: 'PT Hawila Berkat Anugrah',
                duration: '2010 Jan - 2019 Jan',
                duties: [
                    'Managed construction-related projects in coordination with the operational department to support building development and functionality.',
                    'Organize project timelines, resources, and contractor coordination to ensure on-time and within-budget delivery.',
                    'Led on-site coordination to resolve issues, mitigate risks, and maintain workflow continuity during critical project phases.',
                    'Explored and analyzed waste disposal processes within a factory setting to add potential business development.'
                ]
            }
        ],
        projects: [
            {
                title: 'Central Management System',
                company: 'Astra International',
                role: 'Frontend',
                description: 'Developed a Central Management System for Astra International using React.js and TypeScript, focusing on creating a responsive interface that integrates seamlessly with backend services.'
            },
            {
                title: 'Identity and Access Management System',
                company: 'Telkom Indonesia',
                role: 'Frontend',
                description: 'Designed and Developed Identity and Access Management service using RBAC method using Rust as its programming language and framework frontend Yew.rs'
            },
            {
                title: 'Pijar (Online School Website)',
                company: 'Telkom Indonesia',
                role: 'Frontend Developer',
                description: 'Developed a feature for an educational application, ensuring compliance with regulatory coding standards and best practices.'
            },
            {
                title: 'Standardization Project',
                company: 'Telkom Indonesia',
                role: 'Frontend Developer',
                description: 'Designed and provided best practices and documentation for writing secure code, ensuring the protection of applications and systems from potential threats.'
            },
            {
                title: 'Ina Digital',
                company: 'Telkom Indonesia',
                role: 'Frontend Developer',
                description: 'Worked on government application projects using Next.js and TypeScript for development.'
            },
            {
                title: 'Jakarta Tango Marathon',
                company: 'Self-Employed',
                role: 'Product Owner',
                description: 'Designed, managed and developed website for a structured event. Check it on jakartatangomarathon.com'
            }
        ],
        achievements: [
            {
                title: 'Improved in Development Efficiency',
                description: 'By implementing a method to structure codes in programming language Rust'
            }
        ],
        skills: [
            'HTML/CSS',
            'Javascript',
            'Typescript',
            'React JS',
            'Next JS',
            'Vue JS',
            'Yew',
            'Rust',
            'Node JS/Express',
            'PostgreSQL',
            'Redis',
            'Socket IO'
        ]
    };

    return (
        <div className="cv-container">
            <div className="cv-page">
                {/* Header Section */}
                <div className="cv-header">
                    <div className="header-left">
                        <h1 className="cv-name">{cvData.personal.name}</h1>
                        <p className="cv-title">{cvData.personal.title}</p>
                        <div className="header-contact">
                            <span>{cvData.personal.birthPlace}</span>
                            <span className="separator">|</span>
                            <span>{cvData.personal.phone}</span>
                            <span className="separator">|</span>
                            <a href={`mailto:${cvData.personal.email}`} className="email-link">{cvData.personal.email}</a>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="profile-picture">
                            <img
                                src={`${process.env.PUBLIC_URL}/profile-pic.jpg`}
                                alt={cvData.personal.name}
                                className="profile-photo"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Content - Single Column Layout */}
                <div className="cv-content">
                    <main className="cv-main">
                        {/* Objective */}
                        <section className="content-section">
                            <h2 className="section-title">Objective</h2>
                            <p className="section-text">
                                {cvData.summary}
                            </p>
                        </section>

                        {/* Work Experiences */}
                        <section className="content-section">
                            <h2 className="section-title">Work Experiences</h2>
                            {cvData.experiences.map((exp, idx) => (
                                <div key={idx} className="job-item">
                                    <div className="job-header">
                                        <h3 className="job-title">{exp.title}</h3>
                                        <span className="job-duration">{exp.duration}</span>
                                    </div>
                                    <p className="job-company">{exp.company}</p>
                                    <ul className="job-duties">
                                        {exp.duties.map((duty, didx) => (
                                            <li key={didx}>{duty}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        {/* Education */}
                        <section className="content-section">
                            <h2 className="section-title">Education</h2>
                            {cvData.education.map((edu, idx) => (
                                <div key={idx} className="education-item">
                                    <h4 className="education-school">{edu.school}</h4>
                                    <p className="education-degree">{edu.degree}</p>
                                    <p className="education-year">{edu.year}</p>
                                    <p className="education-grade">{edu.grade}</p>
                                </div>
                            ))}
                        </section>

                        {/* Projects */}
                        <section className="content-section">
                            <h2 className="section-title">Projects</h2>
                            {cvData.projects.map((proj, idx) => (
                                <div key={idx} className="project-item">
                                    <div className="project-header">
                                        <h3 className="project-title">{proj.title}</h3>
                                    </div>
                                    <p className="project-meta">
                                        <strong>{proj.role}</strong> at {proj.company}
                                    </p>
                                    <p className="project-description">{proj.description}</p>
                                </div>
                            ))}
                        </section>

                        {/* Achievements */}
                        <section className="content-section">
                            <h2 className="section-title">Achievement</h2>
                            {cvData.achievements.map((achievement, idx) => (
                                <div key={idx} className="achievement-item">
                                    <h4 className="achievement-title">{achievement.title}</h4>
                                    <p className="achievement-description">{achievement.description}</p>
                                </div>
                            ))}
                        </section>
                        <section className="content-section">
                            <h2 className="section-title">Skills & abilities</h2>
                            <ul className="skills-list-bullets">
                                {cvData.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CV;
