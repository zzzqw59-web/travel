import React, { useContext } from 'react'
import { TravelDataContext, TravelMethodContext } from '../context/context'
import Form from '../components/Form';

const New = () => {
    const data = useContext(TravelDataContext);
    const {onCreate} = useContext(TravelMethodContext);
  return (
    <div>
      <Form formTitle={"새 여행 기록하기"} onCreate={onCreate}/>
    </div>
  )
}

export default New
