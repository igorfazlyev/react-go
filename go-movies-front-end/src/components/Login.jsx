import { useState } from "react"
import Input from "./form/Input"
import { useNavigate, useOutletContext } from "react-router-dom"

const Login = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setAlertClassName} = useOutletContext()
    const {setAlertMessage} = useOutletContext()
    const {setJwtToken} = useOutletContext()

    const navigate = useNavigate()

    const handleSubmit =evnt=>{
        evnt.preventDefault()
        console.log("email/pass", email, password)

        if (email === "admin@example.com" && password==="admin") {
            setJwtToken("logged-in")
            setAlertClassName("d-none")
            setAlertMessage("")
            navigate("/")
        }else{
            setAlertClassName("alert-danger")
            setAlertMessage("invalid credentials")
        }
    }
    return(
       <div className="col-md-6 offset-md-3">
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit}>
            <Input 
                title="Email address"
                type = "email"
                className ="form-control"
                name = "email"
                autoComplete = "email-new"
                onChange={evnt=>setEmail(evnt.target.value)}
            />
            <Input 
                title="Password"
                type = "password"
                className ="form-control"
                name = "password"
                autoComplete = "password-new"
                onChange={evnt=>setPassword(evnt.target.value)}
            />
           <hr />
           <input 
             type="submit" 
             className="btn btn-primary"
             value="Login"
           />
        </form>
       </div>
    )
}

export default Login