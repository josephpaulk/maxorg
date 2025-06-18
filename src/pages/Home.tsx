import React from 'react';

const Home = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to Maxsys International</h1>

      <p className="text-lg mb-4">
        Maxsys is a 501(c)(3) nonprofit organization bringing trustworthy, community-driven IT support back to where it belongs—our neighborhoods.
      </p>

      <p className="text-lg mb-4">
        Founded by U.S. Marine Corps veteran and tech visionary Maryanne Rozier Chiriboga, Maxsys is building a network of local Tech Hubs that connect skilled IT professionals with nonprofits, churches, and small businesses that need help with technology—but don't need to be upsold.
      </p>

      <p className="text-lg mb-4">
        Our platform is built on two essential pillars: <strong>comprehensive IT support</strong> and <strong>responsible recycling</strong>. Together, they create safer, smarter, and more resilient communities by offering:
      </p>

      <ul className="list-disc list-inside text-lg mb-4">
        <li>Verified, local tech experts who understand your needs</li>
        <li>Simple and affordable solutions that actually work</li>
        <li>Certified e-waste disposal to protect community data</li>
      </ul>

      <p className="text-lg mb-4">
        Whether you're a nonprofit drowning in overpriced vendor contracts or a skilled IT pro seeking meaningful, local work—Maxsys is where community and technology meet.
      </p>

      <p className="text-lg mb-4 font-semibold">
        Because good technology is just good neighbors helping each other solve real problems.
      </p>
    </div>
  );
};

export default Home;
