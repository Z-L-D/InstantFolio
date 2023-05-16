const blog = site_settings.site_blog;
const downloads = site_settings.site_downloads;
// const tags = site_settings.site_tags;

const tag_animation = site_settings.site_tag_animation;
const tag_animation_color = site_settings.site_tag_animation_color;
const tag_animation_opacity = site_settings.site_tag_animation_opacity;

function settings_load()
{
    if(site_settings.site_title != undefined){
        document.getElementById("site_title").innerHTML = site_settings.site_title;
    }
}

settings_load();