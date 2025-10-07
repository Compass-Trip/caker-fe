export const mockSellerData = {
  location: "스웨이드 베이커리 청담 ",
  map: "서울 강남구 도산대로62길 26 1층",
  clock: "매일 09:00 ~ 18:00\n화요일 정기 휴무",
  call: "0507-1449-4422",
  site: "https://suede.co.kr",
};

export type UserKey = "email" | "name" | "nickname" | "call";

export const mockUserData: Record<UserKey, string> = {
  email: "example123@gmail.com",
  name: "케이커",
  nickname: "이커",
  call: "010-1234-5678",
};
