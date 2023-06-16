import { Link } from 'react-router-dom'
import './styles/posts.css'

export const Posts = () => {
  return (
    <div className='container'>
      <div className='posts-main'>
        <h1>
          Posts
        </h1>
        <div className='posts-card-main'>
          <Link to={"/coming"} target='_blank' className="posts-card">
            <img src='/amplify.png' width='170px' height={'120px'} style={{ borderRadius: '5px' }}></img>
            <h3>AWS Amplify</h3>
            <p>Getting started with deploying a full stack app on AWS Amplify</p>
          </Link>
          <Link to={"/coming"} target='_blank' className="posts-card">
            <img src='/wikijs.jpeg' width='170px' height={'140px'} style={{ borderRadius: '5px' }}></img>
            <h3>WikiJs</h3>
            <p>Deploying WikiJs on Portainer</p>
          </Link>
          <Link to={"https://github.com/hoax3/Splunk"} target='_blank' className="posts-card">
            <img src='/splunk-img.jpeg' width='170px' height={'100px'} style={{ borderRadius: '5px' }}></img>
            <h3>Splunk Configs</h3>
            <p>Splunk configs to help get you off the ground and start monitoring your environment.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
