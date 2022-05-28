import { Link } from "react-router-dom";
import { useState } from "react";
const Addquestion = () => {
    const [question, setQuestion]=useState("")
    const [optionA, setOptionA]=useState("")
    const [optionB, setOptionB]=useState("")
    const [optionC, setOptionC]=useState("")
    const [optionD, setOptionD]=useState("")
    const [correctOption, setCorrectOption]=useState("")

    const [allquestions, setAllQuestions]=useState([])

    const addquestion =()=>{
        let newQuestion = {question,optionA,optionB,optionC,optionD,correctOption}
        setAllQuestions([...allquestions,newQuestion])        

    }
    const submitQuestion=()=>{
        console.log("working")
        addquestion(question,optionA,optionB,optionC,optionD,correctOption)
        setQuestion("")
        setOptionA("")
        setOptionB("")
        setOptionC("")
        setOptionD("")
    }

        return <div className="login-form" id="login-form">        
        <input type="text" placeholder="Question" value={question} onChange={(e)=>{setQuestion(e.target.value)}}className="input-field"/><br></br>
        <input type="text" placeholder="Option A" value={optionA} onChange ={(e)=>{setOptionA(e.target.value)}}htmlFor="option-A"className="input-field"/><br></br>
        <input type="radio" value={optionA} onChange={(e)=>{setCorrectOption(e.target.value)}} name="correct" id="option-A" />
        <input type="text" placeholder="Option B"value={optionB} onChange ={(e)=>{setOptionB(e.target.value)}} htmlFor="option-B"className="input-field"/><br></br>
        <input type="radio" value={optionB} onChange={(e)=>{setCorrectOption(e.target.value)}}name="correct" id="option-B" />
        <input type="text" placeholder="Option C" value={optionC} onChange ={(e)=>{setOptionC(e.target.value)}}htmlFor="option-C"className="input-field"/><br></br>
        <input type="radio" value={optionC} onChange={(e)=>{setCorrectOption(e.target.value)}} name="correct" id="option-C" />
        <input type="text" placeholder="Option D" value={optionD} onChange ={(e)=>{setOptionD(e.target.value)}}htmlFor="option-D"className="input-field"/><br></br>
        <input type="radio" value={optionD} onChange={(e)=>{setCorrectOption(e.target.value)}} name="correct" id="option-D" />        
        <button  onClick={submitQuestion}>Add Question</button>
        
        
    </div>;
}


export default Addquestion;