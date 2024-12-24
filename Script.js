const text = "\"ทุกๆ งานเลี้ยงย่อมมีวันเลิกลา แต่ทุกๆ การจากลาย่อมทิ้งไว้ซึ่งความทรงจำที่งดงามในใจเราเสมอ\"";
const typingElement = document.getElementById("typing");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text[index];
    index++;
    setTimeout(typeText, 100); 
  } else {
    typingElement.classList.remove("blinking");
    typingElement.classList.add("finished");
  }
}

typeText();
