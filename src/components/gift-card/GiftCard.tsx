import { useState } from "react";
import Modal from "react-modal";
import css from "./GiftCard.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "../../app/hooks";
import { GiftCard as GiftCardType } from "../../@types";
import { card } from "../../features/gift-card/giftCardSlice";
import { v4 } from "uuid";
import { HiStar } from "react-icons/hi";

const giftImg = "https://github.com/AyalaKedem/project3images/blob/main/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg?raw=true";

const customStyles = {
  content: {
    width: "55%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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

  const [sum, setSum] = useState(Number);
  const [to, setTo] = useState("");
  const [congrat, setCongrat] = useState("");
  const [from, setFrom] = useState("");

  return (
    <div className={css.sticky}>
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
        <div className="d-flex justify-content-between mx-auto rounded-2">
          <div className="p-5 w-50 mx-auto d-flex flex-column justify-content-center">
            <h3 className={`mb-4 p-3 d-flex justify-content-center ${css.orange}`}>שובר מתנה</h3>
            <form className="d-flex flex-column p-1 gap-4">
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="sum">גיפט קארד</label>
                <input className={css.sumWidth} type="number" min={0} name="sum" onChange={(e) => setSum(+e.currentTarget.value)} />
                <span>₪</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="to">ל: </label>
                <input className="pe-1 w-100" type="text" name="to" placeholder="שם מקבל/ת המתנה" onChange={(e) => setTo(e.currentTarget.value)} />
              </div>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="congratulation">ברכה:</label>
                <textarea className={`pe-2 w-100 ${css.textArea}`} name="congratulation" id="congratulation" cols={40} rows={5} placeholder="זה המקום להכניס ברכה..." onChange={(e) => setCongrat(e.currentTarget.value)}></textarea>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <label htmlFor="from">באהבה:</label>
                <input className="pe-1 w-100" type="text" name="from" onChange={(e) => setFrom(e.currentTarget.value)} />
              </div>
            </form>
          </div>
          <img className={`rounded-start ms-4 ${css.width}`} src={giftImg} alt="תמונת מתנה" />
        </div>
        <button
          className={`${css.btn} d-flex mx-auto mt-5 w-25 align-items-center justify-content-center p-2`}
          onClick={() => {
            const giftCard: GiftCardType = {
              id: v4(),
              sum: sum,
              congrat: congrat,
              from: from,
              to: to,
            };
            dispatch(card(giftCard));
            closeModal();
          }}
        >
          הוסף להזמנה
        </button>
      </Modal>
    </div>
  );
};

export default GiftCard;

//
//   return (
// <div className='d-flex justify-content-between w-50 mx-auto rounded-2'>
//     <div className="p-5 w-50 mx-auto d-flex flex-column justify-content-center">
//   <h3>שובר מתנה</h3>
//   <form className="d-flex flex-column gap-3">
//     <div className="d-flex gap-2">
//       <label htmlFor="to">ל: </label>
//       <input className="pe-1" type="text" name="to" placeholder="שם מקבל/ת המתנה" />
//     </div>
//     <div className="d-flex gap-2">
//       <label htmlFor="congratulation">ברכה:</label>
//       {/* לעשות שלא יהיה אפשר להזיז */}
//       <textarea className="pe-2" name="congratulation" id="congratulation" cols={40} rows={5} placeholder="זה המקום להכניס ברכה..."></textarea>
//     </div>
//     <div className="d-flex gap-2">
//       <label htmlFor="from">באהבה:</label>
//       <input className="pe-1" type="text" name="from" />
//     </div>
//   </form>
// </div>
// <img className='rounded-start' src={giftImg} alt="תמונת מתנה" />
// </div>
//   );
// }

// export default GiftCard;
