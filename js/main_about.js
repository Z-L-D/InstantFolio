function load_about(){
    const about_content_paragraphs = document.getElementById('about_content_paragraphs')

    const about_paragraphs = content_about[0].split(/\n\s*\n/);

    for(let i = 0; i < about_paragraphs.length; i++){
        about_content_paragraphs.innerHTML += `<p>${about_paragraphs[i]}</p>`
    }

    if(content_about.length === 2){
        document.getElementById('section_about').style.gridTemplateAreas = `
            "header header"
            "paratext image"
        `;
    }
    else if(content_about.length < 2){
        document.getElementById('section_about').style.gridTemplateAreas = `
            "header header"
            "paratext paratext"
        `;
        document.getElementById('about_content_paragraphs').style.width = "50%";
    };
};