import { FaBars } from 'react-icons/fa';
import {IoClose} from 'react-icons/io5';
import { addClass } from './add.class';
import { removeClass } from './remove.class';
import gmimagem from '../image/gm-imagem.png';

import '../App.css';
export function Header() {
    return (
            <div>
                <header className="App-header">
                    <nav className='navegation'>
                        <img src="https://cdn.icon-icons.com/icons2/2072/PNG/512/antivirus_internet_protect_safe_security_shape_shield_icon_127103.png" className="App-logo" alt="logo" />
                        <ul>
                            <li translate="no"><a className='item-navegation' href="#header">Home</a></li>
                            <li><a className='item-navegation' href="#conteudo">About Me</a></li>
                            <li><a className='item-navegation' href="#study">Courses</a></li>
                            <li><a className='item-navegation' href="#certificados">Certificates</a></li>
                            <li><a className='item-navegation' href="#experiencias">Experiences</a></li>
                            <li><a className='item-navegation' href="#contato">Contact</a></li>
                        </ul>
                    </nav>
                    <nav className='navegation-mobile' >
                        <FaBars className='item-bars' onClick={addClass}/>
                        <ul className='navegation-mobile-item' id='nav-mobile'>
                            <IoClose size={45} className='item-close' onClick={removeClass}/>
                            <li translate="no"><a className='item-navegation' href="#header"onClick={removeClass}>Home</a></li>
                            <li><a className='item-navegation' href="#conteudo"onClick={removeClass}>About Me</a></li>
                            <li><a className='item-navegation' href="#study"onClick={removeClass}>Courses</a></li>
                            <li><a className='item-navegation' href="#certificados"onClick={removeClass}>Certificates</a></li>
                            <li><a className='item-navegation' href="#experiencias"onClick={removeClass}>Experiences</a></li>
                            <li><a className='item-navegation' href="#contato"onClick={removeClass}>Contact</a></li>
                        </ul>
                    </nav>

                </header>
                <section className='information-app'>
                <div className='title-app'>
                    <h1 translate='no'>Giovanni Medeiros</h1>
                    <h2>Cyber Security Analyst</h2>
                </div>
                <img src={gmimagem} className="my-photo" alt="logo" />
                </section>
            </div>
    )
}