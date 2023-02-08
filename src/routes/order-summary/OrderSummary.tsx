import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CompletedGiftCard from "../../components/completed-gift-card/CompletedGiftCard";
// menuItem -מ css -אם אני לא משנה כלום בעיצוב לייבא את ה
import css from "./OrderSummary.module.scss";
import { IoIosClose } from "react-icons/io";
import { deleteFromOrder } from "../../features/order/orderSlice";
import Sum from "../../components/sum/Sum";
import { v4 } from "uuid";
import { add } from "../../features/counter/counterSlice";

const OrderSummary = () => {
  const menu = useAppSelector((state) => state.orders.orders);
  const cardPrice = useAppSelector((state) => state.giftCard.giftCard);
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <h3 className="display-5">סיכום הזמנה</h3>
      <div className="pt-3 d-flex flex-wrap justify-content-center">
        {menu.map((item) => (
          <div onClick={() => {}} className={`text-end m-4 ${css.width}`} key={v4()}>
            <p></p>
            <div className="d-flex align-items-center gap-2">
              <IoIosClose
                className={`${css.x} ${css.orangeColor}`}
                onClick={() => {
                  dispatch(deleteFromOrder(item.id));
                  dispatch(add(-1));
                }}
              />
              <h4 className={css.orange}>{item.name}</h4>
            </div>
            <p className="mt-2">{item.description}</p>
            <div>{item.price} ₪</div>
          </div>
        ))}
        <div>
          <CompletedGiftCard />
        </div>
      </div>
      <Sum prices={menu} giftCard={cardPrice} />
    </div>
  );
};

export default OrderSummary;
