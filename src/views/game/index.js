import Button from '../../components/Buttons/index';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import Loading from "../../assets/loading.gif"

const Game = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/');
  };

  return (
    <>
    <div className='container__game'>
      <div className='container__game-btn'>
        <Button onClick={onClickButton} text='Home' />
      </div>
        <h1 className='game__txt'>GAME</h1>
        <img src={Loading} alt="loading logo from a video game"/>
    </div>
    </>
  );
};

export default Game;