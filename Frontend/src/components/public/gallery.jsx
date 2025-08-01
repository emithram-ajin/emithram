import React, { useState } from "react";

function Gallery() {
  // Combine images and videos into one media array
  const mediaItems = [
    {
      type: "image",
      src: "gallery-1.jpeg",
      title: "Gallery Image 1",
    },
    {
      type: "image",
      src: "gallery-2.jpeg",
      title: "Gallery Image 2",
    },
    {
      type: "image",
      src: "gallery-3.jpeg",
      title: "Gallery Image 3",
    },
    {
      type: "video",
      src: "https://youtu.be/uhoSRTtNQ38?si=bm3xktLoTpsk1Cz-",
      title: "Video 1",
      thumbnail: "gallery-1.jpeg", 
    },
    {
      type: "video",
      src: "https://youtu.be/tWsYGYIvaCM?si=OyKxn-kNlteACIp_",
      title: "Video 2",
      thumbnail: "gallery-2.jpeg", 

    },
    {
      type: "video",
      src: "https://youtu.be/xeVFsrb2Nz8?si=r1SjidNIswXp9FCF",
      title: "Video 3",
      thumbnail: "gallery-1.jpeg", 

    },
    {
      type: "video",
      src: "https://youtu.be/q1oz_ylGdtg?si=3_qAIwlEZ2v2mk2E",
      title: "Video 4",
      thumbnail: "gallery-1.jpeg", 

    },
    {
      type: "video",
      src: "https://youtu.be/Mgh24dK4478?si=2p9i4jhNLZe7C2pZ",
      title: "Video 5",
      thumbnail: "gallery-1.jpeg", 

    },
  ];

  const [selectedMedia, setSelectedMedia] = useState(mediaItems[0]);

  // Convert YouTube URLs to embeddable iframe links
  const convertToEmbedUrl = (url) => {
    const match =
      url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/) ||
      url.match(/v=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  };

  // Get default YouTube thumbnail from URL
  const getVideoThumbnail = (url) => {
    const match =
      url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/) ||
      url.match(/v=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`;
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        {/* Main Content Area */}
        <div className="flex-1 lg:w-2/3 flex flex-col">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video w-full">
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={convertToEmbedUrl(selectedMedia.src)}
                title={selectedMedia.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Media Title */}
          <div className="mt-3 text-center"></div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-white rounded-xl shadow-lg p-4 h-full">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
              Gallery Items
            </h3>

            <div className="space-y-3 max-h-[500px] lg:max-h-[600px] overflow-y-auto">
              {mediaItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-gray-50 border-2 ${
                    selectedMedia === item
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedMedia(item)}
                >
                  {/* Thumbnail */}
                  <div className="w-26 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-200">
                    <div className="relative w-full h-full">
                      <img
                        src={
                          item.thumbnail ||
                          (item.type === "video"
                            ? getVideoThumbnail(item.src)
                            : item.src)
                        }
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[6px] border-l-gray-800 border-y-[3px] border-y-transparent ml-[1px]"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {item.type}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {selectedMedia === item && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
