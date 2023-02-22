/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'md' : '390px',
      'sm' : '360px',
      'lg' : '420px',
      'ip6': '375px',
      'plus': '414px'
      
    },
    colors:{
      orange: '#EF7D52',
      purple: '#777CB6',
      grey: '#D9D9D9',
      white : '#FCFCFE',
      yellow: '#EFDA63'
    },
    extend: {
      spacing:{
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
        '140' : '140px'
      }
    },
  },
  plugins: [],
}