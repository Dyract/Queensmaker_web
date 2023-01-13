//기존 데이터 불러오기
const storageItems = JSON.parse(localStorage.getItem("UserData"))
console.log(localStorage.getItem("UserData"))
console.log(storageItems)
Belonging_data = storageItems
step_data_show();


// ************* //
//  메인페이지 로직  //
// ************* //

//강화 함수
function reinforce() {
  // 랜덤으로 지정한 값이 확률값보다 작을 경우 성공, 클 경우 실패
  // 15강부터 파괴방지 버튼 표시
  // 실패 시 파괴, 파괴방지가 체크되어 있을 경우 현상유지 및 방지권 차감
  // 방지권이 부족할 때 파괴방지를 체크하여 강화하면 메시지와 함께 현상유지, 방지권 차감x
  
  random_number = Math.floor(Math.random() * 101); //랜덤값 생성

  if(random_number <= Step_data[Belonging_data.nowstep].probability){ //확률계산
    reinforce_success();
  }
  else {
    //파괴방지가 체크되어 있을 경우
    if($('#protect_checkbox').is(':checked')) {
      //방지권이 부족한 경우 파괴방지 실패
      if(Belonging_data.pocari_sweat < Step_data[Belonging_data.nowstep].protect_cost) {
        protect_fail()
      }
      //방지권이 충분한 경우 방지권 소모 후 현상유지
      else {
        Belonging_data.pocari_sweat = Belonging_data.pocari_sweat - Step_data[Belonging_data.nowstep].protect_cost;
        protect_success()
      }
    }
    else {
      reinforce_fail()
    }
  }

  localStorage.setItem("UserData", JSON.stringify(Belonging_data))

}

//단계에 따른 값 보여주기
function step_data_show() {
  //만약 15강이라면 파괴방지 보이기
  if (Belonging_data.nowstep == 15) {
    $('#protect').show();
    $('#protect_checkbox').show();
    $('#protect_needs1').show();
    $('#protect_cost').show();
    $('#protect_needs2').show();
  }
  //30강일 시 파괴방지 숨기기
  if (Belonging_data.nowstep == 30) {
    $('#protect').hide();
    $('#protect_checkbox').hide();
    $('#protect_needs1').hide();
    $('#protect_cost').hide();
    $('#protect_needs2').hide();
  }
  
  $('#step_name').text(Step_data[Belonging_data.nowstep].name);
  $('#step_img').attr("src",Step_data[Belonging_data.nowstep].picture)
  $('#probability_amount').text(Step_data[Belonging_data.nowstep].probability);
  $('#reinforce_cost_amount').text(Step_data[Belonging_data.nowstep].reinforce_cost);
  $('#sell_cost_amount').text(Step_data[Belonging_data.nowstep].sell_cost);
  $('#protect_cost').text(Step_data[Belonging_data.nowstep].protect_cost);
  $('#script').text(Step_data[Belonging_data.nowstep].script);
}

//강화 성공 시
function reinforce_success() {
  Belonging_data.nowstep = Belonging_data.nowstep+1;
  console.log('강화성공');
  step_data_show();
}

//강화 실패 시
function reinforce_fail() {
  showGameover();
  Belonging_data.nowstep = 0;
  //파괴방지 숨기기
  $('#protect').hide();
  $('#protect_checkbox').hide();
  $('#protect_needs1').hide();
  $('#protect_cost').hide();
  $('#protect_needs2').hide();

  step_data_show();
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

//파괴방지 성공 시
function protect_success() {
  console.log("파괴방지 성공")
  $('#fade').show();
  $('#light3').show();
}

// 파괴방지 성공 시 창 닫기
function closeGameover3() {
  console.log("버튼")
  $('#fade').hide();
  $('#light3').hide();
}

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


// ********** //
//  상점페이지  //
// ********* //

function buyItem() {
  money_data_show()
}

// **************** //
//  상점 인벤토리 공통  //
// *************** //

function money_data_show() {
  console.log("money값 출력")
  $('#money_shop').text(Belonging_data.money);
  $('#money_inventory').text(Belonging_data.money);
  $('#money_main').text(Belonging_data.money);
}

