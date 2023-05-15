function tag_load()
{
    // if(tag_animation_color === "" || tag_animation_color === undefined)
    // {
    //     tag_animation_color = "black"
    // }

    // if(tag_animation_opacity === "" || tag_animation_opacity === undefined)
    // {
    //     tag_animation_opacity = 1;
    // }

    var tags_all = `<item id="tags_all" class="item ${tag_animation}" onclick="tags_set_group('main', 'all')"><a>ALL</a></item>`

    // if(tags != "" && blog == true)
    // {
    //     document.getElementById("tags").insertAdjacentHTML('beforeend', tags_all);
    // }
    // else if(tags != "" && downloads == true)
    // {
    //     document.getElementById("tags").insertAdjacentHTML('beforeend', tags_all);
    // }
    // else if(blog == true && downloads == true)
    // {
    //     document.getElementById("tags").insertAdjacentHTML('beforeend', tags_all);
    // }
    // else if(tags != "" && tags.length > 1)
    // {
    //     document.getElementById("tags").insertAdjacentHTML('beforeend', tags_all);
    // }

    // document.getElementById("tags").insertAdjacentHTML('beforeend', tags_all);



    // if(tags != "")
    // {
    //     for (i = 0; i < tags.length; i++) 
    //     {
    //         document.getElementById("tags").insertAdjacentHTML('beforeend', `
    //                 <item id="tags_${tags[i]}" class="item ${tag_animation}" onclick="tags_set_group('main', '${tags[i]}')"><a>${tags[i]}</a></item>
    //         `);

    //         var subtags = eval("site_settings.site_subtags_" + i);
    //         if(subtags != undefined)
    //         {
    //             // <tags_audio id="tags_audio" class="tags audio_nav"> 
    //             document.getElementById("subtags").insertAdjacentHTML('beforeend', `
    //                     <tags_${tags[i]} id="tags_${tags[i]}_sub" class="tags ${tags[i]}_nav"></tags_${tags[i]}>
    //             `);

    //             document.getElementById(`tags_${tags[i]}_sub`).insertAdjacentHTML('beforeend', `
    //                         <item id="tags_${tags[i]}_all" class="item ${tag_animation}" onclick="tags_set_group('${tags[i]}', 'all')"><a>ALL</a></item>
    //                 `);

    //             for (a = 0; a < subtags.length; a++) 
    //             {
    //                 // <item id="tags_audio_electronic" class="item">ELECTRONIC</item>
    //                 // tags_set_group("audio", "electronic");
    //                 document.getElementById(`tags_${tags[i]}_sub`).insertAdjacentHTML('beforeend', `
    //                         <item id="tags_${tags[i]}_${subtags[a]}" class="item ${tag_animation}" onclick="tags_set_group('${tags[i]}', '${subtags[a]}')"><a>${subtags[a]}</a></item>
    //                 `);
    //             }
    //         }
    //     }
    // }



    // if(blog == true)
    // {
    //     document.getElementById("tags").insertAdjacentHTML('beforeend', `
    //             <item id="tags_blog" class="item ${tag_animation}" onclick="tags_set_group('main', 'blog')"><a>BLOG</a></item>
    //     `);
    // }



    // if(downloads == true)
    // {
    //     document.getElementById("tags").insertAdjacentHTML('beforeend', `
    //             <item id="tags_downloads" class="item ${tag_animation}" onclick="tags_set_group('main', 'downloads')"><a>DOWNLOADS</a></item>
    //     `);
    // }
};

tag_load();