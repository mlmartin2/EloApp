export const leadStates = ['Cliente em Potencial', 'Dados Confirmados', 'Reunião Agendada']
export const opportunities = ['RPA', 'Produto Digital', 'Analytics', 'BPM']

export const model_User = 
{
    _TYPE: 'User',
    name: '',
    password: '',    
}

export const model_Lead =
{
    _TYPE: '',
    name: '',
    phone: '',
    email: '',
    opportunities: [],
    state: 0,
}
