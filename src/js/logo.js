import logoImg from "../img/logo-webpack.png";
import "../css/style.css";

function logo() {
  const logoDomImage = new Image();
  logoDomImage.src = logoImg;
  logoDomImage.className = "my-logo";
  return logoDomImage;
}

export default logo;
