function tag_init()
{
    // for (let i = 0; i < tags.length; i++) 
    // {
    //     var subtags = eval("site_settings.site_subtags_" + i);
    //     if(subtags != undefined)
    //     {
    //         tags_set_group_state(`${tags[i]}_nav`, false);
    //     }
    // }
    // console.log(site_settings.site_subtags_0)
    
    for(let i = 0; i < tags.length; i++){
        if(tags[i].length === 1){
            console.log(`tag ${i}: ${tags[i]}`)
        }
        else if(tags[i].length > 1){
            for(let j = 0; j < tags[i].length; j++){
                if(j === 0){
                    console.log(`tag ${i}: ${tags[i][0]}`)
                }
                else{
                    console.log(`tag ${i}--subtag ${j}: ${tags[i][j]}`)
                }
            }
        }
    }
}
tag_init();


// function tags_set_group_state(group_name, state)
// {
//     var group = document.getElementsByClassName(group_name);

//     if(state == true)
//     {
//         for(var i=0, len=group.length; i<len; i++)
//         {
//             group[i].style["display"] = "block";
//         }
//     }
//     else
//     {        
//         for(var i=0, len=group.length; i<len; i++)
//         {
//             group[i].style["display"] = "none";
//         }
//     }
// }

function load_work()
{
    for (i = 0; i < post_array.length; i++){
        document.getElementById("posts").insertAdjacentHTML('beforeend', `
                <div class="item ${post_array[i].post_type} ${post_array[i].post_subtype}" onclick="modal_load(post_${i})">
                    <div class="card">
                        <div class="card_background" style="background-image: url('img/${post_array[i].post_type}/${post_array[i].post_title}/${post_array[i].post_title}--th.jpg')"></div>
                        <div class="text">
                            <div class="card_title">${post_array[i].post_title}</div>
                            <div class="description"><p class="text">${post_array[i].post_description}<br>${post_array[i].post_type}</p></div>
                        </div>
                    </div>
                </div>
        `);
    }

    document.getElementById("tags").insertAdjacentHTML('beforeend', `
        <item id="tags_all" class="item ${tag_animation}" onclick="tags_set_group('main', 'all')"><a>ALL</a></item>
    `);
};
load_work();