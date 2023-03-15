import css from "./MenuItem.module.scss";
import { RiLeafFill, RiLeafLine } from "react-icons/ri";
import BackBtn from "../backBtn/BackBtn";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { add } from "../../features/order/orderSlice";
import { add as addCounter } from "../../features/counter/counterSlice";
import GiftCard from "../gift-card/GiftCard";
import Checkbox from "../checkbox/Checkbox";
import { useState } from "react";

const MenuItem = () => {
  const { endpoint } = useParams();
  const iconStyle = { color: "#8ae105" };
  const menu = useAppSelector((state) => state.menu.menuCategory);
  const specificMenu = menu.filter((c) => c.category === endpoint);
  const veganMenu = specificMenu.filter((v) => v.vegan === true);
  const vegetarianMenu = specificMenu.filter((v) => v.vegetarian === true);
  const vMenu = specificMenu.filter((v) => v.vegetarian === true || v.vegan === true);
  const title = useAppSelector((state) => state.mainMenu.mainMenu);
  const dispatch = useAppDispatch();

  const [filteredMenu, setFilter] = useState(specificMenu);

  const vegan = useAppSelector((state) => state.checkBox.vegan);
  const vegetarian = useAppSelector((state) => state.checkBox.vegetarian);

  const filter = () => {
    if (vegan === true && vegetarian === true) {
      setFilter(vMenu);
    }
    if (vegan === true && vegetarian === false) {
      setFilter(veganMenu);
    }
    if (vegetarian === true && vegan === false) {
      setFilter(vegetarianMenu);
    }
    if (vegan === false && vegetarian === false) {
      setFilter(specificMenu);
    }
  };

  return (
    <div className="w-75 mx-auto">
      <GiftCard />
      <h3 className="display-5">{title.text}</h3>
      <div className="d-flex justify-content-center align-items-center gap-0">
        <Checkbox />
        <span className="me-1">:</span>
        <button className={css.filter} onClick={filter}>סנן</button>
      </div>
      <div className="pt-3 d-flex flex-wrap justify-content-center">
        {filteredMenu.map((item) => (
          <div
            onClick={() => {
              dispatch(add(item));
              dispatch(addCounter(1));
            }}
            className={`text-end m-4 ${css.width} ${css.pointer}`}
            key={item.id}
          >
            <div className={css.item}>
              <div className="d-flex align-items-center gap-2">
                <h4 className={item.ordered ? css.ordered1 : css.orange}>{item.name}</h4>
                {item.vegan && <RiLeafFill style={iconStyle} />}
                {item.vegetarian && <RiLeafLine style={iconStyle} />}
              </div>
              <div className={item.ordered ? css.ordered2 : ""}>{item.price} ₪</div>
            </div>
            <p className={item.ordered ? css.ordered2 : ""}>{item.description}</p>
          </div>
        ))}
      </div>
      <BackBtn />
    </div>
  );
};

export default MenuItem;
