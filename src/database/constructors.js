import * as mods from './models'

// Construtores dos modelos declarados

export function construct_User(name = '', password = '')
{
    let newUser = mods.model_User;
    newUser._TYPE = 'User'
    newUser.name = name;
    newUser.password = password;
    return newUser;
}

export function construct_Lead(name = '', phone = '', email = '', opportunities = [])
{
    let newLead = mods.model_Lead;
    newLead._TYPE = 'Lead'
    newLead.name = name;
    newLead.phone = phone;
    newLead.email = email;
    newLead.opportunities = opportunities;
    return newLead;
}

