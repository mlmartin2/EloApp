import {v4 as uuidv4} from 'uuid'

// Registro de entries no armazém local
// registros feitos após validação (**manter validações fora**)

// Funções add_*
// Adicionar itens na tabela
// Usar após validação; esse arquivo não contém nenhum meio de validação ( além de checar itens indefinidos )

// Funções get_*
// Usar com ids de objeto. Chamar função find_ p/ checar se objeto existe, e então usar id
// com funções get

// Funções find_*
// checa existencia na tabela primeiro
// retorna Id do objeto

// Inicialização de keys das "tabelas" p/ storage local
export function init_Database()
{
    localStorage.setItem('Users', '{}')
    localStorage.setItem('Leads', '{}')
}

// Adiciona User na tablea 'Users'
export function add_User(user = {})
{
    let uniqueID = uuidv4();
    let usersArray = JSON.parse(localStorage.getItem('Users'))
    usersArray[uniqueID] = user;
    localStorage.setItem('Users', JSON.stringify(usersArray))
} 

// Adiciona Lead na tabela 'Leads'
export function add_Lead(lead = {})
{
    let uniqueID = uuidv4();
    let leadsArray = JSON.parse(localStorage.getItem('Leads'))
    leadsArray[uniqueID] = lead;
    localStorage.setItem('Leads', JSON.stringify(leadsArray))
    
}

// 'table' = Key da "tabela" | keys: 'Users', 'Leads'
export function get_Column(_table = '', column = '')
{
    const tableJSON = localStorage.getItem(_table)
    if(tableJSON == null) {console.log('Tabela não existe @ dbhandler.js'); return}
    const table = JSON.parse(tableJSON)
    const rowKeys = Object.keys(table)
    let rowData = []
    for(let i = 0; i < rowKeys.length; i++)
    {
        let item = table[rowKeys[i]][column]
        rowData.push(item)
    }
    return rowData 
}

// Pega tabela por nome e converte em Object
export function get_TableObject(_table = '')
{
    const tableJSON = localStorage.getItem(_table)
    if(tableJSON == null) {console.log('Tabela ' + _table + ' não existe @ dbhandler.js'); return null;}
    return JSON.parse(tableJSON)
}

// usar com id especifico
// para procurar por propriedade, usar find_Entry 
export function get_Entry(_table = '',id = -1)
{
    const table = get_TableObject(_table)
    if(table[id] == null || table[id] == undefined) console.log('Id não existe na tabela')
    return table[id];
}

// Modificar dados de uma entrada especifica ( por id )
export function set_EntryData(_table = '', id = '', entryKey = '', value)
{
    const table = get_TableObject(_table)
    let item = table[id];
    if(item == null || item == undefined)console.log('Id não existe na tabela');
    item[entryKey] = value;
    table[id] = item;
    localStorage.setItem(_table, JSON.stringify(table))
}

// retorna uuid do registro ( se n existe : undefined)
export function find_Entry(_table = '', column = '', registry = '')
{
    const table = get_TableObject(_table)
    const rowKeys = Object.keys(table)
    let id = undefined;
    for(let i = 0; i < rowKeys.length; i++)
    {
        let reg = table[rowKeys[i]][column]
        if(reg == registry) {id = rowKeys[i]; break;}
    }
    return id;
}