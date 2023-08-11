

import React,{useState,useEffect} from "react";
import './Home.css'
import Task from "./Task";
function Home() {
  const iarr=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[] ;
  const [task , settask]=useState(iarr);
  const [Title , setTitle]=useState("");
  const [disc , setdisc]=useState("");
  console.log(Title,disc);
  
  //settask([...task,{Title,disc}]);
   //console.log(...task);  

//settask([]);
function add () {
    settask([...task,{Title,disc}]); 
   
    setTitle("");
setdisc(""); 
}

function del(ind){
  
    const filterarr=task.filter((val,i)=>{
    return(
        i!==ind
    )
  })
  settask(filterarr);
}  

function empty(){
    settask([]);
}


  
 const submithandler=(e)=> e.preventDefault();

 useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task));
 },[task]);

    return(
        <>
        
    <div className="container"> 
    <form onSubmit={submithandler}>
<input type="text" placeholder="Title" value={Title} onChange={(e)=>setTitle(e.target.value)}/>
<textarea placeholder="Discription"  value={disc} onChange={(e)=>setdisc(e.target.value)}>  </textarea>
<button type="submit" onClick={add}> ADD</button>

    </form>
    
   { task.map((item,ind) =>{
    return (
        <>
{/* <p>{i}
<div>{item.Title} {item.disc} </div>
</p> */}


<Task key={ind} a={item.Title} b={item.disc} del={del} ind={ind}/> 
</>
)
}) }
{ task.length>=1 && <button className="empty" type="submit" onClick={empty}> Delete All</button>
}

   
   </div> 

    </>
    );
    
   } 
    
    export default Home;
