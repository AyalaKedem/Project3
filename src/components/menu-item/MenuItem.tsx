import css from "./MenuItem.module.scss";
import { RiLeafFill, RiLeafLine } from "react-icons/ri";
import BackBtn from "../backBtn/BackBtn";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { add } from "../../features/order/orderSlice";
import { add as addCounter } from "../../features/counter/counterSlice";

const MenuItem = () => {
  const { endpoint } = useParams();
  const iconStyle = { color: "#8ae105" };
  const menu = useAppSelector((state) => state.menu.menuCategory);
  const specificMenu = menu.filter((c) => c.category === endpoint);
  const title = useAppSelector((state) => state.mainMenu.mainMenu);
  const dispatch = useAppDispatch();
  return (
    <>
      <h3 className="display-5">{title.text}</h3>
      <div className="pt-3 d-flex flex-wrap justify-content-center">
        {specificMenu.map((item) => (
          <div
            onClick={() => {
              dispatch(add(item));
              dispatch(addCounter(1));
            }}
            className={`text-end m-4 ${css.width}`}
            key={item.id}
          >
            <div className="d-flex align-items-center gap-2">
              <h4 className={item.ordered ? css.ordered1 : css.orange}>{item.name}</h4>
              {item.vegan && <RiLeafFill style={iconStyle} />}
              {item.vegetarian && <RiLeafLine style={iconStyle} />}
            </div>
            {/* <div className={css.price}> */}
            <div className={item.ordered ? css.ordered2 : ""}>{item.price} ₪</div>
            {/* </div> */}
            <p className={item.ordered ? css.ordered2 : ""}>{item.description}</p>
          </div>
        ))}
      </div>
      <BackBtn />
    </>
  );
};

export default MenuItem;
