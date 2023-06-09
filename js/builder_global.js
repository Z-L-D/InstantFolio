const form_about_text = document.getElementById('form_about_text');

const builder_form = document.getElementById('builder_form');

builder_form.addEventListener('submit', function(event){
    event.preventDefault();

    let about_text = form_about_text.value

    // let builder_landing = 

    let builder_about = 'const content_about = [`' + about_text + '`]';

    let file_builder = `

${builder_about};

    `;

    let file_builder_blob = new Blob([file_builder], { type: "text/plain" });
    let downloadLink = document.createElement("a");
    
    downloadLink.href = URL.createObjectURL(file_builder_blob);
    downloadLink.download = "content.js";
    downloadLink.click();
});

about_load();