document.querySelector('#main-content').innerHTML =`

    <div class="mobile:flex mobile:flex-col  mobile:h-[55.9375rem] mobile:mt-8 mobile:mx-6">
        <div class="border-2 border-dashed border-[#6ac] mobile:h-[24.875rem]">
            <div id="slidepage-image"  class="mobile:h-[17.5rem] mobile:mt-10">
                <div class="mobile:w-[9.5rem] mobile:h-10 mobile:bg-[#3dd] mobile:relative mobile:top-4 mobile:left-4"></div>
            </div>
            <div id="image-details"  class="mobile:h-[6.5rem] mobile:w-[17.5rem] mobile:relative mobile:bottom-14 p-4 bg-[#fff] "></div>
            <div id="artist-image"  class="h-[4rem] w-[4rem] mobile:relative mobile:bottom-14 mobile:left-3 " ></div>
        </div>
        <div class="mobile:flex mobile:flex-col mobile:h-[33rem] mobile:items-end mobile:gap-y-10 mobile:mt-[-1.3rem]  children:border-2 children:border-dashed children:border-[#f13] mobile:border-2 mobile:border-dashed mobile:border-[#23a]">
            <div class="mobile:flex mobile:flex-col">
                <h1 id="art-year"  class="mobile:w-[14.875rem] mobile:h-[6.25rem] self-end font-libre text-[6.25rem] leading-[6.25rem]"></h1>     
                <p id="art-desc" class="mobile:relative mobile:bottom-7"></p>
            </div>
            <a id="image-link"  class="link2  w-[6.375rem] h-[0.6875rem]  mobile:self-start" href='' target='_blank'></a>     
        </div>
    </div>

`;