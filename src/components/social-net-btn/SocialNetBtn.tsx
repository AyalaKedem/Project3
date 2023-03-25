import { SocialNetArrProp } from "../../@types";
import css from './SocialNetBtn.module.scss'

const SocialNetBtn = ({ icon, link }: SocialNetArrProp) => {
  return <a target={"_blank"} rel="_blank noreferrer" className={`${css.btn}`} href={link}>{icon}</a>;
};

export default SocialNetBtn;