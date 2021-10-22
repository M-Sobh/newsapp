import { Link } from "react-router-dom"

 const Header = () => {
    return <nav className ='header'>
            <h1>Logo</h1>
            <span >
            <Link to ='/' className='nav-links'>Home</Link>
            <Link to ='/articles' className='nav-links'>Articles</Link>
            </span>
        </nav>
}
export default Header;