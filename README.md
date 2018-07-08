# VSlider
JS Simple Slider

<b>Usage</b>
<p>Download files  jquery-3.2.1.js, VSlider.js and include it in your HTML:</p>
<br>
<p><script src="./js/jquery-3.2.1.js"></script></p>
<p><script src="./js/VSlider.js"></script></p>
<br>
In order to connect the plugin to HTML-element, you must call VSlider method.See below.
<br>
$('element selector').VSlider();
<br>
This code creates a slider from div element with width=600px, height=450px and gray border.
<br>
$('#d1').VSlider({border:"1px solid grey",width:"600px",height:"450px"});
<br>
All images put into separate directory with name given by "img_path" property of this plugin.
<br>
$('#d1').VSlider({border:"1px solid grey",width:"600px",height:"450px",img_path:"images"});
<br>
Also images must have one prefix in their name. For example, we want to slide 3 images. Their names with prefix "img" should be:
<br>
img1.png
img2.png
img3.png
<br>
A "img_pref" property sets prefix for images name. For example, if we want to slide *.jpg images, code for connect plugin must be:
<br>
$('#d1').VSlider({border:"1px solid grey",width:"600px",height:"450px",img_path:"images",img_pref:"jpg"});
<br>
A "anim_speed" property sets the animation speed. Default value is 400.
<br>
"max_img_count" property sets a total count of sliding images.


