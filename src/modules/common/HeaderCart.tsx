import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

const HeaderCart = ({ num = 0 }: { num?: number }) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-10 h-10">
      <ShoppingCart
        width={24}
        height={24}
        stroke="#79767D"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={() => navigate("/shopping")}
      />
      {num > 0 ? (
        <div className="text-[8px] w-3 h-3 rounded-full bg-primary-400 text-white flex justify-center items-center absolute bottom-1 right-0.5">
          {num}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeaderCart;
