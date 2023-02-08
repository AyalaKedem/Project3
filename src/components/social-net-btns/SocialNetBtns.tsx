import { SocialNetArr } from "../../services/SocialNetArr"
import SocialNetBtn from "../social-net-btn/SocialNetBtn"
import css from './SocialNetBtns.module.scss'

const SocialNetBtns = () => {
  return (
    <div className={css.black}>
        {SocialNetArr.map(s => (
            <SocialNetBtn key={s.link} {...s}/>
        ))}
    </div>
  )
}

export default SocialNetBtns