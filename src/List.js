import React from 'react'

const List = ({ items }) => {
  return (
    <div className='item-section'>
      {items.map((ItemList) => {
        const { id, title, img, price, desc } = ItemList
        return (
          <article key={id} className='item-list'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
