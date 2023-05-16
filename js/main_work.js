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

var post_types = ['all']

function load_work()
{
    // for(let i = 0; i < post_array.length; i++){
    //     document.getElementById("posts").insertAdjacentHTML('beforeend', `
    //             <div class="item ${post_array[i].post_type} ${post_array[i].post_subtype}" onclick="modal_load(post_${i})">
    //                 <div class="card">
    //                     <div class="card_background" style="background-image: url('img/${post_array[i].post_type}/${post_array[i].post_title}/${post_array[i].post_title}--th.jpg')"></div>
    //                     <div class="text">
    //                         <div class="card_title">${post_array[i].post_title}</div>
    //                         <div class="description"><p class="text">${post_array[i].post_description}<br>${post_array[i].post_type}</p></div>
    //                     </div>
    //                 </div>
    //             </div>
    //     `);

    //     if(post_types.includes(post_array[i].post_type) === false){
    //         if(post_array[i].post_subtype != ""){
    //             if(post_types.includes(post_array[i].post_type) === false){
    //                 post_types.push(`[${post_array[i].post_type}]`);
    //             }
    //         }
    //         else if(post_array[i].post_subtype === ""){
    //             post_types.push(post_array[i].post_type);
    //         }
            
    //     }
    // }

    // for(let i = 0; i < post_types.length; i++){
    //     document.getElementById("tags").insertAdjacentHTML('beforeend', `
    //         <item class="item ${tag_animation}"><a>${post_types[i].toUpperCase()}</a></item>
    //     `);
    // }
    
    post_types = ['tag1', ['tag2', 'tag2_subtag1'], 'tag3']

    // console.log(post_types.includes('tag2'));

    for(let i = 0; i < post_array.length; i++){
        console.log(`current evaluating tag: ${post_array[i].post_type}`)
        if(Array.isArray(post_types[i])){
            if(post_types[i].includes(post_array[i].post_type) === false){
                console.log(`added ${post_array[i].post_type} to subarray`)
            }
            else{
                console.log(`item already exists in subarray`)
            }
        }
        else{
            if(post_types.includes(post_array[i].post_type) === false){
                console.log(`added ${post_array[i].post_type} to array`)
            }
            else{
                console.log('item already exists in array')
            }
        }
    }

    console.log(post_types);


};
load_work();