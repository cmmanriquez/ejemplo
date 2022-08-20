import './styles.css';

function Button ({text, OnClick}){
    return (
        <button onClick={OnClick} className='boton'>{text}</button>
    )
}
export default Button;