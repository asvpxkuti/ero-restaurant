import React from 'react';

import './SpecialMenu.css';
import { images, data } from '../../constants';
import { MenuItem, SubHeading } from '../../components';
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu__wine">
        <p className="app__specialMenu-menu__heading">Wine & Beer</p>
        <div className="app__specialMenu-menu__item">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu__img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu__cocktails">
        <p className="app__specialMenu-menu__heading">Cocktails</p>
        <div className="app__specialMenu-menu__item">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.price}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
