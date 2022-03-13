import React, {useState} from 'react';

const UserForm = (props)=>{
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {username, email, password};
        console.log ("Welcome", newUser);
    };
    const nameValid = () =>{
        if (username.length<2){
            return "Your name is too short.";
        } else{
            return "";
        }
        }
    const emailValid = () =>{
            if (email.length<5){
                return "Your email is too short.";
            } else{
                return "";
            }
            }
        const pwValid = () =>{
            if (password.length<8){
                return "Your password is too short.";
            } else{
            return "";
            }
            }

    return(
        <div>
        <h3>{nameValid()} {emailValid()}{pwValid()}</h3>
        <form onSubmit = {createUser}>
            <div>
                <label>Username: </label>
                <input type="text" onChange= {(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange= {(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange= {(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p>{username}</p>
        <p>{email}</p>
        <p>{password}</p>
        </div>
    );
};
export default UserForm;