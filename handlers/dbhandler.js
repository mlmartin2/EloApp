import {v4 as uuidv4} from 'uuid'

// Registro de entries no armazém local
// registros feitos após validação (manter validações foras)

// Inicialização de keys das "tabelas" p/ storage local
export function init_Database()
{
    localStorage.setItem('Users', '{}')
    localStorage.setItem('Leads', '{}')
}

export function add_User(user = {})
{
    let uniqueID = uuidv4();
    let usersArray = JSON.parse(localStorage.getItem('Users'))
    usersArray[uniqueID] = user;
    alert(JSON.stringify(usersArray))
    alert(usersArray[uniqueID] + ' @dbhandler.js')
    localStorage.setItem('Users', JSON.stringify(usersArray))
} 

export function add_Lead(model_Lead = {})
{
    if(lead._TYPE == 'Lead')
    {

    }
}

export function get_User(id = -1)
{
    return;
}



