import { SORT_FILTERS } from "@/variants/filterOptions";
import { Check, X } from "lucide-react";

interface SortModalProps {
  onClose: () => void;
  value: string;
  onChange: (v: string) => void;
}

const SortModal = (props: SortModalProps) => {
  return (
    <div className="w-full inset-0 min-h-screen fixed top-0 left-0 z-[200] bg-black/50">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sort-title"
        className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-white shadow-lg pt-6 z-[300]"
      >
        <section className="flex justify-between items-center px-[14px] w-full py-4">
          <div className="font-bold text-xl">정렬</div>
          <X
            width={24}
            height={24}
            stroke="#79767D"
            onClick={() => props.onClose()}
          />
        </section>
        <section className="px-[14px]">
          {SORT_FILTERS.map((el, i) => (
            <article
              className="flex items-center gap-2 py-3"
              onClick={() => {
                props.onChange(el.label);
                props.onClose();
              }}
            >
              {el.label === props.value ? (
                <Check width={20} height={20} stroke="#FF3A4E" />
              ) : (
                <></>
              )}
              <div className="text-[#2D2A32] text-lg" key={i}>
                {el.label}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SortModal;
