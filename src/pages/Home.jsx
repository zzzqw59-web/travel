import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { TravelDataContext, TravelMethodContext } from '../context/context'
import Button from '../components/Button'
import { useNavigate } from 'react-router'

const Home = () => {
    const data = useContext(TravelDataContext);
    const {onCreate} = useContext(TravelMethodContext);
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const createdAt = `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`

    const goNew = () => {
        navigate("/new");
    }
    
  return (
    <div>
        <Header rightChild={<Button text={"등록"} onClick={onCreate} onClick={goNew} />}/>
        {data.map((item) => (
            <Card key={item.id} {...item} createdAt={createdAt}/>
        ))}
    </div>
  )
}

export default Home
