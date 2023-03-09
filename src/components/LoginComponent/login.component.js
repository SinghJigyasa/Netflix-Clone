import './login.component.css';
export function Loginform(){
    return(
        <div id='parent' className='container-fluid'>
            <form>
            <h2> <span className="bi bi-person-fill"></span> User Login</h2>
                <div className='mb-2'>
                    <label className='form-label'>UserName</label>
                    <input type="Text" className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Password</label>
                    <input type="password" className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <button className='btn btn-warning w-100'>Login</button>
                </div>
            </form>
        </div>
    )
}