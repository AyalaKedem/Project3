import { NavLink } from "react-router-dom";
import { navArr } from "../../services/nav-arr";
import css from './MainNav.module.scss';

const MainNav = () => {
  return (
    // column בטלפון או להשאיר row להחליט בסוף אם אני רוצה שזה יהיה 
    <div className={`d-flex flex-sm-row flex-column gap-sm-4 gap-3 justify-content-center pb-5 ${css.nav}`}>
    {navArr.map((link) => (
      <NavLink className={e => e.isActive ? css.active : css.unActive} key={link.path} to={link.path}>{link.text}</NavLink>
  ))}
  </div>
  )
}

export default MainNav