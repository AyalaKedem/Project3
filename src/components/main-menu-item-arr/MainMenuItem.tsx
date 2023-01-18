import { Link } from "react-router-dom";
import { MainMenuProp } from "../../@types";
import { useAppDispatch } from "../../app/hooks";
import { title } from "../../features/main-menu/mainMenuSlice";
import css from "./MainMenuItem.module.scss";

const MainMenuItem = ({ text, endpoint, img }: MainMenuProp) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(title(text));
  };

  return (
    <div onClick={onClick} id={text} key={text} className={`${css.imgWRrapper} ${css.grid}`}>
      <img className={`w-100 ${css.grid}`} src={img} alt={`תמונת מנה ${text}`} />
      <Link className={`text-white text-decoration-none ${css.blackDiv} ${css.grid}`} to={`/menu/${endpoint}`}>
        {text}
      </Link>
    </div>
  );
};

export default MainMenuItem;
