import ButtonProjetos from "./ButtonProjetos";
import skyone from "../image/skyone.jpeg";
import demetra from "../image/demetra.jpeg";
import newtech from "../image/nt.png";
import './experiencias.css';

export function Experiencias() {
    return (
        <div>
            
            <section className="projetos-app" id="experiencias">
                <div className="title-projetos-app">
                    <h2>Experiências</h2>
                </div>
                <div className="text-projetos-app">
                    <img className="imagem-projeto-app" src={skyone} alt="Logo-projeto"/>
                    <dl className="descrição-projeto-app">
                        <dt><h1>Analista de Segurança da Informação Júnior</h1></dt>
                        <dd>
                            <h3>Inicio: Maio/2023 | Atualmente</h3>
                            <p>Management of information security incidents; 
                            </p>
                            <p>Incident monitoring with the Trend Vision One tool. </p>
                        </dd> 
                        
                        <ButtonProjetos label="Empresa" link="https://skyone.solutions/en"/>
                    </dl>
                </div>

                <div className="text-projetos-app text-invert">
                    
                    <dl className="descrição-projeto-app">
                        <dt><h1>Analista de infraestrutura Júnior</h1></dt>
                        <dd>
                            <h3>Inicio: Maio/2022 | Abril/2023</h3>
                            <p>Worked with server and web service monitoring using Netwall tool.
                            </p>
                            <p>Worked with virtualized servers in the Cloud (Oracle, VM Ware, Huawei). </p>
                            <p>Created virtualized Windows and Linux environments. </p>
                            <p>Created backup routines.</p>
                            <p>Performed Pentest.</p>
                        </dd> 
                        <ButtonProjetos label="Empresa" link="https://www.demetrati.com.br/"/>
                    </dl>
                    <img className="imagem-projeto-app" src={demetra } alt="Logo-projeto"/>
                </div>

                <div className="text-projetos-app">
                    <img className="imagem-projeto-app" src={newtech} alt="Logo-projeto"/>
                    <dl className="descrição-projeto-app">
                        <dt><h1>Analista de Suporte Técnico Júnior</h1></dt>
                        <dd>
                            <h3>Inicio: Fevereiro/2020 | Abril/2022</h3>
                            <p>Firewall PFSense and Iptables </p>
                            <p>Server virtualization with VM Ware </p>
                            <p>Proficient in Microsoft operating systems (Windows, Windows Server) and Linux </p>
                            <p>Active Directory management </p>
                            <p>Routine backup monitoring </p>
                            <p>Fundamentals of CybersecurityWorked</p>
                        
                        </dd> 
                        
                        <ButtonProjetos label="Empresa" link="https://ntc.inf.br/"/>
                    </dl>
                </div>

            </section>
        </div>
    )
}