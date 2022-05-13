import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LogoHeader from "../components/LogoHeader";
import { signUp_User } from "../handlers/register";

export default function SignUp()
{
    let navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    function submit()
    {
        signUp_User(username, password, passwordConfirm)
        setUsername(''); setPassword(''); setPasswordConfirm('')
    }

    return (
        <>
            <LogoHeader />
            <body>
                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                    <button onClick={() => navigate('/', { replace: true })}>Sign In</button>
                    <button disabled>Sign Up</button>
                </div>
                <div style={{ paddingTop: 25 }} className='LoginInputContainer'>
                    <input style={{ textAlign: 'center' }} value={username} onChange={(e) => setUsername(e.target.value)} className='BottomBorder' type='text' placeholder='Nome' />
                    <div style={{paddingTop:20}} />
                    <input style={{ textAlign: 'center' }} value={password} onChange={(e) => setPassword(e.target.value)} className='BottomBorder' type='password' placeholder='Senha' />
                    <div style={{paddingTop:10}} />
                    <input style={{ textAlign: 'center'}} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} className='BottomBorder' type='password' placeholder='Confirmar Senha' />
                    <div style={{ paddingTop: 25 }} />
                    <button onClick={() => {submit()}}>Cadastrar</button>
                </div>
            </body>
        </>
    )
}