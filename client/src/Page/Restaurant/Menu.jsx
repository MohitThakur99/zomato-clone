import React, { useState } from 'react'

// components
import MenuCollection from "../../components/Restaurant/MenuCollection"

const Menu = () => {
    const [menus,setMenus] = useState([]);

  return (
    <>
      <div classname="flex flex-wrap gap-3">
        {menus.map((menu) => (
            <MenuCollection {...menu} />
        ))}
      </div>
    </>
  )
}

export default Menu