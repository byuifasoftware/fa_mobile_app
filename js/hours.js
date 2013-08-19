/**
 * @author famedia
 */
$('#hours').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'images/contact/hours/hours.png') src ='images/contact/hours/hide_hours.png';
        if (origsrc == 'images/contact/hours/hide_hours.png') src = 'images/contact/hours/hours.png';
        $(this).attr('src', src);
    }
});









