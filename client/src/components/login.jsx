import { Link } from "react-router-dom"
import "../styles/login.css"


export default function Login () {


    return (
        <>
            <form className="form_container">
                <input type="text" placeholder="Username" className="form_input"></input>
                <input type="password" placeholder="Password" className="form_input"></input>
                <p className="recomendation">Don't have an account yet? <Link to={'/signin'} className="recomendation_link">Create one</Link>!</p>
            </form>
        </>
    )
}