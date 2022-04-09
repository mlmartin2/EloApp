import validate from './validators'
import { construct_User } from '../models/constructors'
import { add_User } from './dbhandler'

export default function signUp(username = '', password = '', passwordConfirm = '')
{
    //alert('pass')
    let usersArray = JSON.stringify(localStorage.getItem('Users'))
    //alert(password + ' ||| ' + passwordConfirm)
    const user = construct_User(username,  password);
    //alert('pass')
    let valid = validate(user, usersArray, passwordConfirm)
    if(valid == undefined) { add_User(user); alert('Cadastro feito com sucesso!')}
    else alert(valid)
    //alert('pass')
}

export function signUp_Object(user = {}, passwordConfirm = '')
{
    signUp(user.name, user.password, passwordConfirm)
}
