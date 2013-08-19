/********************************
 * 
 *******************************/
$('#drop_box').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'images/contact/drop_box/drop_box.png') src ='images/contact/drop_box/hide_drop_box.png';
        if (origsrc == 'images/contact/drop_box/hide_drop_box.png') src = 'images/contact/drop_box/drop_box.png';
        $(this).attr('src', src);
    }
});