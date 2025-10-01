import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 自动导入 src/assets/images 下的所有图片
const imageImports = import.meta.glob('./assets/images/*.{jpg,png,jpeg}', { eager: true });
const imagePaths = Object.keys(imageImports).map(key => imageImports[key].default);

function App() {
  return (
    <div className="album">
      <h1>我的旅行相册</h1>
      <div className="photo-grid">
        {imagePaths.map((src, index) => (
          <div key={index} className="photo-card">
            <img 
              src={src} 
              alt={`旅行照片 ${index + 1}`} 
              style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);