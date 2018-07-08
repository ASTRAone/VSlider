(function( $ ) {

function Slide(d1,d2,d3,w,h,w2,h2,anim_speed,img_path,img_pref,img_ext,max_img_count){

 if (d2.attr("class")=="center") return;

      let d1_pos=parseInt(d1.css("left"));
      let d2_pos=parseInt(d2.css("left"));
      let d3_pos=parseInt(d3.css("left"));
    let num=parseInt(d2.data('img_num'));
  if (d2.attr("class")=="left"){
  
  
  num=num+1;
  if (num>max_img_count) num=1;
  d3.data('img_num',num);
  d3.css('background-image','url("'+img_path+'/'+img_pref+num+'.'+img_ext+'")');

      d2.animate({
         opacity:0.9, 
         "z-index":2,
       
         left:d1_pos,
         width:w,
         height:h,
      
        
      },{queue: false, duration:anim_speed});

      d1.animate({
      	"z-index":1,
      	opacity:0.6,
      	left:d3_pos,
      	width:w2,
      	height:h2,
      	
      },{queue: false, duration:anim_speed});


        d3.animate({
      	"z-index":1,
      	opacity:0.6,
      	left:'0px',
      	width:w2,
      	height:h2,

      	
      },{queue: false, duration:anim_speed});

  }

   if (d2.attr("class")=="right"){
   
   num=num-1;
  if (num<1) num=max_img_count;
  d1.data('img_num',num);
  d1.css('background-image','url("'+img_path+'/'+img_pref+num+'.'+img_ext+'")');
 
	   d2.animate({
         opacity:0.9, 
         "z-index":2,
       
         left:d3_pos,
         width:w,
         height:h,
      
        
      },{queue: false, duration:anim_speed});
	  
	  d1.animate({
      	"z-index":1,
      	opacity:0.6,
      	left:d2_pos,
      	width:w2,
      	height:h2,
      	
      },{queue: false, duration:anim_speed});
	  
	  d3.animate({
      	"z-index":1,
      	opacity:0.6,
      	left:'0px',
      	width:w2,
      	height:h2,

      	
      },{queue: false, duration:anim_speed});
	 
	  
  }
  
  

      d1.attr("class","right");
      d3.attr("class","left");
	  d2.attr("class","center");



}


  $.fn.VSlider = function(options) {
  
   //настройки плагина по умолчанию
     var defaults = {
      width:"400px",
      height:"300px",
      border:"2px solid grey",
	  img_path:"img",
	  img_ext:"jpg",
	  img_pref:"",
	  anim_speed:400,
	  max_img_count:6
     };



      var options = $.extend({}, defaults, options);

	var element = function(){
      // реализация работы метода с отдельным элементом страницы
	  
	   // функционал плагина


//очистка содержимого элемента, к которому подключен плагин
$(this).html('');
   
   //применение настроек к плагину
	$(this).css({
	'width':options.width,
    'height':options.height,
    'border':options.border,
    'position':'relative'
    });

   $(this).append('<div class="center">'); //добавляем центральный див


    let ww=parseInt(options.width);
    let hh=parseInt(options.height);

   let w=(ww-ww*0.4); //рассчитываем ширину и высоту центрального дива, по 20 % по краям
   let h=(hh-hh*0.4);

   let left=(ww/2)-w/2;


    let d1= $(this).find('div:eq(0)');
	let img1_path='url("'+options.img_path+'/'+options.img_pref+'1.'+options.img_ext+'")';
	let img2_path='url("'+options.img_path+'/'+options.img_pref+'2.'+options.img_ext+'")';
	let img3_path='url("'+options.img_path+'/'+options.img_pref+'3.'+options.img_ext+'")';
    d1.css({// 'margin':'0 auto',
            'z-index':2,
            'position':'absolute',
           
			'background-image':img1_path,
			'background-size':'cover',
      'background-position':'center',
            'width':w.toString()+"px",
            'height':h.toString()+"px",
            'top':'50%',
            'transform': 'translateY(-50%)',
            'opacity':'0.9',
            'left':left.toString()+"px"

          });

    d1.data("img_num",1);


     $(this).append('<div class="left">'); //добавляем левый див
     let d2= $(this).find('div:eq(1)'); 
     let w2=w*0.5;
     let h2=h*0.5;

     let right=ww-w2;

        d2.css({
            'z-index':1,
            'position':'absolute',
           
			'background-image':img2_path,
			'background-size':'cover',
      'background-position':'center',
            'width':w2.toString()+"px",
            'height':h2.toString()+"px",
            'top':'50%',
           // 'bottom':'18%',
            'transform': 'translateY(-50%)',
            'opacity':'0.6',
            'left':'0px'
           // 'float':'left'

          });
        d2.data("img_num",2);

  $(this).append('<div class="right">'); //добавляем правый див
     let d3= $(this).find('div:eq(2)'); 
   

      d3.css({
            'z-index':1,
            'position':'absolute',
           
			'background-image':img3_path,
			'background-size':'cover',
      'background-position':'center',
            'width':w2.toString()+"px",
            'height':h2.toString()+"px",
            'top':'50%',
          //  'bottom':'18%',
            'transform': 'translateY(-50%)',
            'opacity':'0.6',
            'left':right.toString()+"px"
            //'float':'right'

          });
		  
		d3.data("img_num",3);  

d2.on('click', function(){
	Slide(d1,d2,d3,w,h,w2,h2,options.anim_speed,options.img_path,options.img_pref,options.img_ext,options.max_img_count);

});


d3.on('click', function(){


Slide(d2,d3,d1,w,h,w2,h2,options.anim_speed,options.img_path,options.img_pref,options.img_ext,options.max_img_count);

});


d1.on("click",function(){
Slide(d3,d1,d2,w,h,w2,h2,options.anim_speed,options.img_path,options.img_pref,options.img_ext,options.max_img_count);

});



    };
 
    return this.each(element); //возвращаем каждый элемент, чтобы была возможность дальнейшей работы с элементом в jQuery
	
	
  };
})(jQuery); //чтобы избежать конфликт имен