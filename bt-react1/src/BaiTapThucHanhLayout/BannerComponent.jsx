import React from 'react'

export const BannerComponent = () => {
  return (
    <div>
      <div className="card card-banner mx-auto mt-5 bg-light" style={{border: 'none'}} >
        <div className="card-body text-center">
          <h1 className="card-title card-banner-title fw-bold">A warm welcome</h1>
          <p className="card-text fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
          <a href="#" className="btn btn-primary btn-lg">Call to action</a>
        </div>
      </div>
    </div>
  )
}
