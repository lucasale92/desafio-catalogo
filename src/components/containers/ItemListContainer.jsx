import React, { useEffect, useState} from 'react'
import ItemList from '../ItemList'

const ItemListContainer = ({greeting}) => {

const [pastas, setPastas] = useState ([]);

useEffect(() => {
  fetch ("https://mocki.io/v1/fb7cf7be-90db-4e6a-885a-68e22dc8b5f5")
  .then(res => res.json())
  .then(res =>  setPastas(res.productos))
  .catch(error => console.log("Error", error))
  
}, [])

  console.log(pastas)

return (
    <div>
      <ItemList pastas ={pastas} />
    </div>
  )
}
export default ItemListContainer
