// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      xl: '1366px',
    },
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
    },
    fontWeight: {
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      base: '62.5%',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)',
      triangle: 'url("./src/images/bg-triangle.svg")',
    },
    extend: {
      colors: {
        'scissors-gradient': 'hsl(39, 89%, 49%) to hsl(40, 84%, 53%)',
        'paper-gradient': 'hsl(230, 89%, 62%) to hsl(230, 89%, 65%)',
        'rock-gradient': 'hsl(349, 71%, 52%) to hsl(349, 70%, 56%)',
        cyan: 'hsl(189, 59%, 53%) to hsl(189, 58%, 57%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'dark-blue': 'hsl(214, 47%, 23%)',
        'darker-blue': 'hsl(237, 49%, 15%)',
      },
    },
  },
  plugins: [],
}
