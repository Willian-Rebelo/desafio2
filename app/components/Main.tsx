import Image from 'next/image'
export default function Main() {
    return (
        <section className="py-8 h-screen bg-gray-700">
            
        <div className="container mx-auto">
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-white">Galeria da F1</h2>
            <div className="flex gap-5 flex-wrap">
              
              <div className="bg-red-600 w-[23%] p-2 rounded-lg items-center flex">
                <Image
                  src="/img1.jpg"
                  width={500}
                  height={500}
                  alt="foto 1"

                />
              </div>

              
              <div className="bg-red-600 w-[23%] p-2 rounded-lg items-center flex">
               <Image
                  src="/img2.jpg"
                  width={500}
                  height={500}
                  alt="foto 2"

                />
              </div>

              <div className="bg-red-600 w-[23%] p-2 rounded-lg items-center flex">
               <Image
                  src="/img3.jpg"
                  width={500}
                  height={500}
                  alt="foto 3"

                />
              </div>

              <div className="bg-red-600 w-[23%] p-2 rounded-lg items-center flex">
                <Image
                  src="/img4.jpg"
                  width={500}
                  height={500}
                  alt="foto 4"

                />
              </div>

              <div className="bg-red-600 w-[23%] p-2 rounded-lg items-center flex">
                <Image
                  src="/img10.jpg"
                  width={500}
                  height={500}
                  alt="foto 5"

                />
              </div>

              <div className="bg-red-600 w-[23%] p-2 rounded-lg items-center flex">
                <Image
                  src="/img6.jpg"
                  width={500}
                  height={500}
                  alt="foto 6"

                />
              </div>

              <div className="bg-red-600 w-[23%] p-2 rounded-lg items-center flex">
                <Image
                  src="/img7.jpg"
                  width={500}
                  height={500}
                  alt="foto 7"

                />
              </div>

              <div className="bg-red-600 w-[23%] p-2 rounded-lg items-center flex">
                <Image
                  src="/img9.jpg"
                  width={500}
                  height={500}
                  alt="foto 8"

                />
              </div>
            </div>
          </section>
        </div>
      
        </section>
    )
  }
  