
const Allquestions = ({allquestions}) => {      

    return <div>
        {allquestions.map((item)=>{
            const {index,question, correctOption}=item
            return <div key={index}>
                <h3>Ques:{question}</h3>
                <p>Ans:{correctOption}</p>
            </div>
        })}
    </div>;
}



export default Allquestions;