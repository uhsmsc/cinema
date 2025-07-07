import './Button.css'

function Button({children}) {

    return(
        <button onClick={() => {console.log('Клик');}} className="button">{children}</button>
    )
}

export default Button;