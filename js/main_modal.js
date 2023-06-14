function load_modal(post_number)
{
    let current_post = site_definition.work.posts[post_number];

    document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', `
            ${current_post.title}
            <br>
            ${current_post.description}
    `);
    if(current_post.subtype.length > 0){
        document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', `
            <br>
            ${current_post.type} > ${current_post.subtype}
        `);
    }
    else{
        document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', `
            <br>
            ${current_post.type}
        `);
    };
    document.getElementById("post_modal").classList.add("modal_show");
}

document.getElementById("post_modal_close").addEventListener("click", function(){
    document.getElementById("post_modal_box").innerHTML = "";
    document.getElementById("post_modal").classList.remove("modal_show");
})