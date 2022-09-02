import MyImage from '../../assets/about.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles.css";
import Button from "../../components/Buttons/index";
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url);
    }
    
    return(
        <>
        <div className="container__about-btn">
            <Button onClick={() => onClickButton ('/')} text= 'Home' />
            <Button onClick={() => onClickButton ('/game')} text= 'Game' />
            <Button onClick={() => onClickButton ('/about')} text= 'About' />
        </div>
        <h1 className="about__h1">ABOUT</h1>
        <div className="container__about-header">
            <p className="about__txt">Soy Licenciada en Artes Plásticas. Me desempeño como Desarrolladora Front End, actualmente soy docente de Desarrollo Web en Coderhouse; también trabajo como freelance.</p>
            {/* <FontAwesomeIcon icon="fa-solid fa-spider" /> */}
            <img className="about__img" src={MyImage} alt=""/>
        </div>
        </>
        
    )
    
}

export default About;