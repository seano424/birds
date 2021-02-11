import { combineReducers } from 'redux'

const birdsReducer = () => {
  return [
    {
      name: "Eurasian Collared Dove",
      imgUrl:
        "https://birdseedandbinoculars.com/wordpress/wp-content/uploads/2019/05/Birds-Seen-In-MexicoCopyright-2019-Nancie-Waterman311252017.jpg",
    },
    {
      name: "Hooded Oriole",
      imgUrl:
        "https://birdseedandbinoculars.com/wordpress/wp-content/uploads/2019/05/Birds-Seen-In-MexicoCopyright-2019-Nancie-Waterman411252017.jpg",
    },
    {
      name: "Green Jay",
      imgUrl:
        "https://birdseedandbinoculars.com/wordpress/wp-content/uploads/2019/05/Birds-Seen-In-MexicoCopyright-2019-Nancie-Waterman611272017-2.jpg",
    },
    {
      name: "Yucatan Woodpecker",
      imgUrl:
        "https://birdseedandbinoculars.com/wordpress/wp-content/uploads/2019/05/Birds-Seen-In-MexicoCopyright-2019-Nancie-Waterman811282017.jpg",
    },
    {
      name: "Plain Chachalaca",
      imgUrl:
        "https://birdseedandbinoculars.com/wordpress/wp-content/uploads/2019/05/Birds-Seen-In-MexicoCopyright-2019-Nancie-Waterman1111272017.jpg",
    },
  ];
}

const birdReducer = (state = birdsReducer()[0], action) => {
  switch (action.type) {
    case 'BIRD':
      return action.payload
    default:
      return state;
  }
}

export default combineReducers({
  birds: birdsReducer,
  bird: birdReducer
})



