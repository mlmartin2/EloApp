import validate from './validators'
import { construct_User } from '../database/constructors'
import { add_User } from '../database/manager'

export default function signUp(username = '', password = '', passwordConfirm = '')
{
    const usersArray = localStorage.getItem('Users')
    const user = construct_User(username,  password);
    const valid = validate(user, usersArray, passwordConfirm)
    if(valid == undefined) { add_User(user); alert('Cadastro feito com sucesso!')}
    else alert(valid)
}

export function signUp_Object(user = {}, passwordConfirm = '')
{
    signUp(user.name, user.password, passwordConfirm)
}