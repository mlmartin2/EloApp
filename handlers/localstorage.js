import {v4 as uuidv4} from 'uuid'

function SaveUser(user)
{
    uuidv4()
    try{
        localStorage.setItem('1', user)
        
    }
    catch(error){
        alert(error)
    }
}

function CreateUserObject(name = '', password = '' )
{
    // Validar ID
    newUser = { name:{name}, password:{password}}
    JSON.stringify(newUser)
    alert(newUser)
    return newUser
}