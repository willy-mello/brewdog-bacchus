import React from 'react'

export default paramMaker = (obj) => {
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  let queryArray = []
  for (let i = 0; i < keys.length; i++) {
    let value;

    let str = keys[i].toString() + '=' + values[i].toString()
    queryArray.push(str)
  }

  return queryArray.join('&')
}
