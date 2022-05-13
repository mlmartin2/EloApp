// Validação de dados de acordo com condições fornecidas
import { get_Entry } from "../database/manager"

const email_regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
const phone_regexp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

export function validate_User(user = {}, userArray = {}, passwordConfirm = '')
{
    let error
    let passwordValidate = validate_Password(user.password, passwordConfirm)
    if( passwordValidate != undefined) error = passwordValidate 
    if(error == undefined)
    {
        let userValidate = validate_Username(user.name, userArray)
        if( userValidate != undefined) error = userValidate
    }
    return error
}

export function validate_Lead(lead = {}, leadArray = {})
{
    let error
    if(lead.name == '') {error = 'Nome não digitado!'; return error}
    let emailValidate = validate_Email(lead.email)
    let phoneValidate = validate_Phone(lead.phone)
    if(emailValidate != undefined ) error = emailValidate
    else if(phoneValidate != undefined) error = phoneValidate
    return error
}

// Valida username do usuário
export function validate_Username(username = '')
{
    let error = null
    if(username === '') error = 'Digitar nome do usuário'
    else if(username.length < 4) error = 'Usuário deve possuir no mínimo 4 caractéres'
    else if(!!get_Entry('Users', 'name', username)) error = 'Usuário já existe'
    else return true
    alert(error)
    return false
}

export function validate_Leadname(leadname = '')
{
    let error = ''
    if(leadname === '') error = 'Digitar nome para a Lead'
    else if(leadname.length < 3) error = 'Nome deve conter mais de 3 caracteres'
    else if(!!get_Entry('Leads', 'name', leadname)) error = 'Lead com mesmo nome já existe'
    else return true
    alert(error)
    return false
}

export function validate_email(email = '')
{
    let error = ''
    if(email == '') error = 'Digitar e-mail'
    else if(!!get_Entry('Leads', 'email', email)) error = 'E-mail já cadastrado'
    else if(!email_regexp.test(email)) error = 'E-mail inválido'
    else return true
    alert(error)
    return false
}

export function validate_phone(phone = '')
{
    let error = ''
    if(phone == '') error = 'Digitar telefone para a lead'
    else if(!phone_regexp.test(phone)) error = 'Número de telefone inválido'
    else if(!!get_Entry('Leads', 'phone', phone)) error = 'Lead com mesmo telefone já cadastrada'
    else return true
    alert(error)
    return false  
}

// FAZER: iterar por char p/ enviar motivo do erro
// ( senhas q n respeitam as condições )
export function validate_Password(password = '', passwordConfirm = '')
{   
    let error = ''
    let regularExpression = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,}$/
    if(password == '') error = 'Senha não digitada'
    else if(passwordConfirm == '') error =  'Confirmar senha'
    else if(password != passwordConfirm) {error = 'Senhas não coincidem'}
    else if(!regularExpression.test(password))
     {error = 'Senha deve ter no mínimo: uma letra maiúscula, uma minúscula, um número e um dígito especial';}
    else return true
    alert(error)
    return false
}

function validate_Email(email = '')
{
    let error
    let regularExpression = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if(!regularExpression.test(email)) error = 'E-mail inválido!'
    return error
}

function validate_Phone(phone = '')
{
    let error
    let regularExpression = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
    if(!regularExpression.test(phone)) error = 'Telefone inválido!'
    return error
}