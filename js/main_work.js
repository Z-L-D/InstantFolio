function load_work(){
    let post_types = ['All']

    for(let i = 0; i < post_array.length; i++){
        //load tags
        if(post_types.includes(post_array[i].post_type) === false){
            post_types.push(post_array[i].post_type);
        }

        //load items
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

    //load tags
    for(let i = 0; i < post_types.length; i++){
        document.getElementById("tags").insertAdjacentHTML('beforeend', `
            <item class="item tag ${tag_animation}" data="${post_types[i]}"><a>${post_types[i].toUpperCase()}</a></item>
        `);
    }

    //init tag buttons
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



function load_subtags(tag){
    let post_subtypes;

    if(tag === 'all'){
        post_subtypes = ['All'];
    }
    else{
        post_subtypes = ['All'];

        for(let i = 0; i < post_array.length; i++){
            if(post_array[i].post_type === tag){
                if(post_subtypes.includes(post_array[i].post_subtype) === false){
                    if(post_array[i].post_subtype != ""){
                        post_subtypes.push(post_array[i].post_subtype);
                    }
                };
            };
        };
    };

    document.getElementById("subtags").innerHTML = "";

    if(post_subtypes.length === 1){
        document.getElementById("subtags").innerHTML = "";
    }
    else{
        for(let i = 0; i < post_subtypes.length; i++){
            document.getElementById("subtags").insertAdjacentHTML('beforeend', `
                <item class="item tag ${tag_animation}" data="${post_subtypes[i]}"><a>${post_subtypes[i].toUpperCase()}</a></item>
            `);
        };
    };
};
