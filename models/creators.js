import * as mods from './models'
import {v4 as uuidv4} from 'uuid'

export function create_User(name = '', password = '')
{
    let newUser = mods.model_User;
    newUser.id = uuidv4();
    newUser.name = name;
    newUser.password = password;
    return newUser;
}

export function create_Lead(name = '', phone = '', email = '', opportunities = '')
{
    let newLead = mods.model_Lead;
    newLead.id = uuidv4();
    newLead.name = name;
    newLead.phone = phone;
    newLead.email = email;
    newLead.opportunities = opportunities;
    return newLead;
}

