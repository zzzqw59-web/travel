import React from 'react'
import "./Detail.css"

const Detail = () => {
  return (
    <div class="detail-container">
  <header class="header">
    <h1 class="header-title">My travel journal.</h1>
    <button type="button" class="header-btn">등록</button>
  </header>

  <main class="card-wrapper">
    <div class="journal-card">
      <div class="card-header">
        <span class="location-pin">📍</span>
        <span class="destination">제주도 / 관광</span>
      </div>

      <h2 class="card-title">제주도에서 보낸 여름</h2>

      <div class="card-sub-info">
        <span class="card-date">2026-08-12</span>
        <div class="card-rating">
          <span class="stars">★★★★★</span>
          <span class="score">5.0</span>
        </div>
      </div>

      <p class="card-content">성산일출봉에 올라 제주도의 아름다운 풍경을 감상하고, 우도로 이동하여 해안도로를 따라 바다 풍경과 자연경관을 즐겼다.</p>

      <div class="card-actions">
        <button type="button" class="btn-back">목록으로</button>
      </div>
    </div>
  </main>
</div>
  )
}

export default Detail
