		var slideIndex= 0;
		showDivs();

		function plusDivs(n) {
			showDivs(slideIndex += n);
		}


		function showDivs(n) {
			var i;
			var x = document.getElementsByClassName('hero');
			for(i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }   
            slideIndex++;
			if(slideIndex > x.length) {slideIndex = 1;}
			if(n < 1) {slideIndex = x.length;}	
			x[slideIndex-1].style.display="block";	
		 	
		}setInterval(showDivs, 5000);
		