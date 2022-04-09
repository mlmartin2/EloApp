// Lógica p/ autenticação de usuário
import { find_Entry, get_Entry } from "./dbhandler";

export default function auth(username = '', password = '')
{
    let uid = find_Entry('Users', 'name', username)
    if(uid == undefined) {alert('Usuário não registrado'); return}
    let user = get_Entry('Users',uid)
    if(user.password == password) alert('Autenticação bem sucedida')
    else alert('senha errada')
}

