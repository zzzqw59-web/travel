import { useReducer, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router'
import New from './pages/New'
import Travel from './pages/Travel'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Header from './components/Header'
import { TravelDataContext, TravelMethodContext } from './context/context'

const mockData = [
  {
    id: 1,
    title: "제주도에서 보낸 여름",
    destination: "제주도",
    theme: "관광",
    rating: 5,
    content: "성산일출봉에 올라 제주도의 아름다운 풍경을 감상하고, 우도로 이동하여 해안도로를 따라 바다 풍경과 자연경관을 즐겼다.",
    createdAt: new Date().getTime()
  },
  {
    id: 2,
    title: "강릉 바다와 카페 투어",
    destination: "강릉",
    theme: "휴양",
    rating: 4,
    content: "안목해변 카페거리에서 바다를 바라보며 커피 한 잔의 여유를 가졌다. 중앙시장에 들러 맛있는 순두부젤라토와 아바이순대를 즐긴 알찬 하루였다.",
    createdAt: new Date().getTime()
  },
  {
    id: 3,
    title: "부산 밤바다와 야경 여행",
    destination: "부산",
    theme: "관광",
    rating: 5,
    content: "해운대 블루라인파크 스카이캡슐을 타고 푸른 바다 전경을 감상했다. 저녁에는 광안리 해수욕장에서 야경과 드론쇼를 보며 여행을 마무리했다.",
    createdAt: new Date().getTime()
  }
];

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => item.id === action.data.id ? {...action.data} : item);
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onCreate = (title, destination, theme,  rating, content, date) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        title,
        theme,
        createdAt: new Date(date).getTime(),
        content,
        rating,
        destination
      }
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, title, destination, theme, rating, content, date) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        title,
        theme,
        destination,
        createdAt: new Date(date).getTime(),
        content,
        rating,
      }
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId
    });
  }



  return (
    <TravelDataContext value={data}>
      <TravelMethodContext value={{onCreate, onDelete, onUpdate}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/travel/:id' element={<Travel />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      </TravelMethodContext>
    </TravelDataContext>
  )
}

export default App
