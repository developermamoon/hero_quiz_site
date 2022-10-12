import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyedropper } from '@fortawesome/free-solid-svg-icons'
import './Question.css'

const Question = (props) => {
    
    const { id, question, correctAnswer } = props.question; 
    const {index} = props;
    const options = props.question.options; 
    const showAns =(elem)=>{
        if(correctAnswer === elem){
            console.log("Correct");
            // document.querySelector('.option').style.backgroundColor="red";
            // document.querySelector('.option').attributes="disabled";
        }
        else {
            console.log("Incorrect")
        }
    }
    // console.log(id);
    return (
        <div className='box'>
            <div className="question-part">
                <h5 className='question'>Quiz {index}: {question}</h5>
                <FontAwesomeIcon className='eye-icon' icon={faEye}></FontAwesomeIcon>
            </div>
            <div className="options">
                {/* <input type="radio" name="" id="" /> */}
                {/* <p className='option'>{elem}</p> */}
                {options.map(elem => 
                    <label className='option'>
                    <input onClick={() => showAns(elem)} type="radio" name={id} id={elem} value={elem} /> 
                    <label for={elem}>{elem}</label>
                    </label>)}
                
            </div>
            
        </div>
    );
};

export default Question;