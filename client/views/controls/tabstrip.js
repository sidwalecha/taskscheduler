Template.tabstriptemplate.rendered = function () {
    $("#tabstrip_here").kendoTabStrip({
        select: onSelect,
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    }).data("kendoTabStrip").select(1);

    function onSelect(e) {
        if($(e.item).find("> .k-link").text() == "WEEK"){
            scheduler.init("scheduler_here", new Date(), "week");
        }
    }
}