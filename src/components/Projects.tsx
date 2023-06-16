import { Link } from "react-router-dom"
import './styles/projects.css'

export const Projects = () => {
  return (
    <div className='container'>
      <div className='projects-main'>
        <h1>
          Projects
        </h1>
        <div className="projects-card-main">
          <Link to={"https://github.com/hoax3/JB-Portfolio"} target='_blank' className="projects-card">
            <img src='/screenshot-page.png' width='170px' height={'110px'} style={{ borderRadius: '10px' }}></img>
            <h3>Portfolio</h3>
            <p>My first project using React with TypeScript.</p>
          </Link>
        </div>

      </div>
    </div>
  )
}
