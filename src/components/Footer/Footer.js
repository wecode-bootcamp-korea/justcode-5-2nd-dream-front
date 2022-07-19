import React from 'react';
import css from './Footer.module.scss';
import left from './image/left.png';
import right from './image/right.png';
import { FaFacebook, FaInstagram, FaRegCopyright } from 'react-icons/fa';
import ch from './image/ch.png';
import kcp from './image/kcp.png';

function Footer() {
  return (
    <>
      <div className={css.banner}>
        <img className={css.left_banner} alt="left_banner" src={left} />
        <img className={css.right_banner} alt="right_banner" src={right} />
      </div>
      
      <div className={css.second_position}>
        <div className={css.use_info}>
          <span className={css.font_use}> 이용안내 </span>
          <div className={css.cumsu}>
            검수기준
      </div>
          <div className={css.use_policy}>
            이용정책
      </div>
          <div className={css.panalty}>
            패널티정책
      </div>
          <div className={css.community}>
            커뮤니티 가이드 라인
      </div>
        </div>
        <div className={css.support}>
          <span className={css.font_use}>고객지원</span>
          <div className={css.kongji}>
            공지사항
      </div>
          <div className={css.service}>
            서비스소개
      </div>
          <div className={css.show_room}>
            쇼룸 안내
      </div>
          <div className={css.seller}>
            판매자 방문접수
      </div>
        </div>
        <div className={css.center}>
          <span className={css.font_use}> 고객센터 1588 - 7813 </span>
          <div className={css.run_time}>
            운영시간 평일 11:00 ~ 18:00 (토,일 공휴일 휴무)
      </div>
          <div className={css.run_time1}>
            점심시간 평일 13:00 - 14:00
      </div>
          <div className={css.run_time2}>
            1:1 문의하기는 앱에서만 가능합니다.
      </div>
          <div className={css.button_q}>
            <button className={css.bt}>자주묻는 질문</button>
          </div>
        </div>
      </div>
      <div className={css.bottom_line}>
      </div>
      <div className={css.introduce}>
        회사소개
    <div className={css.recu}>
          인재채용
    </div>
        <div className={css.susset}>
          제휴제안
    </div>
        <div className={css.use_law}>
          이용약관
    </div>
        <div className={css.priver}>
          <span className={css.font_use}>개인정보처리방침</span>
          <span className={css.insta}>
            <FaInstagram size="30" />
          </span>
          <span className={css.face}>
            <FaFacebook size="30" />
          </span>
          <img className={css.ch_banner} alt="ch_banner" size="10" src={ch} />
        </div>
        <div className={css.word}>
          드림 주식회사. 대표 고길동 사업자등록번호: 123-56-78910
      <span className={css.word_line}> 사업자정보확인 </span>
      통신판매업: 제 2022-경기안양C-0193호
    </div>
        <div className={css.word1}>
          사업장소재지: 경기도 안양시 평촌동 내곡로 117, 8층
          개인정보관리책임자: 아이유  호스팅 서비스: 네이버 클라우드(주)
    </div>
        <div className={css.kcp}>
          <img className={css.kcp_banner} alt="kcp_banner" src={kcp} />
          <div className={css.word2}>
            고객님의 안전거래를 위해 현금 등으로 결제 시 KREAM에서 가입한 <br />
        NHN KCP의 구매안전서비스를 이용하실 수 있습니다.
      </div>
          <div className={css.word3}>
            크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별 판매자가 등록한
        상품정보에 대해서 책임을 지 <br />지 않습니다. 단, 거래과정에서 검수하고 보증하는
        내용에 대한 책임은 당사에 있습니다.
      </div>
          <div className={css.kream}>
            <FaRegCopyright size="10" /> KREAM
      </div>
        </div>

      </div>


    </>
  )
}

export default Footer;
