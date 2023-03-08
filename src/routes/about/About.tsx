import { v4 } from "uuid";
import { HiStar } from 'react-icons/hi';
import { about, moreAbout } from "../../services/about";
import css from "./About.module.scss";
const aboutImg = 'https://github.com/AyalaKedem/project3images/blob/main/jason-leung-poI7DelFiVA-unsplash.jpg?raw=true'



const About = () => {
  return (
    <>
      <div className="w-75 mx-auto px-5 pb-5">
        <div className="row gap-md-0 gap-5">
        {/* <div className="d-flex flex-column flex-xl-row justify-content-between gap-5"> */}
          <div className="col-md-8 col-12">
            <h2 className={`display-2 text-end ${css.orange}`}>אודותנו</h2>
            <div className="text-end">
              {about.map((p) => (
                <p key={v4()}>{p}</p>
              ))}
            </div>
          </div>
          <img className="col-md-4 col-12" src={aboutImg} alt="תמונת המסעדה" />
        {/* </div> */}
        </div>
        <div className="mt-5"><HiStar/> <HiStar/> <HiStar/></div>
        <div className="text-end mt-5">
          {moreAbout.map((p) => (
            <p key={v4()}>{p}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
