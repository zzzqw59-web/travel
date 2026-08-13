import React, { useContext } from 'react'
import "./Detail.css"
import { useNavigate, useParams } from 'react-router'
import { TravelMethodContext } from '../context/context';

const Detail = ({title, destination, theme, rating, content, createdAt}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {onDelete} = useContext(TravelMethodContext);

  const handleDelete = () => {
    if (window.confirm("삭제 하시겠나요?")) {
      onDelete(Number(id));
      navigate("/");
    }
  }

  const goEdit = () => {
    navigate(`/edit/${id}`);
  }

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className="detail-wrapper">
      
      {/* 카드 영역 */}
      <div className="detail-card">
        {/* 헤더 */}
        <div className="detail-header">
          <div>
            <h1 className="detail-title">{title}</h1>
            <div className="detail-meta">
              <span>📅 {createdAt}</span>
              <span>📍 {destination} / {theme}</span>
            </div>
          </div>
          <div className="detail-btn-group">
            <button className="btn btn-primary" onClick={goEdit}>수정하기</button>
            <button className="btn btn-danger" onClick={handleDelete}>삭제하기</button>
          </div>
        </div>

        {/* 여행 소개 */}
        <div className="detail-section">
          <h2 className="section-title">여행 소개</h2>
          <p className="description">
            {content}
          </p>
        </div>

        {/* 평점 */}
        <div className="detail-section">
          <h2 className="section-title">평점</h2>
          <div className="rating">
            <span className="stars">{"★".repeat(rating || 0)}</span>
            <span className="score">{rating ? `${rating}.0` : "0.0"}</span>
          </div>
        </div>
      </div>

      {/* 카드 '외부' 하단에 독립 배치되는 목록 버튼 */}
      <div className="back-btn-wrapper">
        <button className="btn btn-outline back-btn" onClick={goBack}>&lt; 목록으로 돌아가기</button>
      </div>

    </div>
  )
}

export default Detail
