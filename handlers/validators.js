
// User -> Usuário p/ validar
// userArray -> Array com usuários p/ validação
export default function validate_User(user = {}, userArray = [], passwordConfirm = '')
{
    let error
    let userValidate = validate_Username(user.name)
    let passwordValidate = validate_Password(user.password) 
    if( userValidate != undefined) error = userValidate
    else if(passwordValidate != undefined) error = passwordValidate
    if(error == undefined)
    {
        for(let userIndex = 0; userIndex < userArray.length; userIndex++)
        {
            if(userArray[userIndex].name == user.name) {error = 'Nome em uso por outro membro'; break}
        }
    }  
    return error
}

// Valida username do usuário
function validate_Username(userName = '')
{
    let error
    if(userName.length < 4) error = 'Usuário deve possuir no mínimo 4 caractéres'
    return error
}

// FAZER: iterar por char p/ enviar motivo do erro
// ( senhas q n respeitam as condições )
function validate_Password(password = '')
{   
    let error
    let regularExpression = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,}$/
    if(!regularExpression.test(password)) error = 'Senha Inválida'
    return error;
}