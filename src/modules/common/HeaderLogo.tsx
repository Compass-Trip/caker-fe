import { basicIcons } from "@/variants/icons";
import { useNavigate } from "react-router";

const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <img src={basicIcons.logo} height={28} onClick={() => navigate("/")} />
  );
};

export default HeaderLogo;
