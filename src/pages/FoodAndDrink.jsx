import React from 'react';

const FoodAndDrink = () => {
  const cerveceriaImages = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/fa/81/79/la-cerveceria-by-swift314.jpg?w=1000&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/47/4b/6c/la-cerveceria-brew-pub.jpg?w=1000&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/0e/12/c1/la-cerveceria.jpg?w=1000&h=-1&s=1'
  ];

  const rusticoImages = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ef/e2/c2/cordero.jpg?w=900&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/3d/4e/c9/caption.jpg?w=1000&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/c4/8f/16/caption.jpg?w=1000&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/34/a0/94/caption.jpg?w=1000&h=-1&s=1'
  ];

  const ranchoAparteImages = [
    'https://th.bing.com/th/id/OIP.WTAmGxw7sHIh13V1M3_O4QHaE8?rs=1&pid=ImgDetMain',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ef/e2/c2/cordero.jpg?w=900&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/3d/4e/c9/caption.jpg?w=1000&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/c4/8f/16/caption.jpg?w=1000&h=-1&s=1'
  ];

  return (
    <div className="min-h-screen bg-gradient p-4">
      <header className="bg-blue-600 text-white p-4 mt-16">
        <h1 className="text-3xl font-bold">Food & Drink in Santa Cruz, Argentina</h1>
      </header>
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">La Cervecería</h2>
          <p>La Cervecería is a popular spot in Santa Cruz, Argentina, known for its wide variety of craft beers and delicious food.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cerveceriaImages.map((src, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img src={src} alt={`La Cervecería ${index + 1}`} className="w-full h-48 object-cover rounded mb-4" />
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Rustico Asador y Parrilla</h2>
          <p>Rústico Asador y Parrilla, located in front of Lago Argentino. Here you can enjoy the most delicious Patagonian lamb. We have an excellent location on the waterfront, and we also have a park with tables and chairs to enjoy lunch or dinner outdoors.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rusticoImages.map((src, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img src={src} alt={`Rustico Asador y Parrilla ${index + 1}`} className="w-full h-48 object-cover rounded mb-4" />
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-4">General Information</h3>
          <p>Rústico Asador y Parrilla, located in front of Lago Argentino. Here you can enjoy the most delicious Patagonian lamb. We have an excellent location on the waterfront, and we also have a park with tables and chairs to enjoy lunch or dinner outdoors.</p>
          <h3 className="text-xl font-semibold mt-4">Cuisine Types</h3>
          <p>Steakhouse, Barbecue, Grill, Argentine, Beer Restaurants</p>
          <h3 className="text-xl font-semibold mt-4">Special Diets</h3>
          <p>Vegetarian Options, Gluten-Free Options</p>
          <h3 className="text-xl font-semibold mt-4">Meals</h3>
          <p>Lunch, Dinner, Late Night, Drinks</p>
          <h3 className="text-xl font-semibold mt-4">Advantages</h3>
          <ul className="list-disc list-inside">
            <li>Reservations</li>
            <li>Outdoor Seating</li>
            <li>Seating Capacity</li>
            <li>Parking Available</li>
            <li>Street Parking</li>
            <li>Free/Reduced Parking with Ticket Validation</li>
            <li>Highchairs Available</li>
            <li>Wheelchair Accessible</li>
            <li>Serves Alcohol</li>
            <li>Full Bar</li>
            <li>Wine and Beer</li>
            <li>Accepts Visa</li>
            <li>Digital Payments</li>
            <li>Cash Only</li>
            <li>Free Wifi</li>
            <li>Accepts Credit Cards</li>
            <li>Table Service</li>
            <li>Waterfront</li>
            <li>Family Style</li>
            <li>Non-Smoking Restaurants</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Rancho Aparte</h2>
          <p>We only work with advanced booking. This is a closed-door restaurant in El Calafate. Rancho Aparte offers more than a simple dinner; you will get to know a Patagonian home, enjoy homemade food, share a large table and chat with a local. Rancho Aparte is a unique experience. There is limited seating; for that reason, we work with prior booking. When you make the reservation, you have to choose the main course.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ranchoAparteImages.map((src, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img src={src} alt={`Rancho Aparte ${index + 1}`} className="w-full h-48 object-cover rounded mb-4" />
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-4">General Information</h3>
          <p>We only work with advanced booking. This is a closed-door restaurant in El Calafate. Rancho Aparte offers more than a simple dinner; you will get to know a Patagonian home, enjoy homemade food, share a large table and chat with a local. Rancho Aparte is a unique experience. There is limited seating; for that reason, we work with prior booking. When you make the reservation, you have to choose the main course.</p>
          <h3 className="text-xl font-semibold mt-4">Cuisine Types</h3>
          <p>Argentine</p>
          <h3 className="text-xl font-semibold mt-4">Special Diets</h3>
          <p>Vegetarian Options, Gluten-Free Options</p>
          <h3 className="text-xl font-semibold mt-4">Meals</h3>
          <p>Dinner</p>
          <h3 className="text-xl font-semibold mt-4">Advantages</h3>
          <ul className="list-disc list-inside">
            <li>Reservations</li>
            <li>Seating Capacity</li>
            <li>Parking Available</li>
            <li>Wheelchair Accessible</li>
            <li>Serves Alcohol</li>
            <li>Wine and Beer</li>
            <li>Cash Only</li>
            <li>Free Wifi</li>
            <li>Table Service</li>
          </ul>
        </section>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 Food & Drink in Santa Cruz, Argentina</p>
      </footer>
    </div>
  );
};

export default FoodAndDrink;