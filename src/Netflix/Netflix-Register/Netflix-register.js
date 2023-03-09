
export function NetflixRegister(){
    return(
        <div className="text-white">
           <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
            <div className="input-group input-group-lg mt-4">
                <input type="email" placeholder="Email address" className="form-control"/>
               <button className="btn btn-danger">
                Get Started
                <span className="bi bi-chevron-compact-right"></span>
               </button>
            </div>
          
        </div>
    )
}