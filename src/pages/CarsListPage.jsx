import React from 'react'
import MainLayout from '../layouts/MainLayout'

function CarsListPage() {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-12 pb-10 grid grid-cols-4 gap-7">
        <div class="w-full max-w-sm shadow-md bg-sky-50">
          <a href="#">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_s_01_m.jpg"
              alt="product image"
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800">
              Renault 5 2017
            </h3>
            <div className="flex gap-5 text-gray-400 text-xs pt-3  tracking-wider">
              <p>Fuel</p>
              <img src="/dot.png" alt="" className="w-4 h-4" />
              <p>4 Seats</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <h3 className="text-xl font-semibold text-blue-500 tracking-widest">
                $30.000
              </h3>
              <button className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-400 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm shadow-md bg-sky-50">
          <a href="#">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_s_01_m.jpg"
              alt="product image"
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800">
              Renault 5 2017
            </h3>
            <div className="flex gap-5 text-gray-400 text-xs pt-3  tracking-wider">
              <p>Fuel</p>
              <img src="/dot.png" alt="" className="w-4 h-4" />
              <p>4 Seats</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <h3 className="text-xl font-semibold text-blue-500 tracking-widest">
                $30.000
              </h3>
              <button className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-400 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm shadow-md bg-sky-50">
          <a href="#">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_s_01_m.jpg"
              alt="product image"
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800">
              Renault 5 2017
            </h3>
            <div className="flex gap-5 text-gray-400 text-xs pt-3  tracking-wider">
              <p>Fuel</p>
              <img src="/dot.png" alt="" className="w-4 h-4" />
              <p>4 Seats</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <h3 className="text-xl font-semibold text-blue-500 tracking-widest">
                $30.000
              </h3>
              <button className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-400 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm shadow-md bg-sky-50">
          <a href="#">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_s_01_m.jpg"
              alt="product image"
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800">
              Renault 5 2017
            </h3>
            <div className="flex gap-5 text-gray-400 text-xs pt-3  tracking-wider">
              <p>Fuel</p>
              <img src="/dot.png" alt="" className="w-4 h-4" />
              <p>4 Seats</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <h3 className="text-xl font-semibold text-blue-500 tracking-widest">
                $30.000
              </h3>
              <button className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-400 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default CarsListPage
