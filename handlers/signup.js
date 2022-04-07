// Registro de usuário
// usar RegExp

function signUp(username = '', password = '', passConfirm = '')
{
    if(usernameValidator(username) && passwordValidator(password)) alert('ok'); // Salvar usuario + senha(hash)s
    if( password =! passConfirm) {alert('Senhas não coincidem!'); return false}
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

export default signUp

// if(!upperCase && char == char.toUpperCase()) upperCase = true
// else if(!lowerCase && char == char.toLowerCase()) lowerCase = true
// else if(!special && specialCharacters.find(char)) special = true
// if(upperCase && lowerCase && special) return true;