import {UncontrolledTooltip } from 'reactstrap'

function TasksOverlay({main,submain}) {
  return (
   <>
        <span  id='positionTop'>
        {main}
        </span>
        <UncontrolledTooltip style={{backgroundColor:"#fff",color:'black',padding:'10px'}} placement='top' target='positionTop'>
          {submain}
        
        </UncontrolledTooltip>
   </>
  );
}

export default TasksOverlay;