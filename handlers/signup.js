import validate from './validators'
import { construct_User } from '../models/constructors'
import { add_User } from './dbhandler'

export default function signUp(username = '', password = '', passwordConfirm = '')
{
    let user = construct_User(username, password);
    let valid = validate(user)
    if(valid == undefined) add_User(user)
    else alert(valid)
}
