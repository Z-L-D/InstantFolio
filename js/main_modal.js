function load_modal(post_number)
{
    document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', `
            MODAL MODAL MODAL MODAL MODAL MODAL
            <br>
            ${post_number.post_title}
            <br>
            ${post_number.post_description}
            <br>
            ${post_number.post_type}
            <br>
            ${post_number.post_subtype}
    `);
    // document.getElementById("post_modal").style.display = "block";
    document.getElementById("post_modal").classList.add("modal_show");
}

document.getElementById("post_modal_close").addEventListener("click", function(){
    // document.getElementById("post_modal").style.display = "none";
    document.getElementById("post_modal_box").innerHTML = "";
    document.getElementById("post_modal").classList.remove("modal_show");
})