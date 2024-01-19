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

.menu {
  background-color: white;
  border-radius: 10px;
  width: 60%;
  max-width: 300px;
  height: 50px;
  z-index: 3;
}

.menu button {
  -webkit-appearance: button;
  background: white;
  color: #d2c;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu button path {
  fill: #d2c;
}

.menu ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
}

.menu li {
  color: #d2c;
  display: block;
}

.menu ul,
li {
  list-style: none;
  margin: 0;
  padding: 10px;
}
`;

export default code;
