import { useState } from "react";
import Modal from "react-modal";
import css from "./GiftCard.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "../../app/hooks";
import { GiftCard as GiftCardType } from "../../@types";
import { card } from "../../features/gift-card/giftCardSlice";
import { v4 } from "uuid";
import { HiStar } from "react-icons/hi";
import { add as addCounter } from "../../features/counter/counterSlice";

const giftImg = "https://github.com/AyalaKedem/project3images/blob/main/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg?raw=true";

const customStyles = {
  content: {
    width: '80vw',
    margin: 'auto',
  },
};

Modal.setAppElement("#root");

const GiftCard = () => {
  const dispatch = useAppDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [sum, setSum] = useState(30);
  const [to, setTo] = useState("");
  const [congrat, setCongrat] = useState("");
  const [from, setFrom] = useState("");

  const [sumComment, setSumComment] = useState("");
  const [toComment, setToComment] = useState("");
  const [fromComment, setFromComment] = useState("");

  const validate = () => {
    if (sum < 30) {
      setSum(30);
      setSumComment('*מינימום 30 ש"ח');
    } else {
      setSumComment("");
    }
    if (to.length < 2) {
      setToComment("*צריך להכיל 2 תווים או יותר");
    } else {
      setToComment("");
    }
    if (from.length < 2) {
      setFromComment("*צריך להכיל 2 תווים או יותר");
    } else {
      setFromComment("");
    }
  };

  const addGiftCard = () => {
    if (sum >= 30 && to.length >= 2 && from.length >= 2) {
      const giftCard: GiftCardType = {
        id: v4(),
        sum: sum,
        congrat: congrat,
        from: from,
        to: to,
      };
      dispatch(card(giftCard));
      dispatch(addCounter(1));
      closeModal();
    } else {
      validate();
    }
  };

  return (
    <div>
      <div onClick={openModal} className={`${css.orangeBorder} ${css.dFlex}`}>
        <div className={`${css.giftBtn} ${css.dFlex}`}>
          Gift Card
          <div>
            <HiStar />
            <HiStar />
            <HiStar />
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <AiOutlineCloseCircle className={css.x} onClick={closeModal} />
        <div className="d-sm-flex justify-content-center align-items-center rounded-2">
          <div className="p-sm-5 p-1 d-flex flex-column justify-content-center">
            <h3 className={`mb-4 p-3 d-flex justify-content-center ${css.orange}`}>שובר מתנה</h3>
            <form className="d-flex flex-column p-1 gap-4">
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="sum">גיפט קארד</label>
                <input
                  className={css.sumWidth}
                  type="number"
                  min={30}
                  name="sum"
                  value={sum}
                  onChange={(e) => {
                    setSum(+e.currentTarget.value);
                  }}
                />
                <span>₪</span>
              </div>
              <div className={css.mt}>{sumComment}</div>
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="to">ל: </label>
                <input className="pe-1 w-100" type="text" name="to" placeholder="שם מקבל/ת המתנה" onChange={(e) => setTo(e.currentTarget.value)} />
              </div>
              <div className={css.mt}>{toComment}</div>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="congratulation">ברכה:</label>
                <textarea className={`pe-2 w-100 ${css.textArea}`} name="congratulation" id="congratulation" cols={40} rows={5} placeholder="זה המקום להכניס ברכה..." onChange={(e) => setCongrat(e.currentTarget.value)}></textarea>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <label htmlFor="from">באהבה:</label>
                <input className="pe-1 w-100" type="text" name="from" onChange={(e) => setFrom(e.currentTarget.value)} />
              </div>
              <div className={css.mt}>{fromComment}</div>
            </form>
          </div>
          <div className="d-flex justify-content-center">
            <img className={`ms-sm-5 ${css.width}`} src={giftImg} alt="תמונת מתנה" />
          </div>
        </div>
        <button className={`${css.btn} d-flex mx-auto mt-3 mb-3  align-items-center justify-content-center px-5 py-2`} onClick={addGiftCard}>
          הוסף להזמנה
        </button>
      </Modal>
    </div>
  );
};

export default GiftCard;
