import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'




export default function Home() {
  return (
    <section>
      <Header/>
      <main className="py-8 h-screen bg-gray-700">
        <div className="container mx-auto">
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-white">Galeria de Fotos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              
              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img1.jpg" 
                  alt="Foto 1"
                  className="w-full h-auto"
                />
              </div>

              
              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img2.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img3.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img4.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img5.png" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img6.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img7.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img8.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img9.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img10.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img11.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-red-600 p-4 rounded-lg">
                <img
                  src="/img12.jpg" 
                  alt="Foto 2"
                  className="w-full h-auto"
                />
              </div>

              

              
            </div>
          </section>
        </div>
      </main>
      <Footer/>

    </section>
  )
}
