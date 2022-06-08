import React, { useEffect, useState} from 'react'
import ItemList from '../ItemList'

const ItemListContainer = ({greeting}) => {

const [pastas, setPastas] = useState ([]);

useEffect(() => {
  fetch ("https://mocki.io/v1/b20fd212-8200-414e-9c24-35c7cceafecd")
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
