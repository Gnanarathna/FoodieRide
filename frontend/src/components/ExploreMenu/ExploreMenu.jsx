import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Browse our menu</h1>
       <p className='explore-menu-text'>Enjoy a delicious journey with our wide and carefully chosen menu, filled with tasty dishes that mix classic favorites and exciting new flavors, made to satisfy every craving and showcase cuisines from around the world.
</p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item${category === item.menu_name ? ' active' : ''}`}
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
          >
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu