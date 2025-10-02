import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const HeaderBack = () => {
  const navigate = useNavigate();
  return (
    <ArrowLeft
      width={24}
      height={24}
      stroke="#79767D"
      onClick={() => navigate(-1)}
    />
  );
};

export default HeaderBack;
