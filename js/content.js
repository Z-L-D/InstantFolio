const site_definition = {
    header:{
        site_title:"[TITLE]",
        topbar_title:"[TOPBAR TITLE]",
    },
    landing:{
        include:true,
        header:"",
        text:"",
        image:""
    },
    about:{
        include:true,
        text:`Hello! I'm [NAME], a software engineer based in [CITY]. Since graduating from [COLLEGE/UNIVERSITY] in [YEAR], I've been passionate about leveraging technology to solve complex problems.

        In my current role at [CURRENT JOB], I develop user-friendly software solutions, helping businesses improve their efficiency and drive innovation. I'm skilled in several programming languages, including Python, Java, and C++.
        
        Outside of work, I'm an avid reader and tech enthusiast who loves exploring the latest industry trends. I also enjoy hiking and spending quality time with my family and my dog, Luna.
        
        This website is a window into my world, showcasing my projects, my thoughts on tech trends, and some snippets of my personal life. Feel free to explore and reach out if you'd like to connect!
        `,
        image:"",
    },
    projects:{
        include:true,
        animation: "pullUpDown",
        posts:[
            {
                post_type:"tag1",
                post_subtype:"tag1_subtag1",
                post_title:"Electronic Music Playlist",
                post_description:"",
                post_date:"",
                post_image:""
            },
            {
                post_type:"tag2",
                post_subtype:"",
                post_title:"Blog 1",
                post_description:"",
                post_date:"",
                post_image:""
            },
            {
                post_type:"tag2",
                post_subtype:"",
                post_title:"Blog 2",
                post_description:"",
                post_date:"",
                post_image:""
            },
            {
                post_type:"tag3",
                post_subtype:"tag3_subtag1",
                post_title:"Classical Music Playlist",
                post_description:"",
                post_date:"",
                post_image:""
            },
            {
                post_type:"blog1",
                post_subtype:"",
                post_title:"Blog 3",
                post_description:"",
                post_date:"",
                post_image:""
            },
            {
                post_type:"blog2",
                post_subtype:"tech",
                post_title:"Blog 4",
                post_description:"",
                post_date:"",
                post_image:""
            },
            {
                post_type:"blog2",
                post_subtype:"tech",
                post_title:"Blog 5",
                post_description:"",
                post_date:"",
                post_image:""
            },
            {
                post_type:"blog2",
                post_subtype:"science",
                post_title:"Blog 6",
                post_description:"",
                post_date:"",
                post_image:""
            },
        ]
    },
    contact:{
        include:true,
        email_hash:"[EMAIL HASH]",
        artstation:"[ARTSTATION]",
        bandcamp:"[BANDCAMP]",
        codepen:"[CODEPEN",
        deviantart:"[DEVIANT ART",
        discord:"[DISCORD]",
        dribbble:"[DRIBBBLE]",
        ello:"[ELLO]",
        facebook:"[FACEBOOK]",
        flickr:"[FLICKR]",
        github:"[GITHUB]",
        hackadayio:"[HACKADAYIO]",
        instagram:"[INSTAGRAM]",
        lastfm:"[LASTFM]",
        linkedin:"[LINKEDIN]",
        mastodon:"[MASTODON]",
        pinterest:"[PINTEREST]",
        reddit:"[REDDIT]",
        reverbnation:"[REVERBNATION]",
        snapchat:"[SNAPCHAT]",
        sourceforge:"[SOURCEFORGE]",
        soundcloud:"[SOUNDCLOUD]",
        spacehey:"[SPACEHEY]",
        stackoverflow:"[STACKOVERFLOW]",
        steam:"[STEAM]",
        tiktok:"[TIKTOK]",
        twitch:"[TWITCH]",
        twitter:"[TWITTER]",
        tumblr:"[TUMBLR]",
        turbosquid:"[TURBOSQUID]",
        vimeo:"[VIMEO]",
        wikipedia:"[WIKIPEDIA]",
        youtube:"[YOUTUBE]"
    }
}

var site_settings = {   
    site_title:"InstantFolio",
    topbar_title:"InstantFolio",
    site_subtitle:"",
    site_description:"",
    site_section_about:true,
    site_section_projects:true,
    site_section_contact:true,
    site_contact_email: "Email Push", // ["Email Push"]
    site_contact_socialmedia:
        {
           bandcamp:"a",
           codepen:"a",
           deviantart:"a",
           discord:"a",
           dribbble:"a",
           ello:"a",
           envato:"[ENVATO]",
           facebook:"a",
           flickr:"a",
           github:"a",
           hackadayio:"a",
           instagram:"a",
           lastfm:"a",
           linkedin:"a",
           pinterest:"a",
           reddit:"a",
           reverbnation:"a",
           sketchfab:"[SKETCHFAB]",
           snapchat:"a",
           sourceforge:"a",
           soundcloud:"a",
           spacehey:"a",
           stackoverflow:"a",
           steam:"a",
           tiktok:"a",
           twitch:"a",
           twitter:"a",
           tumblr:"a",
           vimeo:"a",
           wikipedia:"a",
           youtube:"a"
        },
    site_tag_animation:"pullUpDown",
    site_blog:false,
    site_downloads:false,
};

const content_landing = "";

const content_about = [`Hello! I'm [NAME], a software engineer based in [CITY]. Since graduating from [COLLEGE/UNIVERSITY] in [YEAR], I've been passionate about leveraging technology to solve complex problems.

In my current role at [CURRENT JOB], I develop user-friendly software solutions, helping businesses improve their efficiency and drive innovation. I'm skilled in several programming languages, including Python, Java, and C++.

Outside of work, I'm an avid reader and tech enthusiast who loves exploring the latest industry trends. I also enjoy hiking and spending quality time with my family and my dog, Luna.

This website is a window into my world, showcasing my projects, my thoughts on tech trends, and some snippets of my personal life. Feel free to explore and reach out if you'd like to connect!
`];

const header_projects = "Projects";

const post_array = [
    {
        post_type:"tag1",
        post_subtype:"tag1_subtag1",
        post_title:"Electronic Music Playlist",
        post_description:"",
        post_date:"",
        post_image:""
    },
    {
        post_type:"tag2",
        post_subtype:"",
        post_title:"Blog 1",
        post_description:"",
        post_date:"",
        post_image:""
    },
    {
        post_type:"tag2",
        post_subtype:"",
        post_title:"Blog 2",
        post_description:"",
        post_date:"",
        post_image:""
    },
    {
        post_type:"tag3",
        post_subtype:"tag3_subtag1",
        post_title:"Classical Music Playlist",
        post_description:"",
        post_date:"",
        post_image:""
    },
    {
        post_type:"blog1",
        post_subtype:"",
        post_title:"Blog 3",
        post_description:"",
        post_date:"",
        post_image:""
    },
    {
        post_type:"blog2",
        post_subtype:"tech",
        post_title:"Blog 4",
        post_description:"",
        post_date:"",
        post_image:""
    },
    {
        post_type:"blog2",
        post_subtype:"tech",
        post_title:"Blog 5",
        post_description:"",
        post_date:"",
        post_image:""
    },
    {
        post_type:"blog2",
        post_subtype:"science",
        post_title:"Blog 6",
        post_description:"",
        post_date:"",
        post_image:""
    },
];

//TEMPALTE rev 2
// var post_## = {post_type:"visuals, audio, science, blog, downloads",
//                post_subtype:"visuals(archviz, graphics, photography, colorizations, motion), audio(electronic, theatrical, samples, sound effects), science(interactives, furniture, software, hardware, research)",
//                post_title:"",
//                post_description:"",
//                post_date:"",
//                post_image:"",
//------------------------------------------------------------------------
//                modal_title:"",
//                modal_summary:"",
//------------------------------------------------------------------------
//                file_struct:"file_name",
//                image_preview:"",
//                image_preview_download:"",
//                paragraph:"This is some demo text to test the JSON parsing functionality when used in the setting of a blog. If this works, it will make developing a blog entry tool very easy.",
//                specifications:"",
//                specifications_elements:"",
//                specifications_process:"",
//                specifications_software:"",
//                specifications_duration:"",
//                interactives:"",
//                image_gallery:"",
//                image_gallery_download:"",
//                image_compare_slide:"",
//                image_compare_fade:"",
//                print_request:"",
//                music_request:"",
//                exhibit_request:"",
//                furniture_request:"",
//                software_request:"",
//                software_download:"",
//                hardware_request:"",
//                share:"y",
//                license:"CC CC-C MIT CR "
//               }   