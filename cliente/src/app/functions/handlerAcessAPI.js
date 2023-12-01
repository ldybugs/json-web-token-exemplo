'use server'

import { cookies } from "next/dist/client/components/headers";

const url = "http://localhost:3001"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/logar",
    {
        method:"POST",
        headers:{ "Content-type":"Application/json"},
        body: JSON.stringify(user)
    }
    );
    const userAuth = await responseOfApi.json();
    console.log(userAuth);
    return userAuth;
}

const postUser = async (user) => {
    const token = cookies().get("token")?.value
    try{
        console.log(user)
        const responseOfApi = await fetch(url + "/usuarios/cadastrar", {
            method: 'POST',
            headers: { 'Content-type': 'Application/json',
            Cookie: `token=${token}`},
            body: JSON.stringify(user) 
        });
        const userSave = await responseOfApi.json();
        return userSave;
    }
    catch {
        return null;
    }
}

const getUsers = async () =>{
    const token = cookies().get("token")?.value
    try{
        const responseOfApi = await fetch(url + "/usuarios/listar",{
            next: { revalidate: 5},
            headers: {'Content-type': 'Application/json',  
            Cookie: `token=${token}`},
        });
        const listUsers = responseOfApi.json();
console.log(listUsers);
        return listUsers;
    } catch{
        return null;
    }

    }

const updateUser = async (user, id) => {
    const token = cookies().get('token')?.value;
    try{
        const responseOfApi = await fetch(`${url}/user/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'Application/json',
            Cookie: `token=${token}`},
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        return userSave;
    } catch {
        return null;
    }
}

    export { getUsers, getUserAuthenticated, postUser, updateUser };