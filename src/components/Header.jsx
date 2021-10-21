import { Link } from "react-router-dom"

 const Header = () => {
    return <nav className ='header'>
            <h1>Logo</h1>
            <span>
            <Link to ='/'>Home</Link>
            <Link to ='/articles'>Articles</Link>
            </span>
        </nav>
}
export default Header;