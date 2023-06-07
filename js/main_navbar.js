var height_window;
var height_about;
var height_projects;
var height_contact;
var current_section;
const scroll_watcher = document.createElement('div');

function get_sections()
{
    height_window = window.innerHeight
    height_window = height_window - 70

    height_about = document.getElementById("section_about").getBoundingClientRect();
    height_about = height_about.y;
    height_about = height_about - 70;

    height_projects = document.getElementById("section_projects").getBoundingClientRect();
    height_projects = height_projects.y;
    height_projects = height_projects - 70;

    height_contact = document.getElementById("section_contact").getBoundingClientRect();
    height_contact = height_contact.y;
    height_contact = height_contact - 70;
}

function navbar_monitor()
{    
    if(window.scrollY > height_window)
    {
        document.getElementById('navbar').classList.replace('navbar_bottom', 'navbar_top');
        document.getElementById('tab_welcome').classList.replace('item_select', 'item');
        // current_section = "welcome"
    }
    else
    {
        document.getElementById('navbar').classList.replace('navbar_top', 'navbar_bottom');
        document.getElementById('tab_welcome').classList.replace('item', 'item_select');
    }


    if(window.scrollY > height_about && window.scrollY < height_projects)
    {
        document.getElementById('tab_about').classList.replace('item', 'item_select');
        current_section = "about"
    }
    else
    {
        document.getElementById('tab_about').classList.replace('item_select', 'item');
    }


    if(window.scrollY > height_projects && window.scrollY < height_contact)
    {
        document.getElementById('tab_projects').classList.replace('item', 'item_select');
        current_section = "projects"
    }
    else
    {
        document.getElementById('tab_projects').classList.replace('item_select', 'item');
    }


    if(window.scrollY > height_contact)
    {
        document.getElementById('tab_contact').classList.replace('item', 'item_select');
        current_section = "contact"
    }
    else
    {
        document.getElementById('tab_contact').classList.replace('item_select', 'item');
    }
}

function viewport_reset()
{
    current_section_capture = current_section;

    window.scrollTo(0, 0);

    return current_section_capture;
}

function viewport_return(section_return)
{
    console.log("RETURN: " + section_return)
    switch(section_return)
    {
        case "welcome":
            window.scrollTo(0, 0);
            break;
        case "about":
            window.scrollTo(0, height_about + 70);
            break;
        case "projects":
            window.scrollTo(0, height_projects + 70);
            break;
        case "contact":
            window.scrollTo(0, height_contact + 70);
            break;
    }
}

// get_sections();
// navbar_monitor();

// document.addEventListener('scroll', function(){
//     navbar_monitor();
// });

// window.addEventListener('resize', function(){
//     section_return = viewport_reset();
//     get_sections();
//     viewport_return(section_return);
// });