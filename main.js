// 게임오버 창 닫기
  function closeGameover() {
    // console.log("버튼")
    $('#fade').hide();
    $('#light').hide();
}

// 게임오버 창 띄우기
function showGameover() {
    // console.log("버튼")
    $('#fade').show();
    $('#light').show();
}

//강화 함수
function reinforce() {
  // 랜덤으로 지정한 값이 확률값보다 작을 경우 성공, 클 경우 실패
  // 15강부터 파괴방지 버튼 표시
  // 실패 시 파괴, 파괴방지가 체크되어 있을 경우 현상유지 및 방지권 차감
  // 방지권이 부족할 때 파괴방지를 체크하여 강화하면 메시지와 함께 현상유지, 방지권 차감x

  // if 방지권이 체크되어 있다면 - if 방지권 부족시, else 강화
  // else (방지권이 체크되어 있지 않다면) - 확률계산
  
  random_number = Math.floor(Math.random() * 101); //랜덤값 생성
  if($('#protect_checkbox').is(':checked')) { //파괴방지 체크되어있는지
    if(Belonging_data.pocari_sweat < Step_data[nowstep].protect_cost) { //방지권 부족 시
      protect_fail()
    }
    else {
      Belonging_data.pocari_sweat = Belonging_data.pocari_sweat - Step_data[nowstep].protect_cost;
    }
  }
  else {
    if(random_number <= Step_data[nowstep].probability){ //확률계산
      reinforce_success();
    }
    else {
      reinforce_fail()
    }
  }
}

//단계에 따른 값 보여주기
function step_data_show() {
  //만약 15강이라면 파괴방지 보이기
  if (nowstep == 15) {
    $('#protect').show();
    $('#protect_needs').show();
  }
  //30강일 시 파괴방지 숨기기
  if (nowstep == 30) {
    $('#protect').hide();
    $('#protect_needs').hide();
  }
  
  $('#step_name').text(Step_data[nowstep].name);
  $('#step_img').attr("src",Step_data[nowstep].picture)
  $('#probability_amount').text(Step_data[nowstep].probability);
  $('#reinforce_cost_amount').text(Step_data[nowstep].reinforce_cost);
  $('#sell_cost_amount').text(Step_data[nowstep].sell_cost);
  $('#protect_cost').text(Step_data[nowstep].protect_cost);
  $('#script').text(Step_data[nowstep].script);
}

//강화 성공 시
function reinforce_success() {
  nowstep = nowstep+1;
  console.log('강화성공');
  step_data_show();
}

//강화 실패 시
function reinforce_fail() {
  showGameover();
  nowstep = 0;
  //파괴방지 숨기기
  $('#protect').hide();
  $('#protect_needs').hide();
}

//파괴방지 실패 시
function protect_fail() {
  console.log("파괴방지 실패")
  $('#fade').show();
  $('#light2').show();
}

// 파괴방지 실패 창 닫기
function closeGameover2() {
  console.log("버튼")
  $('#fade').hide();
  $('#light2').hide();
}


// ******* //
//  데이터  //
// ****** //

let nowstep = 0; //현재 단계
let random_number = 0;

let Belonging_data = {
  money : 0,
  pocari_sweat : 0,
  school_uniform : 0,
  made_unifotm : 0,
  magic_uniform : 0
}


let Step_data = [
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
]
