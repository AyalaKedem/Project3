import { v4 } from 'uuid';
import aboutImg from '../../img/jason-leung-poI7DelFiVA-unsplash.jpg';

import { about } from '../../services/about';
import css from './About.module.scss'

const About = () => {
  return (
    <>
    <div className='w-75 mx-auto d-flex flex-column flex-xl-row justify-content-between gap-5 p-5'>
      <div>
      <h2 className={`display-2 text-end ${css.orange}`}>אודותנו</h2>
      <div className='text-end'>{about.map(p => (<p key={v4()}>{p}</p>))}</div>
      </div>
      <img className='w-50' src={aboutImg} alt="תמונת המסעדה מבחוץ" />
    </div>
    </>
  )
}

export default About