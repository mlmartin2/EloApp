import {validate_Lead, validate_User} from './validators'
import { construct_User,construct_Lead } from '../database/constructors'
import { add_User,add_Lead, get_TableObject } from '../database/manager'

// Funcs gerais p/ registros (Usuário e Leads)
// Validação -> Cadastro

export function signUp_User(username = '', password = '', passwordConfirm = '')
{
    const usersArray = localStorage.getItem('Users')
    const user = construct_User(username,  password);
    const valid = validate_User(user, usersArray, passwordConfirm)
    if(valid == undefined) { add_User(user); alert('Cadastro feito com sucesso!')}
    else alert(valid)
}

export function signUp_UserObject(user = {}, passwordConfirm = '')
{
    signUp_User(user.name, user.password, passwordConfirm)
}

export function signUp_Lead(name = '', phone = '', email = '', servs = {})
{
    const leadsArray = get_TableObject('Leads')
    const lead = construct_Lead(name, phone, email, servs);
    const valid = validate_Lead(lead, leadsArray)
    if(valid == undefined) { add_Lead(lead); alert('Lead cadastrada com sucesso!')}
    else alert(valid)
}

export function signUp_LeadObject(lead = {})
{
    signUp_Lead(lead.name, lead.phone, lead.email)
}