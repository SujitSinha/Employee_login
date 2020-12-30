import React   from 'react'
import { useHistory } from 'react-router-dom';
import userLogin from './../LoginJson';
import Button from '@material-ui/core/Button';
import {useSelector,useDispatch} from 'react-redux';

function Login() {
    localStorage.login = false;
    const history = useHistory();
    const {username,password} = useSelector(state => state);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        if (username == userLogin.username && password === userLogin.password) {
            localStorage.login = true;
            history.push('/dashboard');
        }
        else {

            window.alert('Please type correct username and password');
        }
        e.preventDefault();
    };
  
   return (
        <div>
                <div className="forms">
                    Username
                <input type="text" onChange={(e)=>dispatch({type:'SET_USERNAME',payload :e.target.value})}></input>
                    <br>
                    </br>
                Password
                <input type="password" onChange={(e)=>dispatch({type:'SET_PASSWORD',payload :e.target.value})}></input><br></br>
                    <Button variant="contained" size="small" color="secondary" type="Submit" onClick={handleClick}>Login</Button>
                </div>
        </div>
    )
}

export default Login


