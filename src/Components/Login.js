import './Login.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react/cjs/react.development";

const Login = () => {




    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [add, setadd] = useState("Welcome, Login Here")
    let history = useHistory();

    let handleLogin = (e) => {
        e.preventDefault();

        setadd("Logging In")

        let userData = { username, password }

        fetch('http://localhost:3002/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                for (var key in data) {
                    if (data[key].username == userData.username && data[key].password == userData.password) {
                        console.log('Success:', data);
                        history.push('/home')
                        break;
                    } else {

                        alert("Please enter the right credentials!!!")
                        window.location.reload();
                        break;
                    }
                }
            });
    }


    return (
        <div className="center">
            <img src="./media/icons8-noodles-48.png" alt="" />
            <h2>Foodie</h2>

            <h1>{add}</h1>
            <form >
                <div className="txt_field">
                    <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <span></span>
                    <label htmlFor="">Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span></span>
                    <label htmlFor="">Password</label>
                </div>
                <div className="pass">
                    Forgot Password?
                </div>
                {/* <input type="submit" value="Login" />
                     */}
                <button className="submit" onClick={handleLogin}>Login</button>
                <div className="signup_link">
                    Not a member? <a href="#">Signup</a>
                </div>
            </form>
        </div>

    );
}

export default Login;