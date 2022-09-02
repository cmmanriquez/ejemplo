import './styles.css';
function QuestionCard({currentQuestion}){
    return(
        <div className='container__questions'>
                <span className='question__id'>{currentQuestion.id}</span>
                <span className='question'>{currentQuestion.question}</span>
            {
                currentQuestion.answers.map((opcion) => (
                    <div className='container__answers' key={opcion.id}>
                        <input type="radio" id={`${opcion.id}`} name={opcion.id} value={opcion.answer}></input>
                        <label htmlFor={`${opcion.id}`} className='options'>{opcion.answer}</label>
                        <br/>
                    </div>
                ))
            }
        </div>
    )
};

export default QuestionCard;