import React from 'react'
import Item from './Item'

const ItemList = ({pastas}) => {
  return (
    <div style={{display:'flex', flexWrap: 'wrap'}}>
        {pastas?.map (pasta => <Item key={pasta.id} pasta ={pasta} />)}
    </div>
  )
}
export default ItemList