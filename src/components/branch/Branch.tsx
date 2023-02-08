import { BranchProp } from "../../@types";
import css from "./Branch.module.scss";

const Branch = ({ city, street, tel, opening, events }: BranchProp) => {
  return (
    <div className={`${css.branch} text-end`}>
      <h3 className={`${css.orange} display-6`}>{city}</h3>
      <span className={`ms-2 ${css.fz}`}>{street} </span>
      <span className={`fw-bold ${css.fz}`}> טל: </span>
      <span className={css.fz}>{tel}</span>
      <div className="d-flex flex-column flex-md-row gap-3 mt-2">
        <h5>שעות פתיחה:</h5>
        <div className="text-end">
          <span className="fw-bold">א'-ה': </span>
          <span className="ms-3">{opening.all}</span>
          <span className="fw-bold">ו': </span>
          <span className="ms-3">{opening.fri}</span>
          <span className="fw-bold">שבת: </span>
          <span>{opening.sut}</span>
        </div>
      </div>
      <p className="fw-bolder">{events}</p>
    </div>
  );
};

export default Branch;
