import dogImg from "../dog.jpg";
import { Component } from "react";

class ImgComponent extends Component {
  render() {
    return (
      <div>
        <img src={dogImg} alt="강아지" />
      </div>
    );
  }
}

// function ImgComponent() {
//   return (
//     <div>
//       <img src={dogImg} alt="강아지" />
//     </div>
//   );
// }

export default ImgComponent;
