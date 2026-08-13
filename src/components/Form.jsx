import React, { useState } from 'react'
import "./Form.css"
import { useNavigate } from 'react-router'

const Form = ({onCreate, formTitle, initialData, onUpdate}) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
      title: "" || initialData?.title,
      destination: "" || initialData?.destination,
      theme: "" || initialData?.theme,
      rating: 0 || initialData?.rating,
      content: "" || initialData?.content
    });

    const goBack = () => {
        navigate("/");
    }

    const handleTitle = (e) => {
      setForm({...form, title: e.target.value});
    };

    const handleDestination = (e) => {
      setForm({...form, destination: e.target.value});
    };

    const handleTheme = (e) => {
      setForm({...form, theme: e.target.value});
    };

    const handleRating = (e) => {
      let val = Number(e.target.value);

      if (isNaN(val)) val = 0;

      if (val > 5) val = 5;
      if (val < 0) val = 0;
      setForm({...form, rating: val});
    };

    const handleContent = (e) => {
      setForm({...form, content: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {title, destination, theme, rating, content} = form;

        if (initialData) {
          onUpdate(initialData.id, title, destination, theme, rating, content, new Date());
        } else {
          onCreate(title, destination, theme, rating, content, new Date());
        }

        navigate("/");
    };
  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="form-header">
          <h1 className="form-title">{formTitle}</h1>
          <p className="form-subtitle">다녀온 여행을 기록해보세요!</p>
        </div>

        <form className="travel-form">
          <div className="form-group full-width">
            <label className="form-label">제목</label>
            <input
              type="text"
              className="form-input"
              placeholder="여행 제목을 입력하세요"
              value={form.title}
              onChange={handleTitle}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">여행지</label>
              <input
                type="text"
                className="form-input"
                placeholder="여행지를 입력하세요"
                value={form.destination}
                onChange={handleDestination}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">여행 테마</label>
              <select className="form-select" value={form.theme} onChange={handleTheme}>
                <option value="" disabled hidden>
                  여행 테마를 선택하세요
                </option>
                <option value="식도락">식도락</option>
                <option value="휴양">휴양</option>
                <option value="관광">관광</option>
                <option value="액티비티">액티비티</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">평점</label>
              <input
                type="text"
                className="form-input"
                placeholder="평점을 입력하세요"
                value={form.rating}
                onChange={handleRating}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label className="form-label">여행 소개</label>
            <textarea
              className="form-textarea"
              placeholder="여행에 대한 소개를 작성해주세요"
              value={form.content}
              onChange={handleContent}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={goBack}>취소</button>
            <button type="submit" className="btn-submit" onClick={handleSubmit}>등록하기</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
