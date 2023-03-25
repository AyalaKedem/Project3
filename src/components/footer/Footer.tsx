import SocialNetBtns from "../social-net-btns/SocialNetBtns";
import css from "./Footer.module.scss";

const Footer = () => {
  const linkedin = 'https://www.linkedin.com/in/ayala-kedem-fullstack-developer'
  return (
    <>
      <div className={css.footer}>
        <SocialNetBtns />
          <div className={`bg-black ${css.name}`}>
            <a target={"_blank"} rel="_blank noreferrer" href={linkedin}>{`Ayala Kedem - ${new Date().getFullYear()} ©`}</a>
          </div>
          
      </div>
    </>
  );
};

export default Footer;
