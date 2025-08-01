import {User} from '../model/User'
import { users } from '../model/User'

const usersLog = (user:string,password:string) => {
    return users.filter((u) => u.username==user && u.password==password)
}

export const isUser = (user:string,password:string)=>{
    if (usersLog(user, password).length>0){
        localStorage.setItem('user',JSON.stringify(usersLog(user, password)[0]))
        return true
    }
    return false
}

export function logOut(){
    localStorage.removeItem('user')
}