import NavigationBar from "@/components/NavigationBar/navigationBar";
import Header from "@/components/ui/header";
import HeaderSearch from "@/modules/common/HeaderSearch";
import HeaderCart from "@/modules/common/HeaderCart";
import HeaderLogo from "@/modules/common/HeaderLogo";
import { mockCakes } from "@/assets/data/cakeList";
import GridCakeList from "@/modules/home/GridCakeList";
import AdCarousel from "@/modules/home/AdCarousel";
import CategoryList from "@/modules/home/CategoryList";

const Home = () => {
  const testData = mockCakes;
  return (
    <div className="min-h-screen">
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
      {/* 광고 부분 */}
      <section>
        <AdCarousel />
      </section>
      {/* 카테고리 영역 */}
      <section>
        <CategoryList />
      </section>
      {/* 인기케이크 영역 */}
      <section className="pt-3 px-[14px] w-full mb-6">
        <div className="text-xl text-[#2D2A32] font-bold">인기 케이크</div>
        <GridCakeList items={testData} />
      </section>
      <NavigationBar />
    </div>
  );
};

export default Home;
