// CreatePost.js - Instagram-style Modal
import React, { useState } from 'react';
import { FaTimes,  } from 'react-icons/fa';
import './CreatePost.css';

const CreatePost = ({ onClose }) => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post creation
    onClose();
  };

  return (
    <div className="ig-modal-overlay">
      <div className="ig-modal">
        <div className="ig-modal-header">
          <button onClick={onClose} className="ig-modal-close">
            <FaTimes />
          </button>
          <h3>Create New Post</h3>
          {step === 2 && (
            <button 
              onClick={handleSubmit} 
              className="ig-modal-share"
              disabled={!caption}
            >
              Share
            </button>
          )}
        </div>

        <div className="ig-modal-content">
          {step === 1 ? (
            <div className="ig-upload-step">
              <div className="ig-upload-icon">
                <svg aria-label="Icon to represent media such as images or videos" color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96">
                  <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path>
                  <path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.4-1.3l13.5-15.2c1.3-1.5 3.6-1.7 5.1-.4l1.6 1.4-3.4 38.3-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path>
                </svg>
              </div>
              <h2>Drag photos and videos here</h2>
              <label className="ig-upload-button">
                Select from computer
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          ) : (
            <div className="ig-caption-step">
              <div className="ig-preview-image">
                <img src={image} alt="Preview" />
              </div>
              <div className="ig-caption-input">
                <textarea
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
                <div className="ig-caption-tools">
                  <button type="button">Add location</button>
                  <button type="button">Tag people</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;