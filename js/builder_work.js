function work_load(){
    work_elements_include.checked = site_definition.work.include;

    check_include(work_elements_include, form_section_work);

    work_elements_include.addEventListener('click', function(){
        check_include(work_elements_include, form_section_work);
    });

    var work

    for(i = 0; i < site_definition.work.posts.length; i++){
        work += work_collation(i);
    }

    document.getElementById('post_cards').innerHTML = work;
}

function work_collation(post_number){
    let post = site_definition.work.posts[post_number]
    let title = post.title;
    let type = post.type;
    let subtype = post.subtype;
    let description = post.description;
    let content = post.content;
    let date = post.date;
    let image = post.image;
    let license = post.image;
    let sharing = post.sharing;

    let html_return = `
        <div class="post">
            <div class="title">${title}</div>
            <div class="type">${type}</div>
            <div class="subtype">${subtype}</div>
            <div class="description">${description}</div>
            <div class="content">${content}</div>
            <div class="date">${date}</div>
            <div class="image">${image}</div>
            <div class="license">${license}</div>
            <div class="sharing">${sharing}</div>
        </div>
    `
    return html_return;
}