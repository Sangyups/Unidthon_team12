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
      <div id="modal" class="modal-overlay">
        <div class="modal-window">
          <div class="title">
            <h2>모달</h2>
          </div>
          <div class="close-area">X</div>
          <div class="content">
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
            <p>가나다라마바사 아자차카타파하</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
