import React from 'react'
import "../styles/feedback.css"
import stars from "../assets/images/stars.png"
import dianne from "../assets/images/dianne.png"
import watson from "../assets/images/watson.png"
import murphy from "../assets/images/murphy.png"
const Feedback = () => {
    const testimonials = [
      {
        id: 1,
        img: stars,
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
        image: dianne,
        name: "Dianne Russell",
        title: "Starbucks",
      },

      {
        id: 2,
        img: stars,
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
        image: watson,
        name: "Kristin Watson",
        title: "Louis Vuitton",
      },

      {
        id: 3,
        img: stars,
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
        image: murphy,
        name: "Kathryn Murphy",
        title: "McDonald's",
      },
    ];
  return (
    <div className=" feedback">
      <div className="container feedback-body">
        <h3>Clients Feedback</h3>
        <h1>Customer testimonials</h1>

        <div  className='feedback-div'>
          {testimonials.map((testimonial) => {
            return (
              <div className="feedback-content" key={testimonial.id}>
                <div className="feedback-contents">
                  <img className="img-fluid" src={testimonial.img} alt="" />
                  <p>{testimonial.paragraph}</p>

                  {/* <div className=' d-flex gap-3 align-items-center justify-content-start feedback-down-div'>
                    <img  src={testimonial.image} alt="" />
                    <div>
                        <h3>{testimonial.name}</h3>
                        <h6>{testimonial.title}</h6>
                    </div>
                </div> */}

                  <div className="d-flex gap-4 align-items-center justify-content-start name-title ">
                      <img src={testimonial.image} alt="" />
                    <div className='d-flex hmm'>
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.title}</p>
                    </div>
                 
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feedback