$(document).ready(function(){

    $(".filter-button").click(function(){


        var classarray = [];
        $("input[type=checkbox]:checked").each(function(index,value){
               var classes = $(this).data("filter");
                   classarray.push(classes);
        });



        if(classarray.length<1)
        {
            $('.filters').show();
        }
        else
        {

              $(".filters").hide();
             $.each(classarray,function(key,value){
                var classes = "."+value;
                
                $(".filters").filter(classes).show();
             });
           
            
        }

        
      
    });


    jQuery('#min').change(function(e) {

        var minVal = $('#min :selected').val();
        alert(minVal);

    });

    jQuery('#max').change(function(e) {

        var maxVal = $('#max :selected').val();
        alert(maxVal);

    });

});


$(document).ready(function(){
        //var counter = $('#TextBox').val();
        /*var counter=1;
        $('#TextBox').val(counter);*/
        $('#AddButton').click( function() {
            $('#SubButton').prop('disabled',false);
            var counter = $('#TextBox').val();
            counter++ ;
            $('#TextBox').val(counter);
    });
          $('#SubButton').click( function() {
            var counter = $('#TextBox').val();
            if(counter==1){
                $(this).prop('disabled',true);
            }else{
                counter-- ;    
                $('#TextBox').val(counter);
            }
            
            
    });

});


$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}



$(document).ready(function(){
    $("#addrsEdit").hide();
    $('#editAddressBtn').click(function(){
        $('#savedAddrs').hide();
         $("#addrsEdit").show();
    })
})



// radio 

$(document).ready(function () 
 { 
  $("#watch-me").click(function()
  {
    $("#show-me:hidden").show();
   $("#show-me-two").hide();
   $("#show-me-three").hide();
   });
   $("#watch-me").click(function()
  {
    if($('watch-me').prop('checked')===false)
   {
    $('#show-me').hide();
   }
  });
  
  
  
  
  
  
  $("#see-me").click(function()
  {
    $("#show-me-two:hidden").show();
   $("#show-me").hide();
   $("#show-me-three").hide();
   });
   $("#see-me").click(function()
  {
    if($('see-me-two').prop('checked')===false)
   {
    $('#show-me-two').hide();
   }
  });
  
  
  
  
  
  
  
  $("#look-me").click(function()
  {
    $("#show-me-three:hidden").show();
   $("#show-me").hide();
   $("#show-me-two").hide();
   });
   $("#look-me").click(function()
  {
    if($('see-me-three').prop('checked')===false)
   {
    $('#show-me-three').hide();
   }
  });
  
 });

// pop up

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        trigger : 'hover',
        html : true,
        content : '<div class="media"><a href="#" class="pull-left"><img class="img-responsive" src="img/cvv.png" class="media-object" alt="Sample Image"></a></div>'
    });
});

// refresh

function randomString() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var string_length = 6;
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  document.randform.randomfield.value = randomstring;
}



// homelayout001

$(document).ready(function(){
  
  $(".smallGrid").click(function(){           
    $(this).find('a').addClass('active');
    $('.largeGrid a').removeClass('active');
    
    $('div.product').removeClass('large');
    $(".make3D").removeClass('animate');  
    $('.info-large').fadeOut("fast");
    setTimeout(function(){                
        $('div.flip-back').trigger("click");
    }, 400);
    return false;
  });   
  
  $(".smallGrid").click(function(){
    $('.product').removeClass('large');     
    return false;
  });
  
  $('.colors-large a').click(function(){return false;});
  
  
  $('.product').each(function(i, el){         

    // Lift card and show stats on Mouseover
    $(el).find('.make3D').hover(function(){
        $(this).parent().css('z-index', "20");
        $(this).addClass('animate');
        $(this).find('div.carouselNext, div.carouselPrev').addClass('visible');     
       }, function(){
        $(this).removeClass('animate');     
        $(this).parent().css('z-index', "1");
        $(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
    }); 
    
    // Flip card to the back side
    $(el).find('.view_gallery').click(function(){ 
      
      $(el).find('div.carouselNext, div.carouselPrev').removeClass('visible');
      $(el).find('.make3D').addClass('flip-10');      
      setTimeout(function(){          
      $(el).find('.make3D').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
          $(el).find('.product-front, .product-front div.shadow').hide();                             
        });
      }, 50);
      
      setTimeout(function(){
        $(el).find('.make3D').removeClass('flip90').addClass('flip190');
        $(el).find('.product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
        setTimeout(function(){        
          $(el).find('.make3D').removeClass('flip190').addClass('flip180').find('div.shadow').hide();           
          setTimeout(function(){
            $(el).find('.make3D').css('transition', '100ms ease-out');      
            $(el).find('.cx, .cy').addClass('s1');
            setTimeout(function(){$(el).find('.cx, .cy').addClass('s2');}, 100);
            setTimeout(function(){$(el).find('.cx, .cy').addClass('s3');}, 200);        
            $(el).find('div.carouselNext, div.carouselPrev').addClass('visible');       
          }, 100);
        }, 100);      
      }, 150);      
    });     
    
    // Flip card back to the front side
    $(el).find('.flip-back').click(function(){    
      
      $(el).find('.make3D').removeClass('flip180').addClass('flip190');
      setTimeout(function(){
        $(el).find('.make3D').removeClass('flip190').addClass('flip90');
    
        $(el).find('.product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
          $(el).find('.product-back, .product-back div.shadow').hide();
          $(el).find('.product-front, .product-front div.shadow').show();
        });
      }, 50);
      
      setTimeout(function(){
        $(el).find('.make3D').removeClass('flip90').addClass('flip-10');
        $(el).find('.product-front div.shadow').show().fadeTo( 100 , 0);
        setTimeout(function(){            
          $(el).find('.product-front div.shadow').hide();
          $(el).find('.make3D').removeClass('flip-10').css('transition', '100ms ease-out');   
          $(el).find('.cx, .cy').removeClass('s1 s2 s3');     
        }, 100);      
      }, 150);      
      
    });       
  
    makeCarousel(el);
  });
  
  function makeCarousel(el){
  
    
    var carousel = $(el).find('.carousel ul');
    var carouselSlideWidth = 315;
    var carouselWidth = 0;  
    var isAnimating = false;
    var currSlide = 0;
    $(carousel).attr('rel', currSlide);
    
    // building the width of the casousel
    $(carousel).find('li').each(function(){
      carouselWidth += carouselSlideWidth;
    });
    $(carousel).css('width', carouselWidth);
    
    // Load Next Image
    $(el).find('div.carouselNext').on('click', function(){
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft + carouselSlideWidth;
      if(newLeft == carouselWidth || isAnimating === true){return;}
      $(carousel).css({'left': "-" + newLeft + "px",
                   "transition": "300ms ease-out"
                 });
      isAnimating = true;
      currSlide++;
      $(carousel).attr('rel', currSlide);
      setTimeout(function(){isAnimating = false;}, 300);      
    });
    
    // Load Previous Image
    $(el).find('div.carouselPrev').on('click', function(){
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft - carouselSlideWidth;
      if(newLeft < 0  || isAnimating === true){return;}
      $(carousel).css({'left': "-" + newLeft + "px",
                   "transition": "300ms ease-out"
                 });
      isAnimating = true;
      currSlide--;
      $(carousel).attr('rel', currSlide);
      setTimeout(function(){isAnimating = false;}, 300);            
    });
  }
  
  $('.sizes a span, .categories a span').each(function(i, el){
    $(el).append('<span class="x"></span><span class="y"></span>');
    
    $(el).parent().on('click', function(){
      if($(this).hasClass('checked')){        
        $(el).find('.y').removeClass('animate');  
        setTimeout(function(){
          $(el).find('.x').removeClass('animate');              
        }, 50); 
        $(this).removeClass('checked');
        return false;
      }
      
      $(el).find('.x').addClass('animate');   
      setTimeout(function(){
        $(el).find('.y').addClass('animate');
      }, 100);  
      $(this).addClass('checked');
      return false;
    });
  });
  
});