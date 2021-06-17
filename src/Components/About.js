import React from 'react';

const About = () => {
    return (
        <>
            <section className="about_sec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 text-left">
                            <h3>About</h3>
                            <p className="pt-3">Back in February 2014, a physician recognized
                            as a “Champion of Health and Wellness”
                            started a campaign to create awareness of
                            heart disease, high blood pressure, diabetes,
                            and cancer. He led the campaign for four months
                            and screened thousands of patients, health
                            care providers, and staffs. Later, his empathy
                            engaged many in a new way of eating,
                            drinking, exercising, stress management,
                                and socializing in a seamless way.</p>
                        </div>
                        <div className="col-md-6 mb-3 text-center">
                            <img src={require("../images/stethoscope.png").default} alt="img" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="about_sec1 py-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 mb-3 text-center">
                            <img src={require("../images/mob3.png").default} alt="img" />
                        </div>
                        <div className="col-md-6 mb-4 text-left">
                            <p className="pt-3">Now the inspiration has turned into the only worldwide "All-In-One" mobile technology that can connect millions
                            of patients to health care providers; a mobile technology t
                            hat can help millions of users prevent or improve the
                            BIG4: Diabetes, High Blood Pressure, High Cholesterol,
                            and Obesity; a tool that your business can use to
                                decrease health insurance cost.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_sec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 text-left">

                            <p className="pt-3">The BIG4 Health App is helping to decrease
                            patient hospital readmission to the emergency
                            room (ER), improve patients/clients follow
                            up & medication adherence, and saving
                            health care cost. The technology empowers
                            you and your loved ones to take control of
                                your life while still enjoying every minute.</p>
                        </div>
                        <div className="col-md-6 mb-3 text-center">
                            <img src={require("../images/last_para.png").default} alt="img" />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default About;