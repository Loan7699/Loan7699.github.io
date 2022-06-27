import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

// ví dụ todoList: gồm 1 input dạng text và 1 button Add. Khi nhập giá trị vào ô input và bấm Add sẽ render ra list công việc. Sau khi render value input về rỗng, và khi load trang list đã render ko được mất đi

function App() {

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jsonJobs")); // lấy DL lưu trong localStorage, convert lại chuỗi thành mảng dùng JSON.parse
    return storageJobs ?? []; // nếu storageJobs là null hoặc undefined return []
  });

  const handleAddJob = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      // lưu jobs vào local storage
      const jsonJobs = localStorage.setItem('jsonJobs', JSON.stringify(newJobs)); // kiểu DL array, object khi lưu vào local Storage bị convert sang chuỗi nên cần sử dụng JSON để convert

      return newJobs;
    });
    setJob(""); // xóa value sau khi render li
  }

  return (
    <div className="App">
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleAddJob}>Add</button>

      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
