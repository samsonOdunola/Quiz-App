import { Routes, Route,Link } from "react-router-dom";
import Addquestion from "./Addquestion";
import Allquestions from "./Allquestions";
const Admin = () => {
    return <>
    <div className="admin-btns">
     <button><Link className="admin-action-btn" to="add-questions">Add Questions</Link></button>
     <button>See scoreboard</button>
     <button><Link className="admin-action-btn" to="all-questions">Show all questions</Link></button>
    </div>
    <Routes>
        <Route path="/add-questions" element={<Addquestion/>}/>
        <Route path="/all-questions" element={<Allquestions />}/>
        
    </Routes>
    
    </>;
}


export default Admin;