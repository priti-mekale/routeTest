export interface Iregister{
    email:string;
    password:string;
    userRole:'buyer'| 'admin' | 'superAdmin';
}

export interface IuserLogin{
    email:String;
    password:String;
}