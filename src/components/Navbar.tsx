import { Link, Outlet } from "react-router-dom"
import './styles/navbar.css'

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul className='navbar'>
          <li style={{ float: 'left' }}>
            <Link to={"/"}>[JB]</Link>
          </li>
          {/* <li> <Link to={"/contact"}>Contact</Link> </li> */}
          <li>
            <Link to={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
//todo: Add react-router
