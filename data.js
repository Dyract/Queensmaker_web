// ******* //
//  데이터  //
// ****** //


let Belonging_data = {
  nowstep : 0,
  money : 0,
  pocari_sweat : 0,
  school_uniform : 0,
  made_unifotm : 0,
  magic_uniform : 0
}

const Item_data = [1000000, 14200000, 101000000, 1800000000]


const Step_data = [
  {
      step: 0,
      name: '+0 방울',
      picture: "./images/step_img/0.png",
      probability : 100,
      reinforce_cost : 300,
      sell_cost : 0,
      protect_cost : 0,
      script : "0강 스크립트"
  },
  {
      step: 1,
      name: '+1 미니등',
      picture: "./images/step_img/1.png",
      probability : 100,
      reinforce_cost : 300,
      sell_cost : 150,
      protect_cost : 0,
      script : "1강 스크립트"
  },
  {
      step: 2,
      name: '+2 유년기 무드등',
      picture: "./images/step_img/2.png",
      probability : 96,
      reinforce_cost : 500,
      sell_cost : 400,
      protect_cost : 0,
      script : "2강 스크립트"
  },
  {
      step: 3,
      name: '+3 유치원생 무드등',
      picture: "./images/step_img/3.png",
      probability : 93,
      reinforce_cost : 500,
      sell_cost : 600,
      protect_cost : 0,
      script : "3강 스크립트"
  },
  {
      step: 4,
      name: '+4 초등학생 무드등',
      picture: "./images/step_img/4.png",
      probability : 90,
      reinforce_cost : 1000,
      sell_cost : 800,
      protect_cost : 0,
      script : "4강 스크립트"
  },
  {
      step: 5,
      name: '+5 순간이동 능력자',
      picture: "./images/step_img/5.png",
      probability : 86,
      reinforce_cost : 1500,
      sell_cost : 1600,
      protect_cost : 0,
      script : "5강 스크립트"
  },


  // 6~10강
  {
      step: 6,
      name: '+6 위궤양 무드등',
      picture: "./images/step_img/6.png",
      probability : 83,
      reinforce_cost : 2000,
      sell_cost : 3500,
      protect_cost : 0,
      script : "6강 스크립트"
  },
  {
      step: 7,
      name: '+7 인간게임의 창시자',
      picture: "./images/step_img/7.png",
      probability : 79,
      reinforce_cost : 2000,
      sell_cost : 6100,
      protect_cost : 0,
      script : "7강 스크립트"
  },
  {
      step: 8,
      name: '+8 부두술사 무드등',
      picture: "./images/step_img/8.png",
      probability : 76,
      reinforce_cost : 3000,
      sell_cost : 10000,
      protect_cost : 0,
      script : "8강 스크립트"
  },
  {
      step: 9,
      name: '+9 책벌레 무드등',
      picture: "./images/step_img/9.png",
      probability : 72,
      reinforce_cost : 5000,
      sell_cost : 20000,
      protect_cost : 0,
      script : "9강 스크립트"
  },
  {
      step: 10,
      name: '+10 중학생 무드등',
      picture: "./images/step_img/10.png",
      probability : 69,
      reinforce_cost : 10900,
      sell_cost : 35100,
      protect_cost : 0,
      script : "10강 스크립트"
  },

// 11~15강
  {
      step: 11,
      name: '+11 안 취한 무드등',
      picture: "./images/step_img/11.png",
      probability : 65,
      reinforce_cost : 20000,
      sell_cost : 160000,
      protect_cost : 0,
      script : "11강 스크립트"
  },
  {
      step: 12,
      name: '+12 동생?',
      picture: "./images/step_img/12.png",
      probability : 62,
      reinforce_cost : 35000,
      sell_cost : 350000,
      protect_cost : 0,
      script : "12강 스크립트"
  },
  {
      step: 13,
      name: '+13 만인의 리더 무드등',
      picture: "./images/step_img/13.png",
      probability : 58,
      reinforce_cost : 55000,
      sell_cost : 1000000,
      protect_cost : 0,
      script : "13강 스크립트"
  },
  {
      step: 14,
      name: '+14 수영복 무드등',
      picture: "./images/step_img/14.png",
      probability : 55,
      reinforce_cost : 100000,
      sell_cost : 3000000,
      protect_cost : 0,
      script : "14강 스크립트"
  },
  {
      step: 15,
      name: '+15 고등학생 무드등',
      picture: "./images/step_img/15.png",
      probability : 51,
      reinforce_cost : 180000,
      sell_cost : 7500000,
      protect_cost : 5,
      script : "15강 스크립트"
  },

// 16~20강
  {
      step: 16,
      name: '+16 수험생 무드등',
      picture: "./images/step_img/16.png",
      probability : 48,
      reinforce_cost : 300000,
      sell_cost : 14200000,
      protect_cost : 6,
      script : "16강 스크립트"
  },
  {
      step: 17,
      name: '+17 대학생 무드등',
      picture: "./images/step_img/17.png",
      probability : 44,
      reinforce_cost : 400000,
      sell_cost : 20000000,
      protect_cost : 7,
      script : "17강 스크립트"
  },
  {
      step: 18,
      name: '+18 췸 로스',
      picture: "./images/step_img/18.png",
      probability : 41,
      reinforce_cost : 500000,
      sell_cost : 30000000,
      protect_cost : 8,
      script : "18강 스크립트"
  },
  {
      step: 19,
      name: '+19 스트리머 무드등',
      picture: "./images/step_img/19.png",
      probability : 37,
      reinforce_cost : 800000,
      sell_cost : 47500000,
      protect_cost : 9,
      script : "19강 스크립트"
  },
  {
      step: 20,
      name: '+20 메이드복 능력자',
      picture: "./images/step_img/20.png",
      probability : 34,
      reinforce_cost : 15000000,
      sell_cost : 68300000,
      protect_cost : 10,
      script : "20강 스크립트"
  },


// 21~25강
  {
      step: 21,
      name: '+21 하네스 무드등',
      picture: "./images/step_img/21.png",
      probability : 30,
      reinforce_cost : 15000000,
      sell_cost : 101000000,
      protect_cost : 15,
      script : "21강 스크립트"
  },
  {
      step: 22,
      name: '+22 마스크 무드등',
      picture: "./images/step_img/22.png",
      probability : 27,
      reinforce_cost : 18000000,
      sell_cost : 160000000,
      protect_cost : 20,
      script : "2강 스크립트"
  },
  {
      step: 23,
      name: '+23 동물잠옷 무드등',
      picture: "./images/step_img/23.png",
      probability : 23,
      reinforce_cost : 21000000,
      sell_cost : 230000000,
      protect_cost : 25,
      script : "23강 스크립트"
  },
  {
      step: 24,
      name: '+24 고스로리 무드등',
      picture: "./images/step_img/24.png",
      probability : 20,
      reinforce_cost : 25000000,
      sell_cost : 300000000,
      protect_cost : 30,
      script : "24강 스크립트"
  },
  {
      step: 25,
      name: '+25 마법소녀 무드등',
      picture: "./images/step_img/25.png",
      probability : 16,
      reinforce_cost : 30000000,
      sell_cost : 400000000,
      protect_cost : 40,
      script : "25강 스크립트"
  },

// 26~30강
  {
      step: 26,
      name: '+26 피고소인 무드등',
      picture: "./images/step_img/26.png",
      probability : 13,
      reinforce_cost : 60000000,
      sell_cost : 1800000000,
      protect_cost : 60,
      script : "26강 스크립트"
  },
  {
      step: 27,
      name: '+27 고소공포증 무드등',
      picture: "./images/step_img/27.png",
      probability : 9,
      reinforce_cost : 100000000,
      sell_cost : 2500000000,
      protect_cost : 75,
      script : "2강 스크립트"
  },
  {
      step: 28,
      name: '+28 견주 무드등',
      picture: "./images/step_img/28.png",
      probability : 5,
      reinforce_cost : 300000000,
      sell_cost : 4000000000,
      protect_cost : 90,
      script : "28강 스크립트"
  },
  {
      step: 29,
      name: '+29 퐉스등',
      picture: "./images/step_img/29.png",
      probability : 0.1,
      reinforce_cost : 500000000,
      sell_cost : 5000000000,
      protect_cost : 120,
      script : "29강 스크립트"
  },
  {
      step: 30,
      name: '+30 순간이동 능력자',
      picture: "./images/step_img/30.png",
      probability : 0,
      reinforce_cost : 'Unknown',
      sell_cost : 'Unknown',
      protect_cost : 0,
      script : "5강 스크립트"
  },
]
