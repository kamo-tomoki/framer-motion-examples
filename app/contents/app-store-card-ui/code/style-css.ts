const code = `.root-container {
    display: flex;
    justify-content: center;
    color: #d2c;
    background: linear-gradient(135deg, #d2c, hsl(336, 100%, 67%));
  }
  
  .card-list-container {
    flex: 1 1 100%;
    max-width: 1100px;
    color: #d2c;
    background: linear-gradient(135deg, #d2c, hsl(336, 100%, 67%));
    padding: 0 50px;
  }
  
  .card-list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  
  .card {
    position: relative;
    padding: 50px;
    height: 400px;
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .card-content-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
  }
  
  .card-content-container.open {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    padding: 40px 0;
  }
  
  .card:nth-child(odd) {
    padding-left: 0;
  }
  
  .card:nth-child(even) {
    padding-right: 0;
  }
  
  .card-content {
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    background-color: white;
    overflow: hidden;
    width: 100%;
    height: 300px;
    margin: 0 auto;
  }
  
  .open .card-content {
    height: auto;
    max-width: 900px;
    height: 300px;
    overflow: hidden;
  }
  
  .card-content span {
    font-size: 18px;
  }
  `;

export default code;
