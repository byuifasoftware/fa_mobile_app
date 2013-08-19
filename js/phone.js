/**
 * @author famedia
 */
$('#phone').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'images/contact/phone/phone.png') src ='images/contact/phone/hide_phone.png';
        if (origsrc == 'images/contact/phone/hide_phone.png') src = 'images/contact/phone/phone.png';
        $(this).attr('src', src);
    }
});