const signupButton = document.getElementById('signupbutton');
const signinButton = document.getElementById('signinbutton');

signupButton.addEventListener('click',() => {window.open("signup.html", target = "_blank")});
signinButton.addEventListener('click',() => {window.open("signin.html", target = "_blank")});

window.addEventListener("scroll", function() {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
  
    const scrollPercentage = Math.min(100, (scrollTop / (documentHeight - windowHeight)) * 100);
  
    document.getElementById("progress-bar").style.width = `${scrollPercentage}%`;
  });

const images = document.querySelectorAll("img");
images.forEach(image => {
  const filename = image.src.split("/").pop();
  image.title = filename.replace(".jpg", "").replace(".jpeg", "");
});
