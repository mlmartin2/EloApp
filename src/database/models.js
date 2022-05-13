import {v4 as uuidv4} from 'uuid'

export const leadStates =
{
    0: 'Cliente em Potencial', 
    1: 'Dados Confirmados', 
    2: 'Reunião Agendada'
}

export const opportunities = 
{
    'RPA':false, 
    'Produto Digital':false, 
    'Analytics':false, 
    'BPM':false
}

export const user = {
    id : null,
    name : '',
    password :  '',
}

export const lead = {
    id: null,
    name : '',
    phone : '',
    email : '',
    state : 0,
    opportunities : opportunities
}
