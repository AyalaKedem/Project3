import { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import css from './Up.module.scss';

const Up = () => {
  const [showBtn, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={css.topToBtm}>{showBtn && <IoIosArrowDropup className={`${css.iconPosition} ${css.iconStyle}`} onClick={scroll} />} </div>
    </>
  );
};

export default Up;
