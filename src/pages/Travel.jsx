import React, { useContext, useState } from 'react'
import Detail from '../components/Detail'
import { useNavigate, useParams } from 'react-router';
import Button from '../components/Button';
import { TravelDataContext, TravelMethodContext } from '../context/context';
import Header from '../components/Header';

const Travel = () => {
  const [date, setDate] = useState(new Date());
  const {id} = useParams();
  const navigate = useNavigate();
  const {onCreate} = useContext(TravelMethodContext);
  const data = useContext(TravelDataContext);
  const targetData = data.find((item) => String(item.id) === String(id));
  
  const createdAt = `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`

  const goNew = () => {
        navigate("/new");
    }
  return (
    <div>
      <Header rightChild={<Button text={"등록"} onClick={onCreate} onClick={goNew} />}/>
      <Detail {...targetData} createdAt={createdAt} />
    </div>
  )
}

export default Travel
