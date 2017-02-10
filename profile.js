var id = 0;
var imgTypes = ["png", "jpg", "gif", "bmp"];
function openMenu(){
	document.getElementById('menu').style.display =  document.getElementById('menu').style.display == 'block' ? 'none' : 'block';
}


function openTextBox(){
	document.getElementById('textbox').style.display =  document.getElementById('textbox').style.display == 'block' ? 'none' : 'block';
	//document.getElementById('post_box').style.display =  document.getElementById('post_box').style.display == setting ? 'none' : setting;
}

function openPhotoBox(){
	document.getElementById('photobox').style.display =  document.getElementById('photobox').style.display == 'block' ? 'none' : 'block';
	//document.getElementById('post_box').style.display =  document.getElementById('post_box').style.display == setting ? 'none' : setting;
}

$(function(){
    $('.input_button').on('click', function(){
        text = $('.input_text').val();
        if (text != undefined && text!='') {
            post = makeNewPost(text, false);
            new_post = $('.post_feed').append($(post));
			$('.input_text').val('');
			openTextBox();
        }		
    });
});

function addLike(id){
	var likes = parseInt(document.getElementById('like'+id).innerHTML);
	document.getElementById('like'+id).innerHTML=likes+1 + ' Likes';
}

function makeNewPost(text,image){
	id+=1;
	content = image ? '<img class="imgPost" src="' + text + ' "/>' : text;
	
	return (
	'<div class="post test--post">\
		<div class="post_head">\
			<img class="poster_avatar" src="assets/avatar.png"/> \
			<div class="poster_info">\
				<p class="poster_name"><b>'+ document.getElementById('profile_name').innerHTML +'</b></p>\
				<i>' +(new Date()).toLocaleTimeString()+ ' ' +(new Date()).toDateString() + '</i>\
				<div class="like_bar"> \
					<p id="like'+id+'" class="like_count test--like_count">0 Likes</p>\
					<button type="submit" id="'+id+'" class="like_button test--like_button" onClick="addLike(this.id)" >Like this Post</button>\
				</div>\
			</div>\
		</div>\
	<p class="post_content test--post_content">' + content + '</p>\
	</div>'
	);
}

$(function(){
    $('.photo_button').on('click', function(){
        text = $('.photo_url').val();
        if (text != undefined && text!='' && imgTypes.indexOf(text.substring(text.length-3,text.length))!=-1 ){
            post = makeNewPost(text,true);
            new_post = $('.post_feed').append($(post));
			$('.photo_url').val('');
			openPhotoBox();
        }
		
    });
});



