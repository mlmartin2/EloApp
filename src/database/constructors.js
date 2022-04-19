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

export function construct_Lead(name = '', phone = '', email = '', servs = [false,false,false,false])
{
    let newLead = mods.model_Lead;
    let opkeys = Object.keys(mods.opportunities);
    newLead._TYPE = 'Lead'
    newLead.name = name;
    newLead.phone = phone;
    newLead.email = email;
    newLead.opportunities = mods.opportunities;
    for(let i = 0; i < opkeys.length; i++)
    {
        newLead.opportunities[opkeys[i]] = servs[i]
    }

    return newLead;
}

