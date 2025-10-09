import { mockUserData, type UserKey } from "@/assets/data/sellerData";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { USER_INFO } from "@/variants/myPageOptions";
import { ArrowLeft, Copy } from "lucide-react";
import { useState } from "react";

interface MyPageEditProps {
  onClose: () => void;
}

const MyPageEdit = ({ onClose }: MyPageEditProps) => {
  const [prevUserData, setPrevUserData] = useState(mockUserData); // 비교 기준
  const [userInfo, setUserInfo] = useState(mockUserData);
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState("");
  const handleChange = (key: UserKey, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(true);
      setMsg("이메일을 복제 완료했습니다");
      setTimeout(() => setShowToast(false), 2000);
    } catch {
      setShowToast(true);
      setMsg("다시 시도해주세요");
      setTimeout(() => setShowToast(false), 2000);
    }
  };
  const onSave = () => {
    setPrevUserData(userInfo);
    setShowToast(true);
    setMsg("정보 수정을 완료했습니다");
    setTimeout(() => setShowToast(false), 2000);
  };
  return (
    <div className="w-full inset-0 min-h-screen fixed top-0 left-0 z-[200] bg-white overflow-y-scroll">
      <div className="w-full min-h-screen absolute top-0 left-0 z-[300]">
        <Header
          leftSide={
            <ArrowLeft
              width={24}
              height={24}
              stroke="#79767D"
              onClick={() => onClose()}
            />
          }
          middleSide={<div>회원 정보 수정</div>}
          rightSide={<div className="w-6 h-6" />}
        />
        <div className="px-[14px]">
          <div className="pt-6 pb-4 w-full flex justify-center">
            <div className="h-20 w-20 bg-gray-600 rounded-full" />
          </div>
          <div className="flex flex-col gap-4 w-full">
            {USER_INFO.map((item, i) => (
              <div key={i}>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1 mb-2">
                  {item.label}
                  <span className="text-primary-500">*</span>
                </label>
                {item.value === "email" ? (
                  <div className="flex items-center">
                    <Input
                      value={mockUserData[item.value as UserKey]}
                      disabled
                      className="mr-6 h-12 border-1"
                    />
                    <Copy
                      width={20}
                      height={20}
                      stroke="#79767D"
                      onClick={() =>
                        handleCopy(mockUserData[item.value as UserKey])
                      }
                    />
                  </div>
                ) : (
                  <Input
                    value={userInfo[item.value as UserKey]}
                    onChange={(e) =>
                      handleChange(item.value as UserKey, e.target.value)
                    }
                    className="h-12 border-1"
                  />
                )}
              </div>
            ))}
          </div>
          <Button
            className="w-[347px] h-12 fixed bottom-4 left-1/2 -translate-x-1/2"
            onClick={onSave}
            disabled={JSON.stringify(userInfo) === JSON.stringify(prevUserData)}
          >
            저장하기
          </Button>
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[600] px-5 py-2 text-white bg-[#4B4B4B] rounded-full whitespace-nowrap">
          {msg}
        </div>
      )}
    </div>
  );
};

export default MyPageEdit;
