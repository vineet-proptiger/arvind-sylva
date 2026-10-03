'use client'
import React from 'react'

const locationList = [
  {
    title: 'Wipro Sarjapur Campus',
    time: '2 mins',
  },
  {
    title: 'Carmelaram Railway Station',
    time: '5 mins',
  },
  {
    title: 'Outer Ring Road Junction',
    time: '6 mins',
  },
  {
    title: 'Kodathi Gate Metro Station (Upcoming)',
    time: '1–2 km',
  },
  {
    title: 'RGA Tech Park',
    time: '10 mins',
  },
  {
    title: 'Electronic City',
    time: '20 mins',
  },
  {
    title: 'Kempegowda International Airport',
    time: '60 mins',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[780px] mx-auto mb-10 md:mb-12" data-aos="fade-up">
          <span className="text-[#C05656] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight">
            Location &amp; Connectivity
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List (Thin Sleek Cards) / Right Map ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 6 Location Points (Slim & Thin Grid) */}
          <div className="flex flex-col gap-2.5 sm:gap-3 justify-center">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#f9ecec] border border-[#f9ecec] hover:border-[#C05656]/60 rounded-[12px] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(192, 86, 86,0.12)] transition-all duration-200"
              >
                {/* Left side: Red Pin Icon & Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f9ecec] group-hover:bg-[#C05656] text-[#C05656] group-hover:text-white flex items-center justify-center text-[12px] sm:text-[13px] shrink-0 transition-colors duration-200">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span className="text-[#1f2937] group-hover:text-[#C05656] font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-200 leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#f9ecec] group-hover:bg-[#C05656] text-[#C05656] group-hover:text-white font-bold text-[11.5px] sm:text-[12.5px] px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed */}
          <div 
            className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.602154699745!2d77.717543!3d12.89804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13004f5378d1%3A0xe7ada84fb533e00b!2sArvind%20Sylva!5e0!3m2!1sen!2sin!4v1790739869144!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Arvind Sylva Google Maps Location"
              className="w-full h-full block"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
