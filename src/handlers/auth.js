import { find_Entry, get_Entry } from '../database/manager';

const auth = (username = '', password = '') =>
{
    if (username == '') alert('Usuário não digitado')
    else if (password == '') alert('Senha não digitada')
    else {
        let userid = find_Entry('Users', 'name', username)
        let userobj = get_Entry('Users', userid)
        if (userobj == undefined) alert('Usuario nao cadastrado!')
        else if (userobj.password != password) alert('Senha incorreta!')
        else { return true }
    }
    return false;
}

export default auth

