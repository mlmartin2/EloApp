import {validate_Lead, validate_Password, validate_Username} from './validators'
import { construct_User,construct_Lead } from '../database/constructors'
import { post_Entry } from '../database/manager'

// Funcs gerais p/ registros (Usuário e Leads)
// Validação -> Cadastro

export function signUp_User(username = '', password = '', passwordConfirm = '')
{
    if(!validate_Username(username) || !validate_Password(password, passwordConfirm)) return false
    const new_user = construct_User(username, password) 
    post_Entry('Users', new_user)
    alert('Usuário cadastrado com sucesso!')
    return true
}
