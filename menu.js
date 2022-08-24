var ssb_panel = document.querySelectorAll('#ssb-container')[0];
var ssb_panel_w = parseFloat(getComputedStyle(ssb_panel, null).width.replace("px", ""));
var sbb_display_margin = 50;
var window_width = document.documentElement.clientWidth;

// ssb_panel.style.zIndex = ssb_ui_data.z_index;

if (ssb_panel.classList.contains("ssb-btns-right") && (ssb_panel.classList.contains("ssb-anim-slide") || ssb_panel.classList.contains("ssb-anim-icons"))) {
    ssb_panel.style.right = '-' + (ssb_panel_w - sbb_display_margin) + 'px';
}


/* SSB responsiveness: 
width < 640:    Hide
width 640-768:  Don't expand onhover
width > 768:    Expand normally
 */
if (window_width >= 768) {
    ssb_panel.onmouseenter = function () {
        if (ssb_panel.classList.contains("ssb-btns-right") && ssb_panel.classList.contains("ssb-anim-slide")) {
            slide('out');
        }
    };
    ssb_panel.onmouseleave =  function () {
        if (ssb_panel.classList.contains("ssb-btns-right") && ssb_panel.classList.contains("ssb-anim-slide")) {
            slide('in');
        }

    };

} else {
    ssb_panel.addEventListener('click',function (e) {
        if (this.classList.contains("ssb-open")) {
            this.classList.remove("ssb-open");
            if (ssb_panel.classList.contains("ssb-btns-right") && ssb_panel.classList.contains("ssb-anim-slide")) {
                slide('in');
            }
        } else {
            e.preventDefault();
            this.classList.add("ssb-open");
            if (ssb_panel.classList.contains("ssb-btns-right") && ssb_panel.classList.contains("ssb-anim-slide")) {
                slide('out');
            }
        }
    }, false);
}

function slide(dir){
    var offset;
    if(dir=='out'){
        offset = 0;
    } else if(dir=='in'){
        offset = '-' + (ssb_panel_w - sbb_display_margin) + 'px'
    }
    var animation = ssb_panel.animate(
        [{right: offset}], 
        {duration: 300,easing: 'ease-in-out',iterations: 1}
    )
    animation.onfinish = function () {
        animation.cancel();
        ssb_panel.style.right = offset;
   }
}
