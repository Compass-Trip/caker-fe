import { Button } from "@/components/ui/button";

interface MyPageModalProps {
  type: string;
  onClose: () => void;
}

const MyPageModal = ({ type, onClose }: MyPageModalProps) => {
  return (
    <div className="w-full inset-0 min-h-screen fixed top-0 left-0 z-[200] bg-black/50">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-logout"
        className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-white shadow-lg pt-6 z-[300]"
      >
        <section className="flex flex-col gap-[17px] justify-center items-center px-[14px] w-full py-4">
          <div>
            {type === "logout"
              ? "로그아웃 하시겠어요?"
              : "회원 탈퇴를 하시겠어요?"}
          </div>
          <div className="py-6 flex justify-center items-center gap-2">
            <Button
              variant="outline"
              className="w-40"
              onClick={() => onClose()}
            >
              아니요
            </Button>
            <Button className="w-40" onClick={() => onClose()}>
              {type === "logout" ? "로그아웃" : "탈퇴"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyPageModal;
