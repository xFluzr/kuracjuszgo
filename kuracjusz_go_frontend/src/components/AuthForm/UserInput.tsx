type userInputType={
    type:string,
    val:string,
    name:string
}

export default function UserInput({type,val,name}:userInputType){
    return(
        <input placeholder={name} name={name} value={val} type={type} className="border-b-2 text-xl pb-2 focus:outline  outline-none border-black"/>
    )
}