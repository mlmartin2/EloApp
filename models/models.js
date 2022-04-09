const leadStates = ['Cliente em Potencial', 'Dados Confirmados', 'Reunião Agendada']
const opportunities = ['RPA', 'Produto Digital', 'Analytics', 'BPM']

export const model_User = 
{
    _TYPE: 'User',
    id: '',
    name: '',
    password: '',    
}

export const model_Lead =
{
    _TYPE: 'Lead',
    id: '',
    name: '',
    phone: '',
    email: '',
    opportunities: [],
}
