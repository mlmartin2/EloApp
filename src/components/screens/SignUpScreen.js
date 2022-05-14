import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LogoHeader from "../LogoHeader";
import { signUp_User } from "../../handlers/register";
import DefaultInput from "../DefaultInput";

export default function SignUp() {
    let navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    function submit() {
        signUp_User(username, password, passwordConfirm)
        setUsername(''); setPassword(''); setPasswordConfirm('')
    }

    return (
        <>
            <LogoHeader />
            <body>
                <div style={{ paddingTop: 15, display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'row' }}>
                    <div style={{ minWidth: 150 }}>
                        <button
                             style={{ borderWidth: 0, paddingLeft: 10, backgroundColor: '#ffffff'}}
                             onClick={() => navigate('../', { replace: true })} >
                            <text style={{ fontSize: 20, }} >
                                Login
                            </text>
                        </button>
                    </div>
                    <div style={{ minWidth: 150, backgroundColor: '#ffffff', border: '#FFD032' }}>
                        <button disabled
                         style={{ borderWidth: 0, textAlign: 'center', backgroundColor:'#ffffff' }}>
                            <text style={{ fontWeight: 'bolder', color: '#FFD032', textAlign: 'center', fontSize: 20 }}>
                                Cadastro
                            </text>
                        </button>
                    </div>
                </div>
                <div style={{ paddingTop: 25 }} className='LoginInputContainer'>
                    <DefaultInput value={username} onChangeText={setUsername} placeholder='Nome' />
                    <DefaultInput value={password} onChangeText={setPassword} secure placeholder='Senha' />
                    <DefaultInput value={passwordConfirm} onChangeText={setPasswordConfirm} secure placeholder='ConfirmarSenha' />
                    <div style={{ paddingTop: 25 }} />
                    <button onClick={() => {
                        signUp_User(username, password, passwordConfirm)
                        setUsername(''); setPassword(''); setPasswordConfirm('')
                    }}>
                        Cadastrar
                    </button>
                </div>
            </body>
        </>
    )
}