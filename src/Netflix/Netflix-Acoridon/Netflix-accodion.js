import "./Netflix-accodion.css"
import { Accordion, AccordionButton } from "react-bootstrap"
import AccordionItem from "react-bootstrap/esm/AccordionItem"
import { NetflixRegister } from "../Netflix-Register/Netflix-register"

export function AccodionExample(){
    return(
        <div className="container-fluid">
          <div className="row text-white" id="HeadDesign"> Frequently Asked Questions</div>
          <div id="AccoDesign" className="row">
          <Accordion>

      <Accordion.Item eventKey="0" className="bg-dark text-white">
        <AccordionButton className="bg-dark text-white">What is Netflix?</AccordionButton>
        <Accordion.Body>
            <span>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</span><br/>
            <span>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</span>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="bg-dark text-white mt-2">
        <AccordionButton className="bg-dark text-white">How much does Netflix cost</AccordionButton>
        <Accordion.Body>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="bg-dark text-white mt-2">
          <AccordionButton className="bg-dark text-white">Where can I Watch</AccordionButton>
        <Accordion.Body>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
          You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.   
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="3" className="bg-dark text-white mt-2">
          <AccordionButton className="bg-dark text-white">How do I Cancel</AccordionButton>
        <Accordion.Body>
        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="bg-dark text-white mt-2">
          <AccordionButton className="bg-dark text-white">What can I Watch on Netflix</AccordionButton>
        <Accordion.Body>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="bg-dark text-white mt-2">
         <AccordionButton className="bg-dark text-white" > 
         Is Netflix good for kids
         </AccordionButton>
        <Accordion.Body>
          The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
       <div className="p-4" id="down">
       <NetflixRegister/>
       </div>
          </div>
        </div>
    )
}