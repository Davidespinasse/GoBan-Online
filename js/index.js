// Gestion Menu, avec animation Hamburger et gestion des overlay pour apparition disparition du menu, lorsqu'on clique sur l'icone menu ou que l'on clique sur un lien


// Animation Hamburger menu, Barres/Croix
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

// Animation ouverture du menu de navigation
(function() {
		var triggerBttn = document.getElementById('trigger-overlay'),
		overlay = document.querySelector( 'div.overlay' ),
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

	// Gestion de fermeture lors d'un clic soit sur un lien soit en dehors du menu.. a retravailler pour plus d'otpimisation.

	$('.overlay a').on('click', function(){
		$('#trigger-overlay').trigger('click');
		compteur_second == 1
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
			return false;
	});

	$('#home').on('click', function(){
		$('#trigger-overlay').trigger('click');
		compteur_second == 1
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
			return false;
	});

	$('#about').on('click', function(){
		$('#trigger-overlay').trigger('click');
		compteur_second == 1
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
			return false;
	});

	$('#game').on('click', function(){
		$('#trigger-overlay').trigger('click');
		compteur_second == 1
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
			return false;
	});

	$('#team').on('click', function(){
		$('#trigger-overlay').trigger('click');
		compteur_second == 1
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
			return false;
	});

	triggerBttn.addEventListener( 'click', toggleOverlay );
})();