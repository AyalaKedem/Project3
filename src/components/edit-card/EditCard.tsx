import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import css from "../gift-card/GiftCard.module.scss";
import Modal from "react-modal";
import giftImg from "../../img/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg";
import { GiftCard } from "../../@types";
import { editCard } from "../../features/gift-card/giftCardSlice";

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

const EditCard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const modalIsOpen = true;

  const { id } = useParams();
  const cardsArr = useAppSelector((state) => state.giftCard.giftCard);
  const card = cardsArr.find((c) => c.id === id);

  const [sum, setSum] = useState(card?.sum ?? Number);
  const [to, setTo] = useState(card?.to ?? '');
  const [congrat, setCongrat] = useState(card?.congrat ?? '');
  const [from, setFrom] = useState(card?.from ?? '');

  if (card === undefined) {
    // לשנות לדף 404 אם יש זמן
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal">
        <div className="d-flex justify-content-between mx-auto rounded-2">
          <div className="p-5 w-50 mx-auto d-flex flex-column justify-content-center">
            <h3 className={`mb-4 p-3 d-flex justify-content-center ${css.orange}`}>שובר מתנה</h3>
            <form className="d-flex flex-column p-1 gap-4">
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="sum">גיפט קארד</label>
                <input required className={css.sumWidth} type="number" min={0} name="sum" value={sum} onChange={(e) => setSum(+e.currentTarget.value)} />
                <span>₪</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="to">ל: </label>
                <input required value={to} className="pe-1 w-100" type="text" name="to" placeholder="שם מקבל/ת המתנה" onChange={(e) => setTo(e.currentTarget.value)} />
              </div>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="congratulation">ברכה:</label>
                <textarea
                  required
                  value={congrat}
                  className={`pe-2 w-100 ${css.textArea}`}
                  name="congratulation"
                  id="congratulation"
                  cols={40}
                  rows={5}
                  placeholder="זה המקום להכניס ברכה..."
                  onChange={(e) => setCongrat(e.currentTarget.value)}
                ></textarea>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <label htmlFor="from">באהבה:</label>
                <input required value={from} className="pe-1 w-100" type="text" name="from" onChange={(e) => setFrom(e.currentTarget.value)} />
              </div>
            </form>
          </div>
          <img className={`rounded-start ms-4 ${css.width}`} src={giftImg} alt="תמונת מתנה" />
        </div>
        <button
          className={`${css.btn} d-flex mx-auto mt-5 w-25 align-items-center justify-content-center p-2`}
          onClick={() => {
            const editedCard: GiftCard = {
              id: id!,
              sum: sum,
              congrat: congrat,
              from: from,
              to: to,
            };
            console.log(editedCard);
            dispatch(editCard(editedCard));
            navigate(-1);
          }}
        >
          עדכן
        </button>
      </Modal>
    </div>
  );
};

export default EditCard;
