function post_load()
{
    for (i = 0; i < post_array.length; i++) 
    {
        document.getElementById("posts").insertAdjacentHTML('beforeend', `
                <item class="item ${post_array[i].post_type} ${post_array[i].post_subtype}" onclick="modal_load(post_${i})">
                    <card class="card">
                        <card_background class="card_background" style="background-image: url('img/${post_array[i].post_type}/${post_array[i].post_title}/${post_array[i].post_title}--th.jpg')"></card_background>
                        <card_text class="text">
                            <card_title class="card_title">${post_array[i].post_title}</card_title>
                            <description class="description"><p class="text">${post_array[i].post_description}<br>${post_array[i].post_type}</p></description>
                        </card_text>
                    </card>
                </item>
        `);
    }
};

post_load();

//TODO -- move card title and description box into flexbox