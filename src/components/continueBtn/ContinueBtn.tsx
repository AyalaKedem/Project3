import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import css from './ContinueBtn.module.scss'

const ContinueBtn = () => {
  const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-end'>
      <button onClick={()=>{navigate('/menu')}} className={`mb-5 p-3 ${css.btn}`}>להמשך הזמנה {'\u00A0'} <BiArrowBack/></button>
    </div>
  )
}

export default ContinueBtn