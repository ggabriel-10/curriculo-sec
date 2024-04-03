import './study.css';
import ButtonStudy from './ButtonStudy';
import micro from '../image/microsoft-certified-azure-fundamentals.png';
import trend from '../image/trend vision.png';
import desec from '../image/desec.png';
import sentinelone from '../image/sentinelone.png';

export function Study(){
    return(
        <div className='area-study' id='study'>
            <h1 className='title-study'>Courses</h1>

            <div className='study-course'>
                <a href="https://www.fiap.com.br/"><img className='icon-study' src='https://image.winudf.com/v2/image1/YnIuY29tLmZpYXAuZmlhcHBfaWNvbl8xNTg1NjU3Njc0XzAzMA/icon.png?w=184&fakeurl=1' alt='icon'/></a>
                <h2>CLOUD FUNDAMENTALS, ADMINISTRATION AND SOLUTION ARCHITECT</h2>
                <ButtonStudy link='https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=3b91d088914f50bb17d28a8ae605079f&action=view' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://www.fiap.com.br/"><img className='icon-study' src='https://image.winudf.com/v2/image1/YnIuY29tLmZpYXAuZmlhcHBfaWNvbl8xNTg1NjU3Njc0XzAzMA/icon.png?w=184&fakeurl=1' alt='icon'/></a>
                <h2>LINUX FUNDAMENTALS</h2>
                <ButtonStudy link='https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/81730/608b79bec994345506317fcee5aee0f5/certificado.png' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://www.fiap.com.br/"><img className='icon-study' src='https://image.winudf.com/v2/image1/YnIuY29tLmZpYXAuZmlhcHBfaWNvbl8xNTg1NjU3Njc0XzAzMA/icon.png?w=184&fakeurl=1' alt='icon'/></a>
                <h2>CYBERSECURITY</h2>
                <ButtonStudy link='https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/85737/48fc29c71ee1358310c24df6a67937c9/certificado.png' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://training.fortinet.com/"><img className='icon-study' src='https://www.fortinet.com/content/dam/fortinet/images/training/icon-nse-fund-cybersecurity.png' alt='icon'/></a>
                <div>
                    <h2>FORTINET CERTIFIED FUNDAMENTALS - FCF</h2>
                    <p>Verification code: <strong>6869480642GM</strong></p>
                </div>
                <ButtonStudy link='https://training.fortinet.com/mod/customcert/verify_certificate.php' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://training.fortinet.com/"><img className='icon-study' src='https://www.fortinet.com/content/dam/fortinet/images/training/icon-nse-asso-cybersecurity.png' alt='icon'/></a>
                <div>
                    <h2>FORTINET CERTIFIED ASSOCIATE - FCA</h2>
                    <p>Verification code: <strong>9049697249GM</strong></p>
                </div>
                <ButtonStudy link='https://training.fortinet.com/mod/customcert/verify_certificate.php' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://www.udemy.com/"><img className='icon-study' alt='icon' src='https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png'/></a>
                <h2>IT SECURITY SPECIALIST</h2>
                <ButtonStudy link='https://www.udemy.com/certificate/UC-085ca238-1c77-4442-831e-5c1550bfc1ac/' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://www.udemy.com/"><img className='icon-study' alt='icon' src='https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png'/></a>
                <h2>SHELL SCRIPT FOR HACKERS</h2>
                <ButtonStudy link='https://www.udemy.com/certificate/UC-d3823042-a1b9-461a-9a3e-43f9bba5ec56/' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://www.microsoft.com/pt-br/"><img className='icon-study' alt='icon' src={micro}/></a>
                <h2>Microsoft Certified: Azure Fundamentals</h2>
                <ButtonStudy link='https://www.credly.com/badges/2934ef74-a1ec-478b-b883-441b8c3887d8/linked_in_profile' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://www.sentinelone.com/"><img className='icon-study' alt='icon' src={sentinelone}/></a>
                <h2>Getting Started With SentinelOne</h2>
                <ButtonStudy link='https://www.linkedin.com/feed/update/urn:li:activity:7144129402912636928/' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://www.oracle.com/br/cloud/"><img className='icon-study' alt='icon' src='https://avatars3.githubusercontent.com/oracle'/></a>
                <h2>Oracle Cloud Infrastructure Foundations</h2>
                <ButtonStudy link='https://catalog-education.oracle.com/ords/certview/sharebadge?id=309BF174963B19F30617AC04B5328C320ABC3C91D5D6E73F173B5A295881496F' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://www.trendmicro.com/en_us/business/products/one-platform.html"><img className='icon-study' alt='icon' src={trend}/></a>
                <h2>Vision One for Administrators</h2>
                <ButtonStudy link='https://heyzine.com/flip-book/08e9770126.html' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://desecsecurity.com/"><img className='icon-study' alt='icon' src={desec}/></a>
                <h2>Introduction to Practical Pentesting</h2>
                <ButtonStudy link='https://desecsecurity.com/academy/introducao-pentest/certificado/1c157c5305cdb42b20334c5039750d61' alt='Certificado' label='Certificate'/>
            </div>

            <div className='study-course'>
                <a href="https://portal.acaditi.com.br/"><img className='icon-study' alt='icon' src='https://portal.acaditi.com.br/pluginfile.php/1/theme_mb2nl/loadinglogo/1671474943/AcadiTImini.png'/></a>
                <h2>Network Defense Essentials</h2>
                <ButtonStudy link='' alt='Certificado' label='Certificate'/>
            </div>
        </div>
        
    )
}