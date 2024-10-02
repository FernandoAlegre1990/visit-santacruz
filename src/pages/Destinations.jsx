import React from 'react';

const destinations = [
  {
    name: 'El Chaltén',
    description: 'Known as the "trekking capital" of Argentina, El Chaltén is famous for its stunning mountain landscapes and hiking trails. Mount Fitz Roy, one of Patagonia\'s most iconic peaks, attracts adventurers and nature lovers. The area also offers various outdoor activities such as climbing, cycling, and wildlife watching.',
    image: 'https://th.bing.com/th/id/OIP.vyG9VfDZXvTmphgLNzHg3QAAAA?rs=1&pid=ImgDetMain'
  },
  {
    name: 'Parque Nacional Los Glaciares',
    description: 'This World Heritage Site park is home to the famous Perito Moreno Glacier, known for its spectacular rupture. Visitors can hike on the glacier or sail on Lake Argentino to appreciate the majesty of the ice. The park also offers a variety of trails and panoramic views.',
    image: 'https://content.r9cdn.net/rimg/dimg/a9/50/3d0b550a-city-52460-1671e1e779a.jpg?width=1750&height=1000&xhint=1893&yhint=1615&crop=true'
  },
  {
    name: 'El Calafate',
    description: 'This city is the gateway to Los Glaciares National Park. It is a popular tourist destination with a variety of accommodations, restaurants, and shops. El Calafate is also known for its rich local culture and proximity to other impressive glaciers such as Upsala and Spegazzini.',
    image: 'https://th.bing.com/th/id/R.6f4a3899cf177cb4d369feb94b06193f?rik=NduvGgmamA9Uog&riu=http%3a%2f%2fhablemosdeargentina.com%2fwp-content%2fuploads%2f2018%2f04%2fCalafate-1.jpg&ehk=G3qnKug7oklrAb6S%2btYky4ouMfLqQHXekf1vuOUmiAE%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    name: 'Puerto Deseado',
    description: 'This picturesque port is known for its marine biodiversity and coastal landscapes. Visitors can take boat tours to see wildlife such as penguins and dolphins. The area also has interesting historical sites, such as the ruins of the old city of Deseado and Penguin Island.',
    image: 'https://th.bing.com/th/id/OIP.vFafGJ-xGMnrWndCN7KxEQHaE_?rs=1&pid=ImgDetMain'
  },
  {
    name: 'Cueva de las Manos',
    description: 'This archaeological site is famous for its cave paintings, which date back more than 9,000 years. The hands on the rock are a testament to the culture of the indigenous peoples who inhabited the region. The cave is located in a beautiful mountainous landscape and is a must-visit for history and archaeology enthusiasts.',
    image: 'https://th.bing.com/th/id/R.92d223ca65c2c8041dab867240f33504?rik=Y0c3qHVOx4o8tQ&pid=ImgRaw&r=0'
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-gradient p-4">
      <header className="bg-blue-600 text-white p-4 mt-16">
        <h1 className="text-3xl font-bold">Destinations in Santa Cruz, Argentina</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((destination, index) => (
            <div key={index} className="relative group bg-white rounded shadow overflow-hidden">
              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center">{destination.description}</p>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{destination.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center ">
        <p>&copy; 2023 Destinations in Santa Cruz, Argentina</p>
      </footer>
    </div>
  );
};

export default Destinations;