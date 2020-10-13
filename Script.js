var app = angular.module('myApp',[]); 
		app.controller('formCtrl',function($scope,$interval,costul){
			$scope.functia1 = function(){
				$scope.clasa7='mouseover';
			}
			$scope.status = "Ne autentificat";
			$scope.schimbaPagina = function(e){
				$scope.Acasa = false;
				$scope.Anunturi = false;
				$scope.Bilete = false;
				$scope.Contacte = false;
				switch(e){
					case 'acasa': $scope.Acasa = true; break;
					case 'anunturi': $scope.Anunturi = true; break;
					case 'bilete': $scope.Bilete = true;  break;
					case 'contacte': $scope.Contacte = true; break;
				}
			};
			$scope.closeModal = function (){
				$scope.flag = false;
				$scope.flag2 = false;
			};
			$scope.openModal = function (){
				$scope.flag = true;
			};
			$scope.openModal2 = function (){
				$scope.flag2 = true;
			};
			$scope.intermediar ={
				nume:"",
				parola:""
			};
			$scope.autentificat = false;
			$scope.conturi = [{
				nume: 'admin',
				parola: 'admin'
			}];
			$scope.autentificare = function(){
				$scope.conturi.forEach(function(arrayItem){
					if(arrayItem.nume == $scope.intermediar.nume && arrayItem.parola == $scope.intermediar.parola){
						$scope.autentificat = true;
						$scope.nuExista = false;
						$scope.status = "Autentificat";
						$scope.closeModal();
					} else $scope.nuExista = true;
				});
			};
			$scope.logOut = function(){
				$scope.intermediar.nume = "";
				$scope.intermediar.prenume = "";
				$scope.autentificat = false;
				$scope.status = "Ne autentificat";
				$scope.rezultat_bilet = true;
			};
			
			$scope.signUp = function(){
				if($scope.parola1 == $scope.parola2){
					$scope.conturi.forEach(function(arrayItem){
					if(arrayItem.nume == $scope.nume && arrayItem.parola == $scope.parola1){
						$scope.coincidente = true;
					}
					else {$scope.conturi.push({ nume: $scope.nume, parola: $scope.parola1 }); 
					$scope.coincidente = false;}
					});
				}
			};
			 $scope.timpul = new Date().toLocaleTimeString('ro-RO');
  			 $interval(function () {
      		 $scope.timpul = new Date().toLocaleTimeString('ro-RO');
  			 }, 1000);

  			 $scope.azi = new Date();
  			 $scope.maine = new Date($scope.azi);
  			 $scope.maine.setDate($scope.maine.getDate() + 1);
  			 $scope.poimaine = new Date($scope.maine);
  			 $scope.poimaine.setDate($scope.poimaine.getDate() + 1);


  			 $scope.orar = [
  			 {
  			 	plecare: "Chisinau",
  			 	data1: $scope.azi,
  			 	ora1: "19:45",
  			 	destinatia: "Aneni",
  			 	data2: $scope.azi,
  			 	ora2: "20:45"
  			 },
  			 {
  			 	plecare: "Iasi",
  			 	data1: $scope.azi,
  			 	ora1: "18:15",
  			 	destinatia: "Chisinau",
  			 	data2: $scope.azi,
  			 	ora2: "21:30"
  			 },
  			 {
  			   	plecare: "Cimislia",
  			 	data1: $scope.azi,
  			 	ora1: "17:45",
  			 	destinatia: "Aneni",
  			 	data2: $scope.azi,
  			 	ora2: "19:20"
  			 },
  			 {
  			   	plecare: "Chisinau",
  			 	data1: $scope.azi,
  			 	ora1: "20:30",
  			 	destinatia: "Adjud",
  			 	data2: $scope.azi,
  			 	ora2: "1:45"
  			 },
  			 {
  		  		plecare: "Aneni",
  			 	data1: $scope.azi,
  			 	ora1: "7:45",
  			 	destinatia: "Chisinau",
  			 	data2: $scope.azi,
  			 	ora2: "8:45"
  			 },
  			  {
  			 	plecare: "Chisinau",
  			 	data1: $scope.maine,
  			 	ora1: "19:45",
  			 	destinatia: "Aneni",
  			 	data2: $scope.maine,
  			 	ora2: "20:45"
  			 },
  			 {
  			 	plecare: "Iasi",
  			 	data1: $scope.maine,
  			 	ora1: "18:15",
  			 	destinatia: "Chisinau",
  			 	data2: $scope.maine,
  			 	ora2: "21:30"
  			 },
  			 {
  			   	plecare: "Cimislia",
  			 	data1: $scope.maine,
  			 	ora1: "17:45",
  			 	destinatia: "Aneni",
  			 	data2: $scope.maine,
  			 	ora2: "19:20"
  			 },
  			 {
  			   	plecare: "Chisinau",
  			 	data1: $scope.poimaine,
  			 	ora1: "20:30",
  			 	destinatia: "Adjud",
  			 	data2: $scope.poimaine,
  			 	ora2: "1:45"
  			 },
  			 {
  		  		plecare: "Aneni",
  			 	data1: $scope.poimaine,
  			 	ora1: "7:45",
  			 	destinatia: "Chisinau",
  			 	data2: $scope.poimaine,
  			 	ora2: "8:45"
  			 },
  			 ];

  			 $scope.orderByMe = function(x) {
       		$scope.myOrderBy = x;
    		};

    		$scope.filtru = {};

    		$scope.trenuri = ['Marcă Comună','Viteza Mare','Rapid','Pasager'];

    		$scope.bilet = {};

    	$scope.submit = function(){
		$scope.bilet.nume = $scope.bilet_nume;
		$scope.bilet.prenume = $scope.bilet_prenume;
		$scope.bilet.data = $scope.bilet_data;
		$scope.bilet.numar = $scope.bilet_numar;
		$scope.bilet.vagon = $scope.bilet_vagon;
		$scope.bilet.calatorie = $scope.bilet_calatorie;
		$scope.bilet.total = costul.Calculeaza($scope.bilet_vagon)*$scope.bilet_numar;
		$scope.rezultat_bilet = false;
		};

		$scope.renunta = function(){
		$scope.bilet.nume = "";
		$scope.bilet.prenume = "";
		$scope.bilet.data = {};
		$scope.bilet.numar = 0;
		$scope.bilet.vagon = "";
		$scope.bilet.calatorie = {};
		$scope.bilet.total = 0;
		};

		$scope.cumpara = function(){
			alert("Ai cumparat cu succes!");
		}
	  $scope.tipuri_anunt = ["Vand", "Cumpar", "Schimb"];
	  $scope.anunturi = [
	  	{
	  	tip_anunt:"Vand",
	  	numar_bilete: 2,
	  	plecare:"Chisinau",
	  	destinatia:"Adjud",
	  	data_anunt: new Date(),
	  	numar_anunt: "079775632"
	  },
	  	  {
	  	tip_anunt:"Cumpar",
	  	numar_bilete: 1,
	  	plecare:"Aneni",
	  	destinatia:"Soroca",
	  	data_anunt: new Date(),
	  	numar_anunt: "078674322"
	  },
	  	  {
	  	tip_anunt:"Schimb",
	  	numar_bilete: 1,
	  	plecare:"Iasi",
	  	destinatia:"Aneni",
	  	data_anunt: new Date(),
	  	numar_anunt: "068563412"
	  }
	  ];
	  $scope.addItem = function () {
	  $scope.anunt = {};
	  $scope.anunt.tip_anunt = $scope.tip_anunt;
	  $scope.anunt.numar_bilete = $scope.numar_bilete_anunt;
	  $scope.anunt.plecare = $scope.plecare_anunt;
	  $scope.anunt.destinatia = $scope.destinatia_anunt;
	  $scope.anunt.data_anunt = $scope.data_anunt;
	  $scope.anunt.numar_anunt = $scope.numar_anunt;

      $scope.anunturi.push($scope.anunt);
      }
      $scope.removeItem = function (x) {
      $scope.anunturi.splice(x, 1);
      }

      $scope.copy = function(){
      	alert('Operația de copiere executată cu succes');
      }
      $scope.cut = function(){
      	alert('Operația de taiere executată cu succes');
      }
      $scope.paste = function(){
      	alert('Operația de plasare executată cu succes');
      }
		});