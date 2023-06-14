function work_load(){
    work_elements_include.checked = site_definition.work.include;

    check_include(work_elements_include, form_section_work);

    work_elements_include.addEventListener('click', function(){
        check_include(work_elements_include, form_section_work);
    });
}