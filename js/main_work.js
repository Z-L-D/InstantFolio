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