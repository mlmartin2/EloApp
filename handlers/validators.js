
// User -> Usuário p/ validar
// userArray -> Array com usuários p/ validação
validate_User(user = {}, userArray = [])
{
    for(userIndex = 0; userIndex < userArray.length; userIndex++)
    {

    }
}

function usernameValidator(userName = '')
{
    if(userName.length == undefined) alert('Username.length indefinido')
    else if(userName.length < 4) alert('Usuário deve possuir no mínimo 4 caractéres')
    else return true;
    return false
}

// FAZER: iterar por char p/ enviar motivo do erro
// ( senhas q n respeitam as condições )
function passwordValidator(password = '')
{   
    let regularExpression = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,}$/
    return regularExpression;
}