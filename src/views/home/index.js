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
        <h1 className="txt_index">QUIZZ</h1>
        <Button onClick={() => onClickButton('/game')} text= 'Start' />
        <Button onClick={() => onClickButton('/about')} text= 'About' />

        </>
        
    )
    
}

export default Home;