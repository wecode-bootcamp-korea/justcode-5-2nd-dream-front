import React from 'react';
import css from './ProductStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faComment } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

function ProductStyle(props) {
  const navigate = useNavigate();
  const { style } = props;
  const { content } = style;
  const commentNum = style.comment_num;
  const likeNum = style.like_num;
  const userImage = style.user_image;
  const userName = style.user_name;
  const styleImage = style.image_list[0].image_url;

  return (
    <div className={css.container} onClick={() => navigate('/style')}>
      <img className={css.style_img} src={styleImage} alt="style" />
      <div className={css.user}>
        <img
          className={css.user_img}
          src={userImage ? userImage : styleImage}
          alt="style"
        />
        <div className={css.user_name}>{userName ? userName : 'Dream'}</div>
      </div>
      <p className={css.content}>{content}</p>
      <div className={css.cnt}>
        <div className={css.like}>
          <FontAwesomeIcon icon={faSmile} />
          <div>{likeNum}</div>
        </div>
        <div className={css.comment}>
          <FontAwesomeIcon icon={faComment} />
          <div>{commentNum}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductStyle;
