import { useHistory } from 'react-router-dom';

function Login()
{
    const history = useHistory();
    const SignIn = ()=>{
        window.sessionStorage.setItem("isLoggedIn", 'true');
        history.push('/book')
    }
    return <div>
                
                <h1>Welcome To Login</h1>
                <button onClick={SignIn}>Sign In</button>
           </div>
}
export default Login