var compteur_second = 0;

$('#container_hamburger').on('click', function() {
	if (compteur_second == 0) {
		$('#hamburger_2').css('opacity', '0')
		$('#hamburger_1').css({'top' : '14px'})
		$('#hamburger_3').css({'top' : '14px'})
		setTimeout(function() {
			compteur_second++;
		},100)
		setTimeout(function() {
			$('#hamburger_1').css({'transform' : 'rotateZ(45deg)'})
			$('#hamburger_3').css({'transform' : 'rotateZ(-45deg)'})
		},300)
	}
	if (compteur_second == 1) {
		$('#hamburger_2').css('opacity', '1')
		$('#hamburger_1').css({'transform' : 'rotateZ(0deg)'})
		$('#hamburger_3').css({'transform' : 'rotateZ(0deg)'})
		setTimeout(function() {
			compteur_second = 0;
		},100)
		setTimeout(function() {
			$('#hamburger_1').css({'top' : '7px'})
			$('#hamburger_3').css({'top' : '21px'})
		},300)
	}
});

(function() {
		var triggerBttn = document.getElementById( 'trigger-overlay'),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();