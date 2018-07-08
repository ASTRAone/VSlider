# VSlider
JS Simple Slider

Usage
Download files  jquery-3.2.1.js, VSlider.js and include it in your HTML:

<script src="./js/jquery-3.2.1.js"></script>
<script src="./js/VSlider.js"></script>

In order to connect the plugin to HTML-element, you must call VSlider method.See below.

$('element selector').VSlider();

This code creates a slider from div element with width=600px, height=450px and gray border.

$('#d1').VSlider({border:"1px solid grey",width:"600px",height:"450px"});

All images put into separate directory with name given by "img_path" property of this plugin.

$('#d1').VSlider({border:"1px solid grey",width:"600px",height:"450px",img_path:"images"});

Also images must have one prefix in their name. For example, we want to slide 3 images. Their names with prefix "img" should be:

img1.png
img2.png
img3.png

A "img_pref" property sets prefix for images name. For example, if we want to slide *.jpg images, code for connect plugin must be:

$('#d1').VSlider({border:"1px solid grey",width:"600px",height:"450px",img_path:"images",img_pref:"jpg"});

A "anim_speed" property sets the animation speed. Default value is 400.

"max_img_count" property sets a total count of sliding images.


