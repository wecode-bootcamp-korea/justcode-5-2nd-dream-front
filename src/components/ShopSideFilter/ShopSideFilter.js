import React, { useState } from 'react';
import css from './ShopSideFilter.module.scss';

function ShopSideFilter() {
  const category = [
    {
      id: 1,
      category: '신발',
      subCategory: undefined,
    },
    {
      id: 2,
      category: '의류',
      subCategory: [
        {
          id: 1,
          subCategory: '반팔티셔츠',
        },
        {
          id: 2,
          subCategory: '반바지',
        },
        {
          id: 3,
          subCategory: '긴팔티셔츠',
        },
        {
          id: 4,
          subCategory: '후드',
        },
        {
          id: 5,
          subCategory: '스웨트셔츠',
        },
      ],
    },
    {
      id: 3,
      category: '패션잡화',
    },
    {
      id: 4,
      category: '라이프',
    },
    {
      id: 5,
      category: '테크',
    },
  ];

  const brand = [
    {
      id: 1,
      sort: 'Wooyoung',
    },
    {
      id: 2,
      sort: 'Jil san',
    },
    {
      id: 3,
      sort: 'moncle',
    },
    {
      id: 4,
      sort: 'Jani',
    },
    {
      id: 5,
      sort: 'Uni',
    },
  ];

  const gender = [
    {
      id: 1,
      sort: '여성',
    },
    {
      id: 2,
      sort: '남성',
    },
  ];

  const size = [
    {
      id: 1,
      sort: 'XXS',
      category_id: 2,
    },
    {
      id: 2,
      sort: 'XS',
      category_id: 2,
    },
    {
      id: 3,
      sort: 'S',
      category_id: 2,
    },
    {
      id: 4,
      sort: 'M',
      category_id: 2,
    },
    {
      id: 5,
      sort: 'L',
      category_id: 2,
    },
    {
      id: 6,
      sort: 'XL',
      category_id: 2,
    },
    {
      id: 7,
      sort: 'XXL',
      category_id: 2,
    },
    {
      id: 8,
      sort: 'XXXL',
      category_id: 2,
    },
    {
      id: 9,
      sort: '28',
      category_id: 2,
    },
    {
      id: 10,
      sort: '29',
      category_id: 2,
    },
    {
      id: 11,
      sort: '30',
      category_id: 2,
    },
    {
      id: 12,
      sort: '31',
      category_id: 2,
    },
    {
      id: 13,
      sort: '32',
      category_id: 2,
    },
    {
      id: 14,
      sort: '33',
      category_id: 2,
    },
    {
      id: 15,
      sort: '34',
      category_id: 2,
    },
    {
      id: 16,
      sort: '35',
      category_id: 2,
    },
    {
      id: 17,
      sort: '36',
      category_id: 2,
    },
    {
      id: 18,
      sort: 'ONE SIZE',
      category_id: 3,
    },
    {
      id: 19,
      sort: '235',
      category_id: 1,
    },
    {
      id: 20,
      sort: '240',
      category_id: 1,
    },
    {
      id: 21,
      sort: '245',
      category_id: 1,
    },
    {
      id: 22,
      sort: '250',
      category_id: 1,
    },
    {
      id: 23,
      sort: '255',
      category_id: 1,
    },
    {
      id: 24,
      sort: '260',
      category_id: 1,
    },
    {
      id: 25,
      sort: '265',
      category_id: 1,
    },
    {
      id: 26,
      sort: '270',
      category_id: 1,
    },
    {
      id: 27,
      sort: '275',
      category_id: 1,
    },
    {
      id: 28,
      sort: '280',
      category_id: 1,
    },
  ];

  const price = [
    {
      id: 1,
      sort: '10만원 이하',
    },
    {
      id: 2,
      sort: '10만원 - 30만원 이하',
    },
    {
      id: 3,
      sort: '30만원 - 50만원 이하',
    },
    {
      id: 4,
      sort: '50만원 이상',
    },
  ];

  const [categoryOpen, setCategoryOpen] = useState(false);
  // const [clothingOpen, setClothingOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [categoryselect, setCategoryselect] = useState({
    mainId: 0,
    subId: 0,
  });
  const [brandselect, setBrandselect] = useState({
    brandId: 0,
  });
  const [genderselect, setGenderselect] = useState({
    genderId: 0,
  });

  // const [isOpen, setMenu] = useState(false);

  function openCategory() {
    setCategoryOpen(true);
  }
  function closeCategory() {
    setCategoryOpen(false);
  }
  // function openClothing() {
  //   setClothingOpen(true);
  // }
  // function closeClothing() {
  //   setClothingOpen(false);
  // }
  function openBrand() {
    setBrandOpen(true);
  }
  function closeBrand() {
    setBrandOpen(false);
  }
  function openGender() {
    setGenderOpen(true);
  }
  function closeGender() {
    setGenderOpen(false);
  }
  function openSize() {
    setSizeOpen(true);
  }
  function closeSize() {
    setSizeOpen(false);
  }
  function openPrice() {
    setPriceOpen(true);
  }
  function closePrice() {
    setPriceOpen(false);
  }

  const checkMainCategory = (mainid, subId) => {
    categoryselect.mainId = mainid;
    categoryselect.subId = subId;
    setCategoryselect(categoryselect);
    // console.log(categoryselect);
  };

  const checkMainBrand = brandId => {
    brandselect.brandId = brandId;
    setBrandselect(brandselect);
    // console.log(brandselect);
  };

  const checkMainGender = genderId => {
    genderselect.genderId = genderId;
    setGenderselect(genderselect);
    // console.log(genderselect);
  };

  const checkOnlyOne = checkThis => {
    const checkboxes = document.getElementsByName('category');

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
      //console.log(checkboxes[i].checked);
    }
    //console.log(checkboxes.length);
    //console.log(checkThis);
  };

  const checkOnlyOne2 = checkThis => {
    const checkboxes = document.getElementsByName('gender');

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  const checkOnlyOne3 = checkThis => {
    const checkboxes = document.getElementsByName('price');

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <div className={css.search_filter}>
      <div className={css.filter_status}>
        <div className={css.status_box}>
          <span>필터</span>
        </div>
        {/* 카테고리 */}
        {!categoryOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={openCategory}>
              <div className={css.main_title}>카테고리</div>
              <div className={css.icon_box}>
                <span>+</span>
              </div>
            </div>
            <div className={css.all_category}>
              <span>모든 카테고리</span>
            </div>
          </div>
        )}
        {categoryOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={closeCategory}>
              <div className={css.main_title}>카테고리</div>
              <div className={css.icon_box}>
                <span>-</span>
              </div>
            </div>
            <div className={css.show_category}>
              {category.map(category => {
                const subCategoryList = category.subCategory;
                return (
                  <div className={css.show_category} key={category.id}>
                    <label>
                      <input
                        type="checkbox"
                        onClick={() => checkMainCategory(category.id, 0)}
                        name="category"
                        value="1"
                        onChange={e => checkOnlyOne(e.target)}
                      />
                      {category.category}
                    </label>
                    {undefined !== subCategoryList &&
                      subCategoryList.map(subCategoryList => {
                        return (
                          <div
                            className={css.clothing_sub_box}
                            key={subCategoryList.id}
                          >
                            <label>
                              <input
                                type="checkbox"
                                //onClick={() => checkCategory(subCategoryList)}
                                name="category"
                                value="1"
                                onChange={e => checkOnlyOne(e.target)}
                              />
                              {subCategoryList.subCategory}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* 브랜드 */}
        {!brandOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={openBrand}>
              <div className={css.main_title}>브랜드</div>
              <div className={css.icon_box}>
                <span>+</span>
              </div>
            </div>
            <div className={css.all_category}>
              <span>모든 카테고리</span>
            </div>
          </div>
        )}
        {brandOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={closeBrand}>
              <div className={css.main_title}>브랜드</div>
              <div className={css.icon_box}>
                <span>-</span>
              </div>
            </div>
            {brand.map(brand => {
              return (
                <div className={css.show_category} key={brand.id}>
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => checkMainBrand(brand.id)}
                    />
                    {brand.sort}
                  </label>
                </div>
              );
            })}
          </div>
        )}
        {/* 성별 */}
        {!genderOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={openGender}>
              <div className={css.main_title}>성별</div>
              <div className={css.icon_box}>
                <span>+</span>
              </div>
            </div>
            <div className={css.all_category}>
              <span>모든 성별</span>
            </div>
          </div>
        )}
        {genderOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={closeGender}>
              <div className={css.main_title}>성별</div>
              <div className={css.icon_box}>
                <span>-</span>
              </div>
            </div>
            {gender.map(gender => {
              return (
                <div className={css.show_category} key={gender.id}>
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => checkMainGender(gender.id, 0)}
                      name="gender"
                      value="1"
                      onChange={e => checkOnlyOne2(e.target)}
                    />
                    {gender.sort}
                  </label>
                </div>
              );
            })}
          </div>
        )}
        {/* 사이즈 */}
        {!sizeOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={openSize}>
              <div className={css.main_title}>사이즈</div>
              <div className={css.icon_box}>
                <span>+</span>
              </div>
            </div>
            <div className={css.all_category}>
              <span>모든 사이즈</span>
            </div>
          </div>
        )}
        {sizeOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={closeSize}>
              <div className={css.main_title}>사이즈</div>
              <div className={css.icon_box}>
                <span>-</span>
              </div>
            </div>

            <div className={css.show_category}>
              <div className={css.top_size}>
                {size.map(size => {
                  if (
                    size.category_id === 2 &&
                    false === size.sort.includes('2') &&
                    false === size.sort.includes('3')
                  ) {
                    return <button key={size.id}>{size.sort}</button>;
                  } else {
                    return null;
                  }
                })}
              </div>
              <div className={css.bottom_size}>
                {size.map(size => {
                  if (
                    (size.category_id === 2 &&
                      true === size.sort.includes('2')) ||
                    true === size.sort.includes('3')
                  ) {
                    return <button key={size.id}>{size.sort}</button>;
                  } else {
                    return null;
                  }
                })}
              </div>
              <div className={css.one_size}>
                {size.map(size => {
                  if (size.category_id === 3) {
                    return <button key={size.id}>{size.sort}</button>;
                  } else {
                    return null;
                  }
                })}
              </div>
              <div className={css.shoes_size}>
                {size.map(size => {
                  if (size.category_id === 1) {
                    return <button key={size.id}>{size.sort}</button>;
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        )}
        {/* 가격 */}
        {!priceOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={openPrice}>
              <div className={css.main_title}>가격</div>
              <div className={css.icon_box}>
                <span>+</span>
              </div>
            </div>
            <div className={css.all_category}>
              <span>모든 가격</span>
            </div>
          </div>
        )}
        {priceOpen && (
          <div className={css.filter_list}>
            <div className={css.filter_title} onClick={closePrice}>
              <div className={css.main_title}>가격</div>
              <div className={css.icon_box}>
                <span>-</span>
              </div>
            </div>
            {price.map(price => {
              return (
                <div className={css.show_category} key={price.id}>
                  <label>
                    <input
                      type="checkbox"
                      // onClick={() => checkMainCategory(category.id, 0)}
                      name="price"
                      value="1"
                      onChange={e => checkOnlyOne3(e.target)}
                    />
                    {price.sort}
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopSideFilter;
