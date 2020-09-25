

$(document).ready(function(){
  
  $('#close').on('click' , function(){
	$('.OptionalMenu').hide();
	});
  
});


$(document).ready(function(){

	$("#Items").click(function() {
    if ($('#Items').hasClass("clicked-once")) {
			$('#saveImage').slideUp(1000);
			$('#Items').removeClass("clicked-once");
    }
    else {
			$('#Items').addClass("clicked-once");
			$('#saveImage').slideDown(1000);
    }
	});

});



$(document).ready(function(){

	  $('#Home').on('click' , function() {
	    $('.wave').css('background-image', 'url(wedding4.jpg)');
	    $('.wave').css('width', '100%');
	    $('.wave').css('margin-left', '0px');
	    $('.wave').css('padding-left', '0px');
	    $('.OptionalMenu').show();
	    $('.MainMenu').show();
	    $('.wave').show();
	    $('#BlogDetail').hide();
	    $('#parent').hide();
	    $('#OurTeam').hide();
	    $('#OurTeam2').hide();
	    $('#OurTeam3').hide();
	    $('#Services').show();
	    $('.top-stories').show();
	    $('#Features').show();
	    $('#Gallrey').show();
	    $('#Gallrey2').show();
		$('#view').show();
		$('#MakeRequest').show();
		$('#Fill-Form').show();
		$('#blog').show();
		$('#Info').hide();
		$('#images').show();
		$('#foot').show();
		$('#footer').show();
		 $('#aboutParagraph').hide();
	  });

});



$(document).ready(function(){

	  $('#service').on('click' , function() {
	    $('.wave').css('background-image', 'url(party.jpg)');
	    $('.wave').css('width', '1200px');
	    $('.wave').css('margin-left', '150px');
	    $('.wave').css('padding-left', '150px');

	    $('.OptionalMenu').hide();
	    $('.MainMenu').show();
	    $('#BlogDetail').hide();
	    $('#parent').hide();
	    $('#OurTeam').hide();
	    $('#OurTeam2').hide();
	    $('#OurTeam3').hide();

	    $('#Services').show();
	    $('.top-stories').show();
	     $('#aboutParagraph').hide();

	    $('#Features').hide();
	    $('#Gallrey').hide();
	    $('#Gallrey2').hide();
		$('#view').hide();

		$('#MakeRequest').show();
		$('#Fill-Form').show();

		$('#blog').show();

		$('#Info').hide();

		$('#images').show();
		$('#foot').show();
		$('#footer').show();

	  });
	

});



$(document).ready(function(){

	  $('#Protfolio').on('click' , function() {
	    $('.wave').css('background-image', 'url(party.jpg)');
	    $('.wave').css('width', '1200px');
	    $('.wave').css('margin-left', '150px');
	    $('.wave').css('padding-left', '150px');

	     $('#aboutParagraph').hide();
	    
	     $('.OptionalMenu').hide();
	    $('.MainMenu').show();
	    $('#BlogDetail').hide();
	    $('#parent').hide();
	    $('#OurTeam').hide();
	    $('#OurTeam2').hide();
	    $('#OurTeam3').hide();

	    $('#Services').hide();

	    $('.top-stories').hide();

	    $('#Features').show();
	    $('#Gallrey').show();
	    $('#Gallrey2').show();
		$('#view').show();

		$('#MakeRequest').hide();
		$('#Fill-Form').hide();

		$('#blog').show();

		$('#Info').hide();
		
		$('#images').show();
		$('#foot').show();
		$('#footer').show();


	  });

});





$(document).ready(function(){

	  $('#about').on('click' , function() {
	    $('.wave').css('background-image', 'url(party.jpg)');
	    $('.wave').css('width', '1200px');
	    $('.wave').css('margin-left', '150px');
	    $('.wave').css('padding-left', '150px');
	    
	    $('.box').css('box-shadow' , '1px 1px 1px 1px');
	    $('#images').css('margin-top' , '200px;');

	     $('.OptionalMenu').hide();
	    $('.MainMenu').show();
	    $('#BlogDetail').hide();
	    $('#parent').hide();
	    $('#OurTeam').hide();
	    $('#OurTeam2').hide();
	    $('#OurTeam3').hide();

	    $('#aboutParagraph').show();



	    $('#Services').hide();

	    $('.top-stories').hide();

	    $('#Features').hide();
	    $('#Gallrey').hide();
	    $('#Gallrey2').hide();
		$('#view').hide();

		$('#MakeRequest').hide();
		$('#Fill-Form').hide();

		$('#blog').show();

		$('#Info').hide();
		
		$('#images').show();
		$('#foot').show();
		$('#footer').show();
	  });
});



$(document).ready(function(){

	  $('#team').on('click' , function() {
	    $('.wave').css('background-image', 'url(party.jpg)');
	    $('.wave').css('width', '1200px');
	    $('.wave').css('margin-left', '150px');
	    $('.wave').css('padding-left', '150px');
	    $('#images').css('margin-top' , '200px;');


	     $('#aboutParagraph').hide();
	    $('.OptionalMenu').hide();
	    $('.MainMenu').show();
	    $('#BlogDetail').hide();
	    $('#parent').hide();
	    $('#OurTeam').show();
	    $('#OurTeam2').show();
	    $('#OurTeam3').show();

	    $('#Services').hide();

	    $('.top-stories').hide();

	    $('#Features').hide();
	    $('#Gallrey').hide();
	    $('#Gallrey2').hide();
		$('#view').hide();

		$('#MakeRequest').hide();
		$('#Fill-Form').hide();

		$('#blog').hide();

		$('#Info').hide();
		
		$('#images').show();
		$('#foot').show();
		$('#footer').show();
	  });
});



$(document).ready(function(){

	  $('#BlogDe').on('click' , function() {
	    $('.wave').css('background-image', 'url(party.jpg)');
	    $('.wave').css('width', '1200px');
	    $('.wave').css('margin-left', '150px');
	    $('.wave').css('padding-left', '150px');

	     $('#aboutParagraph').hide();

	     $('.OptionalMenu').hide();
	    $('.MainMenu').show();
	    $('#BlogDetail').hide();
	    $('#parent').show();
	    $('#OurTeam').hide();
	    $('#OurTeam2').hide();
	    $('#OurTeam3').hide();

	    $('#Services').hide();

	    $('.top-stories').hide();

	    $('#Features').hide();
	    $('#Gallrey').hide();
	    $('#Gallrey2').hide();
		$('#view').hide();

		$('#MakeRequest').hide();
		$('#Fill-Form').hide();

		$('#blog').hide();

		$('#Info').hide();
		
		$('#images').show();
		$('#foot').show();
		$('#footer').show();
	    	  
	  });
});

$(document).ready(function(){

	  $('#news').on('click' , function() {
	    $('.wave').css('background-image', 'url(party.jpg)');
	    $('.wave').css('width', '1200px');
	    $('.wave').css('margin-left', '150px');
	    $('.wave').css('padding-left', '150px');


	     $('#aboutParagraph').hide();
	     $('.OptionalMenu').hide();
	    $('.MainMenu').show();
	    $('#BlogDetail').show();
	    $('#parent').hide();
	    $('#OurTeam').hide();
	    $('#OurTeam2').hide();
	    $('#OurTeam3').hide();

	    $('#Services').hide();

	    $('.top-stories').hide();

	    $('#Features').hide();
	    $('#Gallrey').hide();
	    $('#Gallrey2').hide();
		$('#view').hide();

		$('#MakeRequest').hide();
		$('#Fill-Form').hide();

		$('#blog').hide();

		$('#Info').hide();
		
		$('#images').show();
		$('#foot').show();
		$('#footer').show();
	   
	  });
});





$(document).ready(function(){

	  $('#contact').on('click' , function() {
	    $('.wave').css('background-image', 'url(party.jpg)');
	    $('.wave').css('width', '100%');
	    $('.wave').css('margin-left', '0px');
	    $('.wave').css('padding-left', '0px');
	    	

	    $('#aboutParagraph').hide();
	     $('.OptionalMenu').hide();
	    $('.MainMenu').show();
	    $('#BlogDetail').hide();
	    $('#parent').hide();
	    $('#OurTeam').hide();
	    $('#OurTeam2').hide();
	    $('#OurTeam3').hide();

	    $('#Services').hide();

	    $('.top-stories').hide();

	    $('#Features').hide();
	    $('#Gallrey').hide();
	    $('#Gallrey2').hide();
		$('#view').hide();

		$('#MakeRequest').hide();
		$('#Fill-Form').hide();

		$('#blog').hide();

		$('#Info').show();
		
		$('#images').show();
		$('#foot').show();
		$('#footer').show();
	  });

});