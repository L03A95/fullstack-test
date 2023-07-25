import LoginForm from "./LoginForm";
import banner from "../../images/banner.png"


export default function Login () {


    return (
        <>
            <img src={banner} alt="login_test_img" className="banner_img"/>
            <LoginForm />
        </>
    )
}