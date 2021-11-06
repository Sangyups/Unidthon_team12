import React, { useEffect } from 'react';
import './Detail.css';

const Detail = ({ contents }) => {
  useEffect(() => {
    const modal = document.getElementById('modal');
    const closeBtn = modal.querySelector('.close-area');
    closeBtn.addEventListener('click', (e) => {
      modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
      const evTarget = e.target;
      if (evTarget.classList.contains('modal-overlay')) {
        modal.style.display = 'none';
      }
    });
    window.addEventListener('keyup', (e) => {
      if (modal.style.display === 'flex' && e.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  }, []);
  return (
    <div>
      <div id="modal" className="modal-overlay">
        <div className="modal-window">
          <div className="title" id="modal-title">
            <h2></h2>
          </div>
          <div className="close-area">X</div>
          <div className="content" id="modal-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
