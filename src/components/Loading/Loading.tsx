// json
import loadingAnimation from "../../assets/jsons/loading.json";

// libraries
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-3">
      <Lottie
        loop
        autoPlay
        animationData={loadingAnimation}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{ width: 150 }}
      />
      <div className="w-full text-center font-bold text-[#2d2a32]">로딩중</div>
    </div>
  );
};

export default Loading;
