import css from "./MenuItem.module.scss";
import { RiLeafFill, RiLeafLine } from "react-icons/ri";
import BackBtn from "../backBtn/BackBtn";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const MenuItem = () => {
  const { endpoint } = useParams();
  const iconStyle = { color: "#8ae105" };
  const menu = useAppSelector((state) => state.menu.menuCategory);
  const specificMenu = menu.filter((c) => c.category === endpoint);
  const title = useAppSelector((state) => state.mainMenu.mainMenu);
  return (
    <>
      <h3 className="display-5">{title.text}</h3>
      <div className="pt-3 d-flex flex-wrap justify-content-center">
        {specificMenu.map((item) => (
          <div className={`text-end p-4 ${css.width}`} key={item.name}>
              <div className="d-flex align-items-center gap-2">
                <h4 className={css.orange}>{item.name}</h4>
                {item.vegan && <RiLeafFill style={iconStyle} />}
                {item.vegetarian && <RiLeafLine style={iconStyle} />}
              </div>
              <div>{item.price} ₪</div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <BackBtn />
    </>
  );
};

export default MenuItem;
