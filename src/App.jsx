import { useState } from 'react'

import logo from './assets/logo.png'

import Items from './Data'

import Category from './Components/Category'
import MenuList from './Components/MenuList'

const allCategory = ["all", ...new Set(Items.map((elm) => elm.category))]


const App = () => {
  const [menuItems, setMenuItems] = useState(Items);
  const [categories, setCategories] = useState(allCategory);
  const [activeCategory, setActicveCategory] = useState("");
  
  const filterItems = (category) => {
    setActicveCategory(category)

    if(category === "all"){
      setMenuItems(Items);
      return;
    }

    const newItems = Items.filter((item) => item.category === category)
    console.log(newItems);
    setMenuItems(newItems)
  }

  return (
    <div className='container'>
      <div>
        <img className='logo' src={logo} style={{width: '200px', height: '200px'}}/>
        <h1>Menu List</h1>
        <div className='underline'></div>

        <Category categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
        <MenuList menuItems={menuItems}/>
      </div>
    </div>
  )
}

export default App