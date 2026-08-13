import React, { useContext } from 'react'
import Form from '../components/Form'
import { useParams } from 'react-router'
import { TravelDataContext, TravelMethodContext } from '../context/context';

const Edit = () => {
  const {id} = useParams();
  const data = useContext(TravelDataContext);
  const {onUpdate} = useContext(TravelMethodContext);

  const travel = data.find((item) => item.id === Number(id));
  return (
    <div>
      <Form formTitle={"다녀온 여행 수정하기"} initialData={travel} onUpdate={onUpdate}/>
    </div>
  )
}

export default Edit
