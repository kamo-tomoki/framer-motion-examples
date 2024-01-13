const code = `.overlay {
    z-index: 1;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    will-change: opacity;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  
  .card {
    position: relative;
    padding: 25px;
    height: 460px;
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .card:nth-child(odd) {
    padding-left: 0;
  }
  
  .card:nth-child(even) {
    padding-right: 0;
  }
  
  .card-list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  
  .card-content {
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.4);
    background-color: white;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  
  .open .card-content {
    height: auto;
    max-width: 900px;
    overflow: hidden;
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
    height: auto;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    padding: 40px 0;
  }
  
  .card-title {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .close-btn {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 100%;
  }
  
  .card-content span {
    font-size: 18px;
  }
  
  @media only screen and (max-width: 700px) {
    .card {
      flex: 1 0 100%;
      max-width: 100%;
      height: 370px;
    }
  
    .card:nth-child(4n + 1),
    .card:nth-child(4n + 4) {
      flex: 1 0 100%;
      max-width: 100%;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  
    .card:nth-child(odd) {
      padding-left: 25px;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  
    .card:nth-child(even) {
      padding-right: 25px;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  
    .card-content-container.open {
      padding: 0;
    }
  }
  `;
export default code;
