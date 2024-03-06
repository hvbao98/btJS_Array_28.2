var woment = [
  {
    id: 1,
    name: "Vay thoi trang",
    price: "30000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.UH3bTqak48DD8Ikw8gZEXQHaLH&pid=Api&P=0&h=220",
  },
  {
    id: 2,
    name: "Vay thoi trang",
    price: "30000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.UH3bTqak48DD8Ikw8gZEXQHaLH&pid=Api&P=0&h=220",
  },
  {
    id: 3,
    name: "Vay thoi trang",
    price: "30000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.UH3bTqak48DD8Ikw8gZEXQHaLH&pid=Api&P=0&h=220",
  }, {
    id: 4,
    name: "Vay thoi trang",
    price: "30000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.UH3bTqak48DD8Ikw8gZEXQHaLH&pid=Api&P=0&h=220",
  }
];

var man = [
  {
    id: 1,
    name: "ao nam",
    price:"20000000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Op2D47g1EvtpW4gGWElbawHaLG&pid=Api&P=0&h=220",
  },
  {
    id: 2,
    name: "ao nam",
    price:"20000000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Op2D47g1EvtpW4gGWElbawHaLG&pid=Api&P=0&h=220",
  },
  {
    id: 3,
    name: "ao nam",
    price:"20000000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Op2D47g1EvtpW4gGWElbawHaLG&pid=Api&P=0&h=220",
  },
  {
    id: 4,
    name: "ao nam",
    price:"20000000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Op2D47g1EvtpW4gGWElbawHaLG&pid=Api&P=0&h=220",
  }
];

function listProduct() {
  for (let i = 0; i <= man.length-1; i++) {
    var demo = '   <div class="col-3 card-product">';
    demo += '<div class="card"style ="width:18rem" >';
    demo +=
      '  <img src="' +
      man[i].image +
      '" alt="" class="card-img-top" style="height: 400px;">';
    demo += '<div class="card-body"></div>';
    demo += ' <h5 class="card-title">' + man[i].name + "</h5>";
    demo += '<p class="card-text">' + man[i].price + "</p>";
    demo += '<a href="" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
    demo += "</div>";
    demo += " </div>";
    demo += " </div>";
    console.log(demo);
    document.getElementById("man").innerHTML += demo;
  }
  for (let i = 0; i <= woment.length-1; i++) {
    var demo = '   <div class="col-3 card-product">';
    demo += '<div class="card"style ="width:18rem" >';
    demo +=
      '  <img src="' +
      woment[i].image +
      '" alt="" class="card-img-top" style="height: 400px;">';
    demo += '<div class="card-body"></div>';
    demo += ' <h5 class="card-title">' + woment[i].name + "</h5>";
    demo += '<p class="card-text">' + woment[i].price + "</p>";
    demo += '<a href="" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
    demo += "</div>";
    demo += " </div>";
    demo += " </div>";
    console.log(demo);
    document.getElementById("woment").innerHTML += demo;
  }
}
function oder(){
    alert("cảm ơn bạn đã đặt hàng")
}
