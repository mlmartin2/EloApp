// Lógica p/ autenticação de usuário
import { find_Entry, get_Entry } from "./dbhandler";

export default function auth(username = '', password = '', navresponse)
{
    if(username == '') {alert('Nome do usuário não digitado'); return;}
    else if(password == '') {alert('senha não digitada'); return}
    const uid = find_Entry('Users', 'name', username)
    if(uid == undefined) {alert('Usuário não registrado'); return undefined}
    const user = get_Entry('Users', uid)
    if(user.password != password) {alert('Senha Incorreta'); return undefined}
    navresponse('Home', {userarg:user, userid:uid})
    return user
}
