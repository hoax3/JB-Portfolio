import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiPython, SiPostgresql, SiGo, SiDocker, SiSplunk, SiGit, SiKubernetes, SiTailwindcss } from 'react-icons/si'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import './styles/about.css'

export const About = () => {
  const certs = [
    <Link to="https://www.splunk.com/en_us/training/certification-track/splunk-core-certified-consultant.html" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>Splunk Certified Consultant</Link>,
    <Link to="https://www.comptia.org/certifications/security" style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>Security+</Link>,
    <Link to="https://elearnsecurity.com/product/ejpt-certification/" style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>eJPT</Link>,
    <Link to="https://www.comptia.org/certifications/cybersecurity-analyst" style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>CySA+</Link>,
    <Link to="https://www.comptia.org/certifications/pentest" style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>PenTest+</Link>]
  return (
    <div className='container' style={{ overflowY: 'auto' }}>
      <div className="about-main">
        <h1>
          Justin Begley
        </h1>
        <article>
          <h3>About Me</h3>
          <p>Just another nerd in the world who wants to help other nerds become more nerdy.</p>
          <p>I currently am a Cloud Security Engineer focusing on CSPM across AWS, Azure, and GCP. I have worked as a SOC analyst, security engineer, and Splunk consultant.</p>
          <p>I'm always ready to take on new challenges. </p>
          <h3>Skills</h3>
          <div className='icon-grid'>
            <IconContext.Provider value={{ color: 'black', size: '2em', className: 'icon-provider' }}>
              <FaReact title='React'/>
              <SiTypescript title='TypeScript'/>
              <SiTailwindcss title='Tailwinds CSS'/>
              <SiPython title='Python'/>
              <SiGo title='Go'/>
              <SiGit title='Git'/>
              <SiPostgresql title='Git'/>
              <SiDocker title='Docker'/>
              <SiKubernetes title='Kubernetes'/>
              <SiSplunk title='Splunk'/>
            </IconContext.Provider>
          </div>
          <h3>Certifications</h3>
          <div className="certs-card-main">
            {certs.map((cert) => <button type="button" className="certs-card">{cert}</button>)}
          </div>
        </article>
      </div>
    </div>
  )
}
