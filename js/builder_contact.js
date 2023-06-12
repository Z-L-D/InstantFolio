function contact_load(){
    contact_elements_include.checked = site_definition.contact.include;

    check_include(contact_elements_include, form_section_contact);

    contact_elements_include.addEventListener('click', function(){
        check_include(contact_elements_include, form_section_contact);
    });
}