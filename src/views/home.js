import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import Question1 from '../components/question1'
import logo from '../assets/images/logo for inclusive.jpg'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Thorough Productive Echidna</title>
        <meta property="og:title" content="Thorough Productive Echidna" />
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive home__navbar"
        >
          <span className="home__logo-container">
            <img className='home__logo' src={logo} alt='logo for inclusive'/>
          </span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span className="home-nav12 bodySmall ">Home</span>
              <span className="home-nav2 bodySmall">About</span>
              <span className="home-nav3 bodySmall">Features</span>
              <span className="home-nav4 bodySmall">Resources</span>
              <span className="home-nav5 bodySmall">Contact</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">ACCESSIBLE</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span>Home</span>
                <span className="home-nav21 bodySmall">About</span>
                <span className="home-nav31 bodySmall">Features</span>
                <span className="home-nav41 bodySmall">Resources</span>
                <span className="home-nav51 bodySmall">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Accessibility and Inclusion
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Empowering learners with disabilities and underserved
                    communities
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
          </div>


          <div className="home-hero2">
            <h1 className="home-text014">Let&apos;s keep things organized</h1>
            <span className="home-text015">
              <span>
                <span>
                  We are happy to hear from you
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <div className="home-btn-group1">
              <button className="home-button button">Get Started</button>
              <button className="home-button1 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Empowering Learners with Disabilities and Underserved
                Communities
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the key features of our website that make
                      learning accessible, personalized, collaborative, and
                      diverse.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Accessibility"
                subHeading="Ensuring that the website is accessible for learners with disabilities. The website is compatiable with assistive technologies and devices such as screen readers, keyboard and voice commands."
              ></FeatureCard>
              <FeatureCard
                heading="Personalization"
                subHeading="Providing personalized learning experiences based on individual needs and preferences. You can also choose from the different learning styles such as visual, auditory, or kinesthetics"
              ></FeatureCard>
              <FeatureCard
                heading="Collaboration"
                subHeading="Facilitating collaboration among learners and mentors for a more interactive learning environment. Favors joining online communities, participate in discussions, share your feedback and insights."
              ></FeatureCard>
              <FeatureCard
                heading="Diversity"
                subHeading="Promoting inclusivity and diversity by catering to the needs of underserved communities"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose the Right Plan for You</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock your full potential with our flexible pricing options
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text044 heading3">Free</span>
                <span className="bodySmall">
                  A free plan with limited features
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text045">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text048">✔</span>
                  <span className="bodySmall">Access to basic resources</span>
                </div>
                <div className="home-container10">
                  <span className="home-text049">✔</span>
                  <span className="bodySmall">
                    Limited mentorship opportunities
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text050">✔</span>
                  <span className="bodySmall">
                    Collaboration with other learners
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text051">✔</span>
                  <span className="bodySmall">Diverse learning materials</span>
                </div>
              </div>
              <button className="home-button2 buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container13">
                <span className="home-text052 heading3">BASIC</span>
                <span className="bodySmall">
                  A plan with additional features for enhanced learning
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text053">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">20</span>
                <span className="home-text056">/ month</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text057">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home-container17">
                  <span className="home-text059">✔</span>
                  <span className="bodySmall">
                    Access to advanced resources
                  </span>
                </div>
                <div className="home-container18">
                  <span className="home-text060">✔</span>
                  <span className="bodySmall">
                    Personalized mentorship opportunities
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text061">✔</span>
                  <span className="bodySmall">
                    Enhanced collaboration with other learners
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text062">✔</span>
                  <span className="bodySmall">
                    Expanded library of diverse learning materials
                  </span>
                </div>
              </div>
              <button className="home-button3 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container21">
                <span className="home-text063 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  A premium plan with exclusive features for accelerated growth
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text066">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">50</span>
                <span className="home-text069">/ month</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text070">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home-container25">
                  <span className="home-text072">✔</span>
                  <span className="bodySmall">Access to premium resources</span>
                </div>
                <div className="home-container26">
                  <span className="home-text073">✔</span>
                  <span className="bodySmall">
                    Personalized mentorship from industry experts
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text074">✔</span>
                  <span className="bodySmall">
                    Exclusive collaboration opportunities with professionals
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text075">✔</span>
                  <span className="bodySmall">
                    Extensive library of diverse and specialized learning
                    materials
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="home-testimonial">
          <div className="home-container29">
            <div className="home-container30">

              <div className="home-container31">
                <TestimonialCard2
                  profileSrc="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName1"
                ></TestimonialCard2>
              </div>
              <TestimonialCard2
                profileSrc="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName2"
              ></TestimonialCard2>
            </div>
            <div className="home-container32">
              <TestimonialCard4
                pictureSrc="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
                profileSrc="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard4>
            </div>
          </div>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container faqContainer"></div>
      </div>
      <div className="home-faq1">
        <div className="faqContainer">
          <div className="home-faq2">
            <div className="home-container33">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text081 heading2">Common questions</h2>
              <span className="home-text082 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container34">
              <Question1
                answer="The purpose of this website is to create an accessible, personalized, collaborative, and diverse learning platform for learners with disabilities and underserved communities."
                question="What is the purpose of this website?"
              ></Question1>
              <Question1
                answer="The WCAG guidelines are a set of accessibility standards provided by the Web Accessibility Initiative (WAI) to ensure that websites are accessible to people with disabilities."
                question="What are the WCAG guidelines?"
              ></Question1>
              <Question1
                answer="This website utilizes various web tools and technologies to provide learners with mentors, resources, and opportunities to learn and grow."
                question="What web tools and technologies are used on this website?"
              ></Question1>
              <Question1
                answer="Blind users can benefit from the speech-to-text recognition API, which allows them to convert spoken words into written text."
                question="What advanced features are available for blind users?"
              ></Question1>
              <Question1
                answer="Yes, users without limbs but can see can utilize gesture interaction to navigate and interact with the website."
                question="Are there any features for users without limbs but can see?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container35">
            <span className="logo">inclusolvE</span>
            <nav className="home-nav1 bodySmall home-nav1">
              <span className="home-nav11 bodySmall">Home</span>
              <span className="home-nav22 bodySmall">About</span>
              <span className="home-nav32 bodySmall">Features</span>
              <span className="home-nav42 bodySmall">Resources</span>
              <span className="home-nav52 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container36">
            <div className="home-icon-group1">
              <footer className="home-footer2">
                <div className="home-container37">
                  <div className="home-logo3"></div>
                  <div className="home-links-container">
                    <div className="home-container38">
                      <div className="home-product-container">
                        <span className="home-text085">Product</span>
                        <span className="home-text086">Features</span>
                        <span className="home-text087">Pricing</span>
                        <span className="home-text088">Tutorials</span>
                        <span>Releases</span>
                      </div>
                      <div className="home-company-container">
                        <span className="home-text090">Company</span>
                        <span className="home-text091">About</span>
                        <span className="home-text092">Careers</span>
                        <span className="home-text093">Contact</span>
                        <span>Blog</span>
                      </div>
                    </div>
                    <div className="home-container39">
                      <div className="home-contact">
                        <span className="home-text095">Contact Us</span>
                        <span className="home-text096">
                          inclusolve@support.com
                        </span>
                        <span>+256789789789</span>
                      </div>
                      <div className="home-socials">
                        <span className="home-text098">Follow Us</span>
                        <div className="home-icon-group2">
                          <svg
                            viewBox="0 0 950.8571428571428 1024"
                            className="home-icon10"
                          >
                            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 877.7142857142857 1024"
                            className="home-icon12"
                          >
                            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 602.2582857142856 1024"
                            className="home-icon14"
                          >
                            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-separator1"></div>
                <span className="home-text099">
                  © 2024 Inclusolve, All Rights Reserved.
                </span>
              </footer>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
