import Button from "../../components/Buttons/index";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('/game');
    }
    
    return(
        <Button onClick={() => onClickButton('/game')} text= 'Start Quizz' />
    )
    
}

export default Home;