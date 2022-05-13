import * as models from './models'

// Construtores dos modelos declarados

export function construct_User(name = '', password = '')
{
    let newUser = {...models.user};
    newUser.name = name;
    newUser.password = password;
    return newUser;
}

export function construct_Lead(name = '', phone = '', email = '', opportunities_values = null)
{
    let newLead = {...models.lead};
    newLead.name = name;
    newLead.phone = phone;
    newLead.email = email;
    if (opportunities_values) {
        Object.keys(newLead.opportunities).map((key, index) => {
            newLead.opportunities[key] = opportunities_values[index]
        })
    }

    return newLead;
}

