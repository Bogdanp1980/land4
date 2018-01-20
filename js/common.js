window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 350) {
      document.getElementById("img").classList.remove('active');
      document.getElementById("img").classList.remove('active1');
    }
  else if (document.documentElement.scrollTop > 450 && document.documentElement.scrollTop < 850) {
      document.getElementById("img").classList.add('active');
			document.getElementById("img").classList.remove('active1');
    }
		else if(document.documentElement.scrollTop >= 850 && document.documentElement.scrollTop < 1350) {
      document.getElementById("img").classList.add('active1');
      document.getElementById("img").classList.remove('active');
      document.getElementById("img").classList.remove('active2');
    }
    else if(document.documentElement.scrollTop >= 1350 && document.documentElement.scrollTop < 2200) {
      document.getElementById("img").classList.add('active2');
      document.getElementById("img").classList.remove('active');
      document.getElementById("img").classList.remove('active1');
    }
}
