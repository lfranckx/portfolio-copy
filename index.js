function jumpPage() {
    $('.navList li').click(function() {
        let id = "#" + $(this).attr('goto');
        let top = $(id).position().top;
        $('html').scrollTop(top);
    });
}

jumpPage();
// openNewTab();