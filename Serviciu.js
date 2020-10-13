app.service('costul', function() {
		  this.Calculeaza = function (x) {
		    switch(x){
			case 'Suita': return 75; break;
			case 'Coupe':  return 99; break;
			case 'Rezervat': return 200; break;
			case 'Sedentar': return 299; break;
		}
		  }
		});