function landing_load(){
    landing_elements_include.checked = site_definition.landing.include;
    form_section_landing_title_text.value = site_definition.landing.title;
    form_section_landing_content_text.value = site_definition.landing.content;
    form_section_landing_image.value = site_definition.landing.image;

    check_include(landing_elements_include, form_section_landing);

    landing_elements_include.addEventListener('click', function(){
        check_include(landing_elements_include, form_section_landing);
    });
};

