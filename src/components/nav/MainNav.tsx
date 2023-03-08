import { NavLink } from "react-router-dom";
import { navArr } from "../../services/nav-arr";
import OrdersBadge from "../orders-badge/OrdersBadge";
import css from './MainNav.module.scss';

const MainNav = () => {
  return (
    // column בטלפון או להשאיר row להחליט בסוף אם אני רוצה שזה יהיה 
    <div className={`d-flex gap-4 justify-content-center pb-5 mb-4 ${css.nav}`}>
    {navArr.map((link) => (
      <NavLink className={e => e.isActive ? css.active : css.unActive} key={link.path} to={link.path}>{link.text}</NavLink>
  ))}
  <NavLink className={e => e.isActive ? css.active : css.unActive} key='123' to='/order_summary'><OrdersBadge /></NavLink>
  
  </div>
  )
}

export default MainNav