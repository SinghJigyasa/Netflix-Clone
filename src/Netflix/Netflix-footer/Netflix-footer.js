import './Netflix-footer.css'
export function FooterLayout(){
    return (
        <div className='text-white' id='footer'>
            <div id='row1'>
           <p className='mt-5 ms-0'> Questions? Call 000-800-919-1694</p>
            </div>
            <div className='row mt-4'>
                <div className='col '>
                    <ul type='none'>
                            <li className='mb-3'>FAQ</li>
                            <li className='mb-3'>Investor Relations</li>
                            <li className='mb-3'>Privacy</li>
                            <li className='mb-3'>Speed Test</li>
                    </ul>
                <div>
                    <span className='bi bi-globe-fill'></span>
                    <select className='btn btn-dark'>
                        <option>English</option>
                        <option>हिंदी</option>
                    </select>
                </div>
                </div>
                <div className='col'>
                    <ul type='none'>
                        <li className='mb-3'>Help Centre</li>
                        <li className='mb-3'>Jobs</li>
                        <li className='mb-3'>Cookie Preferences</li>
                        <li className='mb-3'>Legal Notices</li>
                    </ul>
                </div>
                <div className='col'>
                     <ul type='none'>
                        <li className='mb-3'>Account</li>
                        <li className='mb-3'>Ways to Watch</li>
                        <li className='mb-3'>Corporate Information</li>
                        <li className='mb-3'>Only on Netflix</li>
                    </ul>
                </div>
                <div className='col'>
                <ul type='none'>
                        <li className='mb-3'>Media Centre</li>
                        <li className='mb-3'>Terms of Use</li>
                        <li className='mb-3'>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}