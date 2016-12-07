document.addEventListener('DOMContentLoaded', function(){

      
	 $( "#r1" ).click(function() {
      // var yolo = document.querySelector(".il");
  	 	responsiveVoice.speak($('#r1').text());
	 });

      $(function() {
        // Dissimulation des réponses
        $('.reponse').hide();
        
        // Mise en forme des div du QCM
        var q = $('.question');
        q.css('background', '#9EEAE0');
        q.css('border-style', 'groove');
        q.css('border-width', '4px');
        q.css('width', '900px');
        q.css('height', '250px');
        q.css('margin', '20px');

        $('.texte').css('float', 'left');
        $('.texte').css('width', '90%');
        $('img').css('float', 'right');
        $('img').css('margin-top', '80px');
        
        // Action au survol du lien « Tester les réponses »
        $('a').hover(
          function() { 
            $('.reponse').show();
            if ($(':radio[id="r1"]:checked').val()) {
              $('#img1').attr('src', 'bon.png'); 
              $('#reponse1').css('color', 'green');
            }  
            else {
              $('#img1').attr('src', 'mauvais.png');
              $('#reponse1').css('color', 'red');
            } 
            if ($(':radio[id="r4"]:checked').val()) {
              $('#img2').attr('src', 'bon.png');
              $('#reponse2').css('color', 'green');
            }
            else {
              $('#img2').attr('src', 'mauvais.png');
              $('#reponse2').css('color', 'red');
            } 
            if ($(':radio[id="r8"]:checked').val()) {
              $('#img3').attr('src', 'bon.png'); 
              $('#reponse3').css('color', 'green');
            }
            else {
              $('#img3').attr('src', 'mauvais.png');
              $('#reponse3').css('color', 'red');
            }
          },
          function() { 
            $('.reponse').hide(); 
            $('img').each(function() {
              $(this).attr('src', 'question.png');
          });
}

        );  
      });
})