import {v4 as uuidv4} from 'uuid'

export function init_Database()
{
    localStorage.setItem('Users', '{}')
    localStorage.setItem('Leads', '{}')
}

export function post_Entry(dataset_name, entry)
{
    let dataset = get_Dataset(dataset_name)
    if(dataset[entry.id] != undefined){dataset[entry.id] = entry}
    else
    {
        entry.id = uuidv4();
        dataset[entry.id] = entry;
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