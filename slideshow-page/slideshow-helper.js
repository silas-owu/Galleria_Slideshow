import galleriaData from '../public/data.json'



$(function(){
    let currentIndex = 0;
    
    const slideshowDetails = galleriaData.forEach(item => {
        let currentArt = galleriaData[currentIndex];
        //Assign corresponding values from the galleriaData.json
        let smallImage = currentArt.images['hero'].small;
        let imageTitle = currentArt.name;
        let artistName = currentArt.artist['name'];
        let artistImage = currentArt.artist['image'];
        let artYear = currentArt.year;
        let artDesc = currentArt.description;
        let artSource = currentArt.source;

        //Appending content to the corresponding
        //html element
        // const $img = $('<img />')
        // $img.attr('src',smallImage);
        // $('#slidepage-image').append($img)
        console.log(smallImage);
        // // $('#slidepage-image').attr('src',smallImage);

        // $('#image-link').att/* r('href',)
        /* console.log(smallImage);
        console.log(imageTitle);
        console.log(artistName);
        console.log(artistImage);
        console.log(artYear);
        console.log(artDesc);
        console.log(artSource); */



        // console.log(small);
    });
    // const $slidepageImage = $('#slidepage-image');
    // const $slideImg = $('<img/>')
    // $slideImg.attr('src',)

    // fetch('../public/data.json')
    //   .then( response => response.json())
    //   .then( data => {
    //     const galleriaData = data;
    //     console.log(galleriaData);
    //   })
    //  .catch(err=>{console.log(err)}); 
});