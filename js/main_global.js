const tag_animation = site_definition.work;

const section_landing = document.getElementById('section_landing');
const section_about = document.getElementById('section_about');
const section_work = document.getElementById('section_work');
const section_contact = document.getElementById('section_contact');


function load_settings()
{
    document.getElementById("site_title").innerHTML = site_definition.header.title;

    document.getElementById('tab_work').innerHTML = site_definition.work.title.toLocaleUpperCase();  // !!!!!!!!!!!!!!!!!!!!!
    document.getElementById('work_header').innerHTML = site_definition.work.title.toLocaleUpperCase(); // !!!!!!!!!!!!!!!!!!!!!
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


// Intersection observer for Navbar
// NO~https://www.youtube.com/watch?v=V-CBdlfCPic~
// https://www.youtube.com/watch?v=T8EYosX4NOo


// ===================================
// ===================================
// ====  Convert JPG to SVG data  ====
// ===================================

// const fs = require('fs');
// const path = require('path');

// // Read the jpg file
// const jpgPath = path.resolve(__dirname, 'image.jpg');
// const jpgData = fs.readFileSync(jpgPath);

// // Convert to base64
// const base64JpgData = jpgData.toString('base64');

// // Create an SVG containing the jpg
// const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
//     <image href="data:image/jpeg;base64,${base64JpgData}" x="0" y="0" height="100%" width="100%"/>
// </svg>`;

// // Write the SVG data to a file
// const svgPath = path.resolve(__dirname, 'image.svg');
// fs.writeFileSync(svgPath, svgData);



// ======================================
// ======================================
// ====  Convert email to hash data  ====
// ======================================

// == Encode ==
// function base64Encode(input) {
//     // Ensure input is a string
//     if (typeof input !== 'string') {
//         throw new Error('Input must be a string');
//     }

//     // Perform base64 encoding
//     let encodedString = btoa(input);

//     return encodedString;
// }

// let stringToEncode = "Hello world";
// let encodedString = base64Encode(stringToEncode);
// console.log(encodedString);  // Outputs: "SGVsbG8gd29ybGQ="

// ============

// == Decode ==
// function base64Decode(input) {
//     // Ensure input is a string
//     if (typeof input !== 'string') {
//         throw new Error('Input must be a string');
//     }

//     // Perform base64 decoding
//     let decodedString = atob(input);

//     return decodedString;
// }

// let encodedString = "SGVsbG8gd29ybGQ=";
// let decodedString = base64Decode(encodedString);
// console.log(decodedString);  // Outputs: "Hello world"
