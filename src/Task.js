

import './Task.css'


function Task({a,b,del,ind}) {
  
    
    return(
        <>
<div className="Task">
<div>
<h4>{a}</h4>
<p>{b}</p>
</div>
<button onClick={()=>del(ind)}> DEL</button>
</div>  
    

    </>
    );
    
    }
    
    export default Task;
