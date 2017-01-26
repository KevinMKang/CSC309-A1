$(function(){
    $('.input_button').on('click', function(){
        text = $('.input_text').val();
        if (text != undefined) {
            post = '<div class="post test--post">' + text + '</div>';
            new_post = $('.post_feed').append($(post)) 
        }
    });
});
