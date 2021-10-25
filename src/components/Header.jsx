import { Link } from "react-router-dom"
import 'materialize-css';
import {Button} from 'react-materialize';

 const Header = () => {
    return <nav>
            <div className ='nav-wrapper'>
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <li>
                        <Link to ='/' >Home</Link>
                 </li> 
                 <li>
                        <Link to ='/articles' >Articles</Link>
                 </li>
                </ul>
            </div>
        </nav>
}
export default Header;