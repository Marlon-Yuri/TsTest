type propsName = {
    name: string,
    msgCount: number,
     
}

export const Greet = (props : propsName)=>{
    return(
     <>
     <h1>Hi {props.name}, you have {props.msgCount} unread mails</h1>
     </>
    )
}
