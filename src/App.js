import React, { useState } from 'react'
import List from './List'
import Categories from './Categories'
import items from './data'
const allCategories = ['Tất cả', ...new Set(items.map((item) => item.category))]

function App() {
  const [ItemList, setItemList] = useState(items)
  const [categories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'Tất cả') {
      setItemList(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setItemList(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='sidebar'>
          <Categories categories={categories} filterItems={filterItems} />
        </div>
        <div className='center-section'>
          <div className='title'>
            <h2>Danh mục sản phẩm</h2>
            <div className='underline'></div>
          </div>
          <List items={ItemList} />
        </div>
      </section>
    </main>
  )
}

export default App
