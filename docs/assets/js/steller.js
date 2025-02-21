/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

function toggleContent() {
	const hiddenContent = document.querySelector('.hidden-content');
	const button = document.getElementById('showMoreBtn');
  
	// Toggle the 'show' class on the hidden content
	if (hiddenContent.classList.contains('show')) {
	  hiddenContent.classList.remove('show');
	  button.textContent = 'Show More';
	} else {
	  hiddenContent.classList.add('show');
	  button.textContent = 'Show Less';
	}
}