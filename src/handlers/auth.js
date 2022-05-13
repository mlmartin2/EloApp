import { get_Entry } from '../database/manager';

const authUser = (username = '', password = '') =>
{
    alert(username + ' ' + password)
    let error = ''
    if (username == '') error = 'Usuário não digitado'
    else if (password == '') error = 'Senha não digitada'
    let user = get_Entry('Users','name',username)
    if(user == null) error = 'Usuário não cadastrado'
    else if(user.password != password) error = 'senha inválida'
    else {return true}
    return false;
}

export default authUser

