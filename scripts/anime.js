window.addEventListener("scroll", function() {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
  
    const scrollPercentage = Math.min(100, (scrollTop / (documentHeight - windowHeight)) * 100);
  
    document.getElementById("progress-bar").style.width = `${scrollPercentage}%`;
  });