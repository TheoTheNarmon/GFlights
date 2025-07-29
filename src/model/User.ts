export class User{
    id: number
    username: string
    password: string
    firstname: string
    lastname: string
    avatar: string

    constructor(
        id: number,
        username: string,
        password: string,
        firstname: string,
        lastname: string,
        avatar: string
    ){
        this.id = id
        this.username = username
        this.password = password
        this.firstname = firstname
        this.lastname = lastname
        this.avatar = avatar
    }
}

export const users: User[] = [
    new User(1, "jhon", "jhon", "Jhon", "Jerson", "https://cdn-icons-png.flaticon.com/512/12225/12225881.png"),
    new User(1, "admin", "admin", "Google", "Administrator", "https://cdn-icons-png.flaticon.com/512/12225/12225881.png"),
    new User(1, "theo", "theo", "Theo", "Narmontas", "https://cdn-icons-png.flaticon.com/512/711/711769.png")
]