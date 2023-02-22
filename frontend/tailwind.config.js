/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'md' : '375px',
      'sm' : '360px',
      'lg' : '420px',
      
    },
    fontSize:{
      'box_text1':'15px'
    },
    extend: {
      boxShadow:{
        '3t' : ' 0 0 6px 6px  rgba(0, 0, 0, 0.3)'
      },
      colors:{

          orange: '#EF7D52',
          purple: '#777CB6',
          grey: '#D9D9D9',
          white : '#FCFCFE',
      
          'krd' : 'rgba(239, 125, 82, 1)',
          'box' : ' rgba(255, 249, 228, 1)',
          'blue' : 'rgba(119, 124, 182, 1)',
          'darkyel' : 'rgba(242, 232, 198, 1)',
          'lblack' : 'rgba(71, 71, 71, 1)',
          'G': 'rgba(238, 238, 238, 1)'

      },
      spacing: {
        '70': '20rem',
        '40': '10rem',
        '173':'173px',
        '248':'248px',
        '240':'240px',
        '17': '17px',
        '199':'199px',
        '140':'140px',
        '74':' 74.3px',
        '32': '32px',
        '15': '15.84px',
        '71': '71px',
        '24': '24px',
        '30': '30px',
        '180':'180px',
        '103':'103px',
        '16':'16px',
        '121':'121px',
        '156':'156px',
        '73':'73px',
        '71': '71px',
        '11': '11px',
        '60':'60px',
        '27': '27px',
        '168': '168px',
        '150': '150px',
        '200':'200px',
        '42': '42px'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
