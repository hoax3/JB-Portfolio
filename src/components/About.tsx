import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiPython, SiPostgresql, SiGo, SiDocker, SiSplunk, SiGit, SiKubernetes, SiTailwindcss } from 'react-icons/si'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import React from 'react'

export const About: React.FC = () => {
  const certs = [
    <Link to="https://www.splunk.com/en_us/training/certification-track/splunk-core-certified-consultant.html" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>Splunk Consultant</Link>, 
    <Link to="https://elearnsecurity.com/product/ejpt-certification/"  style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>eJPT</Link>, 
    <Link to="https://www.comptia.org/certifications/security"  style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>Security+</Link>,
    <Link to="https://www.comptia.org/certifications/cybersecurity-analyst"  style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>CySA+</Link>, 
    <Link to="https://www.comptia.org/certifications/pentest"  style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>PenTest+</Link>]
  const certlist = certs.map((cert)=> <button type="button" className="certs-button">{cert}</button>)
  return (
    <div className='container' style={{overflowY:'auto'}}>
      <div className="about-main">
          <h1 id="about">
              Justin Begley
          </h1>
          <article>
            <h3>About Me</h3>
              <p>Just another nerd in the world who wants to help other nerds become more nerdy. Currently a Cloud Security Engineer focusing on CSPM across AWS, Azure, and GCP. I have worked as a SOC analyst, security engineer, and Splunk consultant. Always ready to take on new challenges. </p>
            <h3>Skills</h3>
              <div style={{
                display:'grid', gridTemplateColumns:'auto auto auto auto auto', gap:'20px'}}>
                <IconContext.Provider value={{color:'black', size:'1.4em'}}>
                  <FaReact />
                  <SiTypescript />
                  <SiTailwindcss />
                  <SiPython />
                  <SiGo />
                  <SiGit />
                  <SiPostgresql />
                  <SiDocker />
                  <SiKubernetes />
                  <SiSplunk />
                </IconContext.Provider>
              </div>
            <h3>Certifications</h3>
              <div className="certs-main">{certlist}</div> 
          </article>
      </div>
    </div>
  )
}
