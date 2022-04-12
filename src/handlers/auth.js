import React, { useState } from 'react'
import { useNavigate, useNavigationType } from "react-router-dom";
import { find_Entry, get_Entry } from '../database/manager';
const auth =(username='', password='')=> {
    let error = false
    const userid = find_Entry('Users', 'name', username)
    let user = get_Entry('Users', userid);
    if(password == '' || username == '') {error = true; alert('Usuário ou senha em branco')}
    else if( user == undefined || user.password != password) {error = true; alert('Usuário ou senha inválida')}
    else{ authContext(user)}
}

export const authContext = () =>
{

}

export default auth

