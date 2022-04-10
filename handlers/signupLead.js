import {validate_Lead} from './validators'
import { construct_Lead } from '../storage/constructors'
import { add_Lead, get_TableObject } from './dbhandler'

export default function signUp(name = '', phone = '', email = '')
{
    const leadsArray = get_TableObject('Leads')
    const lead = construct_Lead(name, phone, email);
    const valid = validate_Lead(lead, leadsArray)
    if(valid == undefined) { add_Lead(lead); alert('Lead cadastrada com sucesso!')}
    else alert(valid)
}

export function signUp_Object(lead = {})
{
    signUp(lead.name, lead.phone, lead.email)
}