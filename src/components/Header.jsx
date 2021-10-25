import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

 const Header = () => {
    return <nav>
            <div className =''>
                <a href="/" className="">Logo</a>
                <ul id="nav-mobile" className="">
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