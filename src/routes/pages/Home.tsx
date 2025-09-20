import ContainerCarousel from "@/components/Carousels/containerCarousel";
import NavigationBar from "@/components/NavigationBar/navigationBar";
import IndicatorTabs from "@/components/Tabs/indicatorTabs";
import CakeCard from "@/components/ui/cakecard";
import { Calendar } from "@/components/ui/calendar";
import Category from "@/components/ui/category";
import React from "react";

const Home = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      {/* 네비게이션 */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-pink-600">🍰 Caker</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                홈
              </a>
              <div className="font-pretendard text-success">테스트</div>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                케이크
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                주문하기
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                문의
              </a>
            </div>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition duration-200">
              로그인
            </button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            특별한 순간을 위한
            <br />
            <span className="text-pink-600">완벽한 케이크</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            당신의 소중한 기념일과 특별한 순간을 더욱 달콤하게 만들어드립니다.
            프리미엄 재료로 만든 맞춤형 케이크를 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-200 shadow-lg">
              케이크 주문하기
            </button>
            <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition duration-200">
              갤러리 보기
            </button>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              왜 Caker를 선택해야 할까요?
            </h3>
            <p className="text-gray-600 text-lg">우리가 특별한 이유</p>
            <div className="flex gap-4">
              <Category img="https://cdn.pixabay.com/photo/2025/08/27/02/43/flower-9799036_1280.jpg" />
              <CakeCard
                img="https://cdn.pixabay.com/photo/2025/08/27/02/43/flower-9799036_1280.jpg"
                name="동구리제과"
                location="서울 강남구"
                content="인기폭발 주문제작 레터링케이크"
                discount={3}
                price={33500}
              ></CakeCard>
              <IndicatorTabs
                tabsItems={[
                  {
                    value: "settings",
                    label: "Settings",
                    content: (
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">
                          General Settings
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Configure your general application settings.
                        </p>
                      </div>
                    ),
                  },
                  {
                    value: "Account",
                    label: "Account",
                    content: (
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">General Account</h3>
                        <p className="text-muted-foreground text-sm">
                          Configure your general application Account.
                        </p>
                      </div>
                    ),
                  },
                ]}
                classNames={{
                  tabs: "w-[400px]",
                  list: "w-full justify-start",
                  content: "my-4",
                }}
              />
              <ContainerCarousel />
            </div>
            <NavigationBar />
            <div className="flex flex-col items-center justify-center gap-2">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥇</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                프리미엄 재료
              </h4>
              <p className="text-gray-600">
                엄선된 최고급 재료만을 사용하여 건강하고 맛있는 케이크를
                만듭니다.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                맞춤형 디자인
              </h4>
              <p className="text-gray-600">
                고객의 취향과 테마에 맞춘 완전히 개인화된 케이크 디자인을
                제공합니다.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                신속한 배송
              </h4>
              <p className="text-gray-600">
                신선함을 유지하는 특별한 포장과 빠른 배송으로 완벽한 상태로
                전달합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 케이크 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              인기 케이크
            </h3>
            <p className="text-gray-600 text-lg">
              고객들이 가장 사랑하는 케이크들
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "클래식 초콜릿",
                price: "35,000원",
                description: "진한 초콜릿의 깊은 맛과 부드러운 크림의 조화",
                image: "🍫",
              },
              {
                name: "딸기 생크림",
                price: "32,000원",
                description: "신선한 딸기와 달콤한 생크림의 완벽한 만남",
                image: "🍓",
              },
              {
                name: "바닐라 클래식",
                price: "30,000원",
                description: "깔끔하고 우아한 바닐라 향의 정통 케이크",
                image: "🍰",
              },
            ].map((cake, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center">
                  <span className="text-6xl">{cake.image}</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {cake.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{cake.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-600">
                      {cake.price}
                    </span>
                    <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition duration-200">
                      주문하기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">고객 후기</h3>
            <p className="text-pink-100 text-lg">실제 고객들의 생생한 경험담</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <h5 className="font-semibold">김미영님</h5>
                  <div className="flex text-yellow-300">★★★★★</div>
                </div>
              </div>
              <p className="text-pink-100">
                "딸의 생일을 위해 주문했는데 정말 예쁘고 맛있었어요! 디자인도
                제가 요청한 그대로 완벽하게 만들어주셔서 감동했습니다."
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <h5 className="font-semibold">박준호님</h5>
                  <div className="flex text-yellow-300">★★★★★</div>
                </div>
              </div>
              <p className="text-pink-100">
                "결혼기념일 케이크로 주문했는데 아내가 너무 좋아했어요. 맛도
                훌륭하고 배송도 빨라서 만족스럽습니다!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold mb-6">
            특별한 순간을 더욱 달콤하게
          </h3>
          <p className="text-xl mb-8 text-pink-100">
            지금 주문하고 당신만의 특별한 케이크를 만나보세요
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-200 shadow-lg">
            지금 주문하기
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">🍰 Caker</h4>
              <p className="text-gray-300">
                특별한 순간을 위한 완벽한 케이크를 만듭니다.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">메뉴</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    케이크
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    맞춤 제작
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    이벤트
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">고객지원</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    주문 방법
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    배송 안내
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">연락처</h5>
              <p className="text-gray-300">📞 02-1234-5678</p>
              <p className="text-gray-300">📧 hello@caker.com</p>
              <p className="text-gray-300">📍 서울시 강남구</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Caker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
