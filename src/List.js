import React from 'react'

const List = ({ items }) => {
  return (
    <div className='item-section'>
      {items.map((ItemList) => {
        const { id, title, img, price } = ItemList
        return (
          <article key={id} className='item-list'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
