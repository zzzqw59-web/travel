import React, { useContext } from 'react'
import FormUI from '../components/Form'
import { TravelDataContext, TravelMethodContext } from '../context/context'

const New = () => {
    const data = useContext(TravelDataContext);
    const {onCreate} = useContext(TravelMethodContext);
  return (
    <div>
      <FormUI onCreate={onCreate}/>
    </div>
  )
}

export default New
