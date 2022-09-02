import Button from '../../components/Buttons/index';
import QuestionCard from '../../components/QuestionCard/index';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

const Game = () => {
const navigate = useNavigate();
const onClickButton = (url) => {
    navigate(url);
};
  
const [questions, setQuestions] = useState([]);


  useEffect (() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setQuestions(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className='container__game'>
      <div className='container__game-btn'>
        <Button onClick={() => onClickButton('/')} text= 'Home' />
        <Button className="link__active" onClick={() => onClickButton ('/game')} text= 'Game' />
        <Button onClick={() => onClickButton ('/about')} text= 'About' />
      </div>
        <h1 className='game__h1'>HP GAME</h1>
        <div>
          <form>
            {
              questions.map((question) => {
                return <div key={question.id}>
                          <QuestionCard currentQuestion={question} />
                        </div>
              })
            }
          </form> 
        </div>
    </div>

  );
};

export default Game;