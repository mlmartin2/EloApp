// Registro de usuário
// usar RegExp


function signUp(username = '', password = '', passConfirm = '')
{
    if(usernameValidator(username) && passwordValidator(password)) alert('ok'); // Salvar usuario + senha(hash)s
    if( password =! passConfirm) {alert('Senhas não coincidem!'); return false}
}

export default signUp

// if(!upperCase && char == char.toUpperCase()) upperCase = true
// else if(!lowerCase && char == char.toLowerCase()) lowerCase = true
// else if(!special && specialCharacters.find(char)) special = true
// if(upperCase && lowerCase && special) return true;