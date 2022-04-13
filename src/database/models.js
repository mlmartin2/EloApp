// Modelos gerais p/ o sistema
// Usuários + Leads (modelos)
// leadStates + opportunities (consts reais)

export const leadStates = ['Cliente em Potencial', 'Dados Confirmados', 'Reunião Agendada']
export const opportunities = {'RPA':false, 'Produto Digital':false, 'Analytics':false, 'BPM':false}

export const model_User = 
{
    _TYPE: 'User',
    name: '',
    password: '',    
}

export const model_Lead =
{
    _TYPE: 'Lead',
    name: '',
    phone: '',
    email: '',
    opportunities: opportunities,
    state: 0,
}
