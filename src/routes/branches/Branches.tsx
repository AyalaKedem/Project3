import { BranchesProp } from "../../@types";
import Branch from "../../components/branch/Branch";

const Branches = ({ branches }: BranchesProp) => {
  return (
    <>
      <div className={`mx-auto`}>
        {branches
          .sort((a, b) => (a.city > b.city ? 1 : -1))
          .map((b) => (
            <Branch key={b.tel} {...b} />
          ))}
      </div>
    </>
  );
};

export default Branches;
