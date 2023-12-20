import './contato.css';

export function Contato(){
    return(
        <div className="contato" id='contato'>
            <h1 className='contato-title'>Contact</h1>
            <p>Get in touch with me!</p>
            <div className="contato__container">
                <div className='contato__container_one'>
                    <div className="contato__container__item">
                            <a href="mailto:ggabriel.medeiros@protonmail.com" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/6711/6711567.png" className="item-contato" alt="E-mail" />
                            </a>
                    </div>
                    <div className="contato__container__item">
                            <a href="https://github.com/ggabriel-10" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" className="item-contato" alt="Github" />
                            </a>
                    </div>
                </div>

                <div className='contato__container_two'>
                    <div className="contato__container__item">
                            <a href="https://www.linkedin.com/in/giovanni-medeiros-382806192/" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/4401/4401402.png" className="item-contato" alt="LindedIn" />
                            </a>
                    </div>
                    
                    <div className="contato__container__item">
                            <a href="https://api.whatsapp.com/send?phone=5511951269796" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" className="item-contato" alt="WhatsApp" />
                            </a>
                    </div>
                </div>
            </div>
            
            <div className="contato__container__language">
                <img className='img-language' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png' alt='spanish'></img>
                <img className='img-language' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png' alt='england'></img>
            </div>
        </div>
    )
}