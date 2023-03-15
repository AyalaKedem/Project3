import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { veganA, vegetarianA } from "../../features/check-box/checkBoxSlice";
import css from "./Checkbox.module.scss";

const Checkbox = () => {
  const dispatch = useAppDispatch();
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);

  const veganCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVegan(e.currentTarget.checked);
  };

  const vegetarianChCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVegetarian(e.currentTarget.checked);
  };

  useEffect(() => {
    dispatch(veganA(vegan));
  }, [vegan]);

  useEffect(() => {
    dispatch(vegetarianA(vegetarian));
  }, [vegetarian]);

  return (
    <div className="d-flex gap-2">
      <label className="d-flex gap-1">
        <input className={css.checkBox} type="checkbox" value="vegan" checked={vegan} onChange={veganCheck} />
        טבעוני
      </label>
      <label className="d-flex gap-1">
        <input className={css.checkBox} type="checkbox" value="vegetarian" checked={vegetarian} onChange={vegetarianChCheck} />
        צמחוני
      </label>
    </div>
  );
};

export default Checkbox;
