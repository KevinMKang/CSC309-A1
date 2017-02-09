var id = 0;

function openMenu(){
	document.getElementById('menu').style.display =  document.getElementById('menu').style.display == 'block' ? 'none' : 'block';
}

$(function(){
    $('.input_button').on('click', function(){
        text = $('.input_text').val();
        if (text != undefined) {
            post = makeNewPost(text, false);
            new_post = $('.post_feed').append($(post)) 
        }
		
    });
});

function addLike(id){
	var likes = parseInt(document.getElementById('like'+id).innerHTML);
	document.getElementById('like'+id).innerHTML=likes+1;
}

function makeNewPost(text,image){
	id+=1;
	content = image ? '<img src="' + text + ' "/>' : text;
	return (
	'<div class="post test--post"> \
		<img src="assets/avatar.png"/>\
		'+ document.getElementById('profile_name').innerHTML + (new Date()).toString()+ '\
		Likes: <p id="like'+id+'">0</p>\
		<p class="post_content test--post_content">' + content + '</p>\
		<button type="submit" id="'+id+'" class="like_button" onClick="addLike(this.id)" >Like this Post</button>\
		</div>'
	);
}

$(function(){
    $('.photo_button').on('click', function(){
        text = $('.photo_url').val();
        if (text != undefined) {
            post = makeNewPost(text,true);
            new_post = $('.post_feed').append($(post)) 
        }
		
    });
});



