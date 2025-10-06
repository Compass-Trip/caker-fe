import { cn } from "@/lib/utils";
import { iconList } from "@/variants/categorylist";
import { categoryIcons } from "@/variants/icons";
import { useNavigate } from "react-router";

const EventCategoryList = ({ event }: { event: string }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-3 w-full h-[84px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="relative flex gap-2 min-w-max px-2">
        <div className="absolute -bottom-[6px] left-0 w-full h-[2px] rounded-full bg-[#eeeeef]" />

        {iconList.map((e, i) => {
          const isActive = event === e.text;
          return (
            <div
              key={i}
              className="relative flex-none w-14 h-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              onClick={() => navigate(`/category?event=${e.text}`)}
            >
              <div className="rounded-full w-full h-14 flex justify-center items-center bg-[#FAF9FA]">
                <img
                  src={categoryIcons[e.value]}
                  width={40}
                  height={40}
                  alt={e.text}
                />
              </div>

              <div
                className={cn(
                  "relative text-xs w-full text-center truncate",
                  isActive && "text-primary-400"
                )}
              >
                {e.text}
              </div>
              {isActive && (
                <span className="absolute -bottom-[6px] left-0 w-full h-[2px] rounded-full bg-primary-400 z-50" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCategoryList;
