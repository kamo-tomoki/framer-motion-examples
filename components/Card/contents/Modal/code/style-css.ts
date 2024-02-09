const code = `.wrapper {
    height: 100%;
    color: #d2c;
    background: linear-gradient(135deg, #d2c, hsl(336, 100%, 67%));
    height: 410px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  
  .open-btn {
    background-color: white;
    padding: 12px;
    border-radius: 16px;
    font-weight: bold;
  }
  
  .modal-overlay {
    position: absolute;
    width: 100%;
    height: 410px;
  }
  
  .modal {
    background-color: white;
    border-radius: 20px;
    position: absolute;
    width: 40%;
    height: 250px;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  
  .modal-content {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .modal-title {
    font-size: 20px;
    font-weight: bold;
  }
  
  .close-icon-container {
    background-color: rgba(230, 190, 226, 0.4);
    cursor: pointer;
    transition: 0.3s;
    width: 25px;
    height: 25px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .close-icon-container:hover {
    background-color: rgba(230, 190, 226, 0.8);
  }
  `;

export default code;
