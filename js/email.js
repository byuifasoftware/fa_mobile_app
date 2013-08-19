/********************************
 * 
 *******************************/
$('#email').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'images/contact/email/email.png') src ='images/contact/email/hide_email.png';
        if (origsrc == 'images/contact/email/hide_email.png') src = 'images/contact/email/email.png';
        $(this).attr('src', src);
    }
});