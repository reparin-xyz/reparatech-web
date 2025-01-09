import React from 'react'

const LandingPage = () => {
  return (
    <div className="font-sans leading-relaxed">
      {/* Section 1: Header */}
      <div className="flex items-center justify-between px-5 py-12 bg-white">
        <div className="max-w-[45%] ml-10">
          <h1 className="text-2xl font-bold mb-2 text-black">
            <strong>Need repairs for your electronic gadgets?</strong>
          </h1>
          <h1 className="text-2xl font-bold mb-2 text-black">
            <strong>electronic gadgets?</strong>
          </h1>
          <p className="text-black mb-2">
            We provide professional repair services
          </p>
          <p className="text-black mb-2">for all your tech devices!</p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-[#224CB7] text-white font-bold rounded hover:bg-blue-700">
              Temukan Layanan Kami
            </button>
            <button className="flex items-center px-6 py-2 bg-transparent text-[#224CB7] font-bold border-2 border-[#224CB7] rounded hover:bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3.75h10.5v16.5H6.75z"
                />
              </svg>
              Kontak
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-[85%]">
          <img
            src="/assets/home.png"
            alt="Electronic devices"
            className="w-full max-w-[500px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Section 2: Why ReparaTech */}
      <div className="bg-[#DDEDF4] px-5 py-12 text-center">
        <h2 className="text-xl font-bold mb-5 text-black">
          Kenapa Memilih ReparaTech?
        </h2>
        <p className="text-black mb-10">
          Kami menggabungkan teknologi modern dan keahlian profesional untuk
          memberikan layanan terbaik bagi pelanggan kami.
        </p>

        {/* Cards */}
        <div className="flex justify-center flex-wrap gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-5 max-w-[300px] text-left">
            <h3 className="text-lg font-bold mb-3 text-black">
              Service Express 1 Jam
            </h3>
            <p className="text-sm text-black mb-3">
              Layanan perbaikan cepat untuk kerusakan ringan dengan teknisi
              profesional dan garansi penuh.
            </p>
            <ul className="list-none space-y-1">
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> Diagnosa gratis
              </li>
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> Sparepart original
              </li>
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> Garansi 90 hari
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-5 max-w-[300px] text-left">
            <h3 className="text-lg font-bold mb-3 text-black">
              Garansi Terpercaya
            </h3>
            <p className="text-sm text-black mb-3">
              Jaminan kualitas dengan garansi layanan hingga 90 hari dan garansi
              uang kembali.
            </p>
            <ul className="list-none space-y-1">
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> Garansi sparepart
              </li>
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> Uang kembali
              </li>
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> Asuransi service
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-5 max-w-[300px] text-left">
            <h3 className="text-lg font-bold mb-3 text-black">
              Teknisi Profesional
            </h3>
            <p className="text-sm text-black mb-3">
              Tim teknisi berpengalaman dengan sertifikasi resmi dari berbagai
              brand ternama.
            </p>
            <ul className="list-none space-y-1">
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> Bersertifikasi
              </li>
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> 5 tahun pengalaman
              </li>
              <li className="text-black">
                <span className="text-[#224CB7]">✓</span> Training berkala
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
