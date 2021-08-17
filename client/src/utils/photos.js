// const newPostHandler = async (event) => {
   
//     const cloudName = "cloudcontrol"; // replace with your own cloud name
//     const uploadPreset = "outdoors"; // replace with your own upload preset
//     const myWidget = cloudinary.createUploadWidget(
//       {
//         cloudName: cloudName,
//         uploadPreset: uploadPreset,
  
//         cropping: true, //add a cropping step
  
//         multiple: false, //restrict upload to a single file
//         folder: "wild_outdoors", //upload files to the specified folder
  
//         context: { alt: "user_uploaded" }, //add the given context data to the uploaded files
  
//         maxImageWidth: 450, //Scales the image down to a width of 450 pixels before uploading
//       },
//       (error, result) => {
//             if (result.event === "success") {
             
//             const image = result.info.secure_url;


//             // needs refactor for fetch!!!
           
//             if (image) {
//                 fetch("/api/post", {
//                 method: "POST",
//                 body: JSON.stringify({ image }),
//                 headers: { "Content-Type": "application/json" },
//               }).then((response)=> {
//               if (response.ok) {
//                 document.location.replace("/createpost");
//               } else {
//                 alert("Please make sure all fields are filled out before uploading photo.")
//               }
//             }
//           )}
        
//           };
//         }
//     );
//     document.getElementById("upload_widget").addEventListener(
//       "click",
//       function (e) {
//         e.preventDefault();
//         myWidget.open();
//       },
//       false
//     );
//   };
  
//   newPostHandler();
  