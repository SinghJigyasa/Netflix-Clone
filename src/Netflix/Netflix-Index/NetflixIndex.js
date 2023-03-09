import './NetflixIndex.css';
import { NetflixHeader } from '../Netflix-Header/NetflixHeader';
import { NetflixMain } from '../Netflix-Main/Netflix-main.js';
import { Firstlayout } from '../Netflix-layout/Netflix-layout.js';
import { Secondlayout } from '../Netflix-layout-1/Netflix-layout1';
import { Thirdlayout } from '../Netflix-layout2/Netflix-layout2';
import { Fourthlayout } from '../Netflix-layout-3/Netflix-layout3';
import {AccodionExample} from '../Netflix-Acoridon/Netflix-accodion';
import { FooterLayout } from '../Netflix-footer/Netflix-footer';
export function NetflixIndex(){
    return (
       <div className='container-fluid' id='main-index'>
         <div id='banner'>
            <div id='shade'>
               <NetflixHeader/>
              <main>
                    <div>
                        <NetflixMain/>    
                    </div>
              </main>   
            </div>
        </div>
        <div className='Layout-style'>
            <Firstlayout/>
        </div>
        <div className='Layout-style2'>
            <Secondlayout/>
        </div>
        <div className='Layout-style3'>
            <Thirdlayout/>
        </div>
        <div className='Layout-style4'>
            <Fourthlayout/>
        </div>
        <div className='Layout-style5'>
            <AccodionExample/>
        </div>
        <footer>
            <FooterLayout/>
        </footer>
       </div>
        
    )
}