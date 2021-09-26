import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

function HomePage() {
    const RecommendedMovies = [
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00132576-cruhtytxcd-portrait.jpg",
        title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    },
    {   
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00137405-nwkkwtbszv-portrait.jpg",
        title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    },
    {    src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00097273-yfseqpmqgv-portrait.jpg",
        title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00314507-cmptdddftx-portrait.jpg",
        title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00056556-lwhmtnmxar-portrait.jpg",
        title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00314760-zlkzefhktt-portrait.jpg",
        title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00313347-mqpyfmycsw-portrait.jpg",
        title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00081136-nwpnruhhle-portrait.jpg",
        title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00311715-xaymgxnhnp-portrait.jpg",
       title:" Fast & furious 9",
        subtitle:"Action / Adventure / Crime / Thriller",
    }   
    ];
     const PremierMovies = [
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00132576-cruhtytxcd-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {   
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00137405-nwkkwtbszv-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {    src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00097273-yfseqpmqgv-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00314507-cmptdddftx-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00056556-lwhmtnmxar-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00314760-zlkzefhktt-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00313347-mqpyfmycsw-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00081136-nwpnruhhle-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00311715-xaymgxnhnp-portrait.jpg",
       title:" The Nest",
        subtitle:"English",
    }   
    ];
     const StreamingEvents = [
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00132576-cruhtytxcd-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {   
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00137405-nwkkwtbszv-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {    src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00097273-yfseqpmqgv-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00314507-cmptdddftx-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00056556-lwhmtnmxar-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00314760-zlkzefhktt-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00313347-mqpyfmycsw-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00081136-nwpnruhhle-portrait.jpg",
        title:" The Nest",
        subtitle:"English",
    },
    {  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00311715-xaymgxnhnp-portrait.jpg",
       title:" The Nest",
        subtitle:"English",
    }   
    ];
   
    return (
        <>
            <HeroCarousel />

            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider
                    title="Recommended Movies"
                    subtitle="List of recommended movies"
                    posters={RecommendedMovies}
                    isDark={false}
                />
            </div>
            <div className="bg-Premier-800 py-12">
           <div className="container mx-auto px-4 flex flex-col gap-3 md:px-12">
               <div className="hidden md:flex">
                   <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RuPay" className="w-full h-full" />
               </div>
                <PosterSlider
                    title="Premiers"
                    subtitle="Brand new releases every Friday"
                    posters={PremierMovies}
                    isDark={true}
                />
            </div>
</div>
 <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider
                    title="Online Streaming Event"
                    subtitle="Streaming Events"
                    posters={StreamingEvents}
                    isDark={false}
                />
            </div>
           
        </>
    );
}
export default HomePage;
