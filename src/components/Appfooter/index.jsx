
import { FaGithubAlt,FaLinkedinIn,FaUserTie,FaTwitch,FaInstagram,FaFacebookF} from "react-icons/fa";
function Appfooter(){
    return (
        <footer>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/hudsoncarolino/" title="linkedin" target="_blank">
                            <FaLinkedinIn/>
                            <p>@hudsoncarolino</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/hudsoncarolinodev" title="github" target="_blank">
                        <FaGithubAlt/>
                            <p>@hudsoncarolinodev</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://hudsoncarolino.com.br/" title="portfolio" target="_blank">
                        <FaUserTie/>
                            <p>hudsoncarolino.com.br</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitch.tv/hudsoncarolino" title="twitch" target="_blank">
                        <FaTwitch/>
                            <p>@hudsoncarolino</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/hudsoncarolino/" title="instagram" target="_blank">
                        <FaInstagram/>
                            <p>@hudsoncarolino</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/hudson.carolino/" title="facebook" target="_blank">
                        <FaFacebookF/>
                            <p>@hudson.carolino</p>
                        </a>
                    </li>
                </ul>
           
        </footer>
    )
}

export default Appfooter