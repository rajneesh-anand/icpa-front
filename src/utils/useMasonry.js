import imagesloaded from "imagesloaded";
import { useEffect, useState } from "react";
import { flatDeep } from "./helper";

const useMasonry = (data, masonryListWrap, masonryGrid, btnWrap, btn) => {
  const [categories, setCategories] = useState([]);
  console.log(data);

  useEffect(() => {
    const mixCategories = data.map((item) => {
      return item.category.map((cat) => cat);
    });
    const allCat = flatDeep(mixCategories, Infinity);

    const commonCategories = [...new Set(allCat)];

    setCategories(commonCategories);

    // This for Images
    const masonryList = document.querySelector(masonryListWrap);
    imagesloaded(masonryList, () => {
      const projectItems = masonryList.querySelectorAll(masonryGrid);
      let start = 1;
      while (start < projectItems.length) {
        projectItems[start].classList.add("grid-width-2");
        start += 4;
      }

      let Iso = new Isotope(masonryList, {
        itemSelector: masonryGrid,
      });

      const filterWrap = document.querySelector(btnWrap);
      const filterItems = document.querySelectorAll(btn);
      filterItems.forEach((filterItem) => {
        filterItem.addEventListener("click", (e) => {
          const filterCate = filterItem.dataset.filter;
          filterWrap
            .querySelector(".is-checked")
            .classList.remove("is-checked");
          e.target.classList.add("is-checked");
          Iso.arrange({
            filter: filterCate,
          });
        });
      });
    });
  }, [btn, btnWrap, masonryGrid, masonryListWrap, data]);
  return { categories };
};

export default useMasonry;
