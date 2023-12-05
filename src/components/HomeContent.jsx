//import React from 'react'

const HomeContent = () => {

    

  return (
    <div className="home-content">
        <section className="who-we-are-section">
            <div id="logo-slogan">
                <img src="../public/logos/Life Up logo.png" alt="logo"/>
                <h1><b>Life Up</b></h1>
                <h2>Dê um <b id="up-text-underline">UP</b> na sua vida.</h2>
            </div>
            <div id="who-we-are-text">
                <h1><b>QUEM SOMOS?</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor odio, pretium id 
                    enim sed, cursus elementum felis. Praesent sit amet imperdiet nibh. Donec congue 
                    tellus sed justo laoreet, at fringilla est sodales. Curabitur purus tortor, accumsan 
                    vitae ante eget, hendrerit convallis magna.</p>
            </div>
        </section>

        <section className="how-it-works-section">
            <div id="how-it-works-text">
                <h1><b>COMO FUNCIONAM AS AULAS?</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor odio, pretium id 
                    enim sed, cursus elementum felis. Praesent sit amet imperdiet nibh. Donec congue 
                    tellus sed justo laoreet, at fringilla est sodales. Curabitur purus tortor, accumsan 
                    vitae ante eget, hendrerit convallis magna.</p>
            </div>
            <div id="classes-images">
                <div id="teacher-image"><img id="first-image-teacher" src="../public/preschool-teacher-holding-educational-cards-teaching-online-english-vocabulary-her-kindergarten-students.jpg" alt="logo"/></div>
                <div id="student-image"><img id="second-image-student" src="../public/rear-view-young-college-student-paying-attention-listening-her-online-teacher-laptop-home.jpg" alt="logo"/></div>
            </div>
        </section>

        <section className="platform-section">
            <div id="platform-images">
                <div id="platform-image"><img id="first-image-platform" src="../public/portal aluno exemplo.png" alt="logo"/></div>
            </div>
            <div id="platform-text">
                <h1><b>PLATAFORMA DO ALUNO</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor odio, pretium id 
                    enim sed, cursus elementum felis. Praesent sit amet imperdiet nibh. Donec congue 
                    tellus sed justo laoreet, at fringilla est sodales. Curabitur purus tortor, accumsan 
                    vitae ante eget, hendrerit convallis magna.</p>
            </div>
        </section>

        <section className="how-to-schedule-class-section">
            <h1>COMO AGENDAR SUA PRIMEIRA AULA?</h1>
            <div className="how-to-schedule-steps">
                <div className="how-to-schedule-step" id="create-account-step">
                    <img src="../public/icons/icons8-add-user-male-96.png" alt=""/>
                    <h2>Inscreva-se</h2>
                </div>
                <div className="how-to-schedule-separator"></div>
                <div className="how-to-schedule-step" id="choose-teacher-step">
                    <img src="../public/icons/icons8-teacher-96.png" alt=""/>
                    <h2>Escolha seu professor</h2>
                </div>
                <div className="how-to-schedule-separator"></div>
                <div className="how-to-schedule-step" id="choose-schedule-step">
                    <img src="../public/icons/icons8-calendar-plus-96.png" alt=""/>
                    <h2>Escolha seu horário</h2>
                </div>
                <div className="how-to-schedule-separator"></div>
                <div className="how-to-schedule-step" id="payment-step">
                    <img src="../public/icons/icons8-payment-96.png" alt=""/>
                    <h2>Efetue o pagamento</h2>
                </div>
                <div className="how-to-schedule-separator"></div>
                <div className="how-to-schedule-step" id="scheduled-className-step">
                    <img src="../public/icons/icons8-complete-96.png" alt=""/>
                    <h2>Aula agendada</h2>
                </div>
            </div>
        </section>
        <section className="up-your-life-section">
            <img src="../public/logos/Life Up logo.png" alt=""/>
            <div className="up-your-life-button">
                <h1>DÊ UM <b id="up-text-underline">UP</b> NA SUA VIDA</h1>
                <button className="button-inscrever">Inscreva-se</button>
            </div>
        </section>
    </div>
  )
}

export default HomeContent