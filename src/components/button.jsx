import "./button.css"

function Button(props) {
    return (
        <button className="btn" style={{fontSize: props.font}} >{props.title}</button>
    )
}
export {Button}