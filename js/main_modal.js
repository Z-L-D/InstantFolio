function load_modal(post_number)
{
    console.log("post number: " + post_number)
    document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', `
            ${post_array[post_number].post_title}
            <br>
            ${post_array[post_number].post_description}
    `);
    if(post_array[post_number].post_subtype.length > 0){
        document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', `
            <br>
            ${post_array[post_number].post_type} > ${post_array[post_number].post_subtype}
        `);
    }
    else{
        document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', `
            <br>
            ${post_array[post_number].post_type}
        `);
    };
    document.getElementById("post_modal").classList.add("modal_show");
}

document.getElementById("post_modal_close").addEventListener("click", function(){
    document.getElementById("post_modal_box").innerHTML = "";
    document.getElementById("post_modal").classList.remove("modal_show");
})