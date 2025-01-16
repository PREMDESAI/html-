import React from "react";
import { ImageGrid } from "./components/ImageGallery/ImageGrid";
import { Lightbox } from "./components/ImageGallery/Lightbox";
import { useLightboxControls } from "./hooks/useLightboxControls";

const sampleImages = [
  {
    id: "1",
    url: "img/img_01.jpeg",
    title: "GANGSTA Scene",
  },
  {
    id: "2",
    url: "img/img_02.jpeg",
    title: "DEATH  NOTE",
  },
  {
    id: "3",
    url: "img/img_03.jpeg",
    title: "MEN ARE BRAVE ",
  },
  {
    id: "4",
    url: "img/img_04.jpeg",
    title: "LOST",
  },
  {
    id: "5",
    url: "img/img_05.jpeg",
    title: "ANGRY",
  },
  {
    id: "6",
    url: "img/img_06.jpeg",
    title: "DECEISIVE",
  },
  {
    id: "7",
    url: "img/img_07.jpeg",
    title: "MANIPULATIVE",
  },
  {
    id: "8",
    url: "img/img_08.jpeg",
    title: "IRON",
  },
  {
    id: "9",
    url: "img/img_09.jpeg",
    title: "CAPTAIN",
  },
  {
    id: "10",
    url: "img/img_10.jpeg",
    title: "LOKI",
  },
  {
    id: "11",
    url: "img/img_11.jpeg",
    title: "BATMAN",
  },
  {
    id: "12",
    url: "img/img_12.jpeg",
    title: "Deadpool & Wolverine",
  },
  {
    id: "13",
    url: "img/img_13.jpeg",
    title: "LADY",
  },
  {
    id: "14",
    url: "img/img_14.jpeg",
    title: "JOKER",
  },
  {
    id: "15",
    url: "img/img_15.jpeg",
    title: "DOCTOR-STRANGE",
  },
  {
    id: "16",
    url: "img/img_16.jpeg",
    title: "PEAKY",
  },
  {
    id: "17",
    url: "img/img_17.jpeg",
    title: "LEGENDS",
  },
  {
    id: "18",
    url: "img/img_18.jpeg",
    title: "KING",
  },
  {
    id: "19",
    url: "img/img_19.jpeg",
    title: "SCHOOL",
  },
  {
    id: "20",
    url: "img/img_20.jpeg",
    title: "POKEMON",
  },
  {
    id: "21",
    url: "img/img_21.jpeg",
    title: "GOD-F",
  },
  {
    id: "22",
    url: "img/img_22.jpeg",
    title: "LUST",
  },
  {
    id: "23",
    url: "img/img_23.jpeg",
    title: "BEAR-BEAR",
  },
  {
    id: "24",
    url: "img/img_24.jpeg",
    title: "ONE-PIECE",
  },
  {
    id: "25",
    url: "img/img_25.jpeg",
    title: "RICK&MORTY",
  },
  {
    id: "26",
    url: "img/img_26.jpeg",
    title: "IT",
  },
  {
    id: "27",
    url: "img/img_27.jpeg",
    title: "VENOM",
  },
  {
    id: "28",
    url: "img/img_28.jpeg",
    title: "SHINCHAN",
  },
  {
    id: "29",
    url: "img/img_29.jpeg",
    title: "TOY-STORY",
  },
  {
    id: "30",
    url: "img/img_30.jpeg",
    title: "BERLIN",
  },
  {
    id: "31",
    url: "img/img_31.jpeg",
    title: "F1",
  },
  {
    id: "32",
    url: "img/img_32.jpeg",
    title: "UNIVERSE",
  },

  {
    id: "33",
    url: "img/img_33.jpeg",
    title: "NEEL-KANTH",
  },
];

function App() {
  const { currentImage, openLightbox, closeLightbox, showNext, showPrevious } =
    useLightboxControls(sampleImages);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>
        <ImageGrid images={sampleImages} onImageClick={openLightbox} />
        <Lightbox
          image={currentImage}
          onClose={closeLightbox}
          onNext={showNext}
          onPrevious={showPrevious}
        />
      </div>
    </div>
  );
}

export default App;
