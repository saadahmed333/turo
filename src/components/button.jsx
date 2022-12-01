import "./button.css"

function Button(props) {
    return (
        <button className="btn" style={{fontSize: props.font}} >{props.title}</button>
    )
}
export {Button}



function ThemeButton(props) {
    return (
            <button className="border-[1px] mb-[10px] border-black w-[100%] h-[50px] font-semibold">{props.title}</button>
    )
}
export {ThemeButton}