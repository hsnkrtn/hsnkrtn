import React from 'react'

function HastaneFotografları(props) {
    const Gorsel=props.Gorsel
    console.log(props)
  return (
    <div className="HastaneFotograflariImage">
              <img src={Gorsel}></img>
            </div>  )
}

export default HastaneFotografları