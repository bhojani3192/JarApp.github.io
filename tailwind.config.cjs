const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    minHeight: {
      '220': '120px',
      '16':'56px'
    },
    extend: {
      width: {
        '46': '11.5rem',
        '98': '100vh'
      },
      height: {
        '850': '53rem',
        '98': '100vh'
      },
      top:{
        '-4' : '-11px'  
      },
      // left:{
      //   '44px' : '-11px'  
      // }

    },
    fontFamily: {
      'score': [ "'Press Start 2P'"],
      'cursive': [ "'Sacramento', cursive"],
    }
  },

  plugins: [],
};

module.exports = config;
