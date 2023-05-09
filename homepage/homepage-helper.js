$(function() {
    //A function to pass images from data.json
    //into homepage's main content.
    
    //calling main's div: homepage-gallery
    const $homepageGallery = $('#homepage-gallery');


    //Created a fetch request parsing data.json from public folder
    fetch('../data.json')
        .then( response => response.json())
        .then( data => {
            //GalleriaData recieved as an array of objects
            const galleriaData = data;

            //A function recieveing thumbnail images from gallleriaData
            // then passes them through the DOM to the targeted id appending
            // thumbnails from the GalleriaData
            const homepageImages = galleriaData.map( item => {
                let smallImage = item.images['thumbnail'];
                // console.log(smallImage);
                //create a div container for the small image
                const $imgContainer = $('<div>');
                const $img = $('<img />');

                //creating h3 and p element for the images
                // and inserting the title and artist text.
                const $imageTitle = $('<h3>');
                $imageTitle.text
                const $imageArtist = $('<p>')

                $img.attr('src', smallImage);
                
                $imgContainer.append($img);
                return $imgContainer;
            });

            //append the imgContainer to the already created div container
            //from the main page
            $homepageGallery.append(homepageImages);

            // console.log(smallImages);
        }).catch( err => { console.log(err)});
     
});