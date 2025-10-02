import { Search } from "lucide-react";
import { useNavigate } from "react-router";

const HeaderSearch = () => {
  const navigate = useNavigate();
  return (
    <Search
      width={24}
      height={24}
      stroke="#79767D"
      onClick={() => navigate("/search")}
    />
  );
};

export default HeaderSearch;
