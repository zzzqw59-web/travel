import axios from "axios";

// 서버 주소
export const API_SERVER_HOST = "http://localhost:8080";

// API 기본 경로
const prefix = `${API_SERVER_HOST}/api/travelRecord`;

// Travel Record 1건 조회
export const getOne = async (id) => {
    // HTTP GET 요청을 보내고 응답을 기다림
    const response = await axios.get(`${prefix}/${id}`)

    // 응답 데이터 반환
    return response.data;
}

// Travel Record 목록 조회
export const getList = async () => {
    const response = await axios.get(prefix);

    return response.data;
}