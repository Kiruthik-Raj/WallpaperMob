window.addEventListener('scroll', function () {
    const scrollval = document.documentElement.scrollTop;
    const scrolllength = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    const scrollPercentage = Math.min(100, (scrollval / (scrolllength - winHeight) * 100));
    document.getElementById("progress-bar").style.width =`${scrollPercentage}%` ;
});