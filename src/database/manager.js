import {v4 as uuidv4} from 'uuid'

export function init_Database()
{
    localStorage.setItem('Users', '{}')
    localStorage.setItem('Leads', '{}')
}

export function post_Entry(dataset_name, entry)
{
    let dataset = get_Dataset(dataset_name)
    if(dataset[entry.id] != undefined)
    {
        dataset[entry.id] = entry
    }
    else
    {
        let uniqueID = uuidv4();
        entry.id = uniqueID
        dataset[uniqueID] = entry;
    }
    localStorage.setItem(dataset_name, JSON.stringify(dataset))
}

export function get_Dataset(dataset_name = '', entrykeys)
{
    const datasetJSON = localStorage.getItem(dataset_name)
    if(datasetJSON == null) {console.log('Tabela ' + dataset_name + ' não existe @ dbhandler.js'); return null;}
    const dataset = JSON.parse(datasetJSON)
    return dataset
}

export function get_Entryset(dataset_name = '', entryset_name = '')
{
    const dataset = get_Dataset(dataset_name)
    let entryset = []
    let keys = Object.keys(dataset)
    for(let i = 0; i < keys.length; i++)
    {
        let key = keys[i]
        entryset.push([key, dataset[key][entryset_name]])
    }
    return entryset
}

function get_Entry_byID(dataset_name = '', id = '')
{
    let dataset = get_Dataset(dataset_name)
    if(dataset == null) alert('id ou dataset não existem')
    return dataset[id]
}

export function get_Entry(dataset_name = '', entryset_name = '', entry_value)
{
    let dataset = get_Dataset(dataset_name)
    let keys = Object.keys(dataset)
    for(let i = 0; i < keys.length; i++)
    {
        let key = keys[i]
        if(dataset[key][entryset_name] == entry_value) return dataset[key]
    }
    return null
}

// DEPRECATED :

// export function get_DatasetColumn(dataset_name = '', column = '')
// {
//     const dataset = get_Dataset(dataset_name)
//     if(dataset == null) {alert('Set de dados não existe'); return null}

//     const rowKeys = Object.keys(dataset)
//     let column_entries = []
//     for(let rowkeys_index = 0; rowkeys_index < rowKeys.length; rowkeys_index++)
//     {
//         let item = dataset[rowKeys[rowkeys_index]][column]
//         column_entries.push(item)
//     }
//     return column_entries
// }

// // usar com id especifico
// // para procurar por propriedade, usar find_Entry 
// export function find_DatasetEntry(dataset_name = '', column_name = '', entry = '')
// {
//     const dataset = get_TableObject(dataset_name)
//     if(!dataset) {return}
//     const keys = Object.keys(dataset)
//     for(let key_index = 0; key_index < keys.length; key_index++)
//     {

//     }
//     if(table[id] == null || table[id] == undefined) console.log('Id não existe na tabela')
//     return table[id];
// }

// // Modificar dados de uma entrada especifica ( por id )
// export function set_EntryData(_table = '', id = '', entryKey = '', value)
// {
//     const table = get_TableObject(_table)
//     let item = table[id];
//     if(item == null || item == undefined)console.log('Id não existe na tabela');
//     item[entryKey] = value;
//     table[id] = item;
//     localStorage.setItem(_table, JSON.stringify(table))
// }

// // retorna uuid do registro ( se n existe : undefined)
// export function find_Entry(_table = '', column = '', registry = '')
// {
//     const table = get_TableObject(_table)
//     const rowKeys = Object.keys(table)
//     let id = undefined;
//     for(let i = 0; i < rowKeys.length; i++)
//     {
//         let reg = table[rowKeys[i]][column]
//         if(reg == registry) {id = rowKeys[i]; break;}
//     }
//     return id;
// }