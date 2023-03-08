import { useState } from "react";
import { BranchProp } from "../../@types";
import { branchesArr } from "../../api/branchesArr";
import Branches from "../../routes/branches/Branches";
import { v4 } from "uuid";
import { BiSearchAlt } from "react-icons/bi";
import css from "./BranchSearch.module.scss";

const BranchSearch = () => {
  const [address, setAddress] = useState<string>("");
  const [branch, setBranch] = useState<BranchProp[]>(branchesArr);

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setAddress(value);
  };

  const onClick = () => {
    let branches = branchesArr.filter((b) => b.city.startsWith(address));
    setBranch(branches);
  };

  return (
    <div className="w-50 mx-auto">
      <div className="d-sm-flex align-items-center gap-3">
        <input className={`${css.input} w-75 pe-2 mb-sm-0 mb-3`} onInput={onInput} type="text" placeholder="הקלד שם עיר" />
        <button className={`${css.btn} w-25 ps-5 pe-5 mb-sm-0 mb-3`} onClick={onClick}>
          <div className="d-flex justify-content-center gap-2">
            <span>חיפוש</span>
            <span>
              <BiSearchAlt />
            </span>
          </div>
        </button>
      </div>
      <Branches key={v4()} branches={branch} />
    </div>
  );
};

export default BranchSearch;
