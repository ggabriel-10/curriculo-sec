import './study.css';
import ButtonStudy from './ButtonStudy';
import micro from '../image/micro.png';
import trend from '../image/trend vision.png';

export function Study(){
    return(
        <div className='area-study' id='study'>
            <h1 className='title-study'>Cursos</h1>

            <div className='study-course'>
                <a href="https://www.fiap.com.br/"><img className='icon-study' src='https://image.winudf.com/v2/image1/YnIuY29tLmZpYXAuZmlhcHBfaWNvbl8xNTg1NjU3Njc0XzAzMA/icon.png?w=184&fakeurl=1' alt='icon'/></a>
                <h2>CLOUD FUNDAMENTALS, ADMINISTRATION AND SOLUTION ARCHITECT</h2>
                <ButtonStudy link='https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=3b91d088914f50bb17d28a8ae605079f&action=view' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://www.fiap.com.br/"><img className='icon-study' src='https://image.winudf.com/v2/image1/YnIuY29tLmZpYXAuZmlhcHBfaWNvbl8xNTg1NjU3Njc0XzAzMA/icon.png?w=184&fakeurl=1' alt='icon'/></a>
                <h2>LINUX FUNDAMENTOS</h2>
                <ButtonStudy link='https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/81730/608b79bec994345506317fcee5aee0f5/certificado.png' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://www.fiap.com.br/"><img className='icon-study' src='https://image.winudf.com/v2/image1/YnIuY29tLmZpYXAuZmlhcHBfaWNvbl8xNTg1NjU3Njc0XzAzMA/icon.png?w=184&fakeurl=1' alt='icon'/></a>
                <h2>CIBERSECURITY</h2>
                <ButtonStudy link='https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/85737/48fc29c71ee1358310c24df6a67937c9/certificado.png' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://www.rocketseat.com.br/"><img className='icon-study' src='data:image/png;base64,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' alt='icon'/></a>
                <div>
                    <h2>ROCKETSEAT - DISCOVER</h2>
                    <p>Código de verificação: <strong>48b090f4-a3d3-4777-8523-ecd65e689cf5</strong></p>
                </div>
                <ButtonStudy link='https://app.rocketseat.com.br/discover/certificates' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://training.fortinet.com/"><img className='icon-study' src='https://fortifirewall.com.br/config/imagens_conteudo/produtos/imagensGRD/fortinet-noimage.png' alt='icon'/></a>
                <div>
                    <h2>FORTINET - NSE 3 Network Security Associate</h2>
                    <p>Código de verificação: <strong>DtDYZO6ZtY</strong></p>
                </div>
                <ButtonStudy link='https://training.fortinet.com/mod/customcert/verify_certificate.php' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://www.udemy.com/"><img className='icon-study' alt='icon' src='https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png'/></a>
                <h2>IT SECURITY SPECIALIST</h2>
                <ButtonStudy link='https://www.udemy.com/certificate/UC-085ca238-1c77-4442-831e-5c1550bfc1ac/' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://www.trendmicro.com/pt_br/business/products/one-platform.html"><img className='icon-study' alt='icon' src={micro}/></a>
                <h2>Microsoft Certified: Azure Fundamentals</h2>
                <ButtonStudy link='https://www.credly.com/badges/2934ef74-a1ec-478b-b883-441b8c3887d8/linked_in_profile' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://azure.microsoft.com/pt-br/"><img className='icon-study' alt='icon' src={trend}/></a>
                <h2>Vision One Fundamentals</h2>
                <ButtonStudy link='https://www.linkedin.com/feed/update/urn:li:activity:7063496140024877057/' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://desecsecurity.com/"><img className='icon-study' alt='icon' src='https://scontent.fgru10-1.fna.fbcdn.net/v/t39.30808-6/313403767_492158189599202_1267885706468404848_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nappW5Qx09AAX8nQYYO&_nc_ht=scontent.fgru10-1.fna&oh=00_AfA8DzrUvutB3kVR1FRjCGhd6t5vQfrWuHTKF1hBs-NLrw&oe=64AFFEBC'/></a>
                <h2>Introdução ao Pentest na Prática</h2>
                <ButtonStudy link='https://desecsecurity.com/academy/introducao-pentest/certificado/1c157c5305cdb42b20334c5039750d61' alt='Certificado' label='Certificado'/>
            </div>

            <div className='study-course'>
                <a href="https://azure.microsoft.com/pt-br/"><img className='icon-study' alt='icon' src='https://scontent.fgru10-1.fna.fbcdn.net/v/t39.30808-6/297746436_466950672108003_4796607216134658666_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JAC3SCt_z2oAX-VJfqa&_nc_ht=scontent.fgru10-1.fna&oh=00_AfBDd-1EU_V7QXG1cC7C50Sqfh1ga2LWG18Wrs-3TavliA&oe=64B098B0'/></a>
                <h2>Network Defense Essentials</h2>
                <ButtonStudy link='https://prime.acaditi.com.br/mod/customcert/verify_certificate.php?contextid=239641&code=GldGXBKmKN&qrcode=1' alt='Certificado' label='Certificado'/>
            </div>
        </div>
        
    )
}