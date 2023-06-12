function about_load(){
    about_elements_include.checked = site_definition.about.include;
    form_section_about_text.value = site_definition.about.text;
    form_section_about_image.value = site_definition.about.image;

    check_include(about_elements_include, form_section_about);

    about_elements_include.addEventListener('click', function(){
        check_include(about_elements_include, form_section_about);
    });
}