function load_work(){
    let post_types = ['All'];
    let post_file;

    for(let i = 0; i < site_definition.work.posts.length; i++){
        let current_post = site_definition.work.posts[i]

        //load tags
        if(post_types.includes(current_post.type) === false){
            post_types.push(current_post.type);
        };

        //load posts
        post_file = current_post.title.replace(/ /g, "_");
        document.getElementById("posts").insertAdjacentHTML('beforeend', `
                <a class="item post ${current_post.type} ${current_post.subtype}" data="${post_file}" index="${i}" type="${current_post.type}" subtype="${current_post.subtype}">
                    <div class="card">
                        <div class="card_background" style="background-image: url('img/${current_post.type}/${current_post.title}/${current_post.title}--th.jpg')"></div>
                        <div class="text">
                            <div class="card_title">${current_post.title}</div>
                            <div class="description"><p class="text">${current_post.description}<br>${current_post.type}</p></div>
                        </div>
                    </div>
                </a>
        `);
    };

    //load tags
    for(let i = 0; i < post_types.length; i++){
        document.getElementById("tags").insertAdjacentHTML('beforeend', `
            <a class="item tag ${tag_animation}" type="${post_types[i]}"><div>${post_types[i].toUpperCase()}</div></a>
        `);
    };

    //init tag buttons
    const buttons_tags = document.querySelectorAll('.tag');
    for(let i = 0; i < buttons_tags.length; i++){
        buttons_tags[i].addEventListener('click', function(){
            let get_type = buttons_tags[i].getAttribute("type");
            get_type = get_type.toLowerCase();
            load_subtags(get_type);
            handler_tags(get_type);
        });
    };

    //init post buttons
    const buttons_posts = document.querySelectorAll('.post');
    for(let i = 0; i < buttons_posts.length; i++){
        buttons_posts[i].addEventListener('click', function(){
            let get_data = buttons_posts[i].getAttribute("data");
            get_data = get_data.toLowerCase();
            
            let get_index = buttons_posts[i].getAttribute("index");
            load_modal(get_index);
        });
    };
};



function load_subtags(tag){
    let post_subtypes;

    if(tag === 'all'){
        post_subtypes = ['All'];
    }
    else{
        post_subtypes = ['All'];

        for(let i = 0; i < site_definition.work.posts.length; i++){
            let current_post = site_definition.work.posts[i]

            if(current_post.type === tag){
                if(post_subtypes.includes(current_post.subtype) === false){
                    if(current_post.subtype != ""){
                        post_subtypes.push(current_post.subtype);
                    };
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
                <a class="item subtag ${tag_animation}" subtype="${post_subtypes[i]}"><div>${post_subtypes[i].toUpperCase()}</div></a>
            `);
        };
    };

    //init subtag buttons
    const buttons_subtags = document.querySelectorAll('.subtag');
    for(let i = 0; i < buttons_subtags.length; i++){
        buttons_subtags[i].addEventListener('click', function(){
            let get_subtype = buttons_subtags[i].getAttribute("subtype");
            get_subtype = get_subtype.toLowerCase();
            handler_tags(tag, get_subtype);
        });
    };
};

function handler_tags(type, subtype){
    get_posts = document.querySelectorAll('.post')

    if(subtype === undefined){
        if(type === "all"){ 
            for(let i = 0; i < get_posts.length; i++){
                get_posts[i].style.display = "block";
            };
        }
        else{
            for(let i = 0; i < get_posts.length; i++){
                let get_type = get_posts[i].getAttribute("type");
                get_type = get_type.toLowerCase();
                if(get_type != type){
                    get_posts[i].style.display = "none";
                }
                else{
                    get_posts[i].style.display = "block";
                };
            };
        };
    }
    else{
        if(subtype === "all"){ 
            for(let i = 0; i < get_posts.length; i++){
                let get_type = get_posts[i].getAttribute("type");
                get_type = get_type.toLowerCase();

                if(get_type != type){
                    get_posts[i].style.display = "none";
                }
                else{
                    get_posts[i].style.display = "block";
                };
            };
        }
        else{
            for(let i = 0; i < get_posts.length; i++){
                let get_type = get_posts[i].getAttribute("type");
                get_type = get_type.toLowerCase();

                let get_subtype = get_posts[i].getAttribute("subtype");
                get_subtype = get_subtype.toLowerCase();

                if(get_subtype != subtype){
                    get_posts[i].style.display = "none";
                }
                else{
                    get_posts[i].style.display = "block";
                };
            };
        };
    };
};