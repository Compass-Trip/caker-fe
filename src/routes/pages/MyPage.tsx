import NavigationBar from "@/components/NavigationBar/navigationBar";
import Header from "@/components/ui/header";
import HeaderCart from "@/modules/common/HeaderCart";
import HeaderLogo from "@/modules/common/HeaderLogo";
import HeaderSearch from "@/modules/common/HeaderSearch";
import MyPageMain from "@/modules/mypage/MyPageMain";
import MyPageModal from "@/modules/mypage/MyPageModal";
import MyPageOrderListPage from "@/modules/mypage/MyPageOrderListPage";
import { useState } from "react";

const MyPage = () => {
  const [orderListModal, setOrderListModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  return (
    <div className="min-h-screen">
      {modal && (
        <MyPageModal type={modalType} onClose={() => setModal(false)} />
      )}
      {orderListModal && (
        <MyPageOrderListPage onClose={() => setOrderListModal(false)} />
      )}
      <Header
        leftSide={<HeaderLogo />}
        rightSide={
          <div className="flex gap-4 items-center">
            <HeaderSearch />
            <HeaderCart num={1} />
          </div>
        }
        className="mb-2"
      />
      <main className="px-[14px]">
        <MyPageMain
          onEditOpen={() => setEditModal(true)}
          orderArray={[0, 1, 1, 0]}
          onOrderListOpen={() => setOrderListModal(true)}
          onOpen={(type: string) => {
            setModal(true);
            setModalType(type);
          }}
        />
      </main>
      <NavigationBar />
    </div>
  );
};

export default MyPage;
