import Button from "../../components/Buttons/index";
import { useNavigate } from 'react-router-dom';
import "./styles.css";


const Home = () => {
    const navigate = useNavigate();

    const onClickButton_game = () => {
        navigate('/game');
    }
    const onClickButton_about = () => {
        navigate('/about');
    }
    
    return(
        <>
        <h1 className="txt_index">QUIZZ</h1>
        <Button onClick={() => onClickButton_game('/game')} text= 'Start' />
        <Button onClick={() => onClickButton_about('/about')} text= 'About' />

        </>
        
    )
    
}

export default Home;