var height_window;
var height_about;
var height_work;
var height_contact;
var current_section;

function get_sections()
{
    height_window = window.innerHeight
    height_window = height_window - 70

    height_about = document.getElementById("section_about").getBoundingClientRect();
    height_about = height_about.y;
    height_about = height_about - 70;

    height_work = document.getElementById("section_work").getBoundingClientRect();
    height_work = height_work.y;
    height_work = height_work - 70;

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


    if(window.scrollY > height_about && window.scrollY < height_work)
    {
        document.getElementById('tab_about').classList.replace('item', 'item_select');
        current_section = "about"
    }
    else
    {
        document.getElementById('tab_about').classList.replace('item_select', 'item');
    }


    if(window.scrollY > height_work && window.scrollY < height_contact)
    {
        document.getElementById('tab_work').classList.replace('item', 'item_select');
        current_section = "work"
    }
    else
    {
        document.getElementById('tab_work').classList.replace('item_select', 'item');
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


    // console.log("SCROLL: " + window.scrollY);
    // console.log("WINDOW: " + height_window);
    // console.log("ABOUT: " + height_about);
    // console.log("WORK: " + height_work);
    // console.log("CONTACT: " + height_contact);
    // console.log("CURRENT: " + current_section);
}

function viewport_reset()
{
    current_section_capture = current_section;

    // console.log(current_section_capture)

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
        case "work":
            window.scrollTo(0, height_work + 70);
            break;
        case "contact":
            window.scrollTo(0, height_contact + 70);
            break;
    }
}

get_sections();
navbar_monitor();

document.addEventListener('scroll', function(){
    navbar_monitor();
});

window.addEventListener('resize', function(){
    section_return = viewport_reset();
    get_sections();
    viewport_return(section_return);
});