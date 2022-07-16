import React from 'react';
import css from './Post.module.scss';
import t1 from './images/t1.png';
import t2 from './images/t2.png';
import t3 from './images/t3.png';
import t4 from './images/t4.png';
import t5 from './images/t5.png';
import t6 from './images/t6.png';
import t7 from './images/t7.png';
import t8 from './images/t8.png';
import t9 from './images/t9.png';
import t10 from './images/t10.png';


function Post() {
  return (
    <div>
      <div className={css.posi}>
        <img className={css.banner} src={t1} alt="t1"/>
        <img className={css.banner} src={t2} alt="t2"/>
        <img className={css.banner} src={t3} alt="t3"/>
        <img className={css.banner} src={t4} alt="t4"/>
        <img className={css.banner} src={t5} alt="t5"/>
      </div>
      <div className={css.posi}>
        <img className={css.banner} src={t6} alt="t6"/>
        <img className={css.banner} src={t7} alt="t7"/>
        <img className={css.banner} src={t8} alt="t8"/>
        <img className={css.banner} src={t9} alt="t9"/>
        <img className={css.banner} src={t10} alt="t10"/>
      </div>
    </div>
  )
}

export default Post;
