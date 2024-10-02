import React from 'react';


const Planning = () => {
  const backgroundImage = 'https://wallpapercave.com/wp/wp4201928.jpg'; // Reemplaza con el enlace de una imagen de fondo

  return (
    <div className="min-h-screen bg-gradient p-4" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header className="bg-blue-600 text-white p-4 bg-opacity-75 mt-16">
        <h1 className="text-3xl font-bold">Planning Your Visit to El Calafate and Los Glaciares National Park</h1>
      </header>
      <main className="p-4 bg-white bg-opacity-75 rounded shadow-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Best Time to Visit</h2>
          <ul className="list-disc list-inside">
            <li><strong>Spring (September to November):</strong> Cool weather and blooming landscapes. Ideal for trekking, though there may be rain.</li>
            <li><strong>Summer (December to February):</strong> High season with warmer temperatures (15-25°C) and glaciers at their best. Ideal for outdoor activities, but also more tourists.</li>
            <li><strong>Autumn (March to May):</strong> Pleasant temperatures and fewer tourists. Ideal for those seeking tranquility, though the weather can be more variable.</li>
            <li><strong>Winter (June to August):</strong> Fewer tourists, but cold temperatures (0-10°C). Some winter activities are available, but glacier excursions are limited.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Glacier Rupture</h2>
          <p>The Perito Moreno Glacier is known for its dynamic activity and ruptures, which usually occur between November and March. The ruptures are an impressive spectacle, but there is no exact schedule as they depend on climatic factors and the glacier itself. It is recommended to visit during this time to maximize the chances of witnessing this phenomenon.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How Many Days Are Needed</h2>
          <p>To enjoy El Calafate and its surroundings, 3 to 5 days are recommended:</p>
          <ul className="list-disc list-inside">
            <li><strong>Day 1:</strong> Arrival in El Calafate and exploration of the town.</li>
            <li><strong>Day 2:</strong> Excursion to the Perito Moreno Glacier (including navigation if desired).</li>
            <li><strong>Day 3:</strong> Visit other glaciers (such as Upsala or Spegazzini) or trekking activities in El Chaltén.</li>
            <li><strong>Day 4:</strong> Optionally, excursions to other nearby attractions or relaxation in the city.</li>
            <li><strong>Day 5:</strong> Return or additional excursions.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Clothing and Money</h2>
          <h3 className="text-xl font-semibold mt-4">Clothing:</h3>
          <ul className="list-disc list-inside">
            <li>Wear layers: t-shirts, sweaters, waterproof and warm jackets, scarves, hats, and gloves, especially if visiting in spring or autumn.</li>
            <li>Comfortable and waterproof footwear is essential for walks.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Money:</h3>
          <ul className="list-disc list-inside">
            <li>The cost depends on your travel style, but a budget of $100 to $150 USD per day is recommended for accommodation, meals, and excursions.</li>
            <li>Prices may vary, so check updated rates for activities and accommodations.</li>
            <li>It is useful to carry some cash, as some excursions and services may not accept cards.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>El Calafate is a wonderful destination worth exploring. Preparing adequately and choosing the right time will maximize your experience. Enjoy your trip!</p>
        </section>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center bg-opacity-75">
        <p>&copy; 2023 Planning Your Visit to El Calafate and Los Glaciares National Park</p>
      </footer>
    </div>
  );
};

export default Planning;