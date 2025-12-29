// ============== Open Login Form
function loginAccount() {
  const registerContainer = document.querySelector(".registerContainer");
  document.querySelector(".loginContainer").classList.remove("hiden");
  registerContainer.classList.add("hiden");
}

// ============== Open Registration Form
function createAccount() {
  const registerContainer = document.querySelector(".registerContainer");
  document.querySelector(".loginContainer").classList.add("hiden");
  if (registerContainer.classList.contains("hiden")) {
    registerContainer.classList.remove("hiden");
  }
}

// ============== New Registration
function regesterData() {
  const fullName = document.getElementById("fullName").value;
  const studentId = document.getElementById("studentId").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  // const sellectGender = document.querySelector('input[name="gender"]:checked');
  // let gender = '';
  // gender = sellectGender.value;
  const faculty = document.getElementById("faculty").value;
  const course = document.getElementById("course").value;
  const address = document.getElementById("address").value;
  const emergencyContact = document.getElementById("emergencyContact").value;
  const registrationType = document.querySelector(
    'input[name="registrationType"]:checked'
  ).value;
  const interests = document.querySelector('input[name="interests"]:checked').value;
  const loginPassword = document.getElementById('loginPassword').value;
  const registrationDate = new Date().toLocaleDateString();
  

  const user = {
    fullName: fullName,
    studentId: studentId,
    email: email,
    phone: phone,
    dob: dob,
    gender: gender,
    faculty: faculty,
    course: course,
    address: address,
    emergencyContact: emergencyContact,
    registrationType: registrationType,
    interests: interests,
    loginPassword: loginPassword,
    registrationDate: registrationDate,
  };

  const users = JSON.parse(localStorage.getItem("userData")) || [];
  users.push(user);
  localStorage.setItem("userData", JSON.stringify(users));

  //   console.log(user);

  studentForm.reset();
}


// ============== Login as Valid User
function login() {
  const username = document.getElementById("username").value;
  const userPassword = document.getElementById("password").value;

  const userData = JSON.parse(localStorage.getItem("userData")) || [];

  const findUser = userData.find(
    (user) => username == user.studentId && userPassword == user.loginPassword
  );

  if (findUser) {
    localStorage.setItem("loginUser", JSON.stringify(findUser));
    window.location.href = "index.html";
  } else {
    alert("Invalid Inputs");
  }
}

// ============== Display All Registerd Data
function dataPortal() {
  const userData = JSON.parse(localStorage.getItem("loginUser"));

  if (!userData) {
    window.location.href = "login_regester.html";
    return;
  }
  document.getElementById('display-fullName').innerText= userData.fullName;
  document.getElementById('display-email').innerText=userData.email;
  document.getElementById('display-fullName-value').innerText=userData.fullName;
  document.getElementById('display-studentId-value').innerText=userData.studentId;
  document.getElementById('display-dob').innerText=userData.dob;
  document.getElementById('display-gender').innerText=userData.gender;
  document.getElementById('display-email-value').innerText=userData.email;
  document.getElementById('display-phone').innerText=userData.phone;
  document.getElementById('display-emergency').innerText=userData.emergencyContact;
  document.getElementById('display-address').innerText=userData.address;
  document.getElementById('display-faculty').innerText=userData.faculty;
  document.getElementById('display-course').innerText=userData.course;
  document.getElementById('display-regType').innerText=userData.registrationType;
  document.getElementById('display-regDate').innerText=userData.registrationDate;
  document.getElementById('display-interests').innerText=userData.interests;


}


// ============== Control Swicth
const createAccountBtn = document.querySelector(".register-link");
createAccountBtn.addEventListener("click", () => {
  createAccount();
});

const loginBtn = document.querySelector(".logIn-btn");
loginBtn.addEventListener("click", () => {
  loginAccount();
});

const studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  regesterData();
});

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
  dataPortal();
});