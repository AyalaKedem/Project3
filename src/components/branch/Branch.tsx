import { BranchProp } from "../../@types";
import css from "./Branch.module.scss";

const Branch = ({ city, street, tel, opening, events }: BranchProp) => {
  return (
    <div className={`${css.branch} text-sm-end`}>
      <h3 className={`${css.orange} display-6`}>{city}</h3>
      <p className={`ms-2 mt-3 ${css.fz}`}>{street} </p>
      <div className="d-flex gap-2">
        <p className={`fw-bold ${css.fz}`}> טל: </p>
        <p className={css.fz}>{tel}</p>
      </div>
      <div className="d-flex flex-column flex-md-row gap-3">
        <h5 className="fw-bold text-decoration-underline">שעות פתיחה:</h5>
        <div className="text-sm-end">
          <div className="d-flex gap-2 text-end">
            <p className="fw-bold">א' - ה': </p>
            <p className="ms-3">{opening.all}</p>
          </div>
          <div className="d-flex gap-2 text-end">
            <p className="fw-bold">ו': </p>
            <p className="ms-3">{opening.fri}</p>
          </div>
          <div className="d-flex gap-2 text-end">
            <p className="fw-bold">שבת: </p>
            <p>{opening.sut}</p>
          </div>
        </div>
      </div>
      <p className="fw-bolder">{events}</p>
    </div>
  );
};

export default Branch;
