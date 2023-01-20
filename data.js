// ******* //
//  데이터  //
// ****** //


let Belonging_data = {
  nowstep : 0,
  money : 1500000,
  pocari_sweat : 0,
  school_uniform : 0,
  made_uniform : 0,
  magic_uniform : 0
}

const Item_data = [1000000, 7500000, 68300000, 400000000]


const Step_data = [
  {
      step: 0,
      name: '+0 방울',
      picture: "./images/step_img/0.png",
      probability : 100,
      reinforce_cost : 100,
      sell_cost : 0,
      protect_cost : 0,
      script : "누군가의 본체이다."
  },
  {
      step: 1,
      name: '+1 미니등',
      picture: "./images/step_img/1.png",
      probability : 100,
      reinforce_cost : 150,
      sell_cost : 150,
      protect_cost : 0,
      script : "작고 귀여운 무드등이다."
  },
  {
      step: 2,
      name: '+2 유년기 무드등',
      picture: "./images/step_img/2.png",
      probability : 100,
      reinforce_cost : 300,
      sell_cost : 400,
      protect_cost : 0,
      script : "우여곡절 끝에 태어난 작고 소중한 무드등이다."
  },
  {
      step: 3,
      name: '+3 유치원생 무드등',
      picture: "./images/step_img/3.png",
      probability : 100,
      reinforce_cost : 500,
      sell_cost : 600,
      protect_cost : 0,
      script : "유치원을 재패한 일짱 무드등이다."
  },
  {
      step: 4,
      name: '+4 초등학생 무드등',
      picture: "./images/step_img/4.png",
      probability : 98,
      reinforce_cost : 1000,
      sell_cost : 800,
      protect_cost : 0,
      script : "초등학교 최고의 문제아 무드등이다."
  },
  {
      step: 5,
      name: '+5 순간이동 능력자',
    //   picture: "./images/step_img/5.gif",
      picture: "./images/step_img/5.gif",
      probability : 96,
      reinforce_cost : 1500,
      sell_cost : 1600,
      protect_cost : 0,
      script : "달리기 시합을 순간이동으로 이겨버린 무드등이다."
  },


  // 6~10강
  {
      step: 6,
      name: '+6 위궤양 무드등',
      picture: "./images/step_img/6.png",
      probability : 94,
      reinforce_cost : 2000,
      sell_cost : 3500,
      protect_cost : 0,
      script : "위궤양을 앓고 있는 무드등이다."
  },
  {
      step: 7,
      name: '+7 인간게임의 창시자',
      picture: "./images/step_img/7.png",
      probability : 92,
      reinforce_cost : 2000,
      sell_cost : 6100,
      protect_cost : 0,
      script : "인간게임으로 학교를 평정한 일진 무드등이다."
  },
  {
      step: 8,
      name: '+8 부두술사 무드등',
      picture: "./images/step_img/8.png",
      probability : 90,
      reinforce_cost : 3000,
      sell_cost : 10000,
      protect_cost : 0,
      script : "말하는 대로 전부 이루어지는 부두술사 무드등이다."
  },
  {
      step: 9,
      name: '+9 책벌레 무드등',
      picture: "./images/step_img/9.png",
      probability : 88,
      reinforce_cost : 5000,
      sell_cost : 20000,
      protect_cost : 0,
      script : "독서 10,000권으로 플랜카드를 걸어버린 책벌레 무드등이다."
  },
  {
      step: 10,
      name: '+10 중학생 무드등',
      picture: "./images/step_img/10.gif",
      probability : 86,
      reinforce_cost : 10900,
      sell_cost : 35100,
      protect_cost : 3,
      script : "중학생이 된 무드등이다."
  },

// 11~15강
  {
      step: 11,
      name: '+11 안 취한 무드등',
      picture: "./images/step_img/11.png",
      probability : 84,
      reinforce_cost : 20000,
      sell_cost : 160000,
      protect_cost : 3,
      script : "놀이터 지붕에서 떨어져 기억을 잃은 무드등. 그런데...?"
  },
  {
      step: 12,
      name: '+12 동생?',
      picture: "./images/step_img/12.png",
      probability : 82,
      reinforce_cost : 35000,
      sell_cost : 350000,
      protect_cost : 3,
      script : "만우절을 맞아 동생이 되어버린 무드등이다."
  },
  {
      step: 13,
      name: '+13 만인의 리더 무드등',
      picture: "./images/step_img/13.png",
      probability : 80,
      reinforce_cost : 55000,
      sell_cost : 1000000,
      protect_cost : 4,
      script : "졸지에 도서관부와 보드게임부의 리더가 되어버린 무드등이다."
  },
  {
      step: 14,
      name: '+14 수영복 무드등',
      picture: "./images/step_img/14.png",
      probability : 78,
      reinforce_cost : 100000,
      sell_cost : 3000000,
      protect_cost : 4,
      script : "워터파크에 가서 수영복을 입고 웃고 있는 무드등이다. 앞으로 닥칠 일을 모르고..."
  },
  {
      step: 15,
      name: '+15 고등학생 무드등',
      picture: "./images/step_img/15.gif",
      probability : 76,
      reinforce_cost : 180000,
      sell_cost : 7500000,
      protect_cost : 5,
      script : "고등학생이 된 무드등이다."
  },

// 16~20강
  {
      step: 16,
      name: '+16 수험생 무드등',
      picture: "./images/step_img/16.png",
      probability : 74,
      reinforce_cost : 300000,
      sell_cost : 14200000,
      protect_cost : 6,
      script : "수능을 준비하는 무드등이다. 결과는..."
  },
  {
      step: 17,
      name: '+17 대학생 무드등',
      picture: "./images/step_img/17.png",
      probability : 72,
      reinforce_cost : 400000,
      sell_cost : 20000000,
      protect_cost : 7,
      script : "과제의 노예가 된 무드등이다."
  },
  {
      step: 18,
      name: '+18 췸 로스',
      picture: "./images/step_img/18.png",
      probability : 70,
      reinforce_cost : 500000,
      sell_cost : 30000000,
      protect_cost : 8,
      script : "픽셀페인터 고인물이 되어가는 무드등이다. 참 쉽죠?"
  },
  {
      step: 19,
      name: '+19 스트리머 무드등',
      picture: "./images/step_img/19.png",
      probability : 65,
      reinforce_cost : 800000,
      sell_cost : 47500000,
      protect_cost : 9,
      script : "스트리머로 데뷔한 무드등이다."
  },
  {
      step: 20,
      name: '+20 메이드복 능력자',
      picture: "./images/step_img/20.gif",
      probability : 60,
      reinforce_cost : 15000000,
      sell_cost : 68300000,
      protect_cost : 10,
      script : "메이드복을 즐겨 입는 무드등이다."
  },


// 21~25강
  {
      step: 21,
      name: '+21 하네스 무드등',
      picture: "./images/step_img/21.png",
      probability : 55,
      reinforce_cost : 15000000,
      sell_cost : 101000000,
      protect_cost : 15,
      script : "하네스를 입은 무드등이다."
  },
  {
      step: 22,
      name: '+22 마스크 무드등',
      picture: "./images/step_img/22.png",
      probability : 50,
      reinforce_cost : 18000000,
      sell_cost : 160000000,
      protect_cost : 20,
      script : "마스크를 쓰고 실물로 나타난 무드등이다."
  },
  {
      step: 23,
      name: '+23 동물잠옷 무드등',
      picture: "./images/step_img/23.png",
      probability : 45,
      reinforce_cost : 21000000,
      sell_cost : 230000000,
      protect_cost : 25,
      script : "동물잠옷을 입은 무드등이다."
  },
  {
      step: 24,
      name: '+24 고스로리 무드등',
      picture: "./images/step_img/24.png",
      probability : 40,
      reinforce_cost : 25000000,
      sell_cost : 300000000,
      protect_cost : 30,
      script : "고스로리 옷을 입은 무드등이다."
  },
  {
      step: 25,
      name: '+25 마법소녀 무드등',
      picture: "./images/step_img/25.gif",
      probability : 35,
      reinforce_cost : 30000000,
      sell_cost : 400000000,
      protect_cost : 40,
      script : "마법소녀가 되어버린 무드등이다."
  },

// 26~30강
  {
      step: 26,
      name: '+26 피고소인 무드등',
      picture: "./images/step_img/26.png",
      probability : 30,
      reinforce_cost : 40000000,
      sell_cost : 600000000,
      protect_cost : 45,
      script : "단지우유에게 고소를 당한 무드등이다."
  },
  {
      step: 27,
      name: '+27 고소공포증 무드등',
      picture: "./images/step_img/27.png",
      probability : 20,
      reinforce_cost : 50000000,
      sell_cost : 1000000000,
      protect_cost : 60,
      script : "부산에서 비행기를 타고 오다가 기절한 무드등이다."
  },
  {
      step: 28,
      name: '+28 견주 무드등',
      picture: "./images/step_img/28.png",
      probability : 10,
      reinforce_cost : 60000000,
      sell_cost : 2000000000,
      protect_cost : 70,
      script : "새로운 가족 등장! 구름이와 함께 있는 무드등이다."
  },
  {
      step: 29,
      name: '+29 폭스등',
      picture: "./images/step_img/29.png",
      probability : 5,
      reinforce_cost : 75000000,
      sell_cost : 3000000000,
      protect_cost : 100,
      script : "술에 취해 여우짓을 하는 무드등이다."
  },
  {
      step: 30,
      name: '+30 Queen',
      picture: "./images/step_img/30.gif",
      probability : 100,
      reinforce_cost : 'Unknown',
      sell_cost : 'Unknown',
      protect_cost : 0,
      script : "결국 여자가 되어버린 무드등이다."
  },
]
