type propsListaPessoas = {
    names:{
        first: string,
        second:string
    }[]
}

export const PessoaLista = (props: propsListaPessoas) =>{
    return (
        <>
        <ul>
            {props.names.map(item =>(
                <li>{item.first} 
                {item.second}
                </li>
            ))}
        </ul>
        </>
    )
}