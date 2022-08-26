import './styles.css';

function Button ({text, onClick}){
    return (
        <section className='container_boton'>
            <button onClick={onClick} className='boton'>{text}</button>
        </section>
        
    )
}
export default Button;