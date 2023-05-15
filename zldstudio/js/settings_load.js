function settings_load()
{
    if(site_settings.topbar_title == "")
    {
        document.getElementById("topbar_title").innerHTML = site_settings.site_title;
    }
    else
    {
        document.getElementById("topbar_title").innerHTML = site_settings.topbar_title;
    }
}

settings_load();