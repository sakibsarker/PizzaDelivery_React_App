import React from 'react'

const Menu = () => {
  return (
    <div className='about'>
      <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="about__img">
                        <img src="/image/pizzahot.jpg" alt="Pizza" />
                    </div>
                </div>
                <div className="col-6 p-25">
                <h3>The Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quo eaque non vitae nisi? Necessitatibus obcaecati</p>
            <div className="about__btn">
                <a href="" className='btn btn-smart'>VIEW MORE</a>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu
