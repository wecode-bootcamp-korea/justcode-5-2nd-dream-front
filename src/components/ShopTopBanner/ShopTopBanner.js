import React from 'react';
import css from './ShopTopBanner.module.scss';
import ShopBanner from './ShopBanner';

function ShopTopBanner() {
  const brand_list = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1627225925683-1da7021732ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      brand: 'sola',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1501001462338-50b8fc576dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      brand: 'dream',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1528905895600-30137e04d936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      brand: 'zozia',
    },
    {
      id: 4,
      img: 'https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg?t=st=1657678378~exp=1657678978~hmac=9ba4af6b2def3ca958405cf02f8b2ad2c1d24892e9950b7bcc5e22c69827718a&w=2000',
      brand: 'Aurolee',
    },
    {
      id: 5,
      img: 'https://img.freepik.com/premium-psd/shorts-pattern-mockup_181945-1324.jpg?w=1380',
      brand: 'Adidos',
    },
    {
      id: 6,
      img: 'https://img.freepik.com/free-psd/white-hoodie-mockup-template-isolated-front-view_176382-1033.jpg?size=626&ext=jpg&ga=GA1.2.940014675.1656463855',
      brand: 'Stossy',
    },
    {
      id: 7,
      img: 'https://img.freepik.com/free-psd/toddler-pullover-hoodie-sweatshirt-mockup_126278-174.jpg?size=338&ext=jpg&ga=GA1.2.940014675.1656463855',
      brand: 'IAP Studio',
    },
    {
      id: 8,
      img: 'https://img.freepik.com/premium-psd/white-hoodie-mockup_55-2147486138.jpg?size=626&ext=jpg&ga=GA1.2.940014675.1656463855',
      brand: 'Polace',
    },
    {
      id: 9,
      img: 'https://media.istockphoto.com/photos/long-sleeve-shirt-for-children-picture-id1127210928?s=612x612',
      brand: 'Stone Land',
    },
    {
      id: 10,
      img: 'https://media.istockphoto.com/photos/flat-white-knitwear-sweater-tshirt-shape-with-red-line-on-the-rim-on-picture-id1403388731?s=612x612',
      brand: 'Fill Sander',
    },
  ];
  return (
    <div className={css.shop_top_banner}>
      <div className={css.search_trend_container}>
        <ul className={css.search_trend_brand_list}>
          {brand_list.map(brand_list => {
            return (
              <li className={css.brand_item} key={brand_list.id}>
                <img src={brand_list.img} alt={brand_list.brand} />
                <p>{brand_list.brand}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <ShopBanner />
    </div>
  );
}

export default ShopTopBanner;
