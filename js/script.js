(function($) {
  $.fn.carousel = function(options) {
    var settings = {
      previous: '#carousel-prev',
      next: '#carousel-next',
      speed: 600
    };
    options = $.extend(settings, options);
    
    return this.each(function() {
        
        // 1. Setup
        
      var $element = $(this),
        $wrapper = $('ul', $element), // items wrapper
        $items = $('li', $wrapper), // carousel items
        $outerWrapper = $wrapper.parent(), // outer items wrapper
        outerWrapperWidth = $outerWrapper.outerWidth(), // the visible portion of the carousel
        itemsNumber = $items.length, // items total number
        singleItemWidth = $items.eq(0).outerWidth(), // single item width
        singleItemMarginWidth = 5 * 2, // left/right margins set in the CSS styles
        visiblePages = Math.ceil(outerWrapperWidth / singleItemWidth), // visible pages
        pageNumber = Math.ceil(itemsNumber / visiblePages), // number of pages
        index = 0; // to keep track of the page number
        
          // set the overall width of the wrapper
          
          $wrapper.width((singleItemWidth + singleItemMarginWidth) * itemsNumber);
          
      // 2. Run the carousel
      
      $(options.previous).on('click', function(e) {
        e.preventDefault();
        index--; // decrement the counter
        if(index >= 0) {
          $wrapper.animate({
            left: '+=' + (singleItemWidth + singleItemMarginWidth)
          }, options.speed);
        }          
      });
      
      $(options.next).on('click', function(e) {
        e.preventDefault();
        index++; // increment the counter
        if(index <= pageNumber) {
          $wrapper.animate({
            left: '-=' + (singleItemWidth + singleItemMarginWidth)
          }, options.speed);
        }
      });
    });
  };

})(jQuery);

$(function() {
  $('#carousel').carousel();
});




$(document).ready(function(){
$("#btn:button").click(function(){
    $("#vantagens-icons").toggleClass("opened");
    $("#thumbnail-icons").toggleClass("opened-icon");
    $("#more-view").toggleClass("opened-icon-btn");
  });
});

//#evolucao, #comparacao, #participacao, #movimentos, #tendencias, #ranking, #inatividade, #fotografe  //

$(document).ready(function(){
      $("#bot-evolucao").click(function(){
        $( '#evolucao').css('display','block');
        $("#comparacao, #participacao, #movimentos, #tendencias, #ranking, #inatividade, #fotografe").css('display', 'none');

  });
});

$(document).ready(function(){
      $("#bot-comparacao").click(function(){
        $( '#comparacao' ).css('display','block');
        $("#evolucao, #participacao").css('display', 'none');

  });
});

$(document).ready(function(){
      $("#bot-participacao").click(function(){
        $( '#participacao' ).css('display','block');
        $("#evolucao, #comparacao, #movimentos, #tendencias, #ranking, #inatividade, #fotografe").css('display', 'none');

  });
});

$(document).ready(function(){
      $("#bot-movimentos").click(function(){
        $( '#movimentos' ).css('display','block');
        $("#evolucao, #comparacao, #participacao, #tendencias, #ranking, #inatividade, #fotografe").css('display', 'none');

  });
});
$(document).ready(function(){
      $("#bot-tendencias").click(function(){
        $( '#tendencias').css('display','block');
        $("#evolucao, #comparacao, #participacao, #movimentos, #ranking, #inatividade, #fotografe").css('display', 'none');

  });
});
$(document).ready(function(){
      $("#bot-ranking").click(function(){
        $( '#ranking').css('display','block');
        $("#evolucao, #comparacao, #participacao, #movimentos, #tendencias, #inatividade, #fotografe").css('display', 'none');

  });
});
$(document).ready(function(){
      $("#bot-inatividade").click(function(){
        $( '#inatividade').css('display','block');
        $("#evolucao, #comparacao, #participacao, #movimentos, #ranking, #tendencias, #fotografe").css('display', 'none');

  });
});
$(document).ready(function(){
      $("#bot-fotografe").click(function(){
        $( '#fotografe').css('display','block');
        $("#evolucao, #comparacao, #participacao, #movimentos, #ranking, #tendencias, #inatividade").css('display', 'none');

  });
});




$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

function download(){ 
  location.href=" download.html"
} 
function contato(){ 
  location.href=" contato.html"
} 