function Input(props){
    return (
        <>
            <input placeholder={props.placeholder} type={props.type || "text"}/>
        </>
    )
}
export default Input;