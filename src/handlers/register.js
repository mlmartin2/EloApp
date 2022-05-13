import {validate_email, validate_Leadname, validate_Password, validate_phone, validate_Username} from './validators'
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

export function signUp_Lead(name, phone, email, opportunities_values)
{
    // validate
    if(!validate_Leadname(name) || !validate_phone(phone) || !validate_email(email)) return false
    let lead = construct_Lead(name, phone, email, opportunities_values)
    post_Entry('Leads', lead)
    alert('Lead cadastrada!')
    return true
}
