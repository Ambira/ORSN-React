import React from "react";

const Talk_program = () => {
  const videos = [
    "vtnTmprX_0Y?si=aW6wfzM5XS0ZwquT",
    "fL4o9Sipv_4?si=VXB28RAuHL_5fpU2",
    "1OC95KnYIrg?si=mMFLv8jOPTsowj42",
    "CLgVgt1b0AE?si=CtpXkN7B9QoMRvYJ",
    "KSaRsbr4LW0?si=WJdCOJfU-SYBCdvK",
    "stEHGyc0IgI?si=XEybgBJYXHMHNXi9",
    "Kr8wjc_E7K0?si=VG5YABfdlcdQjxcn"
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-700 pt-1">Talk Programs</h1>
        <p className="text-center mb-12 text-black">Explore our recent talk programs below:</p>

        {/* Force 3 columns always */}
        <div className="grid grid-cols-3 gap-8">
          {videos.map((id, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg overflow-hidden w-full"
            >
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talk_program;
