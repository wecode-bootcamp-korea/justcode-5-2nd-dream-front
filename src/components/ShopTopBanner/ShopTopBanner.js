import React from 'react';
import css from './ShopTopBanner.module.scss';
// import { Link } from 'react-router-dom';

function ShopTopBanner() {
  return (
    <div className={css.shop_top_banner}>
      <div className={css.search_trend_container}>
        <ul className={css.search_trend_brand_list}>
          <li className={css.brand_item}>
            {/* <Link to="/"> */}
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA3MDhfMjI4/MDAxNjU3MjcwMTc4Njg0.040iiHmtKF873Q69zmmM2jppOHXKYdBUvk3nItxwB-sg.9GetyjBeRXMIXVNV7uO7jLLVhwoWRfkA4OWMxvuPPX0g.PNG/a_cc2b587b575448d9b302b565bb8ab149.png"
              alt="APPLE"
            />
            <p>APPLE</p>
            {/* </Link> */}
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA2MjRfMjYw/MDAxNjU2MDUzMzU4NDk2.7gi5qbcMXneM-G5YMK-37RjQrGcBgjF4_q1f1rYFNXgg.XJDHvbcguH9EPJIsTxrO2nWpcRJBovmbG8FA1NS08F0g.PNG/a_e1232dee841b4b47bec24545ff0e1957.png"
              alt="야스히로"
            />
            <p>야스히로</p>
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA3MDhfMjkz/MDAxNjU3MjcwMTY3Mzk2.yJro5SA7zV7Cr9BHI0C5dHB-XHdmsom1tpwrl6WVR3Yg.p51-xraltQCxuceZrCyKxkJeCmjAbsA_0qOTRr4jwi8g.PNG/a_54500fb7449b46b398a17febc23df2cf.png"
              alt="샤넬"
            />
            <p>샤넬</p>
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA3MDhfNzQg/MDAxNjU3MjcwMTU1ODAz.DONed4wm_dXlBPhn0_sNgiy0-Yqu0P6OQbuJWsEA-nEg.eohVvEJdaNKsiPityRVNgsVWuppGBuvJ42ovvfLnLPkg.PNG/a_ad84c6de2adc46c9a65dbd155a68472b.png"
              alt="에어포스"
            />
            <p>에어포스</p>
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA2MjRfMTcx/MDAxNjU2MDUzNDAzODEy.OYeCZNVmKMVDdybFtkL6MQDLWdqmvKnHqpSiNwrpMt0g.fMO5AI3P6TOE18l_4aQ7ogNJ5AaYY3raRVOeLUIfCbsg.PNG/a_c264b1cd15d34f44bb856673edf7c245.png"
              alt="롤렉스"
            />
            <p>롤렉스</p>
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA1MjdfMjM0/MDAxNjUzNjIyOTc4OTYz.kKJvJIM0s_i2BOQh2WOKAC__dq7Oy5mqxwkTaNU9ZVsg.8u8sqBS_hNme_WxAC_UX6FQcDXKc50nJeZPmrHiOjlog.PNG/a_a397413783a1451e8a658d3ab8e2d5fc.png"
              alt="다이슨"
            />
            <p>다이슨</p>
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA3MDhfMTIx/MDAxNjU3MjcwMTE4OTc4.3juuOp4Y9i63uCPEspBl1y6TwE30g17x64MEEdkba0sg.NH43fmhGdnqyZI8gj6GZnmOEHTtdiYzFI_bvHWApc3sg.PNG/a_516f6b6beee8401eaa735a76c851c1c7.png"
              alt="우영미"
            />
            <p>우영미</p>
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA2MjBfMjEg/MDAxNjU1NzE5Mjk1NjIw.EgETkO07hvahKa8N8TKIBDsFLVPY64DF1mXkVs-7y0og.ceydvFvV8_DFrpCV0Kmk6pVUtWm5o0bImHpgz8K9Xi0g.PNG/a_0846b96415c74bb98fe6f4d26adc1431.png"
              alt="레고"
            />
            <p>레고</p>
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA3MDFfMzcg/MDAxNjU2NjU3NDcyMjg3.wGQcxYmu13AXH30CxLIZiIZ1nKWYF26qsIgT2lskutQg.sRNKkg1Zm7FW0L4iPAf0Zqd0GG5YbLLYYlrloP2BAtcg.PNG/a_401923126a5247a7b7d31726a77a5cb5.png"
              alt="뉴발란스"
            />
            <p>뉴발란스</p>
          </li>
          <li className={css.brand_item}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjA3MDFfMTMy/MDAxNjU2NjU3NDkzNzk0.PcHpHUIgXwF1Xy2czvIt_3LVzhkKe7f19pqwUG416Akg.gBQJuZf-w4YxiXDLlaZ7jzIvv8efMohC9vzGI2A-ZL0g.PNG/a_2b1291a531cd4b0ba90bee895c4e796a.png"
              alt="헬리녹스"
            />
            <p>헬리녹스</p>
          </li>
        </ul>
      </div>
      <div className={css.banner_box}>
        <img
          src="https://kream-phinf.pstatic.net/MjAyMjA0MDVfMjg3/MDAxNjQ5MTQxNDQ2MzE5.KmWw8NmaqtTEZQUwNB-qnk94UoRvQjTBz6HE-wcsUPwg.uKnTAOmBZVasnEheK77-WjBLVGkrxaev02tgaOLhqz0g.JPEG/a_e84bc8e4c55041b29479627fc78a2469.jpg"
          alt="베너부분"
        />
      </div>
    </div>
  );
}

export default ShopTopBanner;
