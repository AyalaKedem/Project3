import SocialNetBtns from "../social-net-btns/SocialNetBtns";
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={css.footer}>
        <SocialNetBtns />
          {/* <div className={`bg-black ${css.lh}`}>{`© Ayala Kedem - ${new Date().getFullYear()}`}</div> */}
          <div className={`bg-black ${css.name}`}>
            <a target={"_blank"} rel="_blank noreferrer" href={"www.linkedin.com/in/ayala-kedem-fullstack-developer"}>{`Ayala Kedem - ${new Date().getFullYear()} ©`}</a>
          </div>
          
      </div>
    </>
  );
};

export default Footer;
