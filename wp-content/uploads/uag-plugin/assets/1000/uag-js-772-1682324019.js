document.addEventListener("DOMContentLoaded", function(){ var ssLinks = document.querySelectorAll( '.uagb-block-2b3ec549' );
for ( var j = 0; j < ssLinks.length; j++ ) {
	var ssLink = ssLinks[j].querySelectorAll( ".uagb-ss__link" );
	for ( var i = 0; i < ssLink.length; i++ ) {
		ssLink[i].addEventListener( "click", function() {
			var social_url = this.dataset.href;
			var target = "";
			if( social_url == "mailto:?body=" ) {
				target = "_self";
			}
			var  request_url ="";
			if( social_url.indexOf("/pin/create/link/?url=") !== -1) {
				request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
			}else{
				request_url = social_url + encodeURIComponent( window.location.href );
			}
			window.open( request_url, target );
		});
	}
}
window.addEventListener("DOMContentLoaded", function(){
	var swiper = new Swiper( ".uagb-block-de0b44c1 .uagb-swiper",
		{"autoplay":{"delay":3000,"disableOnInteraction":false,"pauseOnMouseEnter":true,"stopOnLastSlide":false},"loop":true,"speed":800,"effect":"slide","direction":"horizontal","flipEffect":{"slideShadows":false},"fadeEffect":{"crossFade":true},"pagination":{"el":".uagb-block-de0b44c1 .swiper-pagination","clickable":true,"hideOnClick":false},"navigation":{"nextEl":".uagb-block-de0b44c1 .swiper-button-next","prevEl":".uagb-block-de0b44c1 .swiper-button-prev"}}	);
});

 });