import { SocialNetArr } from "../../services/SocialNetArr"
import SocialNetBtn from "../social-net-btn/SocialNetBtn"

const SocialNetBtns = () => {
  return (
    <div>
        {SocialNetArr.map(s => (
            <SocialNetBtn key={s.link} {...s}/>
        ))}
    </div>
  )
}

export default SocialNetBtns