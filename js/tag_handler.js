function categories_create(nav_group)
{
    var categories = [];

    if(nav_group === "main")
    {
        categories = tags;

        if(site_settings.site_blog == true)
        {
            if(categories.includes("blog") != true)
            {
                categories.push("blog");
            }
        }

        if(site_settings.site_downloads == true)
        {
            if(categories.includes("downloads") != true)
            {
                categories.push("downloads");
            }
        }
    }
    else
    {
        var index = tags.indexOf(nav_group);

        categories = eval("site_settings.site_subtags_" + index);
    }
    return categories
}



function tags_set_group(nav_group, group_name)
{
    categories = categories_create(nav_group)

    if(nav_group === "main")
    {
        for (i = 0; i < tags.length; i++) 
        {
            tags_set_group_state(`${tags[i]}_nav`, false);
        }
        tags_set_group_state(group_name + "_nav", true);
    }

    if(group_name == "all")
    {
        for(var i=0, len=categories.length; i<len; i++)
        {
            tags_set_group_state(categories[i], true);
        }
    }
    else
    {
        for(var i=0, len=categories.length; i<len; i++)
        {
            if(categories[i] == group_name)
            {
                tags_set_group_state(group_name, true);
            }
            else
            {
                tags_set_group_state(categories[i], false);
            }
        }
    }  
}