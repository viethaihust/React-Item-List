import React, { useState } from 'react'
import Categories from './Categories'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [categories] = useState(allCategories)
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Danh mục sản phẩm</h2>
          <div className='underline'></div>
        </div>
        <div className='sidebar'>
          <Categories categories={categories} />
        </div>
      </section>
    </main>
  )
}

export default App
