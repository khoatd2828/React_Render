import React from 'react'
import { BannerComponent } from './BannerComponent'
import { ItemComponent } from './ItemComponent'

export const BodyComponent = () => {
  return (
    <div className='container'>
        <BannerComponent/>
        <ItemComponent/>
    </div>
  )
}
