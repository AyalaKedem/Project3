import { BiDish } from "react-icons/bi";
import { Badge } from "react-bootstrap";
// import { Badge } from '@material-ui/core/Badge';
import { useAppSelector } from "../../app/hooks";
import css from "./OrderBadge.module.scss";

const OrdersBadge = () => {
  const counter = useAppSelector((state) => state.counter.counter);

  return (
    <div className={css.order}>
      <div>
        <Badge  bg="info" className={css.badge}>{counter}</Badge>
      </div>
      <div className="ps-2 pt-2">
        <BiDish style={{ fontSize: "22px" }} />
      </div>
    </div>
  );
};

export default OrdersBadge;
