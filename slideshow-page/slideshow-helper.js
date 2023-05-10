import galleriaData from '../public/data.json'



$(function(){
    const slideshowDetails = galleriaData.map(item => {
        let smallImage = item.images['hero'].small;
        let imageTitle = item.name;
        let artistName = item.artist['name'];
        let artistImage = item.artist['image'];
        let artYear = item.year;
        let artDesc = item.description;

        console.log(smallImage);
        console.log(imageTitle);
        console.log(artistName);
        console.log(artistImage);
        console.log(artYear);
        console.log(artDesc);



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