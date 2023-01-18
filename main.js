//기존 데이터 불러오기
const storageItems = JSON.parse(localStorage.getItem("UserData"))
console.log(localStorage.getItem("UserData"))
// console.log(storageItems)
// console.log(Belonging_data)

if (storageItems) {
  Belonging_data = storageItems
}
// console.log(Belonging_data)
Belonging_data.money = 1000000;
// Belonging_data.nowstep = 0;
step_data_show();
money_data_show();
inventory_show()

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

  //재화 부족 시 강화 불가
  if (Belonging_data.money < Step_data[Belonging_data.nowstep].reinforce_cost) {
    showDontreinforce()
  }
  //파괴방지가 체크되어 있을 경우
  else if ($('#protect_checkbox').is(':checked')) {
    //방지권이 부족한 경우 파괴방지 실패
    if(Belonging_data.pocari_sweat < Step_data[Belonging_data.nowstep].protect_cost || Belonging_data.nowstep < 10) {
      protect_fail()
    }
    //성공 시 방지권 차감 및 다음단계
    else if (random_number <= Step_data[Belonging_data.nowstep].probability) {
      Belonging_data.pocari_sweat = Belonging_data.pocari_sweat - Step_data[Belonging_data.nowstep].protect_cost;
      reinforce_success();
    }
    //방지권이 충분한 경우 방지권 차감 후 현상유지
    else {
      Belonging_data.pocari_sweat = Belonging_data.pocari_sweat - Step_data[Belonging_data.nowstep].protect_cost;
      protect_success()
    }
  }
  //파괴방지가 체크되어 있지 않을 경우
  else {
    //성공 시 다음단계로
    if(random_number <= Step_data[Belonging_data.nowstep].probability){
      reinforce_success();
    }
    //실패 시 리제로
    else {
      reinforce_fail()
    }
  }

  money_data_show();
  localStorage.setItem("UserData", JSON.stringify(Belonging_data))

}

//팔기 함수
function sell() {
  Belonging_data.money = Belonging_data.money + Step_data[Belonging_data.nowstep].sell_cost
  money_data_show()
  Belonging_data.nowstep = 0;
  step_data_show();

  localStorage.setItem("UserData", JSON.stringify(Belonging_data))
  document.getElementById("protect_checkbox").checked = false;

}


//강화 성공 시
function reinforce_success() {
  Belonging_data.money = Belonging_data.money - Step_data[Belonging_data.nowstep].reinforce_cost
  Belonging_data.nowstep = Belonging_data.nowstep+1;
  console.log('강화성공');
  step_data_show();

  // 효과음 재생
  let audio_success = new Audio("./sounds/success.mp3")
  audio_success.loop = false;
  audio_success.volume = 0.5;
  audio_success.play();
}

//강화 실패 시
function reinforce_fail() {
  showGameover();
  Belonging_data.money = Belonging_data.money - Step_data[Belonging_data.nowstep].reinforce_cost
  Belonging_data.nowstep = 0;
  //파괴방지 숨기기
  $('#protect').hide();
  $('#protect_checkbox').hide();
  $('#protect_needs1').hide();
  $('#protect_cost').hide();
  $('#protect_needs2').hide();

  // 효과음 재생
  let audio_gameover = new Audio("./sounds/fail.mp3")
  audio_gameover.loop = false;
  audio_gameover.volume = 0.5;
  audio_gameover.play();

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
  Belonging_data.money = Belonging_data.money - Step_data[Belonging_data.nowstep].reinforce_cost
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
  $('#destroyed_step').text(Step_data[Belonging_data.nowstep].name);
  // console.log("버튼")
  $('#fade').show();
  $('#light').show();


}

// 강화 불가 창 띄우기
function showDontreinforce() {
  $('#destroyed_step').text(Step_data[Belonging_data.nowstep].name);
  // console.log("버튼")
  $('#fade').show();
  $('#light4').show();
}

//강화 불가 창 닫기
function closeGameover4() {
  // console.log("버튼")
  $('#fade').hide();
  $('#light4').hide();
}


// ********** //
//  상점페이지  //
// ********* //

// 1포카리나 2교복 3메이드복 4마법소녀복
let selected = 0;
// 아이템 구매 개수
let num_of_item = 0;

 //포카리나 선택 시
 function select_pocarina() {
  console.log("포카리나 버튼 클릭")
  $('#school_uniform_button').css({"background-image":"url(./images/school_uniform.png)"});
  $('#made_uniform_button').css({"background-image":"url(./images/made_uniform.png)"});
  $('#magic_uniform_button').css({"background-image":"url(./images/magic_uniform.png)"});
  $('#pocari_button').css({"background-image":"url(./images/pocari_hover.png)"});
  selected = 1;
  num_of_item = 1;
  show_shop();
 }

//교복 선택 시
function select_school_uniform() {
  console.log("교복 버튼 클릭")
  $('#school_uniform_button').css({"background-image":"url(./images/school_uniform_hover.png)"});
  $('#made_uniform_button').css({"background-image":"url(./images/made_uniform.png)"});
  $('#magic_uniform_button').css({"background-image":"url(./images/magic_uniform.png)"});
  $('#pocari_button').css({"background-image":"url(./images/pocari.png)"});
  selected = 2;
  num_of_item = 1;
  show_shop();
}

//메이드복 선택 시
function select_made_uniform() {
  console.log("메이드복 버튼 클릭")
  $('#school_uniform_button').css({"background-image":"url(./images/school_uniform.png)"});
  $('#made_uniform_button').css({"background-image":"url(./images/made_uniform_hover.png)"});
  $('#magic_uniform_button').css({"background-image":"url(./images/magic_uniform.png)"});
  $('#pocari_button').css({"background-image":"url(./images/pocari.png)"});
  selected = 3;
  num_of_item = 1;
  show_shop();
}

//마법소녀 선택 시
function select_magic_uniform() {
  console.log("마법소녀복 버튼 클릭")
  $('#school_uniform_button').css({"background-image":"url(./images/school_uniform.png)"});
  $('#made_uniform_button').css({"background-image":"url(./images/made_uniform.png)"});
  $('#magic_uniform_button').css({"background-image":"url(./images/magic_uniform_hover.png)"});
  $('#pocari_button').css({"background-image":"url(./images/pocari.png)"});
  selected = 4;
  num_of_item = 1;
  show_shop();
  
}

//아이템 개수 감소버튼
function count_item_down() {
  // 카운트가 1개일 시 최대 구매가능개수로 카운트
  if (num_of_item === 1) {
    num_of_item = Belonging_data.money / Item_data[selected-1]
    console.log(num_of_item)
    show_shop();
  }
  //아무것도 선택하지 않았을 시 작동하지 않음
  else if (selected === 0) {
    console.log("아이템 개수 증가 실패")
    return;
  }
  else {
    num_of_item = num_of_item - 1
    show_shop();
  }
}

//아이템 개수 증가버튼
function count_item_up() {
  //최대 구매가능개수일 때 1로 리턴
  if (num_of_item === Belonging_data.money / Item_data[selected-1]) {
    num_of_item = 1
    console.log(num_of_item)
    show_shop();
  }
  //아무것도 선택하지 않았을 시 작동하지 않음
  else if (selected === 0) {
    console.log("아이템 개수 증가 실패")
    return;
  }
  else {
    num_of_item = num_of_item + 1
    show_shop();
  }
}

//아이템 구매버튼을 누를 시
function buyItem() {
  if (selected === 0 || Belonging_data.money < ((num_of_item)*Item_data[selected-1])) {
    console.log((num_of_item)*Item_data[selected-1])
    console.log(Belonging_data.money)
    console.log("구매 실패")
    return;
  }
  else {
    Belonging_data.money = Belonging_data.money - Item_data[selected-1]*num_of_item
    items_to_inventory()

    num_of_item = 0;
    selected = 0;
    $('#school_uniform_button').css({"background-image":"url(./images/school_uniform.png)"});
    $('#made_uniform_button').css({"background-image":"url(./images/made_uniform.png)"});
    $('#magic_uniform_button').css({"background-image":"url(./images/magic_uniform.png)"});
    $('#pocari_button').css({"background-image":"url(./images/pocari.png)"});
    money_data_show()
    show_shop()
    localStorage.setItem("UserData", JSON.stringify(Belonging_data))
  }
}

//아이템 인벤토리에 넣기
function items_to_inventory() {
  if (selected===1) { Belonging_data.pocari_sweat = Belonging_data.pocari_sweat + num_of_item }
  else if (selected===2){ Belonging_data.school_uniform = Belonging_data.school_uniform + num_of_item }
  else if (selected===3){ Belonging_data.made_uniform = Belonging_data.made_uniform + num_of_item }
  else if (selected===4){ Belonging_data.magic_uniform = Belonging_data.magic_uniform + num_of_item }
}

//상점 아이템개수, 가격 보이기
function show_shop() {
  $('#count_item').text(num_of_item);
  $('#price').text(Item_data[selected-1]*num_of_item);
}

// ******** //
//  인벤토리  //
// ******* //

//교복 사용
function use_school_uniform() {
  if (Belonging_data.school_uniform === 0) {
    return;
  }
  else {
    Belonging_data.nowstep = 15;
    Belonging_data.school_uniform = Belonging_data.school_uniform - 1;
    localStorage.setItem("UserData", JSON.stringify(Belonging_data))
    location.href="main.html"
  }
}

//메이드복 사용
function use_made_uniform() {
  if (Belonging_data.made_uniform === 0) {
    return;
  }
  else {
    Belonging_data.nowstep = 20;
    Belonging_data.made_uniform = Belonging_data.made_uniform - 1;
    localStorage.setItem("UserData", JSON.stringify(Belonging_data))
    location.href="main.html"
  }
}

//마법소녀복 사용
function use_magic_uniform() {
  if (Belonging_data.magic_uniform === 0) {
    return;
  }
  else {
    Belonging_data.nowstep = 25;
    Belonging_data.magic_uniform = Belonging_data.magic_uniform - 1;
    localStorage.setItem("UserData", JSON.stringify(Belonging_data))
    location.href="main.html"
  }
}

// ***** //
//  공통  //
// ***** //

//단계에 따른 값 보여주기
function step_data_show() {
  //만약 10강이라면 파괴방지 보이기
  if (Belonging_data.nowstep >= 10) {
    $('#protect').show();
    $('#protect_checkbox').show();
    $('#protect_needs1').show();
    $('#protect_cost').show();
    $('#protect_needs2').show();
  }
  //10강 이내이거나 30강일 시 파괴방지 숨기기
  else {
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

//돈 업데이트
function money_data_show() {
  console.log("money값 출력")
  $('#money_shop').text(Belonging_data.money);
  $('#money_inventory').text(Belonging_data.money);
  $('#money_main').text(Belonging_data.money);
}

//인벤토리 업데이트
function inventory_show() {
  console.log("인벤토리 출력")
  $('#pocari_count').text(Belonging_data.pocari_sweat);
  $('#school_uniform_count').text(Belonging_data.school_uniform);
  $('#made_uniform_count').text(Belonging_data.made_uniform);
  $('#magic_uniform_count').text(Belonging_data.magic_uniform);
}

