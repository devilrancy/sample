/*function init_blog() {
  jQuery('.articles-row').isotope({
    itemSelector : '.post'
  });
  jQuery(window).resize(function() {
  
    setTimeout(function() { 
     jQuery('.articles-row').isotope('reLayout');
     },150);
  });
}

function init_button_more() {
	jQuery('.more-posts').bind('click', function(e) {
		var target = jQuery(this).attr('data-target');
		var container = jQuery(target);

		var content = jQuery('.articles-post',container).clone(); //instead of this do ajax request and get new elements, this line only for demo
		
		jQuery(target).isotope('insert', content);
		
		//init_pretty_photo();
		e.preventDefault();
	});
}
*/

$(function() {
    if( $(window).width()<1330 ) {
        $('body').addClass('resize-a');
    } else {
       $('body').removeClass('resize-a');
    }
    if( $(window).width()<1105 ) {
        $('body').removeClass('resize-a');
        $('body').addClass('resize-b');
    } else {
       $('body').removeClass('resize-b');
    }  
    if( $(window).width()<780 ) {
        $('body').removeClass('resize-a');
        $('body').addClass('resize-c');
    } else {
       $('body').removeClass('resize-c');
    } 
    if( $(window).width()<440 ) {   
        $('body').addClass('resize-d');
    } else {
       $('body').removeClass('resize-d');
    }                           
});
$(window).resize(function() {  

    if( $(window).width()<1330 ) {
        $('body').addClass('resize-a'); 
        
    } else {
       $('body').removeClass('resize-a');
    } 
    if( $(window).width()<1124 ) {
        $('body').removeClass('resize-a');
        $('body').addClass('resize-b');
        $('.left-c-menu').eq('0').css('border-top','0px');
        $('.left-col').removeClass('small-menu');
    } else {
       $('body').removeClass('resize-b');
       $('.left-c-menu').eq('0').css('border-top','1px solid #3d3d3d');
       
    } 
    if( $(window).width()<780 ) {   
        $('body').addClass('resize-c');
    } else {
       $('body').removeClass('resize-c');
    } 
    if( $(window).width()<440 ) {   
        $('body').addClass('resize-d');
    } else {
       $('body').removeClass('resize-d');
    }  
                 
});  

function init_validation(target) {
	function validate(target) {
		var valid = true;
		$(target).find('.req').each(function() {
			if($(this).val() == '') {
				valid = false;
				$(this).addClass('errored');
			}
			else {
				$(this).removeClass('errored');
			}
		});
		return valid;
	}
	
	$('form.w_validation').live('submit', function(e) {
		var valid = validate(this);
		if(!valid) e.preventDefault();
	});
	
	if(target) {return validate(target);}
}

$(document).ready(function(){
	
  init_validation();
  
  $('.page-header-search input:text').focus(function(){
    var $value = $(this).attr('value');
    if ( $value=='Search' ) {
      $('.page-header-search input:text').attr('value','');    
    }
  });
  $('.page-header-search input:text').blur(function(){
    var $value = $(this).attr('value');
    if ( $value=='' ) {
      $('.page-header-search input:text').attr('value','Search');    
    }
  });
  
  $('.newsletter input:text').focus(function(){
    var $value = $(this).attr('value');
    if ( $value=='ENTER YOUR EMAIL' ) {
      $('.newsletter input:text').attr('value','');    
    }
  });
  $('.newsletter input:text').blur(function(){
    var $value = $(this).attr('value');
    if ( $value=='' ) {
      $('.newsletter input:text').attr('value','ENTER YOUR EMAIL');    
    }
  });  

  $('.more-posts').click(function(){ 
    $.ajax({
      url: "posts.html",
      cache: false,
      success: function(html){
        $(".load-content").eq('0').append(html);
      }
    });
    $.ajax({
      url: "posts01.html",
      cache: false,
      success: function(html){
        $(".load-content").eq('1').append(html);
      }
    });
    $.ajax({
      url: "posts02.html",
      cache: false,
      success: function(html){
        $(".load-content").eq('2').append(html);
      }
    });
    return false;
  }); 

  $('.article-image').hover(
    function() {
    if ( $(this).closest('div').is('.flexslider') ) {
    } else {
      $(this).animate({
          opacity: '0.8'
        }, 200);    
    }     
    }, function() {
      if ( $(this).closest('div').is('.flexslider') ) {
      } else {
      $(this).animate({
          opacity: '1'
        }, 200);
      }  
    }
  );
  
  $('.recent-img img').hover(
    function() {
      $(this).animate({
          opacity: '0.8'
        }, 200);
    }, function() {
      $(this).animate({
          opacity: '1'
        }, 200);
    }
  );
  
  $('.main-news-i').hover(
  
  function() {
  if ( $('body').is('.resize-d') ) {
  } else {
    $(this).find('.post-num').animate({
          top: '15px'
        }, 350);
    $(this).find('.post-border').animate({
          top: '15px'
        }, 400);    
  }
  }, function() {
    $(this).find('.post-num').animate({
          top: '-20px'
        }, 350);
    $(this).find('.post-border').animate({
          top: '0px'
        }, 400);    
  }
  );

  $('.l-menu-open').click(function(){
    $('.left-col').animate({
            width: '241px'
          }, 300, function(){
            $('.left-col').addClass('small-menu');
          }); 
    $('.left-c-menu').eq('0').css('border-top','0px');
    return false;
  });
  $('.l-menu-hide').click(function(){
   $('.left-col').removeClass('small-menu');
   
   if ($('body').is('.resize-c')) {
        $('.left-col').animate({
            width: '69px'
        }, 300);   
   } else {
        $('.left-col').animate({
            width: '92px'
        }, 300);
   }         
    return false;
  });

  $('.tabs-i').click(function(){
    var $index = $(this).index();
    $('.tabs-i').removeClass('active').eq($index).addClass('active');
    $('.tabs-content').hide().eq($index).fadeIn();
  });

  /*$('.accordion').each(function(){
    $(this).find('.accordion-item').eq('0').addClass('active');
    $(this).find('.accordion-item').eq('0').find('.accordion-item-b').show(); 
    var $this = $(this);
    var $trigger = $(this).find('.accordion-item-a');
    $trigger.click(function(){
        var $parent = $(this).closest('.accordion-item');
        $this.find('.accordion-item').removeClass('active');
        $this.find('.accordion-item-b').slideUp();      
        $parent.addClass('active').find('.accordion-item-b').slideDown();  
    });   
  });*/
  
  /*$('.toggle').each(function(){
    $(this).find('.toggle-item').eq('0').addClass('active');
    $(this).find('.toggle-item').eq('0').find('.toggle-item-b').show(); 
    var $this = $(this);
    var $trigger = $(this).find('.toggle-item-a');
    $trigger.click(function(){
        var $parent = $(this).closest('.toggle-item');
        //$this.find('.toggle-item').removeClass('active');
        //$this.find('.toggle-item-b').slideUp();      
        $parent.addClass('active').find('.toggle-item-b').slideDown();  
    });
  });*/

  $('.has-child>a').click(function(){
    var $parent = $(this).closest('.has-child');
    if ( $(this).is('.open') ) {
      $(this).removeClass('open');
      $parent.find('ul').slideUp();      
    } else {
      $(this).addClass('open');
      $parent.find('ul').slideDown();    
    }
    return false;
  });  
  setTimeout(function() {
    $('.image-slider').each(function(){
      var $length = $(this).find('.bx-pager-item').length;
      $(this).find('.image-slider-total').text($length);
    }); 
        
    $('.image-slider .bx-next,.image-slider .bx-prev').on('click', function(){
      var $parent = $(this).closest('.image-slider');
      var $current = $parent.find('.bx-pager a.active').data('slide-index');
      $parent.find('.image-slider-current').text($current+1);
    });
  },150);
  
  $(".articles-post,.search-results-i").live('mouseenter', function() { 
    $(this).find('.post-info,.flex-prev,.flex-next').stop().fadeIn('fast');
  }).live('mouseleave', function () {
    $(this).find('.post-info,.flex-next,.flex-prev').stop().hide();
  });
  
  $(document).scroll(function(){
    $('.per-item').each(function(){
      var $parent = $(this);
      var $value = $parent.find('.per-item-data').text();
      var $slider = $parent.find('.per-item-b-value');   
      if ($(this).is('.animated')) {
        if ($slider.is(':in-viewport')) {
          $slider.animate({
            width: $value+'%'
          }, 2500);    
        }    
      } else {
        $slider.width($value+'%');
      }
    });
  });


$(window).resize(function() {  

   if ( $('body').is('.resize-a') ) {
    $('.left-col').css('width','241px');
   } 
   if ( $('body').is('.resize-b') ) {
    $('.left-col').css('width','92px');
   }  
   if ( $('body').is('.resize-c') ) {
    $('.left-col').css('width','69px');
   }        
           
                   
}); 
 
});