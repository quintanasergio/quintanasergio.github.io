import React from 'react'
import './style.css'

const skills = ["HTML", "CSS", "Javascript", "Salesforce", "React", "Java", "Apex", "LWC", "Aura", "Git", "Github", "SQL/SOQL", "Asana/Jira", "Responsive Design"]

const About = () => {

  const scrollIntoViewWithOffset = (e) => {
    e.preventDefault();
    const offset = document.getElementById('navbar').offsetHeight;
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.getElementById('contact-section').getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
  }
  return (
    <div id="about-section" className='about-container'>
      <div className="section-title">
        <h1>About me</h1>
        <h2>Here you'll find additional details about me, my activities, and my current programming and technology abilities.</h2>
      </div>
      <div className='about-content'>
        <div className="about-content-main">
          <h3>Get to know me!</h3>
          <p>I'm a Full Stack Developer with a focus on Salesforce, adept at building robust applications from both the frontend and backend. My expertise extends to creating engaging user experiences and ensuring seamless functionality throughout the Salesforce platform.</p>
          <p className='last-paragraph'>I'm actively seeking new job opportunities where I can make meaningful contributions, continuously learn, and further develop my skills. If you come across an exciting opportunity that aligns with my skills and experience, please don't hesitate to reach out.</p>
          <button onClick={scrollIntoViewWithOffset} className='theme-button'>Contact</button>
        </div>
        <div className="about-content-skills">
          <h3>Skills</h3>
          <div className="skills">
            {
              skills.map((skill, index) => {
                return(<div className='skill-badge' key={index}>{skill}</div>);
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About