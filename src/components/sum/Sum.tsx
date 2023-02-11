import { SumProp } from "../../@types";

const Sum = ({ prices, giftCard }: SumProp) => {
  const orderPrice = prices.map((i) => i.price);
  const giftPrice = giftCard.map((i) => i.sum);
  const arr = [...orderPrice, ...giftPrice];
  let sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return <div className="">סה"כ לתשלום: {sum} ₪</div>;
};

export default Sum;
