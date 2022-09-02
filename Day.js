
import { Link, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch.js";
import Word from "./Word.js";
import "./index.css";
export default function Day(){
    const {day}=useParams();
    const words=useFetch(`http://localhost:3001/words?day=${day}`)



 return(
    <>
    <h2>Day {day}</h2>
    {words.length===0 && <span>Loading...</span>}
    
    <table>
        <tbody>
            
            {words.map(wordq=>(
            <Word wordq={wordq} key={wordq.id}/>
                        ))}
        <h1 className="arrowleft">
    <Link to={`${day-1}`}className="link">←</Link>
        </h1>
        <h1 className="arrow">
    <Link to={`${day-1+2}`}className="link">→</Link>
        </h1>
   
        </tbody>
    </table>
    </>
 )
            }