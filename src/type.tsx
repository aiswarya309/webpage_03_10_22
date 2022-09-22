export type state={
        State : any,
        HomeApi:()=> any,
    }

export type homeData={
        home_data:any
    }
    
    //App
export type actionApp={
        type : string,
    }
export type stateApp={
            Authenticate:boolean
    }

    //Home
export type homePayload={
    home_api:string[]
}
export type actionhome={
    type:string,
    payload:string[]
}
export type stateHome={
    home_data:string[]
}

    //Header
export type headerPayload={
    header_api:headerMiddleware[]
}
export type actionHeader={
    type:string,
    payload:{
        name:string ,
        path:string
}[]
}
export type stateHeader={
        data_api:{
            name:string ,
            path:string
    }[]
    }
export type headerMiddleware={
        name:string ,
        path:string
}

    //Employee
export type data={
    name:string,
    id:number
}
export interface stateEmp{
    emp_details:data[]

}
export interface actionEmp{
    type:string,
    payload:data[]
}
    //contact
export interface contact{
    firsrName:string,
    phon:string,
    place:string,
    email:string
}
export type rootType={
    stateHeader:stateHeader,
    stateApp:stateApp,
    stateHome:stateHome,
    stateEmp:stateEmp

}