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
                    <h2>Experiences</h2>
                </div>
                <div className="text-projetos-app text-invert">
                <dl className="descrição-projeto-app">
                        <dt><h1>Cyber Security Analyst</h1></dt>
                        <dd>
                            <h3>Start: Fav/2024 | Currently</h3>
                            <p>Management of Trend tools (Trend Vision One, Cloud One, APEX One) for efficiency and security.</p>
                            <p>Responsible for client security, including vulnerability management, risk analysis, and incident response.</p>
                            <p>Consultation and reporting of relevant CVEs, identification and reporting of password leaks, <br></br> as well as coordination of immediate actions in case of cyber attacks.</p>
                            <p>Coordination of antiphishing campaigns to protect clients against cyber threats.</p>
                            <p>Partnership with the AXUR team to detect and mitigate domain fraud.</p>
                            <p>Development and implementation of Python and Shellscript scripts for operational efficiency.</p>
                        </dd> 
                        
                        <ButtonProjetos label="Company" link="https://secureway.com.br/"/>
                    </dl>
                    <img className="imagem-projeto-app" src="https://media.licdn.com/dms/image/C4D0BAQGSVh9_v_1c4g/company-logo_200_200/0/1649075284899/securewayit_logo?e=1720051200&v=beta&t=LJCwCjQw2JmyoebMwZdGN7yl-9Cq2X66Heni1ZEHspE" alt="Logo-projeto"/>
                </div>

                <div className="text-projetos-app text-inverttext-invert">
                    <img className="imagem-projeto-app" src="https://media.licdn.com/dms/image/D4D0BAQHRciBaw8TTxw/company-logo_200_200/0/1697757820229/skyonesolutions_logo?e=2147483647&v=beta&t=2mAdtce771RtA1ggpb-UirW1lUBAjLDyURE-FssJAzI" alt="Logo-projeto"/>
                    <dl className="descrição-projeto-app">
                        <dt><h1>Cyber Security Analyst</h1></dt>
                        <dd>
                            <h3>Start: May/2023 | Currently</h3>
                            <p>Response, handling, and analysis of information security incidents;</p>
                            <p>Creation and updating of playbooks and documentation.</p>
                            <p>Firewall log analysis (WAF);</p>
                            <p>Conducting risk assessments and vulnerability analysis in cloud environments;</p>
                            <p>Acting in the investigation of security incidents, together with security operations teams;</p>
                            <p>Development of Shell Script scripts to assist in investigations and data acquisition;</p>

                        </dd> 
                        
                        <ButtonProjetos label="Company" link="https://skyone.solutions/en"/>
                    </dl>
                </div>

                <div className="text-projetos-app text-invert">
                    
                    <dl className="descrição-projeto-app">
                        <dt><h1>Infrastructure Analyst</h1></dt>
                        <dd>
                            <h3>Start: May/2022 | April/2023</h3>
                            <p>Monitoring of servers and web services;
                            </p>
                            <p>Management of virtualized environments in the Cloud (Oracle, VMware, AWS, Azure Huawei);</p>
                            <p>Creation of virtualized Windows and Linux servers;</p>
                            <p>Creation of Security Lists;</p>
                            <p>Conducting penetration tests on web applications.;</p>
                            <p>Development of backup routines;</p>

                        </dd> 
                        <ButtonProjetos label="Company" link="https://www.demetrati.com.br/"/>
                    </dl>
                    <img className="imagem-projeto-app" src={demetra } alt="Logo-projeto"/>
                </div>

                <div className="text-projetos-app ">
                    <img className="imagem-projeto-app" src={newtech} alt="Logo-projeto"/>
                    <dl className="descrição-projeto-app">
                        <dt><h1>Technical Support Analyst</h1></dt>
                        <dd>
                            <h3>Start: February/2020 | April/2022</h3>
                            <p>Firewall PFSense and Iptables </p>
                            <p>Server virtualization with VM Ware </p>
                            <p>Proficient in Microsoft operating systems (Windows, Windows Server) and Linux </p>
                            <p>Active Directory management </p>
                            <p>Routine backup monitoring </p>
                            <p>Fundamentals of Cybersecurity</p>
                        
                        </dd> 
                        
                        <ButtonProjetos label="Company" link="https://ntc.inf.br/"/>
                    </dl>
                </div>

            </section>
        </div>
    )
}