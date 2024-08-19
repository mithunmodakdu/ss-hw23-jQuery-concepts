$(document).ready(function(){
   
    // example-1
    $('.alert_old').click(function(){
        alert("Welcome to jQuery Examples");
    })

    // example-2
    $('.alert_new').on('click', function(){
        alert("Welcome to Examples of jQuery Concepts ")
    })

    // example-3
    $('#hide_btn').on('click', function(){
        $('#hide_text').hide();
    })

    // example-4
    $('#hide_btn_dbl').on('dblclick', function(){
        $('#hide_text_dbl').hide();
    })

    // example-5
    $('#hide_btn_mouseover').on('mouseover', function(){
        $('#hide_text_mouseover').hide();
    })

    // example-6
    $('#hide_show_btn').on('click', function(){
        $('#show_text').hide();
    })

    $('#show_btn').on('click', function(){
        $('#show_text').show();
    })

    // example-7
    $('#hide_show_btn_dbl').on('click', function(){
        $('#show_text_dbl').hide();
    })

    $('#show_btn_dbl').on('dblclick', function(){
        $('#show_text_dbl').show();
    })

    // example-8
    $('#hide_show_btn_mouseover').on('mouseover', function(){
        $('#show_text_mouseover').hide();
    })

    $('#show_btn_mouseover').on('mouseover', function(){
        $('#show_text_mouseover').show();
    })

     // example-9
     $('#toggle_btn').on('click', function(){
        $('#toggle_text').toggle();
    })

    // example-10
    $('#toggle_btn_dbl').on('dblclick', function(){
        $('#toggle_text_dbl').toggle();
    })

    // example-11
    $('#toggle_btn_mouseover').on('mouseover', function(){
        $('#toggle_text_mouseover').toggle();
    })

})