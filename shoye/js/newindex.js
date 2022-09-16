window.onload = function () {
  lis[0].style.display = "block";
  imgs[0].style.display = "block";
  maps[0].style.display = "block";

  // 轮播图
  var box = document.getElementsByClassName("lunbo1")[0];
  var pics = document.getElementById("pics");
  var imgss = pics.getElementsByTagName("li");
  var sub = document.getElementById("sub");
  var subs = sub.children;

  var minSpeed = 10; //步长，top增加或减少的数
  var imgtop = pics.scrollTop;

  var nextTimer;
  var timer2;
  var type = true;
  //给图片或圆点定义自定义属性
  for (var i = 0; i < imgss.length; i++) {
    imgss[i].index = i;
    subs[i].index = i;
  }
  //1.上切
  function up() {
    if (type) {
      imgtop = 0;
      clearInterval(nextTimer);
      nextTimer = setInterval(nextImg, 1);
      type = false;
      changeColor(imgss[1]);
    }
  }
  // 上走
  function nextImg() {
    imgtop += minSpeed;
    pics.style.top = "-" + imgtop + "px";
    if (imgtop >= imgss[1].offsetTop) {
      clearInterval(nextTimer);
      type = true;
      pics.appendChild(imgss[0]);
      pics.style.top = 0;
    }
  }

  //下切
  function down() {
    if (type) {
      imgtop = imgss[0].offsetTop;
      clearInterval(nextTimer);
      nextTimer = setInterval(lastImg, 1);
      type = false;
      // 小圆点变为前一个的颜色
      changeColor(imgss[2]);
      // 这里把最后一张添加到第一张
      pics.insertBefore(imgss[2], imgss[0]);
    }
  }
  // 下走
  function lastImg() {
    console.log(imgss[0].offsetTop);
    imgtop -= minSpeed;
    pics.style.top = -imgtop + "px";
    console.log(imgtop);
    if (imgtop <= -780) {
      clearInterval(nextTimer);
      type = true;
      
      pics.style.top = 0;
    }
  }

  // 小圆点
  function changeColor(target) {
    for (var i = 0; i < imgss.length; i++) {
      subs[i].className = "";
    }
    subs[target.index].className = "current";
  }
  //鼠标移入停止轮播
  box.onmouseover = function () {
    clearInterval(timer2);
  };
  //鼠标移出，继续轮播
  box.onmouseout = function () {
    timer2 = setInterval(up, 2000);
  };

  timer2 = setInterval(up, 2000);

  var point1 = document.getElementById("point1");
  var point2 = document.getElementById("point2");
  var point3 = document.getElementById("point3");

  point1.onmouseover = function () {
    if (imgss[0].index == 0) {
      return;
    } else if (imgss[0].index == 1) {
      down();
    } else {
      up();
    }
    clearInterval(timer2);
    changeColor(point1);
    point1.style.transition = "0.5s";
  };
  point1.onmouseout = function () {
    setTimeout(() => {
      point1.className = "";
    }, 2000);
  };

  point2.onmouseover = function () {
    if (imgss[0].index == 0) {
      up();
    } else if (imgss[0].index == 1) {
      return;
    } else {
      down()
    }
    clearInterval(timer2);
    changeColor(point2);
    point2.style.transition = "0.5s";
  };
  point2.onmouseout = function () {
    setTimeout(() => {
      point2.className = "";
    }, 2000);
  };

  point3.onmouseover = function () {
    if (imgss[0].index == 0) {
      down()
    } else if (imgss[0].index == 1) {
      up();
    } else {
      return;
    }
    clearInterval(timer2);
    changeColor(point3);
    point3.style.transition = "0.5s";
  };
  point3.onmouseout = function () {
    setTimeout(() => {
      point3.className = "";
    }, 2200);
  };
};

// alert("重写alert方法","设计思路！");
window.alert = function (title) {
  var html = `<dl>
  <dd></dd>
   <span>${title}</span> 
  </dl>`;

  //如果不存在对话框，则创建对话框并显示内容
  var div = document.createElement("div");
  div.id = "alert_box";
  div.style.display = "block";
  document.body.appendChild(div);
  div.innerHTML = html;
  setTimeout(() => {
    div.style.top = 0;
    div.style.opacity = "0";
    div.style.transition = "1s";
  }, 1500);
};

//新闻增加 减少
const lis = document.getElementsByClassName("lis");
var count1 = 1;
function add() {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.display = "none";
  }
  if (count1 < lis.length) {
    lis[count1].style.display = "block";
    count1++;
  } else {
    lis[lis.length - 1].style.display = "block";
    alert("已经是最后一页了!");
  }
}

function down() {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.display = "none";
  }
  if (count1 > 1) {
    count1--;
    lis[count1 - 1].style.display = "block";
  } else {
    lis[0].style.display = "block";
    alert("已经是第一页了!");
  }
}

// 增加减少图片
var imgs = document.getElementsByClassName("imglis");
var count2 = 1;
function addimg() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  if (count2 < imgs.length) {
    imgs[count2].style.display = "block";
    count2++;
  } else {
    imgs[imgs.length - 1].style.display = "block";
    alert("已经是最后一页了!");
  }
}

function downimg() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  if (count2 > 1) {
    count2--;
    imgs[count2 - 1].style.display = "block";
  } else {
    imgs[0].style.display = "block";
    alert("已经是第一页了!");
  }
}

// 增加减少地图
var maps = document.getElementsByClassName("map_address");
var count3 = 1;
function addMap() {
  for (let i = 0; i < maps.length; i++) {
    maps[i].style.display = "none";
  }
  if (count3 < maps.length) {
    maps[count3].style.display = "block";
    count3++;
  } else {
    maps[maps.length - 1].style.display = "block";
  }
}

function downMap() {
  for (let i = 0; i < maps.length; i++) {
    maps[i].style.display = "none";
  }
  if (count3 > 1) {
    count3--;
    maps[count3 - 1].style.display = "block";
  } else {
    maps[0].style.display = "block";
  }
}
