import './certificados.css';


export function Certificados(){
    return(
        <div className='area-tecnologies' id='certificados'>
            <h1 className='title-tecnologies'>Certificates</h1>
            <div className="image-tecnologies">
                <div className='image-tecnologies-one'>
                    <img className='image-tec' align="center" alt="Azure" height="70" width="80" src="https://images.credly.com/size/680x680/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png"/>
                    <img className='image-tec' align="center" alt="Trend" height="70" width="80" src="https://i.ytimg.com/an/5LyrLIPpDv5MSLgdRJ95dg/featured_channel.jpg?v=54ab602d"/>
                    <img className='image-tec' align="center" alt="HTML" height="60" width="70" border-radius="50%" src="https://image.winudf.com/v2/image1/YnIuY29tLmZpYXAuZmlhcHBfaWNvbl8xNTg1NjU3Njc0XzAzMA/icon.png?w=184&fakeurl=1"/>
                    <img className='image-tec' align="center" alt="CSS" height="60" width="70" src="https://avatars.githubusercontent.com/u/39314919?s=280&v=4"/>
                </div>
                <div className='image-tecnologies-two'>
                    <img className='image-tec' align="center" alt="Python" height="60" width="100" src="https://www.zadara.com/wp-content/uploads/Zadara_Logo_yel.png"/>
                    <img className='image-tec' align="center" alt="Node" height="60" width="70" src="https://prime.acaditi.com.br/pluginfile.php/1/theme_mb2nl/loadinglogo/1682706960/AcadiTImini.png" />
                    
                </div>
            </div>
        </div>
    )
}