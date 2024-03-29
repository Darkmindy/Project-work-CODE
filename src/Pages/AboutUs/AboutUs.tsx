import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-center align-items-center flex-column m-auto'>
                <fieldset className='m-5 '>

                    <legend>  <img className='logofooter' src="https://cdn-icons-png.flaticon.com/512/743/743976.png" alt="" /> ABOUT US </legend>
                    <p>
                        Benvenuti su PokeCards!

                        Siamo un team appassionato di Pokemon e sviluppatori web entusiasti, composto da Vincenzo, Stefania e Valentina. La nostra missione è portare la magia del mondo dei Pokemon nel mondo digitale attraverso la nostra pagina di carte Pokemon.
                    </p>
                </fieldset>
                <fieldset className='m-5'>
                    <legend><img className='logofooter' src="https://cdn-icons-png.flaticon.com/512/743/743976.png" alt="" />  Chi Siamo</legend>

                    <p>
                        Vincenzo
                        Vincenzo è un esperto sviluppatore web con una passione per i giochi di carte collezionabili. Con la sua esperienza nel mondo dello sviluppo front-end e la sua profonda conoscenza di React, ha guidato il team nello sviluppo della logica di frontend della nostra pagina. Oltre al coding, Vincenzo ama collezionare carte Pokemon di prima generazione e partecipare a tornei locali.

                        Stefania
                        Stefania è una talentuosa designer UX/UI con un occhio per i dettagli e la creatività. Ha lavorato duramente per creare un'esperienza utente coinvolgente e intuitiva per i nostri visitatori. Grazie al suo design accattivante e alla sua capacità di tradurre le idee in realtà, la nostra pagina è diventata un luogo accogliente per gli appassionati di Pokemon di tutte le età.

                        Valentina
                        Valentina è una maga dietro le quinte, che assicura che tutto funzioni senza intoppi. Con la sua competenza nel backend e nell'integrazione di servizi come GitHub, ha reso possibile la collaborazione fluida tra i membri del team e ha garantito che il nostro codice sia sempre organizzato e ben documentato. Oltre al suo impegno nel mondo dello sviluppo, Valentina adora sfidare gli amici in battaglie Pokemon online.


                    </p>
                </fieldset>
                <fieldset id='info' className='m-5 '>
                    <legend><img className='logofooter' src="https://cdn-icons-png.flaticon.com/512/743/743976.png" alt="" />  La Nostra Pagina</legend>
                    <p>
                        La nostra pagina di carte Pokemon è il risultato della nostra passione condivisa per i Pokemon e lo sviluppo web. Con un'ampia selezione di carte Pokemon di tutte le generazioni, offriamo un'esperienza di navigazione coinvolgente e unica per gli appassionati di Pokemon di tutto il mondo.

                        Siamo grati per il vostro supporto e non vediamo l'ora di continuare a migliorare e ampliare la nostra pagina per offrire sempre nuove esperienze ai nostri utenti!

                        Grazie per aver scelto PokeCards!
                    </p>
                </fieldset>

            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
