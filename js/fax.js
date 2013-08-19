/**
 * @author famedia
 */
$('#fax').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'images/contact/fax/fax.png') src ='images/contact/fax/hide_fax.png';
        if (origsrc == 'images/contact/fax/hide_fax.png') src = 'images/contact/fax/fax.png';
        $(this).attr('src', src);
    }
});