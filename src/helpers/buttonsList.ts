import zeroImg from '../assets/beansImages/0.png'
import oneImg from '../assets/beansImages/1.svg'
import twoImg from '../assets/beansImages/2.svg'
import threeImg from '../assets/beansImages/3.svg'
import fourImg from '../assets/beansImages/4.svg'
import fiveImg from '../assets/beansImages/5.svg'
import sixImg from '../assets/beansImages/6.svg'
import sevenImg from '../assets/beansImages/7.svg'
import eightImg from '../assets/beansImages/8.svg'
import nineImg from '../assets/beansImages/9.svg'

const buttons = [
  [
    { group: 'number', value: 7, image: sevenImg },
    { group: 'number', value: 8, image: eightImg },
    { group: 'number', value: 9, image: nineImg },
    { group: 'operator', value: '/' },
  ],
  [
    { group: 'number', value: 4, image: fourImg },
    { group: 'number', value: 5, image: fiveImg },
    { group: 'number', value: 6, image: sixImg },
    { group: 'operator', value: 'x' },
  ],
  [
    { group: 'number', value: 1, image: oneImg },
    { group: 'number', value: 2, image: twoImg },
    { group: 'number', value: 3, image: threeImg },
    { group: 'operator', value: '-' },
  ],
  [
    { group: 'number', value: 0, image: zeroImg },
    { group: 'equal', value: '=' },
    { group: 'util', value: 'Limpa' },
    { group: 'operator', value: '+' },
  ],
]

export default buttons
