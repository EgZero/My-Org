import './boton.css'

const Boton = (props)=>{
    return <button className ="form__button button" type="submit">{props.children}</button>
}

export default Boton