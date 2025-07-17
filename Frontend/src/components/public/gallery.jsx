import React,{useState} from "react";

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
  const images = ["gallery-1.jpeg", "gallery-2.jpeg", "gallery-3.jpeg"];
   const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Original YouTube share links
  const videosFirstRow = [
    "https://youtu.be/uhoSRTtNQ38?si=bm3xktLoTpsk1Cz-",
    "https://youtu.be/tWsYGYIvaCM?si=OyKxn-kNlteACIp_",
    "https://youtu.be/xeVFsrb2Nz8?si=r1SjidNIswXp9FCF",
  ];

  const videosSecondRow = [
    "https://youtu.be/q1oz_ylGdtg?si=3_qAIwlEZ2v2mk2E",
    "https://youtu.be/Mgh24dK4478?si=2p9i4jhNLZe7C2pZ",
    "https://youtu.be/uhoSRTtNQ38?si=bm3xktLoTpsk1Cz-",

  ];

  // Helper function to convert share URLs to embed URLs
  const convertToEmbedUrl = (url) => {
    const match =
      url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/) ||
      url.match(/v=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // fallback
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-10">
      {/* Images Row */}
      <div className="max-w-6xl mx-auto p-4 space-y-10">
      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-img-${idx}`}
            className="w-full h-64 object-cover rounded-xl shadow-md cursor-pointer"
            onClick={() => openModal(src)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-2 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // prevent close on image click
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-2">
              <button
                onClick={closeModal}
                className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

      {/* First Row of YouTube Videos (3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videosFirstRow.map((url, idx) => (
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={convertToEmbedUrl(url)}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Second Row of YouTube Videos (2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {videosSecondRow.map((url, idx) => (
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={convertToEmbedUrl(url)}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
