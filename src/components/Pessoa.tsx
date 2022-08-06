type pessoaNomeprops = {
   name:{
    primeiroNome: string,
    segundoNome: string
   }
}

export const Pessoa = (props: pessoaNomeprops)=>{
    return(
        <>
        {props.name.primeiroNome} {props.name.segundoNome}
        </>
    )
}