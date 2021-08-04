import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

const Packages = () => {
    return (
        <>
        <Header/>
        <section className="package_bg py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>MY PACKAGE</h5>
                    </div>
                    <div className="col-md-4 text-center">
                        
                        
                        
                    </div>
                    <div className="col-md-4 adbn text-right">
                        <button className="btn">Add Member</button>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default Packages;