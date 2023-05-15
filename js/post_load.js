function post_load()
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
post_load();
