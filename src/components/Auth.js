// componente p botao auth (n utilizado)

import { find_Entry } from "../database/manager"

export default function Auth(username = '', password = '')
{
    alert(find_Entry('Users', 'name', username))
    
    return (
        <buton>TESTE</buton>
    )
}