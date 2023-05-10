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
                let imageTitle = item.name;
                let imageArtist = item.artist['name'];


                // console.log(imageTitle);
                // console.log(imageArtist);
                //create a div container for the small image
                const $imgContainer = $('<div>');
                const $img = $('<img />');

                //creating h3 and p element for the images
                // and inserting the title and artist text.
                const $imageTitle = $('<h2>');
                $imageTitle.text(imageTitle);
                $imageTitle.addClass('mt-[-6rem] ml-8 text-white font-libre font-bold w-[12rem] bg-gradient-to-b from-transparent to-black')

                const $imageArtist = $('<p>');
                $imageArtist.text(imageArtist);
                $imageArtist.addClass('ml-8  font-libre text-white text-opacity-75 bg-gradient-to-b from-transparent to-black')

                $img.attr('src', smallImage);
                
                
                $imgContainer.append($img);
                $imgContainer.append($imageTitle);
                $imgContainer.append($imageArtist);
                return $imgContainer;
            });

            //append the imgContainer to the already created div container
            //from the main page
            $homepageGallery.append(homepageImages);

            // console.log(smallImages);
        }).catch( err => { console.log(err)});
     
});