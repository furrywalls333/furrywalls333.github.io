jQuery(document).ready(function(){
	jQuery('#post-query-submit').after('<a href="edit-comments.php?page=ct_check_spam" class="button">'+ctCommentsScreen.spambutton_text+'</a>' +
	' <a href="edit-comments.php?page=ct_check_spam&ct_worked=1" class="button" style="margin-top:1px;">'+ctCommentsScreen.spambutton_text_show+'</a>&nbsp;');
});