function Heading(props) {
    return (
        <>
            <span>
                {
                    props.heading
                }
            </span>
            <a onClick={props.onClick}>
                {
                    props.sign
                }
            </a>
        </>
    )
}
export default Heading;