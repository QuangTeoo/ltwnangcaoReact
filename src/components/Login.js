import { useState } from "react";
function Login() {
    const [login, setLogin] = useState(false);
    const [account, setAccount] = useState({
        username: "",
        password: "",
    });

    const handleLogin = () => {
        console.log(account);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Login</h1>
            <label>Enter your username: </label>
            <input type="text" value={account.username} onInput={e => setAccount({ ...account, username: e.target.value })} />
            <br/>
            <label>Enter your Password: </label>
            <input type="password" value={account.password} onInput={e => setAccount({ ...account, password: e.target.value })} />
            <br/>            
            <input type="checkbox"
            />
            <label>Is Admin ?</label>
            <br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login