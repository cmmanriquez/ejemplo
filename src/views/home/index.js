import Button from "../../components/Buttons/index";
import { useNavigate } from 'react-router-dom';
import "./styles.css";

const Home = () => {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url);
    }
    
    return(
        <>
        <div className="container__index-btn">
            <Button onClick={() => onClickButton ('/')} text= 'Home' />
            <Button onClick={() => onClickButton('/game')} text= 'Start' />
            <Button onClick={() => onClickButton('/about')} text= 'About' />
        </div>
        <h1 className="index__h1">QUIZ</h1>
        </>
        
    )
    
}

export default Home;