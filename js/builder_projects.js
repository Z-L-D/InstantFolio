function work_load(){
    work_elements_include.checked = site_definition.work.include;
    form_section_work_title_text.value = site_definition.work.title;
    form_section_work_card_animation.value = site_definition.work.animation;

    check_include(work_elements_include, form_section_work);

    work_elements_include.addEventListener('click', function(){
        check_include(work_elements_include, form_section_work);
    });
}