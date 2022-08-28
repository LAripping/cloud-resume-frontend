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

// Limitations: doesn't include CSS by default
function downloadPDF_pdfjs(){
    // Default export is a4 paper, portrait, using millimeters for units
    var pdf = new jsPDF();
    var html = document.querySelectorAll('html')[0]

    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };

    pdf.fromHTML(html.innerHTML, 15, 15, {
        'width': 800,
        'elementHandlers': specialElementHandlers
    });
    setTimeout(function(){
        pdf.save('Leonidas-Tsaousis-CV.pdf');
    },2000);
}

// https://stackoverflow.com/a/22695248
// Limitations: Not actually a PDF download, doesn't work in FF
function downloadPDF_printUI(){
    var iframe = this._printIframe;
    if (!this._printIframe) {
      iframe = this._printIframe = document.createElement('iframe');
      document.body.appendChild(iframe);
  
      iframe.style.display = 'none';
      iframe.onload = function() {
        setTimeout(function() {
          iframe.focus();
          iframe.contentWindow.print();
        }, 1);
      };
    }
  
    iframe.src = document.location.href;
}

// https://ekoopmans.github.io/html2pdf.js/
// Limitations: Not selectable/searchable text... but otherwise best solution!
function downloadPDF_html2pdf(){
    const loader = document.querySelectorAll('.loader')[0]
    loader.style.display = 'block'

    const element = document.querySelector('body');
    const elementToIgnore = document.querySelector('#ssb-container');
    var opt = {
        margin:       [2, 0],
        filename:     'Leonidas-Tsaousis-CV.pdf',
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] },
        enableLinks:  true,
        image:        { type: 'png' },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'em', format: 'a4', orientation: 'portrait' }
      };
    var worker = html2pdf().set(opt).from(element).save();
    // var worker = html2pdf().from(element).toContainer().toCanvas().toImg().toPdf().save()

    
    worker.then( 
        function onFullfilled(){
            loader.style.display = 'none'
            console.log('html2pdf done!')
        },
        function onRejected(){
            loader.style.display = 'none'
            console.error('html2pdf error!')
        }
    )
}