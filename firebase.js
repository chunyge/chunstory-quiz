// Firebase 연결 설정 (chunstory-quiz 프로젝트)
// 이 값들은 웹페이지에 공개되도록 만들어진 연결 정보예요. 실제 보호는 데이터베이스 보안 규칙이 맡아요.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase, ref, set, get, update, push, onValue, off, remove, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNiDQbehfujAQWamjfLBYFw8ZG6-z7hNc",
  authDomain: "chunstory-quiz.firebaseapp.com",
  databaseURL: "https://chunstory-quiz-default-rtdb.firebaseio.com",
  projectId: "chunstory-quiz",
  storageBucket: "chunstory-quiz.firebasestorage.app",
  messagingSenderId: "1030581730018",
  appId: "1:1030581730018:web:085a463bc4f31df0a1fcbb"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, get, update, push, onValue, off, remove, serverTimestamp };

// 보기 4개의 색과 모양 (카훗처럼)
export const CHOICES = [
  { color: "#e21b3c", shape: "▲" },
  { color: "#1368ce", shape: "◆" },
  { color: "#d89e00", shape: "●" },
  { color: "#26890c", shape: "■" }
];

export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
