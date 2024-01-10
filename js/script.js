"use stric";
function handleSubmit() {
  //Nhận giá trị và chuyển thành chữ thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //kiểm tra email
  const checkEmail = emailValue.match(regex);

  //ẩn thông tin
  const personalInfo = document.querySelector("#personal-info");
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    personalInfo.classList.remove("hidden");
    submitControl.classList.add("hidden");
  } else {
    errorEmail.textContent = "Please enter the correct email format";
  }
}
// function hiện nút view-more
function showButton(element) {
  let button = element.querySelector(".view-more");
  button.style.display = "block";
}
// function ẩn nút view-more
function hideButton(element) {
  let button = element.querySelector(".view-more");
  button.style.display = "none";
}
// function ẩn hiện content khi click nút view-more
function toggleContent(button) {
  var sectionContent = button.previousElementSibling;
  if (sectionContent.style.display === "none") {
    sectionContent.style.display = "block";
    button.textContent = "View Less";
  } else {
    sectionContent.style.display = "none";
    button.textContent = "View More";
  }
}
