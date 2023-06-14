const form_button_submit = document.getElementById('form_button_submit');

// function form_submit(){
    form_button_submit.addEventListener('click', function(event){
        // event.preventDefault();
    
        site_definition.header.title = form_header_title_text.value;
        site_definition.header.topbar = form_header_topbar_text.value;

        site_definition.landing.include = landing_elements_include.checked;
        site_definition.landing.title = form_section_landing_title_text.value;
        site_definition.landing.content = form_section_landing_content_text.value;
        site_definition.landing.image = form_section_landing_image.value;  
        
        site_definition.about.include = about_elements_include.checked;
        site_definition.about.text = form_section_about_text.value;
        site_definition.about.image = form_section_about_image.value;

        site_definition.work.include = work_elements_include.checked;
        site_definition.work.title = form_section_work_title_text.value;
        site_definition.work.animation = form_section_work_card_animation.value;

        site_definition.contact.include = contact_elements_include.value;   
        
        // define_page_template(`const site_definition = ${JSON.stringify(site_definition)}`)

        let file_builder = `const site_definition = ${JSON.stringify(site_definition)}`;

        let file_builder_blob = new Blob([file_builder], { type: "text/plain" });
        let downloadLink = document.createElement("a");
        
        downloadLink.href = URL.createObjectURL(file_builder_blob);
        downloadLink.download = "content.js";
        downloadLink.click();
    });
// }

function check_include(check, section){
    if(check.checked === true){
        section.setAttribute('open', '');
    }
    else{
        section.removeAttribute('open', '');
    }
}

const form_header_title_text = document.getElementById('form_header_title_text');
const form_header_topbar_text = document.getElementById('form_header_topbar_text');
header_load();

const form_section_landing = document.getElementById('form_section_landing');
const landing_elements_include = document.getElementById('landing_elements_include');
const form_section_landing_title_text = document.getElementById('form_section_landing_title_text');
const form_section_landing_content_text = document.getElementById('form_section_landing_content_text');
const form_section_landing_image = document.getElementById('form_section_landing_image'); 
landing_load();

const form_section_about = document.getElementById('form_section_about');
const about_elements_include = document.getElementById('about_elements_include');
const form_section_about_text = document.getElementById('form_section_about_text');
const form_section_about_image = document.getElementById('form_section_about_image');
about_load();

const form_section_work = document.getElementById('form_section_work');
const work_elements_include = document.getElementById('work_elements_include');
const form_section_work_title_text = document.getElementById('form_section_work_title_text');
const form_section_work_card_animation = document.getElementById('form_section_work_card_animation');
work_load();

const form_section_contact = document.getElementById('form_section_contact');
const contact_elements_include = document.getElementById('contact_elements_include');
const form_section_contact_button_add_email = document.getElementById('form_section_contact_button_add_email');
contact_load();

let page_template 

function define_page_template(content){
    page_template = `
<!DOCTYPE html>
    <meta charset="UTF-8">
    <meta name="description" content="A knowledgable designer, programmer, engineer and fabricator ready to bring your dream product into reality.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="701cWlOehP__ecL5QoyooDJ7WlBI7a2UjLEUz9UPbY4" />
<html>
    <head>
        <title id="site_title">[TITLE - DEFINE IN SETTINGS]</title>

        <!-- ''''''''''''''''''''''''''''''''''''''''''''' -->
        <!-- ******************** CSS ******************** -->
        <!-- ............................................. -->

        <style>
            /* THEME */
                @import 'https://fonts.googleapis.com/css?family=Raleway';
                @import 'https://fonts.googleapis.com/css2?family=Raleway:wght@900';
                @import 'https://fonts.googleapis.com/css?family=Montserrat';
                @import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap';

                :root
                {
                    /* ---- GLOBAL ---- */
                    --default_page_font:Montserrat;
                    --default_section_background:#eee;
                    --default_h1_text_color:black;
                    --default_h1_font:var(--default_page_font);
                    --default_h1_font_size:48px;
                    --default_h1_font_weight:900;
                    --default_h1_punctuation:rgb(233, 74, 26);

                    /* ---- NAVBAR ---- */
                    --navbar_background:#fff;
                    --navbar_background_hover:rgb(233, 74, 26);
                    --navbar_background_select:var(--navbar_background_hover);
                    --navbar_shadow_size:20px;
                    --navbar_shadow_color:rgba(0, 0, 0, 0.1);
                    --navbar_text_color:black;
                    --navbar_text_color_hover:white;
                
                    /* ---- LANDING ---- */
                    --welcome_background:var(--default_section_background);
                    --welcome_text_color:black;
                    --welcome_h1_text_color:var(--default_h1_font);
                
                    /* ---- ABOUT ---- */
                    --about_background:var(--default_section_background);
                    --about_h1_text_color:var(--default_h1_font);
                
                    /* ---- WORK ---- */
                    --portfolio_background:#333;
                    --portfolio_h1_text_color:white;
                    --portfolio_tags_text_color:white;
                    --item_background:black;
                    --item_text_color:white;
                    --tag_anim_color:rgb(233, 74, 26);
                    --tag_anim_opacity:0.3;
                
                    /* ---- MODAL ---- */
                    --modal_background:white;
                    --modal_text_color:black;
                
                    /* ---- CONTACT ---- */
                    --contact_background:white;
                    --contact_h1_text_color:var(--default_h1_font);
                    --contact_button_background:white;
                    --contact_button_background_hover:#1d1d1d;
                    --contact_button_text_color:white;
                    --contact_button_symbol_color:rgb(233, 74, 26);
                    --contact_button_symbol_color_hover: rgb(255, 60, 0);
                    --contact_textbox_background:var(--default_section_background);
                    --contact_textbox_text_color:#666;
                
                    /* ---- FOOTER ---- */
                    --footer_background:var(--default_section_background);
                }

            /* GLOBAL */
                body
                {
                    padding: 0px;
                    margin: 0px;
                    font-family: var(--default_page_font);
                    overflow-x: hidden;
                }

                h1
                {
                    color: var(--default_h1_text_color);
                    font-family: var(--default_h1_font);
                    font-weight: var(--default_h1_font_weight);
                    font-size: var(--default_h1_font_size);
                }

                        h1::after
                        {
                            content: '.';
                            color: var(--default_h1_punctuation);
                        }
                    
                section
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-height: calc(100svh - 70px);
                    min-height: calc(100vh - 70px);
                    position: relative;
                    text-align: center;
                    background: var(--default_section_background);
                }

                footer
                {
                    background: var(--footer_background);
                    height: 75px;
                }

            /* NAVBAR */
                #navbar
                {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 70px;
                    z-index: 10;
                    background-color: #ffffff;
                    box-shadow: 0 0 var(--navbar_shadow_size) var(--navbar_shadow_color);
                }

                        #navbar
                        a
                        {
                            text-decoration: none;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex: 1;
                            letter-spacing: 0.1rem;
                            transition: all 0.5s ease;
                            font-size: 0.8rem;
                        }
                    
                    
                         #navbar
                         .item
                         {

                             color: var(--navbar_text_color);
                             background-color: var(--navbar_background);
                         }
                     
                                 #navbar
                                 .item:hover
                                 {
                                     transition: all 0.3s ease;
                                     color: var(--navbar_text_color_hover);
                                     background: var(--navbar_background_hover);
                                 }
                             

                         #navbar
                         .item_select
                         {
                             color: var(--navbar_text_color_hover);
                             background-color: var(--navbar_background_select);
                         }
                     
                                 #navbar
                                 .item_select:hover
                                 {
                                     transition: all 0.3s ease;
                                     color: var(--navbar_text_color_hover);
                                     background: var(--navbar_background_hover);
                                 }
                             

                        .navbar_bottom{
                            position: absolute;
                            bottom: 0px;
                        }   
                    
                        .navbar_top
                        {
                            position: sticky;
                            top: 0px;
                        }

            /* LANDING */
                #section_landing
                {
                    background-color: var(--welcome_background);
                    color: var(--welcome_text_color);
                }

                        #section_landing
                        h1
                        {
                            color:var(--welcome_h1_text_color);
                        }

            /* ABOUT */
                #section_about{
                    background-color: var(--about_background);
                    display: grid;
                    grid-template-areas: 
                        "header header"
                        "paratext image";
                    grid-template-columns: 1fr 1fr;
                    padding-top: 70px;
                    padding-bottom: 70px;
                }

                        #section_about
                        h1{
                            color:var(--about_h1_text_color);
                            grid-area: header;
                        }

                        #section_about
                        div{
                            place-self: center;
                            align-self: center;
                            justify-self: center;
                        }

                        #section_about
                        .about_content_paragraphs{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            grid-area: paratext;
                            align-self: start;
                            margin-top: 50px;
                            margin-bottom: 50px;
                        }

                                #section_about
                                .about_content_paragraphs
                                p{
                                    text-align: left;
                                    width: 75%;
                                    margin: 9px;
                                }

            /* CONTACT */
                #section_contact{
                    background-color: var(--contact_background);
                    padding-top: 70px;
                    padding-bottom: 70px;
                }

                        #section_contact
                        .contact_content{
                            width: 100%;
                            display: grid;
                            grid-template-areas: "contact_email contact_socialmedia";
                            grid-template-columns: 1fr 1fr;
                        }
                    
                                #section_contact
                                .contact_content
                                .contact_content_email{
                                    grid-area: contact_email;
                                }
                            
                                        #section_contact
                                        .contact_content
                                        .contact_content_email
                                        label,
                                        #section_contact
                                        .contact_content
                                        .contact_content_email
                                        input,
                                        #section_contact
                                        .contact_content
                                        .contact_content_email
                                        textarea
                                        {
                                            width: 400px;
                                            padding: 4px;
                                        }
                                    
                                #section_contact
                                .contact_content
                                .contact_content_socialmedia{
                                    grid-area: contact_socialmedia;
                                }
                            
                                                #section_contact
                                                .contact_content
                                                .contact_content_socialmedia
                                                .contact_content_socialmedia_buttons
                                                .contact_content_socialmedia_buttons_button{
                                                    position: relative;
                                                    border-radius:4px;
                                                    text-align:center;
                                                    text-decoration:none;
                                                    display: inline-block;
                                                    width:40px;
                                                    height:28px;
                                                    padding:12px;
                                                    margin:24px 2px;
                                                    -o-transition:all .5s;
                                                    -webkit-transition: all .5s;
                                                    -moz-transition: all .5s;
                                                    transition: all .5s;
                                                    color:var(--contact_button_text_color);
                                                    background: var(--contact_button_background)
                                                }
                                            
                                                        #section_contact
                                                        .contact_content
                                                        .contact_content_socialmedia
                                                        .contact_content_socialmedia_buttons
                                                        .contact_content_socialmedia_buttons_button:hover{
                                                            background: var(--contact_button_background_hover);
                                                        }
                                                    
                                                #section_contact
                                                .contact_content
                                                .contact_content_socialmedia
                                                .contact_content_socialmedia_buttons
                                                .contact_content_socialmedia_buttons_logo{
                                                    position: relative;
                                                    top: -2px;
                                                    z-index: 8;
                                                    fill: var(--contact_button_symbol_color);
                                                }
                                            
                                                        #section_contact
                                                        .contact_content
                                                        .contact_content_socialmedia
                                                        .contact_content_socialmedia_buttons
                                                        .contact_content_socialmedia_buttons_button:hover
                                                        .contact_content_socialmedia_buttons_logo{
                                                            fill: var(--contact_button_symbol_color_hover);
                                                        }
                                                    
                                                #section_contact
                                                .contact_content
                                                .contact_content_socialmedia
                                                .contact_content_socialmedia_buttons
                                                .contact_content_socialmedia_buttons_text{
                                                    position:absolute;
                                                    bottom:0;
                                                    left:-25px;
                                                    right:-25px;
                                                    padding:5px 7px;
                                                    z-index:9;
                                                    font-size:13px;
                                                    border-radius:2px;
                                                    visibility:hidden;
                                                    opacity:0;
                                                    -o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                                                    -webkit-transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                                                    -moz-transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                                                    transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                                                    color:var(--contact_textbox_text_color);
                                                    background:var(--contact_textbox_background);
                                                }
                                            
                                                        #section_contact
                                                        .contact_content
                                                        .contact_content_socialmedia
                                                        .contact_content_socialmedia_buttons
                                                        .contact_content_socialmedia_buttons_text:before{
                                                            content:'';
                                                            width: 0; 
                                                            height: 0; 
                                                            border-left: 5px solid transparent;
                                                            border-right: 5px solid transparent;
                                                            border-top: 5px solid var(--contact_textbox_background);
                                                            position:absolute;
                                                            bottom:-5px;
                                                            left:50px;
                                                        }
                                                    
                                                        #section_contact
                                                        .contact_content
                                                        .contact_content_socialmedia
                                                        .contact_content_socialmedia_buttons
                                                        .contact_content_socialmedia_buttons_button:hover
                                                        .contact_content_socialmedia_buttons_text{
                                                            bottom:60px;
                                                            visibility:visible;
                                                            opacity:1;
                                                        }


        </style>
        <link rel="stylesheet" type="text/css" href="css/tag_animation.css" />
        <Style id="tag_animation"></Style>
    </head>

    <!-- ''''''''''''''''''''''''''''''''''''''''''''' -->
    <!-- ******************** BODY ******************* -->
    <!-- ............................................. -->
    <body>
        
        <section id="section_landing" class="landing">
            <h1>WELCOME</h1>
        </section>

        <div id="navbar" class="navbar_top">
            <a id="tab_welcome" class="item" href="#section_landing">HOME</a>
            <a id="tab_about" class="item" href="#section_about">ABOUT</a>
            <a id="tab_work" class="item" href="#section_work"><!--generated--></a>
            <a id="tab_contact" class="item" href="#section_contact">CONTACT</a>
        </div>        

        <section id="section_about" class="about">
            <h1>ABOUT</h1>
            <div id="about_content_paragraphs" class="about_content_paragraphs"><!--generated--></div>
        </section>

        
        <style>
            #section_work
            {
                background-color: var(--portfolio_background);
                padding-top: 70px;
                padding-bottom: 70px;
            }

                    #section_work
                    h1
                    {
                        color:var(--portfolio_h1_text_color);
                    }
                
                    #section_work
                    .tags
                    {
                        display: flex;
                        flex-direction: row;
                        flex-flow: row wrap;
                        justify-content: center;
                        margin: 10px;
                        color:var(--portfolio_tags_text_color);
                    }
                
                            #section_work
                            .tags
                            .item
                            {
                                font-size: 1.2vw;
                                margin:0.53vw 1vw;
                                padding: 5px;
                                text-transform: uppercase;
                                position: relative;
                            }
                        
                                    #section_work
                                    .tags
                                    .item:hover
                                    {
                                        cursor: pointer;
                                    }
                                
                    #section_work
                    .row
                    {
                        display: flex;
                        flex-direction: row;
                        flex-flow: row wrap;
                        justify-content: center;
                        max-width: 75vw;
                        position: relative;
                        flex-direction: row-reverse;
                    }
                
                            #section_work
                            .row
                            .item
                            {
                                margin:10px;
                                width:18vw;
                                max-width: 600px;
                                min-width: 300px;
                                height:calc(18vw / 1.7777777);
                                max-height: 338px;
                                min-height: 169px;
                                position: relative;
                                overflow: hidden;
                                color: var(--item_text_color);
                                background-color: var(--item_background);
                            }
                        
                                    #section_work
                                    .row
                                    .item:hover
                                    {
                                        cursor: pointer;
                                    }
                                
                                    #section_work
                                    .row
                                    .item
                                    .card
                                    {
                                        position: absolute;
                                        text-align: left;
                                        width: 100%;
                                        height: 100%;
                                        left: 0%;
                                        padding: 1vw 1vw;
                                    }
                                
                                            #section_work
                                            .row
                                            .item
                                            .card
                                            .card_background
                                            {
                                                position: absolute;
                                                width: 125%;
                                                height: 125%;
                                                top: 0%;
                                                left: 0%;
                                                opacity: 0.6;
                                                z-index: 0;
                                                background-position: center;
                                                background-repeat: no-repeat;
                                                background-size: cover;
                                                transition: left 0.4s;
                                            }
                                        
                                            #section_work
                                            .row
                                            .item:hover
                                            .card
                                            .card_background
                                            {
                                                left: -33%;
                                            }
                                        
                                            #section_work
                                            .row
                                            .item
                                            .card
                                            .text
                                            .card_title
                                            {
                                                display: flex;
                                                flex-direction: column;
                                            }
                                        
                                                    #section_work
                                                    .row
                                                    .item
                                                    .card
                                                    .text
                                                    .card_title
                                                    {
                                                        position: relative;
                                                        font-size: 1.5em;
                                                        opacity: 0.99999;
                                                        z-index: 1;
                                                        width: 16vw;
                                                        max-width: 550px;
                                                        min-width: 250px;
                                                        text-transform: uppercase;
                                                    }
                                                
                                                    #section_work
                                                    .row
                                                    .item
                                                    .text
                                                    .description
                                                    {
                                                        position: relative;
                                                        left: 125%;
                                                        transition: left 0.3s, opacity 0.3s;
                                                        text-align: center;
                                                        font-size: 1em;
                                                        opacity: 0;
                                                        padding: 5px;
                                                        color: var(--item_text_color);
                                                    }
                                                
                                                            #section_work
                                                            .row
                                                            .item:hover
                                                            .text
                                                            .description
                                                            {
                                                                left: 0%;
                                                                opacity: 0.9;
                                                            }
                                                        
                                                    #section_work
                                                    .row
                                                    .item
                                                    .text
                                                    .description
                                                    .text
                                                    {
                                                        text-align: justify;
                                                        width:16vw;
                                                        max-width: 550px;
                                                        min-width: 250px;
                                                        left:43%;
                                                        word-break:break-all;
                                                    }
                                                
                    #section_work
                    .modal
                    {
                        position: fixed;
                        z-index: 100;
                        left: 0px;
                        top: -100vh;
                        width: 100vw;
                        height: 100vh;
                        transition: top 0.3s;
                        color: var(--modal_text_color);
                        background-color: var(--modal_background)
                    }
                
                    #section_work
                    .modal_show
                    {
                        top:0px;
                        transition: top 0.3s;
                    }
                
                    #section_work
                    .modal
                    .box
                    {
                        position: absolute;
                        top:50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 70vw;
                        max-width: 1000px;
                        min-width: 300px;
                        height: 75vh;
                        min-height: 169px;
                        text-align: left;
                        word-break:break-all;
                        padding: 40px;
                        background-color: var(--modal_background)
                    }
        </style>

        <section id="section_work" class="portfolio">
            <h1 id="work_header"><!--generated--></h1>
            <div id="tags" class="tags"><!--generated--></div>
            <div id="subtags"><!--generated--></div>
            <div id="posts" class="row"><!--generated--></div>
            <div id="post_modal" class="modal">
                <div id="post_modal_close">CLOSE</div>
                <div id="post_modal_box" class="box"><!--generated--></div>
            </div>
        </section>

        <section id="section_contact" class="contact">
            <h1>CONTACT</h1>
            <div class="contact_content">
                <div class="contact_content_email">
                    <h2>Get In Touch</h2>
                    <div class="contact_content_email_form">
                        <form id="contact_content_email_form_constructor" action="/submit_form" method="post">
                            <label for="contact_content_email_form_name">Name</label><br>
                            <input type="text" id="contact_content_email_form_name" name="contact_content_email_form_name"><br>
                            
                            <label for="contact_content_email_form_email">Email</label><br>
                            <input type="email" id="contact_content_email_form_email" name="contact_content_email_form_email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" size="30" required><br>
                            
                            <label for="contact_content_email_form_message">Message</label><br>
                            <textarea id="contact_content_email_form_message" name="contact_content_email_form_message" rows="4" cols="50"></textarea><br>
                            
                            <input type="submit" value="Submit">
                        </form> 
                    </div>
                </div>

                <div class="contact_content_socialmedia">
                    <h2>Stay In Touch</h2>
                    <div class="contact_content_socialmedia_buttons"><!--generated--></div>
                </div>
            </div>
        </section>
                
        <footer>
            MIT: ZLDSTUDIO 2021.
        </footer>
    </body>

    <!-- ''''''''''''''''''''''''''''''''''''''''''''' -->
    <!-- ************ JAVASCRIPT POSTLOAD ************ -->
    <!-- ............................................. -->
    <script>
        //CONTENT
        ${content}

        // NAVBAR
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
                    document.getElementById('tab_welcome').classList.replace('item_select', 'item');
                    // current_section = "welcome"
                }
                else
                {
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

        // ABOUT
            function load_about(){
                const about_content_paragraphs = document.getElementById('about_content_paragraphs')

                const about_paragraphs = content_about[0].split(/\\n\s*\\n/);

                for(let i = 0; i < about_paragraphs.length; i++){
                    about_content_paragraphs.innerHTML += \`<p>\${about_paragraphs[i]}</p>\`
                }
            
                if(content_about.length === 2){
                    document.getElementById('section_about').style.gridTemplateAreas = \`
                        "header header"
                        "paratext image"
                    \`;
                }
                else if(content_about.length < 2){
                    document.getElementById('section_about').style.gridTemplateAreas = \`
                        "header header"
                        "paratext paratext"
                    \`;
                    document.getElementById('about_content_paragraphs').style.width = "50%";
                };
            };

        // WORK
            function load_work(){
                let post_types = ['All'];
                let post_file;

                for(let i = 0; i < post_array.length; i++){
                    //load tags
                    if(post_types.includes(post_array[i].post_type) === false){
                        post_types.push(post_array[i].post_type);
                    };
                
                    //load posts
                    post_file = post_array[i].post_title.replace(/ /g, "_");
                    document.getElementById("posts").insertAdjacentHTML('beforeend', \`
                            <a class="item post \${post_array[i].post_type} \${post_array[i].post_subtype}" data="\${post_file}" index="\${i}" type="\${post_array[i].post_type}" subtype="\${post_array[i].post_subtype}">
                                <div class="card">
                                    <div class="card_background" style="background-image: url('img/\${post_array[i].post_type}/\${post_array[i].post_title}/\${post_array[i].post_title}--th.jpg')"></div>
                                    <div class="text">
                                        <div class="card_title">\${post_array[i].post_title}</div>
                                        <div class="description"><p class="text">\${post_array[i].post_description}<br>\${post_array[i].post_type}</p></div>
                                    </div>
                                </div>
                            </a>
                    \`);
                };
            
                //load tags
                for(let i = 0; i < post_types.length; i++){
                    document.getElementById("tags").insertAdjacentHTML('beforeend', \`
                        <a class="item tag \${tag_animation}" type="\${post_types[i]}"><div>\${post_types[i].toUpperCase()}</div></a>
                    \`);
                };
            
                //init tag buttons
                const buttons_tags = document.querySelectorAll('.tag');
                for(let i = 0; i < buttons_tags.length; i++){
                    buttons_tags[i].addEventListener('click', function(){
                        let get_type = buttons_tags[i].getAttribute("type");
                        get_type = get_type.toLowerCase();
                        load_subtags(get_type);
                        handler_tags(get_type);
                    });
                };
            
                //init post buttons
                const buttons_posts = document.querySelectorAll('.post');
                for(let i = 0; i < buttons_posts.length; i++){
                    buttons_posts[i].addEventListener('click', function(){
                        let get_data = buttons_posts[i].getAttribute("data");
                        get_data = get_data.toLowerCase();

                        let get_index = buttons_posts[i].getAttribute("index");
                        load_modal(get_index);
                    });
                };
            };



            function load_subtags(tag){
                let post_subtypes;
            
                if(tag === 'all'){
                    post_subtypes = ['All'];
                }
                else{
                    post_subtypes = ['All'];
                
                    for(let i = 0; i < post_array.length; i++){
                        if(post_array[i].post_type === tag){
                            if(post_subtypes.includes(post_array[i].post_subtype) === false){
                                if(post_array[i].post_subtype != ""){
                                    post_subtypes.push(post_array[i].post_subtype);
                                };
                            };
                        };
                    };
                };
            
                document.getElementById("subtags").innerHTML = "";
            
                if(post_subtypes.length === 1){
                    document.getElementById("subtags").innerHTML = "";
                }
                else{
                    for(let i = 0; i < post_subtypes.length; i++){
                        document.getElementById("subtags").insertAdjacentHTML('beforeend', \`
                            <a class="item subtag \${tag_animation}" subtype="\${post_subtypes[i]}"><div>\${post_subtypes[i].toUpperCase()}</div></a>
                        \`);
                    };
                };
            
                //init subtag buttons
                const buttons_subtags = document.querySelectorAll('.subtag');
                for(let i = 0; i < buttons_subtags.length; i++){
                    buttons_subtags[i].addEventListener('click', function(){
                        let get_subtype = buttons_subtags[i].getAttribute("subtype");
                        get_subtype = get_subtype.toLowerCase();
                        handler_tags(tag, get_subtype);
                    });
                };
            };

            function handler_tags(type, subtype){
                get_posts = document.querySelectorAll('.post')
            
                if(subtype === undefined){
                    if(type === "all"){ 
                        for(let i = 0; i < get_posts.length; i++){
                            get_posts[i].style.display = "block";
                        };
                    }
                    else{
                        for(let i = 0; i < get_posts.length; i++){
                            let get_type = get_posts[i].getAttribute("type");
                            get_type = get_type.toLowerCase();
                            if(get_type != type){
                                get_posts[i].style.display = "none";
                            }
                            else{
                                get_posts[i].style.display = "block";
                            };
                        };
                    };
                }
                else{
                    if(subtype === "all"){ 
                        for(let i = 0; i < get_posts.length; i++){
                            let get_type = get_posts[i].getAttribute("type");
                            get_type = get_type.toLowerCase();
                        
                            if(get_type != type){
                                get_posts[i].style.display = "none";
                            }
                            else{
                                get_posts[i].style.display = "block";
                            };
                        };
                    }
                    else{
                        for(let i = 0; i < get_posts.length; i++){
                            let get_type = get_posts[i].getAttribute("type");
                            get_type = get_type.toLowerCase();
                        
                            let get_subtype = get_posts[i].getAttribute("subtype");
                            get_subtype = get_subtype.toLowerCase();
                        
                            if(get_subtype != subtype){
                                get_posts[i].style.display = "none";
                            }
                            else{
                                get_posts[i].style.display = "block";
                            };
                        };
                    };
                };
            };

            // WORK MODAL
                function load_modal(post_number)
                {
                    console.log("post number: " + post_number)
                    document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', \`
                            \${post_array[post_number].post_title}
                            <br>
                            \${post_array[post_number].post_description}
                    \`);
                    if(post_array[post_number].post_subtype.length > 0){
                        document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', \`
                            <br>
                            \${post_array[post_number].post_type} > \${post_array[post_number].post_subtype}
                        \`);
                    }
                    else{
                        document.getElementById("post_modal_box").insertAdjacentHTML('beforeend', \`
                            <br>
                            \${post_array[post_number].post_type}
                        \`);
                    };
                    document.getElementById("post_modal").classList.add("modal_show");
                }

                document.getElementById("post_modal_close").addEventListener("click", function(){
                    document.getElementById("post_modal_box").innerHTML = "";
                    document.getElementById("post_modal").classList.remove("modal_show");
                })

        // CONTACT
            function contact_section(websiteid, websitename, userlink, symbol, viewbox)
            {
                userlink = userlink.replace("@@REPLACE@@", site_settings.site_contact_socialmedia[websiteid]);
                if(site_settings.site_contact_socialmedia[websiteid] != "")
                {
                    document.querySelector(".contact_content_socialmedia_buttons").insertAdjacentHTML('beforeend', \`
                        <a class="contact_content_socialmedia_buttons_button" href="\${userlink}">
                            <div class="contact_content_socialmedia_buttons_logo">
                                <svg width="32" height="32" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="\${viewbox}">
                                    <path d="\${symbol}"></path>
                                </svg>
                            </div>
                            <span class="contact_content_socialmedia_buttons_text">\${websitename}</span>
                        </a>
                    \`)
                }
            }

            function load_contact(){
                if(site_settings.site_section_contact === true){   
                    if(site_settings.site_contact_email === "" || site_settings.site_contact_email === undefined){
                        document.querySelector('.contact_content').style.gridTemplateColumns = "1fr";
                        document.querySelector('.contact_content_email').style.display = "none";
                    }

                    const email_form = document.getElementById('contact_content_email_form_constructor');
                
                    email_form.addEventListener('submit', function(event){
                        event.preventDefault();
                    
                        const email_form_name = document.getElementById('contact_content_email_form_name').value;
                        const email_form_email = document.getElementById('contact_content_email_form_email').value;
                        const email_form_message = document.getElementById('contact_content_email_form_message').value;
                        const email_form_subject = \`Enquiry from \${email_form_name}\`
                        const email_form_emailto = "test@test.com" //define this in settings !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    
                        const email_encrypt = base64Encode(email_form_emailto);
                        const email_decrypt = base64Decode(email_encrypt);
                    
                        console.log(email_encrypt);
                        console.log(email_decrypt);
                    
                        // window.open(\`mailto:\${email_form_emailto}?subject=\${email_form_subject}&body=Name: \${email_form_name}%0D%0AEmail: \${email_form_email}%0D%0A%0D%0A\${email_form_message}\`);
                    });
                
                    const social_media_list = [ {id:"bandcamp",         name:"bandcamp",        userlink:"https://@@REPLACE@@.bandcamp.com",                sharelink:"",       symbol:"M0 18.75l7.437-13.5H24l-7.438 13.5H0z", viewbox: "0 0 24 24"},
                                                {id:"codepen",          name:"CodePen",         userlink:"https://codepen.io/@@REPLACE@@",                  sharelink:"",       symbol:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z", viewbox: "0 0 512 512"},
                                                {id:"deviantart",       name:"DeviantArt",      userlink:"https://www.deviantart.com/@@REPLACE@@",          sharelink:"",       symbol:"M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z", viewbox: "0 0 320 512"},
                                                {id:"discord",          name:"DISCORD",         userlink:"https://discord.com/invite/@@REPLACE@@",          sharelink:"",       symbol:"M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z", viewbox: "0 0 512 512"},
                                                {id:"dribbble",         name:"dribbble",        userlink:"https://dribbble.com/@@REPLACE@@",                sharelink:"",       symbol:"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z", viewbox: "0 0 512 512"},
                                                {id:"ello",             name:"ello",            userlink:"https://ello.co/@@REPLACE@@",                     sharelink:"",       symbol:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm143.84 285.2C375.31 358.51 315.79 404.8 248 404.8s-127.31-46.29-143.84-111.6c-1.65-7.44 2.48-15.71 9.92-17.36 7.44-1.65 15.71 2.48 17.36 9.92 14.05 52.91 62 90.11 116.56 90.11s102.51-37.2 116.56-90.11c1.65-7.44 9.92-12.4 17.36-9.92 7.44 1.65 12.4 9.92 9.92 17.36z", viewbox:"0 0 512 512"},
                                                {id:"facebook",         name:"facebook",        userlink:"https://www.facebook.com/@@REPLACE@@",            sharelink:"",       symbol:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z", viewbox: "0 0 320 512"},
                                                {id:"flickr",           name:"flickr",          userlink:"https://www.flickr.com/photos/@@REPLACE@@",       sharelink:"",       symbol:"M0 12c0 3.074 2.494 5.564 5.565 5.564 3.075 0 5.569-2.49 5.569-5.564S8.641 6.436 5.565 6.436C2.495 6.436 0 8.926 0 12zm12.866 0c0 3.074 2.493 5.564 5.567 5.564C21.496 17.564 24 15.074 24 12s-2.492-5.564-5.564-5.564c-3.075 0-5.57 2.49-5.57 5.564z", viewbox: "0 0 24 24"},
                                                {id:"github",           name:"GitHub",          userlink:"https://github.com/@@REPLACE@@",                  sharelink:"",       symbol:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z", viewbox: "0 0 512 512"},
                                                {id:"hackadayio",       name:"HACKADAY.IO",     userlink:"https://hackaday.io/@@REPLACE@@",                 sharelink:"",       symbol:"m 4.1004257,1.4015907 c -0.3431628,0 -0.6762923,0.041143 -0.9946741,0.1182445 L 5.7106857,3.9995696 2.6536272,6.9140377 0.1252064,4.5003785 c -0.0569943,0.2606812 -0.090423,0.5334491 -0.090423,0.8103493 0,2.1582352 1.8220203,3.909137 4.0656432,3.909137 0.3889033,0 0.7636245,-0.054762 1.1198784,-0.1530232 L 8.8233909,12.690795 C 9.3515194,11.26855 10.755575,10.027691 12.002173,9.2476954 L 8.1452029,5.7176403 c 0.014368,-0.1335408 0.020866,-0.2697328 0.020866,-0.4069125 0,-2.1582255 -1.822023,-3.9091371 -4.0656447,-3.9091371 z M 27.798713,1.5441826 c -2.243622,0 -4.065643,1.7509117 -4.065643,3.909137 -1e-6,0.1371886 0.0065,0.2733718 0.02088,0.4069126 l -3.856978,3.5335295 c 1.246599,0.7799963 2.650655,2.0173803 3.178785,3.4396243 l 3.603086,-3.6239519 c 0.356252,0.09822 0.730975,0.1530315 1.119878,0.1530315 2.243622,0 4.065645,-1.7509111 4.065645,-3.909146 0,-0.2769002 -0.03343,-0.5461939 -0.09042,-0.8068656 L 29.245524,7.0601038 26.188467,4.1456358 28.793399,1.6659107 C 28.475013,1.5887449 28.141883,1.5441826 27.79872,1.5441826 Z M 15.820888,9.004241 C 12.8363,8.999701 9.9973863,10.80286 8.7573103,13.803717 c -1.4604494,3.534145 -0.2133902,7.557268 2.7788257,9.619824 -0.17702,0.782207 -0.05011,2.048312 0.963377,2.274535 1.041487,0.232474 1.539787,-0.351875 1.843274,-1.029453 l 0.0104,-0.05565 c 0.155114,0.03091 0.310649,0.05571 0.466036,0.07651 0.05225,0.6538 0.366737,1.112439 1.342464,1.081621 0.897349,-0.02834 1.24435,-0.590196 1.366807,-1.21726 0.05236,-0.01246 0.104436,-0.02815 0.156505,-0.04173 l 0.02435,0.156504 c 0.303487,0.677577 0.801788,1.261927 1.843277,1.029454 1.141844,-0.254873 1.154962,-1.826526 0.879903,-2.542333 1.03099,-0.801886 1.878868,-1.881738 2.420605,-3.192695 L 23.07572,19.357892 C 24.334102,15.446769 22.488518,11.244895 18.8014,9.633732 17.828652,9.2086715 16.815719,9.0057458 15.820854,9.0042383 Z m -3.310945,6.454948 c 0.140207,-6.25e-4 0.284714,0.01051 0.431258,0.03478 1.11669,0.184755 1.4781,0.759093 1.4781,1.227692 0.03606,0.901151 -0.937409,1.188788 -1.4781,1.405066 -0.959452,0.245849 -1.186757,0.692424 -1.516356,1.512877 0,0 -1.13549,-1.180558 -0.90077,-2.451906 0.205924,-1.115382 1.004438,-1.723612 1.985868,-1.728508 z m 6.562764,0.07304 c 0.981434,0.005 1.776468,0.613126 1.982395,1.728508 0.234718,1.271349 -0.900772,2.451907 -0.900773,2.451907 -0.329597,-0.820454 -0.553428,-1.267029 -1.512879,-1.51288 -0.540691,-0.216276 -1.514146,-0.507389 -1.478098,-1.408542 0,-0.468598 0.361412,-1.039459 1.478098,-1.224213 0.146547,-0.02425 0.291054,-0.03547 0.431257,-0.03478 z m -3.140527,4.180415 c 0.793015,0.03605 0.792957,2.451907 0.792957,2.451907 1e-6,-1e-6 -0.685762,-0.940296 -0.865994,-0.90425 -0.180229,0.03605 -0.431254,1.192914 -0.431254,1.192914 0,0 -0.180585,-2.596387 0.504291,-2.740571 z M 7.974787,19.813497 5.1507464,22.613193 C 4.7968927,22.510869 4.4241073,22.45321 4.0378238,22.45321 c -2.2285122,0 -4.037821125,1.824189 -4.037821125,4.0726 0,0.288471 0.030336305,0.570082 0.086948505,0.841649 L 2.6014599,24.85295 5.6376514,27.88914 3.0501067,30.473205 c 0.3162365,0.08037 0.6468671,0.125204 0.9877178,0.125204 2.2285113,0 4.0378212,-1.824191 4.0378212,-4.072599 0,-0.142914 -0.00667,-0.285176 -0.020857,-0.424302 l 2.5771043,-2.55276 C 9.429496,22.585952 8.4993665,21.295177 7.9747936,19.813502 Z m 16.050425,0 c -0.524574,1.481676 -1.454703,2.77245 -2.657102,3.735246 l 2.57711,2.552765 c -0.01428,0.139126 -0.02087,0.281388 -0.02087,0.424302 0,2.248408 1.80931,4.072599 4.037822,4.072599 0.340853,0 0.671481,-0.04484 0.987719,-0.125204 l -2.587543,-2.584065 3.036191,-3.03619 2.514508,2.514509 c 0.05661,-0.271567 0.08695,-0.553178 0.08695,-0.841649 0,-2.248411 -1.809308,-4.0726 -4.037821,-4.0726 -0.386283,0 -0.759068,0.05765 -1.112922,0.159983 z", viewbox: "0 0 32 32"},
                                                {id:"instagram",        name:"Instagram",       userlink:"https://www.instagram.com/@@REPLACE@@",           sharelink:"",       symbol:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z", viewbox: "0 0 24 24"},
                                                {id:"lastfm",           name:"last.fm",         userlink:"https://www.last.fm/music/@@REPLACE@@",           sharelink:"",       symbol:"M10.584 17.21l-.88-2.392s-1.43 1.594-3.573 1.594c-1.897 0-3.244-1.649-3.244-4.288 0-3.382 1.704-4.591 3.381-4.591 2.42 0 3.189 1.567 3.849 3.574l.88 2.749c.88 2.666 2.529 4.81 7.285 4.81 3.409 0 5.718-1.044 5.718-3.793 0-2.227-1.265-3.381-3.63-3.931l-1.758-.385c-1.21-.275-1.567-.77-1.567-1.595 0-.934.742-1.484 1.952-1.484 1.32 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.492-4.729-3.492-2.474 0-4.893.935-4.893 3.932 0 1.87.907 3.051 3.189 3.601l1.87.44c1.402.33 1.869.907 1.869 1.704 0 1.017-.99 1.43-2.86 1.43-2.776 0-3.93-1.457-4.59-3.464l-.907-2.75c-1.155-3.573-2.997-4.893-6.653-4.893C2.144 5.333 0 7.89 0 12.233c0 4.18 2.144 6.434 5.993 6.434 3.106 0 4.591-1.457 4.591-1.457z", viewbox: "0 0 24 24"},
                                                {id:"linkedin",         name:"Linkedin",        userlink:"https://www.linkedin.com/in/@@REPLACE@@",         sharelink:"",       symbol:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z", viewbox: "0 0 512 512"},
                                                {id:"pinterest",        name:"Pinterest",       userlink:"https://www.pinterest.com/@@REPLACE@@",           sharelink:"",       symbol:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z", viewbox: "0 0 384 512"},
                                                {id:"reddit",           name:"reddit",          userlink:"https://www.reddit.com/user/@@REPLACE@@",         sharelink:"",       symbol:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z", viewbox: "0 0 24 24"},
                                                {id:"reverbnation",     name:"ReverbNation",    userlink:"https://www.reverbnation.com/@@REPLACE@@",        sharelink:"",       symbol:"M24 9.324l-9.143-.03L11.971.57 9.143 9.294 0 9.324h.031l7.367 5.355-2.855 8.749h.029l7.459-5.386 7.396 5.386-2.855-8.73L24 9.315", viewbox: "0 0 24 24"},
                                                {id:"snapchat",         name:"Snapchat",        userlink:"https://www.snapchat.com/add/@@REPLACE@@",        sharelink:"",       symbol:"M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z", viewbox: "0 0 24 24"},
                                                {id:"sourceforge",      name:"SOURCEFORGE",     userlink:"https://sourceforge.net/u/@@REPLACE@@/profile/",  sharelink:"",       symbol:"m66.85 54.5c0-19.1-6.8-27.8-10.4-31.1-.7-.6-1.8-.1-1.7.9.7 10.8-12.9 13.5-12.9 30.4v.1c0 10.3 7.8 18.7 17.4 18.7s17.4-8.4 17.4-18.7v-.1c0-4.8-1.8-9.4-3.6-12.8-.4-.7-1.4-.4-1.3.2 3.3 14.6-4.9 23.6-4.9 12.4zm-20.7 40.3c-.4 0-.9-.2-1.2-.5l-44.5-44.5c-.6-.6-.6-1.7 0-2.4l47-47c.3-.2.7-.4 1.1-.4h13.5c.8 0 1.3.5 1.5 1s.2 1.2-.4 1.8l-44.1 44.2c-.9.9-.9 2.3 0 3.2l34.9 35c.6.6.6 1.7 0 2.4l-6.7 6.8c-.3.2-.7.4-1.1.4zm8.9 7.8c-.8 0-1.3-.5-1.5-1s-.2-1.2.4-1.8l44.2-44.2c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6l-35-35c-.6-.6-.6-1.7 0-2.4l6.8-6.8c.3-.3.7-.5 1.2-.5s.8.3 1.1.6l44.4 44.5c.3.3.5.7.5 1.2s-.2.9-.5 1.2l-47 47c-.3.3-.7.5-1.2.5h-13.4z", viewbox:"-.15 0 117.3 102.7"},
                                                {id:"soundcloud",       name:"SoundCloud",      userlink:"https://soundcloud.com/@@REPLACE@@",              sharelink:"",       symbol:"M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952", viewbox: "0 0 24 24"},
                                                {id:"spacehey",         name:"SpaceHey",        userlink:"https://spacehey.com/@@REPLACE@@",                sharelink:"",       symbol:"", viewbox: ""},
                                                {id:"stackoverflow",    name:"stackoverflow",   userlink:"https://stackoverflow.com/users/@@REPLACE@@",     sharelink:"",       symbol:"M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z", viewbox: "0 0 24 24"},
                                                {id:"steam",            name:"STEAM",           userlink:"https://steamcommunity.com/profiles/@@REPLACE@@", sharelink:"",       symbol:"M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z", viewbox: "0 0 24 24"},
                                                {id:"tiktok",           name:"TikTok",          userlink:"https://www.tiktok.com/@@REPLACE@@",              sharelink:"",       symbol:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z", viewbox: "0 0 24 24"},
                                                {id:"tumblr",           name:"tumblr",          userlink:"https://@@REPLACE@@.tumblr.com/",                 sharelink:"",       symbol:"M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z", viewbox: "0 0 24 24"},
                                                {id:"twitch",           name:"twitch",          userlink:"https://www.twitch.tv/@@REPLACE@@",               sharelink:"",       symbol:"M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z", viewbox: "0 0 24 24"},
                                                {id:"twitter",          name:"Twitter",         userlink:"https://twitter.com/@@REPLACE@@",                 sharelink:"",       symbol:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", viewbox: "0 0 24 24"},
                                                {id:"vimeo",            name:"VIMEO",           userlink:"https://vimeo.com/@@REPLACE@@",                   sharelink:"",       symbol:"M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457a315.06 315.06 0 003.501-3.1279c1.579-1.368 2.765-2.085 3.5539-2.159 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.5069.5389 2.45 1.1309 3.674 1.7759 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.8679 3.434-5.7568 6.7619-5.6368 2.4729.06 3.6279 1.664 3.4929 4.7969z", viewbox: "0 0 24 24"},
                                                {id:"wikipedia",        name:"WIKIPEDIA",       userlink:"https://en.wikipedia.org/wiki/User:@@REPLACE@@",  sharelink:"",       symbol:"M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z", viewbox: "0 0 24 24"},
                                                {id:"youtube",          name:"YouTube",         userlink:"https://www.youtube.com/user/@@REPLACE@@",        sharelink:"",       symbol:"M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z", viewbox: "0 0 24 24"}];
                    var i
                    for (i = 0; i < social_media_list.length; i++) {
                        contact_section(social_media_list[i].id, social_media_list[i].name, social_media_list[i].userlink, social_media_list[i].symbol, social_media_list[i].viewbox)
                    } 
                }
            }

            // GLOBAL
                const blog = site_settings.site_blog;
                const downloads = site_settings.site_downloads;

                const tag_animation = site_settings.site_tag_animation;
                const tag_animation_color = site_settings.site_tag_animation_color;
                const tag_animation_opacity = site_settings.site_tag_animation_opacity;

                const section_landing = document.getElementById('section_landing');
                const section_about = document.getElementById('section_about');
                const section_work = document.getElementById('section_work');
                const section_contact = document.getElementById('section_contact');


                function load_settings()
                {
                    if(site_settings.site_title != undefined){
                        document.getElementById("site_title").innerHTML = site_settings.site_title;
                    }
                
                    document.getElementById('tab_work').innerHTML = header_work.toLocaleUpperCase();
                    document.getElementById('work_header').innerHTML = header_work.toLocaleUpperCase();
                }

                function base64Encode(input) {
                    // Ensure input is a string
                    if (typeof input !== 'string') {
                        throw new Error('Input must be a string');
                    }
                
                    // Perform base64 encoding
                    let encodedString = btoa(input);
                
                    return encodedString;
                }

                function base64Decode(input) {
                    // Ensure input is a string
                    if (typeof input !== 'string') {
                        throw new Error('Input must be a string');
                    }
                
                    // Perform base64 decoding
                    let decodedString = atob(input);
                
                    return decodedString;
                }



                // PAGE INIT
                load_settings();
                load_about();
                load_work();
                load_contact();
    </script>   
</html>
`};