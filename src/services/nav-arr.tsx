import { BiDish } from 'react-icons/bi';


// nav - כן, אני רוצה שעמוד התפריט יהיה העמוד הראשי אבל יעמוד באמצע ב

export const navArr = [
  {
    text: "אודות",
    path: "/about",
  },
  {
    text: "תפריט",
    path: "/",
  },
  {
    text: "סניפים",
    path: "/branches",
  },
  {
    text: <BiDish style={{fontSize: '22px'}} />,
    path: '/order_summary'
  }
];