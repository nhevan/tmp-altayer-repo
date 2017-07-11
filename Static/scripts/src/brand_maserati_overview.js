define(['jquery'], function ($) {
    function init(container) {

        $('.first .btn').click(function() {
            if (window.innerWidth > 540) {
                $('.second, .third').hide();
                $('.second .btn, .third .btn').css('background-color', '#FD5204');
                $('.first .btn').css('background-color', '#FD5204');
                $(this).css('background-color', '#454545');
                $(this.getAttribute("target")).show();
                console.log(this.getAttribute("target"));
            } else {
                $('.second, .third').hide();
                $('.second .btn, .third .btn').css('background-color', '#FD5204');
                $('.first .btn').css('background-color', '#FD5204');
                $(this).css('background-color', '#454545');
                $(this.getAttribute("target")).insertAfter(this);
                $(this.getAttribute("target")).toggle();
                console.log(this.getAttribute("target"));
            }

        });

        $('.second .btn').click(function() {
            if (window.innerWidth > 540) {
                $('.third').hide();
                $('.second .btn').css('background-color', '#FD5204');
                $(this).css('background-color', '#454545');
                $(this.getAttribute("target")).show();
                console.log(this.getAttribute("target"));
            } else {
                $('.third').hide();
                $('.second .btn').css('background-color', '#FD5204');
                $(this).css('background-color', '#454545');
                $(this.getAttribute("target")).insertAfter(this);
                $(this.getAttribute("target")).toggle();
                console.log(this.getAttribute("target"));
            }

        });

        $('.third .btn').click(function() {
            $('.third .btn').css('background-color', '#FD5204');
            $(this).css('background-color', '#454545');
            console.log(this);
        });

        $('.btn').click(function(){
            $('.modal-dialog').css('top', '-200%');
            $(this.getAttribute("data") + ' .modal-dialog').css('top', '50%');
        });
        $('.btn-close').click(function(){
            $(this).closest('.modal-dialog').css('top', '-200%');
        });
    }
    return {
        init: function (container) {
            init(container);
        }
    };
});