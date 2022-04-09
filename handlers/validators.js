
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

// Valida username do usuário
function validate_Username(userName = '', userArray = {})
{
    let error
    if(userName.length < 4) error = 'Usuário deve possuir no mínimo 4 caractéres'
    alert(userArray)
    //alert(userArray.length)
    for(let userIndex = 0; userIndex < userArray.length; userIndex++)
    {
        //alert(Object.keys(userArray))
        // if(userArray[userIndex].name == userName) {error = 'Nome em uso por outro membro'; break}
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