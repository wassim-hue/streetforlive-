import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import './CreatePost.css';

function CreatePost() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [preview, setPreview] = useState(null);
  const { user } = useAuth();
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك رفع المنشور إلى الخادم
    console.log('تم إنشاء المنشور:', { image, caption });
    navigate('/feed');
  };

  if (!user) {
    return <p>الرجاء تسجيل الدخول لإنشاء منشور</p>;
  }

  return (
    <div className={`create-post-container ${darkMode ? 'dark' : ''}`}>
      <h2>إنشاء منشور جديد</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="upload-area">
          {preview ? (
            <img src={preview} alt="Preview" className="image-preview" />
          ) : (
            <label htmlFor="post-image" className="upload-label">
              <i className="upload-icon">📷</i>
              <span>اختر صورة</span>
              <input
                id="post-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
                hidden
              />
            </label>
          )}
        </div>
        <div className="caption-area">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="أضف تعليقًا..."
            className="caption-input"
          />
          <button type="submit" className="post-button">
            نشر
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;