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
  
  .island {
    position: absolute;
    border-radius: 50px;
    margin-top: 100px;
    background-color: white;
  }
  
  .island-popin,
  .island-close {
    width: 40px;
    height: 40px;
  }
  
  .island-open,
  .island-remove-text {
    width: 300px;
    height: 40px;
  }
  
  .island-popout {
    width: 1px;
    height: 1px;
  }
  
  .island-hide {
    width: 0px;
    height: 0px;
  }
  
  .island-text {
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
    padding-top: 5.5px;
  }
  
  .switch {
    width: 90px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 7px;
    cursor: pointer;
    margin-top: 100px;
  }
  
  .on {
    justify-content: flex-end;
  }
  
  .handle {
    width: 36px;
    height: 36px;
    background-color: white;
    border-radius: 40px;
  }
  `;

export default code;
