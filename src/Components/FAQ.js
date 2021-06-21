import React from 'react'
import  { Accordion, Card } from 'react-bootstrap'
const FAQ = () => {
        return (
            <>
                <section className="faq_section py-5">
                    <div className="container">
                    <div className="row">
                        <aside className="col-md-12 col-sm-12">
                             <h5>Frequently Asked Questions</h5>
                        </aside>
                        <aside className="col-lg-12 mt-4">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                What is blood pressure?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Blood pressure is the pressure of blood pushing against the walls of your arteries. Arteries carry blood from your heart to other parts of your body.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                What do blood pressure numbers mean?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Blood pressure is measured using two numbers:<br />
                                The first number, called systolic blood pressure, measures the pressure in your arteries when your heart beats.
                                The second number, called diastolic blood pressure, measures the pressure in your arteries when your heart rests between beats.
                                If the measurement reads 120 systolic and 80 diastolic, you would say, “120 over 80,” or write, “120/80 mmHg.”</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                                What are normal blood pressure numbers?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>A normal blood pressure level is less than 120/80 mmHg.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                                What is high blood pressure (hypertension)?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>High blood pressure, also called hypertension, is blood pressure that is higher than normal.
Your health care team can diagnose high blood pressure and make treatment decisions by reviewing your systolic and diastolic blood pressure levels and comparing them to levels found in certain guidelines.
The guidelines used to diagnose high blood pressure may differ from health care professional to health care professional:
Some health care professionals diagnose patients with high blood pressure if their blood pressure is consistently 140/90 mm Hg or higher.2 This limit is based on a guideline released in 2003, as seen in the table below.
Other health care professionals diagnose patients with high blood pressure if their blood pressure is consistently 130/80 mm Hg or higher.1 This limit is based on a guideline released in 2017</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                                What causes high blood pressure?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                High blood pressure usually develops over time. It can happen because of unhealthy lifestyle choices, such as not getting enough regular physical activity. Certain health conditions, such as diabetes and having obesity, can also increase the risk for developing high blood pressure. High blood pressure can also happen during pregnancy.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
                                What are the signs and symptoms of high blood pressure?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                High blood pressure usually has no warning signs or symptoms, and many people do not know they have it. Measuring your blood pressure is the only way to know whether you have high blood pressure.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="6">
                                What problems does high blood pressure cause?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                High blood pressure can damage your health in many ways. It can seriously hurt important organs like your heart, brain, kidneys, and eyes.
                                <br />
                                The good news is that, in most cases, you can manage your blood pressure to lower your risk for serious health problems.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="7">
                                What is Diabetes?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy.
                                <br />
                                Most of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="8">
                                What is a normal blood sugar level?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="8">
                                <Card.Body>
                                Fasting normal blood sugar: 
                                <br />
                                Normal for person without diabetes: 70–99 mg/dl (3.9–5.5 mmol/L)
                                <br />
                                <br />
                                The American Diabetes Association (ADA) provides guidelines (not mandates) for blood glucose goals for people with diabetes, and the goals vary depending on when you’re checking your glucose:
                                <br />
                                Fasting (before eating the first meal of the day) and before meals: 80–130 mg/dl (4.4–7.2 mmol/L)
                                <br />
                                Postprandial (one to two hours after a meal): Less than 180 mg/dl (10.0 mmol/L)
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="9">
                                How do you know what your blood glucose level is?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="9">
                                <Card.Body>
                                The best way to know your blood glucose level is to check it with a glucose meter. This means doing a fingerstick with a lancet and getting a drop of blood onto a test strip, then inserting the strip into the meter for a reading.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="10">
                                What are the risks factors of diabetes type 2 diabetes?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="10">
                                <Card.Body>
                                You are at risk for developing type 2 diabetes if you:
                                <ul className="pl-4">
                                    <li className="mt-2">Have prediabetes</li>
                                    <li>Are overweight or obese</li>
                                    <li>Are 45 years or older</li>
                                    <li>Have a parent, brother, or sister with type 2 diabetes</li>
                                    <li>Are physically active less than 3 times a week</li>
                                    <li>have high blood pressure</li>
                                    <li>have a low level of HDL (“good”) cholesterol, or a high level of triglycerides</li>
                                    <li>have a history of heart disease or stroke</li>
                                    <li>have depression NIH external link</li>
                                    <li>have polycystic ovary syndrome NIH external link, also called PCOS</li>
                                    <li>have acanthosis nigricans—dark, thick, and velvety skin around your neck or armpits</li>
                                    <li>Have ever had gestational diabetes (diabetes during pregnancy) or given birth to a baby who weighed more than 9 pounds</li>
                                    <li>Are African American, Hispanic/Latino American, American Indian, or Alaska Native (some Pacific Islanders and Asian Americans are also at higher risk)</li>
                                </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="11">
                                What are the signs and symptoms of diabetes?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="11">
                                <Card.Body>
                                Type 2 diabetes symptoms often develop over several years and can go on for a long time without being noticed (sometimes there aren’t any noticeable symptoms at all).
                                <br />
                                If you have any of the following diabetes symptoms, see your doctor about getting your blood sugar tested:
                                <ul className="pl-4">
                                    <li className="mt-2">Urinate (pee) a lot, often at night</li>
                                    <li>Are very thirsty</li>
                                    <li>Lose weight without trying</li>
                                    <li>Are very hungry</li>
                                    <li>Have blurry vision</li>
                                    <li>Have numb or tingling hands or feet</li>
                                    <li>Feel very tired</li>
                                    <li>Have very dry skin</li>
                                    <li>Have sores that heal slowly</li>
                                    <li>Have more infections than usual</li>
                                    
                                </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="12">
                                How can I lower my chances of developing type 2 diabetes?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="12">
                                <Card.Body>
                                Lose weight and keep it off. You may be able to prevent or delay diabetes by losing 5 to 7 percent of your starting weight.1 For instance, if you weigh 200 pounds, your goal would be to lose about 10 to 14 pounds. 
                                <br />
                                Move more. Get at least 30 minutes of physical activity 5 days a week. If you have not been active, talk with your health care professional about which activities are best. Start slowly to build up to your goal. 
                                <br />
                                Eat healthy foods most of the time. Eat smaller portions to reduce the amount of calories you eat each day and help you lose weight. Choosing foods with less fat is another way to reduce calories. Drink water instead of sweetened beverages
                               
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="13">
                                What is cholesterol?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="13">
                                <Card.Body>
                                Cholesterol is a waxy, fat-like substance made by your liver. It’s not totally “bad.” In fact, your body needs it for the formation of cell membranes, certain hormones, and vitamin D. But too much cholesterol can pose a problem.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="14">
                                What are some of the risks for high cholesterol?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="14">
                                <Card.Body>
                               
                                Certain health conditions, your lifestyle, and your family history can raise your risk for high cholesterol. These are called “risk factors.”
                                <ul className="pl-4">
                                    <li className="mt-2">Type 2 diabetes lowers high-density lipoprotein (HDL, or “good”) cholesterol levels and raises low-density lipoprotein (LDL, or “bad”) cholesterol levels. This combination raises your risk of heart disease and stroke. </li>
                                    <li>Obesity is linked to higher triglyceride levels, higher LDL cholesterol levels, and lower HDL cholesterol levels. Obesity can also lead to heart disease, high blood pressure, and diabetes. Talk to your health care team about a plan to reduce your weight to a healthy level.</li>
                                    <li>Other health conditions. Other health conditions, such as familial hypercholesterolemia (FH), can cause very high LDL cholesterol levels. </li>
                                    <li>Eating a diet high in saturated fat and trans fat may contribute to high cholesterol and related conditions, such as heart disease.</li>
                                    <li>Not getting enough physical activity can make you gain weight, which can lead to high cholesterol.</li>
                                    <li>Smoking damages your blood vessels, making them more likely to collect fatty deposits. Smoking may also lower high-density lipoprotein (HDL, or “good”) cholesterol levels. If you don’t smoke, don’t start.</li>
                                    <li>Some people have an inherited genetic condition called familial hypercholesterolemia (FH). This condition causes very high low-density lipoprotein (LDL, or “bad”) cholesterol levels beginning at a young age that, left untreated, continue to worsen with age. FH is relatively rare in the United States. </li>
                                    <li>If someone in your family has a heart attack early in life, talk to your health care team about your own and your other family members’ risk for FH and whether your family should get tested.</li>
                                    <li>The risk for high cholesterol can increase even more when a family history of high cholesterol combines with unhealthy lifestyle choices, such as eating an unhealthy diet.</li> 
                                </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="15">
                                How to prevent high cholesterol?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="15">
                                <Card.Body>
                                <ul className="pl-4">
                                    <li className="mt-2">Limit foods high in saturated fat. Saturated fats come from animal products (such as cheese, fatty meats, and dairy desserts) and tropical oils (such as palm oil). Foods that are higher in saturated fat may be high in cholesterol.</li>
                                    <li>Choose foods that are low in saturated fat, trans fat, sodium (salt), and added sugars. These foods include whole grains and fruits and vegetables.</li>
                                    <li>Eat foods naturally high in fiber, such as oatmeal and beans (black, pinto, kidney, lima, and others) and unsaturated fats, which can be found in avocado, vegetable oils like olive oil, and nuts). These foods may help prevent and manage high levels of low-density lipoprotein (LDL, or “bad”) cholesterol and triglycerides while increasing high-density lipoprotein (HDL, or “good”) cholesterol levels.</li>
                                    
                                </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="16">
                                What are the signs and symptoms of high cholesterol?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="16">
                                <Card.Body>
                                High cholesterol has no symptoms. A blood test is the only way to detect if you have it.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="17">
                                Is there any classification for different cholesterol levels?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="17">
                                <Card.Body>
                                There are different guidelines or classifications. For the average child and adolescent, the National Heart, Lung, and Blood Institute classifies cholesterol levels (mg/dL) as follows:
                                <div className="table-responisve table1">
                                    <table>
                                        <tr>
                                            <th></th>
                                            <th>Total cholesterol</th>
                                            <th>HDL cholesterol</th>
                                            <th>LDL cholesterol</th>
                                        </tr>
                                        <tr>
                                            <td>Acceptable</td>
                                            <td>lower than 170</td>
                                            <td>higher than 45 </td>
                                            <td>lower than 110 </td>
                                        </tr>
                                        <tr>
                                            <td>Borderline</td>
                                            <td>170–199 </td>
                                            <td>40–45</td>
                                            <td>110–129</td>
                                        </tr>
                                        <tr>
                                            <td>High</td>
                                            <td>200 or higher</td>
                                            <td>n/a</td>
                                            <td>higher than 130</td>
                                        </tr>
                                        <tr>
                                            <td>Low</td>
                                            <td>n/a</td>
                                            <td>lower than 40</td>
                                            <td>n/a</td>
                                        </tr>
                                    </table>
                                </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="18">
                                What are some of the complications associated with high cholesterol?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="18">
                                <Card.Body>
                                High cholesterol can cause a dangerous accumulation of cholesterol and other deposits on the walls of your arteries (atherosclerosis). These deposits (plaques) can reduce blood flow through your arteries, which can cause complications, such as:
                                <ul className="pl-4">
                                    <li className="mt-2">stroke</li>
                                    <li>heart attack</li>
                                    <li>angina (chest pain)</li>
                                    <li>high blood pressure</li>
                                    <li>peripheral vascular disease</li>
                                    <li>chronic kidney disease</li>
                                </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="19">
                                How often should you check your cholesterol?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="19">
                                <Card.Body>
                                The American Heart Association recommends that all adults have their cholesterol checked every 4 to 6 years, starting at age 20, which is when cholesterol levels can start to go up.
                                <br />
                                As we age, cholesterol levels tend to rise. Men are generally at a higher risk than women for higher cholesterol. However, a woman’s risk goes up after she enters menopause.
                                <br />
                                For those with high cholesterol and other cardiac risk factors such as diabetes, more frequent testing is recommended.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="20">
                                How do you define adult overweight and obesity?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="20">
                                <Card.Body>
                                Weight that is higher than what is considered as a healthy weight for a given height is described as overweight or obese. Body Mass Index, or BMI, is used as a screening tool for overweight or obesity.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="21">
                                How to calculate an adult body mass index (BMI)
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="21">
                                <Card.Body>
                                Body Mass Index (BMI) is a person’s weight in kilograms divided by the square of height in meters. A high BMI can be an indicator of high body fatness.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="22">
                                What are the different BMI categories?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="22">
                                <Card.Body>
                                The different BMI Categories are:
                                <ul className="pl-4">
                                    <li className="mt-2">Underweight = -18.5</li>
                                    <li>Normal weight = 18.5–24.9 </li>
                                    <li>Overweight = 25–29.9 </li>
                                    <li>Obesity = BMI of 30 or greater</li>
                                </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="23">
                                What are some of the causes for overweight and obesity?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="23">
                                <Card.Body>
                                Overweight and obesity develop over time when you take in more calories than you use, or when energy IN is more than your energy OUT. This type of energy imbalance causes your body to store fat.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="24">
                                Can medical conditions cause overweight and obesity?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="24">
                                <Card.Body>
                                Because the endocrine system produces hormones that help maintain energy balances in the body, the following endocrine disorders or tumor affecting the endocrine system can cause overweight and obesity.
                                <br />
                                Hypothyroidism. People with this condition have low levels of thyroid hormones. These low levels are associated with decreased metabolism and weight gain, even when food intake is reduced. People with hypothyroidism also produce less body heat, have a lower body temperature, and do not efficiently use stored fat for energy.
                                <br />
                                Cushing’s syndrome. People with this condition have high levels of glucocorticoids, such ascortisol, in the blood. High cortisol levels make the body feel like it is underchronic stress. As a result, people have an increase in appetite and the body will store more fat. Cushing’s syndrome may develop after taking certain medicines or because the body naturally makes too much cortisol.
                                <br />
                                Tumors. Some tumors, such as craneopharingioma, can cause severe obesity because the tumors develop near parts of the brain that control hunger.
                                        Several genetic syndromes are also associated with overweight and obesity
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="25">
                                Can some medicines cause overweight and obesity?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="25">
                                <Card.Body>
                                Medicines such as antipsychotics, antidepressants, antiepileptics, and antihyperglycemics can cause weight gain and lead to overweight and obesity.
                                <br />
                                Talk to your doctor if you notice weight gain while you are using one of these medicines. Ask if there are other forms of the same medicine or other medicines that can treat your medical condition, but have less of an effect on your weight. Do not stop taking the medicine without talking to your doctor.
                                <br />
                                Several parts of your body, such as your stomach, intestines, pancreas, and fat tissue, use hormones to control how your brain decides if you are hungry or full. Some of these hormones are insulin, leptin, glucagon-like peptide (GLP-1), peptide YY, and ghrelin.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>



                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="26">
                                What are some of the risk factors for overweight and obesity?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="26">
                                <Card.Body>
                                Unhealthy lifestyle habits: Lack of physical activity, unhealthy eating patterns, not enough sleep, and high amounts of stress can increase your risk for overweight and obesity.
                                <ul className="pl-4">
                                    <li className="mt-2">Eating more calories than you use. Eating too much saturated and trans fats. Eating foods high in added sugars.</li>
                                </ul>
                                <br />
                                Not enough sleep
                                <br />
                                Many studies have seen a high BMI in people who do not get enough sleep. Some studies have seen a relationship between sleep and the way our bodies use nutrients for energy and how lack of sleep can affect hormones that control hunger urges. Visit our Sleep Deprivation and Deficiency Health Topic for more information about lack of sleep.
                                <br />
                                High amounts of stress
                                <br />
                                Acute stress and chronic stress affect the brain and trigger the production of hormones, such as cortisol, that control our energy balances and hunger urges. Acute stress can trigger hormone changes that make you not want to eat. If the stress becomes chronic, hormone changes can make you eat more and store more fat.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="27">
                                What are some of the complication of overweight and obesity?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="27">
                                <Card.Body>
                                Obesity may cause the following complications:
                                <ul className="pl-4">
                                    <li className="mt-2">Type 2 diabetes</li>
                                    <li>High blood cholesterol and high triglyceride </li>
                                    <li>Diseases of the heart and blood vessels such as high blood pressure, atherosclerosis, heart attacks and stroke</li>
                                    <li>Respiratory problems such as obstructive sleep apnea, asthma, and obesity hypoventilation syndrome</li>
                                    <li>Metabolic Syndrome </li>
                                    <li>Back pain  </li>
                                    <li>Non-alcoholic fatty liver disease (NAFLD)</li>
                                    <li>Osteoarthritis, a chronic inflammation that damages the cartilage and bone in or around the affected joint.</li>
                                    <li>Urinary incontinence, the unintentional leakage of urine. Chronic obesity can weaken pelvic muscles, making it harder to maintain bladder control.</li>
                                    <li>While it can happen to both sexes, it usually affects women as they age.</li>
                                    <li>Gallbladder disease</li>
                                    <li>Emotional health issues such as low self-esteem or depression. This may commonly occur in children.</li>
                                    <li>Cancers of the esophagus, pancreas, colon, rectum, kidney, endometrium, ovaries, gallbladder, breast, or liver.</li>
                                </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="28">
                                Why my screen does respond when I click “Next” to register
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="28">
                                <Card.Body>
                                Probably some required fields are missing. Make sure to complete all the fields before you click “Next”.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="29">
                                What if I don’t want to enter all the required fields?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="29">
                                <Card.Body>
                                In order to register and use the app users need to complete all the steps of the registration.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="30">
                                Why does the BIG4 Health Pledge keep appearing every time that I sign in?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="30">
                                <Card.Body>
                                This is a feature to keep you motived and remind you of your commitment to improve your BIG4 numbers. Remember, you have the option skip the video after you have watched it.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="31">
                                Why does the How It Works keep appearing every time that I sign in?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="31">
                                <Card.Body>
                                This is a feature to help you become familiar with the app. Remember, you have the option skip the video after you become familiar with the app.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="32">
                                How do I use the exercise features?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="32">
                                <Card.Body>
                                Your app comes with multiple built in exercises (MY EXERCISE) and multiple exercise videos (EXERCISE VIDEOS)
                                <br />
                                MY EXERCISE gives you the option to practice any of the built in exercises or you can tap on the + (plus sign) on the upper right of MY EXERCISE screen add your own exercise and the time duration.
                                <br />
                                EXERCISE VIDEOS are multiple videos for multiple levels of exercise. 
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="33">
                                How do I use the Healthy Eating features?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="33">
                                <Card.Body>
                                Your app comes with a weekly calendar to add and tract your breakfast, snacks, lunch and dinner. Just tap on the + (plus sign) inside of the circle add each meal.
                                <br />
                                Tap in the rectangle to display the keyboard and write the meal that you want to add. Tap add to add your new meal and tap safe. The BIG4 Health App website has multiple healthy meal opations to select from.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        
                        </aside>
                    </div>
                    </div>
                </section>
            </>
        )
    
}

export default FAQ;
