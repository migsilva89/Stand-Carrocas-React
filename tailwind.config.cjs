/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald':['Oswald', 'sans-serif']
      },
      backgroundImage: {
        'hero-about': "url('/bannerAbout.jpeg')",
        'hero-contact': "url('/insideContacts.jpg')",
        'card-bg':'url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_s_01_m.jpg)'
      }
    },
  },
  plugins: [],
}
