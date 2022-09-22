import './FooterStyle.css'
import { FaFacebookF,FaInstagram ,FaTwitter} from 'react-icons/fa';
import './FooterStyle.css'
function Footer(){
    return(
        <footer className="common">
            <div className="container">
                <div className="footer">
                    <i><FaFacebookF/></i><i><FaInstagram/></i><i><FaTwitter/></i>
                </div>
            </div>
        </footer>
    )
}
export default Footer