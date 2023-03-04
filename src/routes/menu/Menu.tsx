import MainMenuItem from "../../components/main-menu-item-arr/MainMenuItem";
import categoryArr from "../../api/MainMenuArr";
import css from "./Menu.module.scss";
import GiftCard from "../../components/gift-card/GiftCard";

const Menu = () => {
  // <button onClick={onClick} key={sub.text} id={sub.endpoint} className="btn btn-info">
  //   {sub.text}
  // </button>;

  return (
    <div className="w-50 mx-auto">
      <GiftCard />
      <div className={`w-100 mx-auto d-flex gap-3 justify-content-center pt-4 flex-wrap ${css.pb}`}>
        {categoryArr.map((sub) => (
          <MainMenuItem key={sub.endpoint} text={sub.text} img={sub.img} endpoint={sub.endpoint} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
