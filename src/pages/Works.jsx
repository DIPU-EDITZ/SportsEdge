import React from 'react';

function Works() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Our Works</h1>
      <p className="text-gray-400 max-w-md text-center">
        Take a look at our premium projects, from school athletic fields to municipal soccer complexes and high-end residential tennis courts.
      </p>
      <a href="/" className="mt-8 px-6 py-2 bg-[#a3e635] text-[#0d1117] font-semibold rounded-full hover:bg-opacity-90 transition">
        Back to Home
      </a>
    </div>
  );
}

export default Works;
