import './certificados.css';
import azure from '../image/microsoft-certified-azure-fundamentals.png';
import oracle from '../image/OCIF2023CA-removebg-preview.png';

export function Certificados(){
    return(
        <div className='area-tecnologies' id='certificados'>
            <h1 className='title-tecnologies'>Certificates</h1>
            <div className="image-tecnologies">
                <div className='image-tecnologies-one'>
                    <img className='image-tec' align="center" alt="Azure" height="120" width="120" src={azure}/>
                    <img className='image-tec' align="center" alt="Oracle" height="120" width="120" src={oracle}/>
                    <img className='image-tec' align="center" alt="HTML" height="120" width="120" border-radius="50%" src="https://www.fortinet.com/content/dam/fortinet/images/training/icon-nse-asso-cybersecurity.png"/>
                    <img className='image-tec' align="center" alt="HTML" height="120" width="120" border-radius="50%" src="https://www.fortinet.com/content/dam/fortinet/images/training/icon-nse-fund-cybersecurity.png"/>
                </div>
            </div>
        </div>
    )
}