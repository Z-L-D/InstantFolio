// function tag_init()
// {
//     // for (let i = 0; i < tags.length; i++) 
//     // {
//     //     var subtags = eval("site_settings.site_subtags_" + i);
//     //     if(subtags != undefined)
//     //     {
//     //         tags_set_group_state(`${tags[i]}_nav`, false);
//     //     }
//     // }
//     // console.log(site_settings.site_subtags_0)
    
//     for(let i = 0; i < tags.length; i++){
//         if(tags[i].length === 1){
//             console.log(`tag ${i}: ${tags[i]}`)
//         }
//         else if(tags[i].length > 1){
//             for(let j = 0; j < tags[i].length; j++){
//                 if(j === 0){
//                     console.log(`tag ${i}: ${tags[i][0]}`)
//                 }
//                 else{
//                     console.log(`tag ${i}--subtag ${j}: ${tags[i][j]}`)
//                 }
//             }
//         }
//     }
// }
// tag_init();


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

// var post_types = ['all', ['tag_temp', 'subtag_temp']]

function load_tags(){
    let post_types = ['All']

    for(let i = 0; i < post_array.length; i++){
        if(post_types.includes(post_array[i].post_type) === false){
            post_types.push(post_array[i].post_type);
        }
    }

    for(let i = 0; i < post_types.length; i++){
        document.getElementById("tags").insertAdjacentHTML('beforeend', `
            <item class="item tag ${tag_animation}" data="${post_types[i]}"><a>${post_types[i].toUpperCase()}</a></item>
        `);
    }
}
load_tags();


function init_tags(){
    const buttons_tags = document.querySelectorAll('.tag');
    for(let i = 0; i < buttons_tags.length; i++){
        buttons_tags[i].addEventListener('click', function(){
            let get_data = buttons_tags[i].getAttribute("data")
            get_data = get_data.toLowerCase()
            get_tag_group = document.querySelectorAll(`.${get_data}`)
            load_subtags(get_data)
        })
    }
}
init_tags();


function load_subtags(tag){
    alert(`load subtags for tag: ${tag}`);

    console.log(tag)

    let post_subtypes;

    if(tag === 'all'){
        post_subtypes = ['All'];
    }
    else{
        post_subtypes = ['All'];

        for(let i = 0; i < post_array.length; i++){
            if(post_array[i].post_type === tag){
                if(post_subtypes.includes(post_array[i].post_subtype) === false){
                    post_subtypes.push(post_array[i].post_subtype);
                };
            };
        };
    };

    document.getElementById("subtags").innerHTML = "";

    console.log(post_subtypes);

    for(let i = 0; i < post_subtypes.length; i++){
        document.getElementById("subtags").insertAdjacentHTML('beforeend', `
            <item class="item tag ${tag_animation}" data="${post_subtypes[i]}"><a>${post_subtypes[i].toUpperCase()}</a></item>
        `);
    };
};


function load_items()
{
    for(let i = 0; i < post_array.length; i++){
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
    };
};
load_items();