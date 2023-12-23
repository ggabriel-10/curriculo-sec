import './certificados.css';
import azure from '../image/microsoft-certified-azure-fundamentals.png';
import fortnet from '../image/3-associate-logo.png';
import oracle from '../image/OCIF2023CA-removebg-preview.png';

export function Certificados(){
    return(
        <div className='area-tecnologies' id='certificados'>
            <h1 className='title-tecnologies'>Certificates</h1>
            <div className="image-tecnologies">
                <div className='image-tecnologies-one'>
                    <img className='image-tec' align="center" alt="Azure" height="80" width="80" src={azure}/>
                    <img className='image-tec' align="center" alt="Oracle" height="80" width="80" src={oracle}/>
                    <img className='image-tec' align="center" alt="HTML" height="80" width="80" border-radius="50%" src={fortnet}/>
                </div>
            </div>
        </div>
    )
}