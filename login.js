//顯示/隱藏密碼
function showhide(inputId, eyeId) {
  const inputElement = document.querySelector(`#${inputId}`);
  const eyeElement = document.querySelector(`#${eyeId}`);
  if (inputElement.type === "password") {
    inputElement.type = "text";
    eyeElement.className = "bi bi-eye-slash-fill ms-2";
  } else {
    inputElement.type = "password";
    eyeElement.className = "bi bi-eye-fill ms-2";
  }
}
document.querySelector("#toggleSwitch").addEventListener("change", function () {
  // 切換登入/註冊表單
  const combinedForm = document.querySelector("#combinedForm");
  const formTitle = document.querySelector("#formTitle");

  const loginForm = document.querySelector("#loginForm");
  const registerForm = document.querySelector("#registerForm");
  const toggleLabel = document.querySelector("#toggleLabel");

  const loginFormStyle = window.getComputedStyle(loginForm);

  if (loginFormStyle.display === "none") {
    loginForm.style.display = "block"; // 顯示登入表單
    registerForm.style.display = "none"; // 隱藏註冊表單
    formTitle.innerText = "會員登入"; // 切換標題
    toggleLabel.innerHTML = "<small>還沒加入會員?按此切換註冊表單</small>";
  } else {
    loginForm.style.display = "none"; // 隱藏登入表單
    registerForm.style.display = "block"; // 顯示註冊表單
    formTitle.innerText = "會員註冊"; // 切換標題
    toggleLabel.innerHTML = "<small>註冊完請按此前往登入</small>";
  }
});

const loginEmail = document.querySelector("#LoginEmail");
const loginPassword = document.querySelector("#LoginPass");
const loginBottom = document.querySelector("#loginBottom");

loginBottom.addEventListener("click", function () {
  const passwordString = loginPassword.value.toString();

  if (
    loginEmail.value === "langyuan@example.com" &&
    passwordString === "langyuan"
  ) {
    Swal.fire({
      icon: "success",
      title: "登入成功!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // 登入成功後將使用者導向到其他頁面
      window.location.href = "1-1-1_Member-Center-Interface.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "登入失敗",
      text: "請重新輸入正確的帳號密碼!",
    });
  }
});
