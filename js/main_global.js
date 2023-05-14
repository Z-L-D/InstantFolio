function settings_load()
{
    if(site_settings.site_title != undefined){
        document.getElementById("site_title").innerHTML = site_settings.site_title;
    }
}

settings_load();