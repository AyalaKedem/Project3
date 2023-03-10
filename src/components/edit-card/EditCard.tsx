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
  const [to, setTo] = useState(card?.to ?? "");
  const [congrat, setCongrat] = useState(card?.congrat ?? "");
  const [from, setFrom] = useState(card?.from ?? "");

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

  const edit = () => {
    if (sum >= 30 && to.length >= 2 && from.length >= 2) {
      const editedCard: GiftCard = {
        id: id!,
        sum: sum,
        congrat: congrat,
        from: from,
        to: to,
      };
      dispatch(editCard(editedCard));
      navigate(-1);
    } else {
      validate();
    }
  };

  if (card === undefined) {
    // לשנות לדף 404 אם יש זמן
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal">
        <div className="d-sm-flex justify-content-center align-items-center rounded-2">
          <div className="p-sm-5 p-1 d-flex flex-column justify-content-center">
            <h3 className={`mb-4 p-3 d-flex justify-content-center ${css.orange}`}>שובר מתנה</h3>
            <form className="d-flex flex-column p-1 gap-4">
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="sum">גיפט קארד</label>
                <input required className={css.sumWidth} type="number" min={0} name="sum" value={sum} onChange={(e) => setSum(+e.currentTarget.value)} />
                <span>₪</span>
              </div>
              <div className={css.mt}>{sumComment}</div>
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="to">ל: </label>
                <input required value={to} className="pe-1 w-100" type="text" name="to" placeholder="שם מקבל/ת המתנה" onChange={(e) => setTo(e.currentTarget.value)} />
              </div>
              <div className={css.mt}>{toComment}</div>
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
              <div className={css.mt}>{fromComment}</div>
            </form>
          </div>
          <img className={`ms-sm-5 ${css.width}`} src={giftImg} alt="תמונת מתנה" />
        </div>
        <button className={`${css.btn} d-flex mx-auto mt-3 mb-3  align-items-center justify-content-center px-5 py-2`} onClick={edit}>
          עדכן
        </button>
      </Modal>
    </div>
  );
};

export default EditCard;
