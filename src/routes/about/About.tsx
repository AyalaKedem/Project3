import { v4 } from 'uuid';
import aboutImg from '../../img/jason-leung-poI7DelFiVA-unsplash.jpg';

import { about, moreAbout } from '../../services/about';
import css from './About.module.scss'

const About = () => {
  return (
    <>
    <div className='w-75 mx-auto p-5 mt-1'>
    <div className='d-flex flex-column flex-xl-row justify-content-between gap-5'>
      <div>
      <h2 className={`display-2 text-end ${css.orange}`}>אודותנו</h2>
      <div className='text-end'>{about.map(p => (<p key={v4()}>{p}</p>))}</div>
      </div>
      <img className='w-25' src={aboutImg} alt="תמונת המסעדה" />
    </div>
    <div className='text-end mt-5'>{moreAbout.map(p => (<p key={v4()}>{p}</p>))}</div>
    </div>
    </>
  )
}

export default About