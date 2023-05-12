import galleriaData from '../public/data.json'



$(function(){
    let currentIndex = 0;
    const $progressBar = $('#progress-bar');



    
        const galleriaDataDisplay = () =>{
                const currentArt = galleriaData[currentIndex];

                //Assign corresponding values from the galleriaData.json
                let smallImage = currentArt.images['hero'].small;
                let imageTitledata = currentArt.name;
                let artistNamedata = currentArt.artist['name'];
                let artistImagedata = currentArt.artist['image'];
                let artYeardata = currentArt.year;
                let artDescdata = currentArt.description;
                let artSourcedata = currentArt.source;

                  // Clear previous content before appending new content
                $('#image-details').empty();
                $('#artist-image').empty();
                $('#art-year').empty();
                $('#art-desc').empty();
                $('#slidepage-image').empty();

                // Creating corresponding/Missing Dom elements and assigning respective values
                const  $imageTitle = $('<h3>')
                $imageTitle.text(imageTitledata)
                $imageTitle.addClass('text-[1.5rem] font-bold leading-[1.8125rem] font-libre text-black')

                const $artistName = $('<p>')
                $artistName.text(artistNamedata)
                $artistName.addClass('text-[0.9375rem] leading-[1.1625rem] font-libre')

                const $artistImage = $('<img/>')
                $artistImage.attr('src', artistImagedata)

                const $artYear = $('<h1>')
                $artYear.text(artYeardata);
                $artYear.addClass('text-[6.25rem] text-concrete font-bold font-libre text-left')

                const $artDesc = $('#art-desc')
                $artDesc.text(artDescdata)

                const $artSource = $('#image-link')
                $artSource.attr('href', artSourcedata)
                $artSource.text('GO TO SOURCE')

                $('#footer-h3').text(imageTitledata)

                $('#footer-p').text(artistNamedata)

                //target corresponding DOM element to append their respective elements
                $('#image-details').append( $imageTitle,$artistName );
                $('#artist-image').append($artistImage)
                $('#art-year').append($artYear).addClass('pt-[1.2rem]')
                $('#art-desc').append($artDesc).addClass('font-libre font-bold leading-[1.75rem] text-[0.875rem] text-boulder ')
        

                //Appending content to the corresponding
                //html element
                const $img = $('<img />')
                $img.attr('src',smallImage);
                $img.addClass('-mt-10')
                $('#slidepage-image').append($img)
        }

        $('#back-btn').on('click',()=>{
                currentIndex = Math.max(currentIndex - 1, 0);
                galleriaDataDisplay();
                const progressPercentage = (currentIndex+1) * 6.667;
                $progressBar.css('width', `${progressPercentage}%`);

        })

        $('#forward-btn').on('click',() => {
                currentIndex = Math.min(currentIndex + 1, galleriaData.length - 1);
                galleriaDataDisplay();
                const progressPercentage = (currentIndex+1) * 6.667;
                $progressBar.css('width', `${progressPercentage}%`);
        });

        galleriaDataDisplay();
});



// console.log(smallImage);

        // $('#image-link').att/* r('href',)
        /* console.log(smallImage);
        console.log(imageTitle);
        console.log(artistName);
        console.log(artistImage);
        console.log(artYear);
        console.log(artDesc);
        console.log(artSource); */



        // console.log(small);
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