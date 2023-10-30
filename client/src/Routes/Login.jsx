import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div className="login-content">
            <div className="login-white-box">
                <h1 className="login-title title">LOGIN</h1>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                      
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        
                        <Link to="/dashboard" className="button login-button">
                        Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}