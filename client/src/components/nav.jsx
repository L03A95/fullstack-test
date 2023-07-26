import { Link } from 'react-router-dom'
import '../styles/nav.css'
import logo from '../images/logo.png'
import Button from 'react-bootstrap/Button';

export default function Nav () {


    return (
        <nav className="nav_wrapper">
            <Link to={'/'}><img src={logo} className='logo'/></Link>
            <div>
                <Button variant="outline-primary"><Link to={'/profile'} style={{textDecoration: "none"}}>Profile</Link></Button>{' '}
                <Button variant="outline-primary"><Link to={'/'} style={{textDecoration: "none"}}>Cart</Link></Button>{' '}
                <Button variant="outline-primary"><Link to={'/library'} style={{textDecoration: "none"}}>Library</Link></Button>{' '}
            </div>
            <div>
                <Button variant="primary"><Link to={'/login'} style={{color: "#fff", textDecoration: "none"}}>Login</Link></Button>{' '}
                <Button variant="primary"><Link to={'/signin'} style={{color: "#fff", textDecoration: "none"}}>Sign in</Link></Button>{' '}
            </div>
        </nav>
    )
}
