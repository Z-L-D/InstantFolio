function load_about(){
    const about_content = document.getElementById('about_content')

    const about_paragraphs = content_about.split(/\n\s*\n/);

    for(let i = 0; i < about_paragraphs.length; i++){
        about_content.innerHTML += `<p>${about_paragraphs[i]}</p>`
    }
}