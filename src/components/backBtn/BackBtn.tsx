import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import css from './BackBtn.module.scss'

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button onClick={()=>{navigate(-1)}} className={`mx-auto ${css.btn}`}><BiArrowBack/></button>
  )
}

export default BackBtn