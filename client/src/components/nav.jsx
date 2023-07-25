import { Link } from 'react-router-dom'
import '../styles/nav.css'

export default function Nav () {


    return (
        <nav className="nav_wrapper">
            <Link to={'/'}><h3>Logo</h3></Link>
            <div>
                <Link to={'/profile'}><p>Profile</p></Link>
                <Link to={'/messages'}><p>Messages</p></Link>    
            </div>
            <div>
                <Link to={'/login'}><p>Login</p></Link>
                <Link to={'/signin'}><p>Sign in</p></Link>
            </div>
            
        </nav>
    )
}