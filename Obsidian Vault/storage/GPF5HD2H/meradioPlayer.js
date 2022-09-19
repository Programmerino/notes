var MeRadio = {
    options: {
        width: 50,
        height: 50,
        toolbar: false,
        menubar: false,
        resizable: false,
        top: 50,
        left: 50,
        url: "#",
    },
    configure(options){
        this.options = options
    },

    getSize(p, s){
        var t = p / 100;
        return s * t;
    },

    show938LivePlayer: function(){

        var width = this.getSize(this.options.width, window.outerWidth);
        var height = this.getSize(this.options.height, window.outerHeight);
        var top = this.getSize(this.options.top, window.outerHeight);
        var left = this.getSize(this.options.left, window.outerWidth);

        var options = [
            'width=' + width,
            'height=' + height,
            'toolbar=' + this.options.toolbar ? 'yes' : 'no',
            'menubar=' + this.options.menubar ? 'yes' : 'no',
            'top=' + top,
            'left=' + left,
            'resizable=' + this.options.resizable,
        ];

        window.open(this.options.url, '_new', options.join(',').toString());

    }
};

$(document).ready(function(){
    $('.meradio-show938-liveplayer').click(function(e){
        e.preventDefault();
        MeRadio.show938LivePlayer();
    });
});