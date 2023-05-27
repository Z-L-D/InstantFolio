const blog = site_settings.site_blog;
const downloads = site_settings.site_downloads;

const tag_animation = site_settings.site_tag_animation;
const tag_animation_color = site_settings.site_tag_animation_color;
const tag_animation_opacity = site_settings.site_tag_animation_opacity;



function load_settings()
{
    if(site_settings.site_title != undefined){
        document.getElementById("site_title").innerHTML = site_settings.site_title;
    }

    document.getElementById('tab_projects').innerHTML = header_projects.toLocaleUpperCase();
    document.getElementById('projects_header').innerHTML = header_projects.toLocaleUpperCase();
}

function base64Encode(input) {
    // Ensure input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Perform base64 encoding
    let encodedString = btoa(input);

    return encodedString;
}

function base64Decode(input) {
    // Ensure input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Perform base64 decoding
    let decodedString = atob(input);

    return decodedString;
}



// PAGE INIT
load_settings();
load_about();
load_work();
load_contact();