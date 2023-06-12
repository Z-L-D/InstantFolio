function projects_load(){
    project_elements_include.checked = site_definition.projects.include;
    form_section_projects_title_text.value = site_definition.projects.title;
    form_section_projects_card_animation.value = site_definition.projects.animation;

    check_include(project_elements_include, form_section_projects);

    project_elements_include.addEventListener('click', function(){
        check_include(project_elements_include, form_section_projects);
    });
}