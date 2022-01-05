import React from 'react'
import { useHistory } from 'react-router-dom';
import arrowRight from "../../assets/arrow-right.png";

function CustomButton() {
  const history = useHistory()
  const handleClick = ()=> 
  {
    history.push('/blogs')
  }
    return (
        <button className='contact-us--btn' onClick={handleClick}>
         
        </button>
    )
}

export default CustomButton
