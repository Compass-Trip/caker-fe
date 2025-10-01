// json
import loadingAnimation from "../jsons/loading.json";

// libraries
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div>
      {" "}
      <Lottie
        loop
        autoPlay
        animationData={loadingAnimation}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{ width: 150 }}
      />
    </div>
  );
};

export default Loading;
