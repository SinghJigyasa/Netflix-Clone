import './NetflixHeader.css'
export function NetflixHeader(){
    return(
        
           <div id='brand'>
           <div id="Heading">
                Netflix
            </div>
            <div>
            <div className="input-group">
            <span   className="bi bi-globe input-group-text"></span>
                <select id='select' className="form-select">
                    <option>English</option>
                    <option>हिंदी</option>
                </select>
                <div id="btn" className='ms-4'>
                     <button className='btn btn-danger'>Sign In</button>
                </div>
            </div>
           </div>
        </div>
    )
}