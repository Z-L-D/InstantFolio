var js_debug = false;
var css_debug = false;
var debug_mode;

function mode_0(){js_debug = false;css_debug = false;debug_mode = "DEBUG ACTIVE -- DEBUG OFF"}
function mode_1(){js_debug = true;css_debug = false;debug_mode = "DEBUG ACTIVE -- MODE 1"}
function mode_2(){js_debug = false;css_debug = true;debug_mode = "DEBUG ACTIVE -- MODE 2"}
function mode_3(){js_debug = true;css_debug = true;debug_mode = "DEBUG ACTIVE -- MODE 3"}

mode_0();
console.log(debug_mode);

if(js_debug === true)
{
// --------------------------------------------------
// place temporary code here
// --------------------------------------------------






































}

if(css_debug === true)
{
    document.getElementById("css_debug").innerHTML = `<link rel="stylesheet" type="text/css" href="css/debug.css" />`
}