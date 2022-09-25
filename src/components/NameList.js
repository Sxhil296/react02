import React from 'react'

function NameList() {

    const names = ['Bruce', 'Clark' , 'Diana']
    const NameList = names.map((name, index) => <h2 key={name}>{index} {name}</h2>)


  return (
    // <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    // </div>

    // map()
    <div>{NameList}</div>
  )
}

export default NameList