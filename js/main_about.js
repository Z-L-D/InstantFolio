function load_about(){
    if(site_definition.about.include === true){
        const about_content_paragraphs = document.getElementById('about_content_paragraphs')

        let about_paragraphs = site_definition.about.text;
    
        about_paragraphs = about_paragraphs.split(/\n\s*\n/)
    
        for(let i = 0; i < about_paragraphs.length; i++){
            about_content_paragraphs.innerHTML += `<p>${about_paragraphs[i]}</p>`
        }
    
        if(site_definition.about.image.length > 0){
            document.getElementById('section_about').style.gridTemplateAreas = `
                "header header"
                "paratext image"
            `;
        }
        else{
            document.getElementById('section_about').style.gridTemplateAreas = `
                "header header"
                "paratext paratext"
            `;
            document.getElementById('about_content_paragraphs').style.width = "50%";
        };
    }
};