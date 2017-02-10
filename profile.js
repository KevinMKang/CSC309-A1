
//This variable is used to keep track of the like button/like count pairs, to give them unique ids
var id = 0;

//An array created with accepted img types to check whether a given URL is an image or not.
var imgTypes = ["png", "jpg", "gif", "bmp"];

//Function that handles the opening of the menu/navbar at the top of the page, when it is collapsed in mobile mode
function openMenu(){
	document.getElementById('menu').style.display =  document.getElementById('menu').style.display == 'block' ? 'none' : 'block';
}

//To open the input text box
function openTextBox(){
	document.getElementById('textbox').style.display =  document.getElementById('textbox').style.display == 'block' ? 'none' : 'block';
}

//To open the URL input box
function openPhotoBox(){
	document.getElementById('photobox').style.display =  document.getElementById('photobox').style.display == 'block' ? 'none' : 'block';
}

//Creates a text post from the text input field and prepends it to the post feed
$(function(){
    $('.input_button').on('click', function(){
        text = $('.input_text').val();
        if (text != undefined && text!='') {
            post = makeNewPost(text, false);
            new_post = $('.post_feed').prepend($(post));
			$('.input_text').val('');
			openTextBox();
        }		
    });
});

//Similar to the function above, this creates an image post from the URL input field and prepends it to the post feed
$(function(){
    $('.photo_button').on('click', function(){
        text = $('.photo_url').val();
		
		//Check whether it's an image or not by seeing the file extension
        if (text != undefined && text!='' && imgTypes.indexOf(text.substring(text.length-3,text.length))!=-1 ){
            post = makeNewPost(text,true);
            new_post = $('.post_feed').prepend($(post));
			$('.photo_url').val('');
			openPhotoBox();
        }
		
    });
});

//Adds a like to the like counter on the id of the post, each like counter has a unique id
function addLike(id){
	var likes = parseInt(document.getElementById('like'+id).innerHTML);
	document.getElementById('like'+id).innerHTML=likes+1 + ' Likes';
}

/*Creates a new post in correct HTML formatting
* It has two inputs- the actual text content, and a boolean image whether it's an image or not. 
* It returns the correctly formatted post
*/
function makeNewPost(text,image){
	id+=1;
	content = image ? '<img class="imgPost" src="' + text + ' "/>' : text; //Create an image from the input text
	
	/*Every post has a header - containing the poster avatar, info, and post date. As well, there's a sub like bar containing 
	* a like button a like count containing a unique id
	* After that, there's the actual post content containing the content, either text or an image URL
	*/
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


