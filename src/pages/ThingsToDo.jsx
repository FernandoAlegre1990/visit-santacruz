import React from 'react';

const ThingsToDo = () => {
  const peritoMorenoImages = [
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/ff/de/0f.jpg',
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/ff/de/14.jpg',
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/ff/de/18.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/93/ea/42/caption.jpg?w=800&h=500&s=1'
  ];

  const elChaltenImages = [
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/25/4a/16.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/36/75/c0/caption.jpg?w=800&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f5/f8/5c/caption.jpg?w=800&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/39/bb/d4/caption.jpg?w=800&h=-1&s=1'
  ];

  const minitrekkingImages = [
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/4f/88/ff.jpg',
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/8e/7a/2e.jpg',
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/8e/7a/4a.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a7/0a/16/img-20191012-174733-largejpg.jpg?w=800&h=-1&s=1'
  ];

  return (
    <div className="min-h-screen bg-gradient p-4">
      <header className="bg-black text-white p-4 mt-16">
        <h1 className="text-3xl font-bold">Things to Do in Santa Cruz, Argentina</h1>
      </header>
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Excursión de día completo al glaciar Perito Moreno con navegación</h2>
          <p>Visitar el glaciar Perito Moreno en un solo día es fácil en esta visita guiada desde El Calafate. Una salida a primera hora de la mañana le ayudará a evitar las multitudes, así podrá pasear a lo largo de la pasarelas en frente del glaciar sin demasiadas intromisiones cuando llegue. A continuación, acérquese a unos 150 metros (490 pies) del glaciar en una excursión de navegación por la cara sur.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {peritoMorenoImages.map((src, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img src={src} alt={`Perito Moreno ${index + 1}`} className="w-full h-48 object-cover rounded mb-4" />
              </div>
            ))}
          </div>
          <ul className="list-disc list-inside">
            <li>Ages: 3 to 99, max. of 20 per group</li>
            <li>Duration: 8 hours</li>
            <li>Start time: check availability</li>
            <li>Mobile ticket</li>
            <li>Live guide: English, Spanish</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">El Chaltén with Trekking from El Calafate</h2>
          <p>We will start at 7:30 in the morning with the pick up from the hotels in El Calafate. After the pick up, we will head towards the town of El Chaltén (National Capital of Trekking) 220 km from El Calafate. On our way, we will cross the Santa Cruz River, and we will stop for a few minutes at Estancia La Leona, next to the river of the same name. We will continue our way to El Chaltén, skirting Lake Viedma.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {elChaltenImages.map((src, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img src={src} alt={`El Chaltén ${index + 1}`} className="w-full h-48 object-cover rounded mb-4" />
              </div>
            ))}
          </div>
          <ul className="list-disc list-inside">
            <li>Ages: 3 to 99, max. of 99 per group</li>
            <li>Duration: 10 hours 30 minutes</li>
            <li>Start time: check availability</li>
            <li>Mobile ticket</li>
            <li>Live guide: English, Spanish</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Minitrekking Perito Moreno: Ice Walk</h2>
          <p>Don't just admire the Perito Moreno Glacier from a distance, discover the highlights of Los Glaciares National Park from three different perspectives during a trekking tour that reveals panoramic views of the landscapes. Walk at your own pace on the ice with the provided equipment and enjoy the convenience of pick-up and drop-off in El Calafate.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {minitrekkingImages.map((src, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img src={src} alt={`Minitrekking ${index + 1}`} className="w-full h-48 object-cover rounded mb-4" />
              </div>
            ))}
          </div>
          <ul className="list-disc list-inside">
            <li>Ages: 8 to 65, max. of 20 per group</li>
            <li>Duration: 5 to 11 hours</li>
            <li>Start time: check availability</li>
            <li>Mobile ticket</li>
            <li>Live guide: English, Spanish</li>
          </ul>
        </section>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 Things to Do in Santa Cruz, Argentina</p>
      </footer>
    </div>
  );
};

export default ThingsToDo;