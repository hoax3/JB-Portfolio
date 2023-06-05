import { RiLinkedinLine, RiGithubLine, RiTwitterLine, RiMailLine, RiInstagramLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const Intro = () => {
    return (
            <div className="intro-main">
                <h1>Hi, I'm Justin </h1>
                <h3>[Engineer | Developer | Tinkerer]</h3>
            <div>
                <ul className="intro-icons">
                    <li>
                        <Link to="mailto:begleyj1@icloud.com" target='_blank'><RiMailLine /></Link>
                    </li>
                    <li>
                        <Link to="https://github.com/hoax3" target='_blank'><RiGithubLine /></Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/jbegley/" target='_blank'><RiLinkedinLine /></Link>
                    </li>
                    <li>
                        <Link to="https://twitter.com/cybersecjust" target='_blank'><RiTwitterLine /></Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/mrbegley3/" target='_blank'><RiInstagramLine /></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}