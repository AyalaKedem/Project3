import giftImg from "../../img/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg";
import css from "../gift-card/GiftCard.module.scss";
import css2 from './CompletedGiftCard.module.scss';
import { MdEditNote } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

// { sum, to, congrat, from, id }: GiftCard

const CompletedGiftCard = () => {
  const card = useAppSelector(state => state.giftCard.giftCard)
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex bg-white justify-content-between w-50 mx-auto rounded-2">
        <div className="p-5 w-50 mx-auto d-flex flex-column justify-content-center">
          <h3 className={`mb-1 p-3 d-flex justify-content-center ${css.orange}`}>שובר מתנה</h3>
          <form className="d-flex flex-column p-1 gap-4">
            <div className="text-black fw-bold">גיפט קארד - {card.sum} ₪</div>
            <div className="d-flex align-items-center gap-2">
              <div className="text-black">ל{card.to}</div>
            </div>
            <div className="d-flex flex-column">
              <div className="text-black text-end">{card.congrat}</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="text-black">באהבה: {card.from}</div>
            </div>
          </form>
        </div>
        <div className={`${css2.grid} ${css2.wrapImg}`}>
        <img className={`rounded-start ${css2.grid}`} src={giftImg} alt="תמונת מתנה" />
        <MdEditNote onClick={()=>{navigate(`/giftcard/${card.id}`)}} className={`${css2.penGrid} ${css2.blk}`} />
        </div>  
      </div>
    </>
  );
};

export default CompletedGiftCard;
