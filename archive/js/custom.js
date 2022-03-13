
var $head = $("iframe").contents().find("head");

$head.append($("<link/>", {
    rel: "stylesheet",
    href: "../css/custom.css",
    type: "text/css"
}));