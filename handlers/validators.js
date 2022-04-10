
// User -> Usuário p/ validar
// userArray -> Array com usuários p/ validação
export default function validate_User(user = {}, userArray = {}, passwordConfirm = '')
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
    let emailValidate = validate_Email(lead.email)
    let phoneValidate = validate_Phone(lead.phone)
    if(emailValidate != undefined ) error = emailValidate
    else if(phoneValidate != undefined) error = phoneValidate
    return error
}

// Valida username do usuário
function validate_Username(userName = '', usersjson = '')
{
    let error
    const users = JSON.parse(usersjson);
    if(userName.length < 4) return 'Usuário deve possuir no mínimo 4 caractéres'

    const usersKey = Object.keys(users)
    for(let i = 0; i < usersKey.length; i++)
    {
        if(users[usersKey[i]].name == userName) {error = 'Nome em uso por outro membro'; break}
    }
    return error
}

// FAZER: iterar por char p/ enviar motivo do erro
// ( senhas q n respeitam as condições )
function validate_Password(password = '', passwordConfirm = '')
{   
    let error
    let regularExpression = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,}$/
    if(password != passwordConfirm) {error = 'Senhas não coincidem'}
    if(!regularExpression.test(password)) error = 'Senha Inválida'
    return error;
}

function validate_Email(email = '')
{
    let error
    let regularExpression = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if(!regularExpression.test(email)) error = 'erro de email'
    return error
}

function validate_Phone(phone = '')
{
    let error
    let regularExpression = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
    if(!regularExpression.test(phone)) error = 'erro tel'
    return error
}