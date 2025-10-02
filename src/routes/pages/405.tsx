import { useNavigate } from "react-router";

import MainLayout from "@/assets/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { pageIcons } from "@/variants/icons";

const NotFoundResult = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
  };
  return (
    <MainLayout>
      <div className="w-full h-full flex flex-col justify-center items-center gap-[17px]">
        <img src={pageIcons.error} width={100} height={100} />
        <div className="w-full px-9 text-center">
          <div className="mb-2 text-2xl font-bold">
            요청하신 페이지를
            <br />
            찾을 수 없습니다.
          </div>
          <div className="text-[#aea9b1]">
            페이지가 제거되었거나 <br />
            변경되어 사용하실 수 없습니다.
          </div>
        </div>
        <Button size="sm" onClick={onClickBack}>
          메인으로 이동
        </Button>
      </div>
    </MainLayout>
  );
};

export default NotFoundResult;
