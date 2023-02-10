import Lottie from "lottie-react";
import Loading_animation from "../assets/Loading_animation.json";

export const LoadingAnimation = () => {
  return (
    <Lottie
      animationData={Loading_animation}
      loop={true}
      autoplay
      className="w-[20%] h-screen"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-55%, -50%)",
      }}
    />
  );
};
