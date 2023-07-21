import "../styles/login.css"


export default function Login () {


    return (
        <>
            <form className="form_container">
                <input type="text" placeholder="Username" className="form_input"></input>
                <input type="password" placeholder="Password" className="form_input"></input>
            </form>
        </>
    )
}