import {useState, useEffect} from 'react';

//Les icons
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

//Les pages du menu
import Isopen from '../screen/Isopen';
// import IsClose from '../screen/IsClose';

//Le style css
import '../style/NavHook.css';

export default function DropDown(){
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState("open");
  const [visible, setVisible] = useState(false);
  
  const toggle = (e) => {
    e.preventDefault();
    setStatus((prev) => !prev);
  }
  
  useEffect(()=> {
    {status === true ? 
      setTitle(<CloseOutlinedIcon sx={{ fontSize: 40 }} />) : 
         setTitle(<MenuOutlinedIcon sx={{ fontSize: 40 }} />)
    }
  }, [status]);

useEffect(()=> {
    {status === true ? 
      setVisible(true) : 
         setVisible(false)
    }
  }, [status]);

  return(
    <div>
      <button className='dropDOwnBtn' onClick={toggle}>{title}</button>
      {visible === true ? <Isopen /> : undefined}
    </div>
  );
}
