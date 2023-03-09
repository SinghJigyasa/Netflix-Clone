import { NetflixRegister } from '../Netflix-Register/Netflix-register'
import './Netflix-main.css'
export function NetflixMain(){
    return(
        <div className='text-white text-center'>
          <h1> Unlimited movies,TV shows and more.</h1>
           <div id='lower-heading'>Watch anywhere. Cancel anytime.</div>
            <NetflixRegister/>
        </div>
    )
}