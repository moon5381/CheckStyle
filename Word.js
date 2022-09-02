import { useState } from "react"
export default function Word({wordq}){
    const [word,setWord]=useState(wordq);
    const [isShow, setIsShow]=useState(false)
    const [isDone,setIsDone]=useState(wordq.isDone)
    function btclick(){
        setIsShow(!isShow)
    }
    function chec(){
        fetch(`http://localhost:3001/words/${wordq.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body :JSON.stringify({
                ...wordq,
                isDone: !isDone,
            }),
        }).then(res=>{
            if(res.ok){
                setIsDone(!isDone)
            }
        })
    }
    function del(){
        if(window.confirm('삭제하시겠습니까?')){
            fetch(`http://localhost:3001/words/${wordq.id}`,{
                method:'DELETE',
            }).then(res=>{
                if(res.ok){
                    setWord({id : 0});
                }
            });
        }

    }

    if(word.id===0){
        return null;
    }

    return(
        <tr className={isDone?'off':''}>
        <td><input type="checkbox" checked={isDone} onChange={chec}/>
        </td>
        <td>{wordq.eng}</td>
        <td>{isShow && wordq.kor}</td>
        <td>
        <button onClick={btclick}>{isShow ?'숨기기':'뜻보기'}</button>
        <button onClick={del} className="btn_del">삭제</button>
        </td>
    </tr>)
}