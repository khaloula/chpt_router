import React from 'react'
import { Form } from 'react-bootstrap'

const FiterByName = ({inputSearch,setInputSearch}) => {
  return (
    <div>
        <Form.Control
         type="text" placeholder="Enter movie title.."
         onChange={(e)=>setInputSearch(e.target.value) }
         value={inputSearch}

         />
    </div>
  )
}

export default FiterByName