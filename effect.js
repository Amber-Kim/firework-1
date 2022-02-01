var t = 0;
var c = document.querySelector("canvas");
// 비어있는 c 캔버스에 getContext() 메서드를 사용하여 드로잉 컨텍스트에 액세스 할 수 있도록 함
var $ = c.getContext('2d');
// 캔버스의 w & h 사이즈 정의 w < innerWidth < outerWidth() < outerWidth(true)
c.width = window.innerWidth;
c.height = window.innerHeight;

// 캔버스 색상 지정 fillStyle
$.fillStyle = 'rgba(0, 0, 0, 0.1)';

// 캔버스 준비
window.addEventListener('resize', function () {
  var dimensions = getDimensions();
  c.width = dimensions.width;
  c.height = dimensions.height;
}, false);

// 이펙트 메서드 생성
function draw() {
  // 색을 합성하여 조합하는 globalCompositeOperation 요소 사용
  $.globalCompositeOperation = 'source-over';
  $.fillStyle = 'rgba(0, 0, 0, 0.1)';
  $.fillRect(0, 0, c.width, c.height);
  var foo, i, r;
  foo = Math.sin(t) * 2 * Math.PI;
  for (i = 0; i < 400; i++) {
    r = 400 * Math.sin(i * foo);
    $.globalCompositeOperation = '';
    $.fillStyle = 'hsla(' + i + 99 + ',100%, 60%,1)';
    $.beginPath();
    $.arc(Math.sin(i) * r + (c.width / 2), Math.cos(i) * r + (c.height / 2), 1.5, 0, Math.PI * 2);
    $.fill();
  }
  // 타임 지정
  t += 0.000005;
  return t %= 2 * Math.PI;
};

function run() {
  window.requestAnimationFrame(run);
  draw();
}
run();