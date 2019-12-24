export const stringToColor = function(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  var color = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    color += ('00' + value.toString(16)).substr(-2)
  }
  return color
}

export const customizedEmojiData = [
  {
    id: 'developer',
    colons: ':female-technologist:'
  },
  {
    id: 'money_with_wings',
    colons: ':money_with_wings:'
  },
  {
    id: 'blue_heart',
    colons: ':blue_heart:'
  },
  {
    id: 'heart',
    colons: ':heart:'
  },
  {
    id: 'black_heart',
    colons: ':black_heart:'
  },
  {
    id: 'heart_eyes',
    colons: ':heart_eyes:'
  },
  {
    id: 'sunglasses',
    colons: ':sunglasses:'
  },
  {
    id: 'poop',
    colons: ':poop:'
  },
  {
    id: 'dog',
    colons: ':dog:',
  },
  {
    id: 'mushroom',
    colons: ':mushroom:',
  },
  {
    id: 'santa',
    colons: ':santa::skin-tone-3:',
  },
  {
    id: 'christmas_tree',
    colons: ':christmas_tree:'
  },
  {
    id: 'snowflake',
    colons: ':snowflake:'
  },
  {
    id: 'snowman',
    colons: ':snowman:'
  },
]