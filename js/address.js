/**********************************
 * Address toggle images function
 *********************************/
$('#address').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'images/contact/address/address.png') src ='images/contact/address/hide_address.png';
        if (origsrc == 'images/contact/address/hide_address.png') src = 'images/contact/address/address.png';
        $(this).attr('src', src);
    }
});