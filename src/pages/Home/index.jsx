import React from 'react'

import styles from '../../styles/pages/home.module.css'

const Home = () => {
    const currentDate = Date.parse(Date.now())

    React.useEffect(()=>{console.log(currentDate)}, [])

    return (
        <div className={styles.homeContainer} >
            <main>
                <header>
                    <p>Technologies &gt; Inovations</p>
                    <h1>know all about Google Glass</h1>
                    <h2>by xSallus</h2>
                    <h3>Updated at Mar 26, 2021</h3>
                </header>
                <section>
                    <span>What is it?</span>
                    <p>The <span>Google Glass</span> is a glass like accessory that makes possible for user to interact with a variety of contents in agumented reality. Also called Project Glass, this device is capable of take photos from voice commands, send instant messages and and make video-calls. It's launch is scheduled to 2014 and it's price can be up to US$ 1,5k. Actually <span>Google Glass</span> is at tests and has a full video recorded with the device. Besides that, the Search giant registered new patents anti-steal and screen unlock for the device.</p>
                    <img src="images/glass-quadro-homem-mulher.jpg" alt="Project Glass in action" />
                </section>
                <section>
                    <span>Launch date</span>
                    <p>There is no official and specific date for the launch of this device. It should be available for demonstration from 2013 on, but it's launch should at least from 2014 on.</p>
                </section>
                <section>
                    <span>Technical table for Goolge Glass</span>
                    <table></table>
                </section>
                <section>
                    <span>How it works</span>
                    <p>De acordo with fonts near Goolge, theese glasses will have na small LCD or AMOLED display on the top, to be in front of the user eyes. With the help of a cam and GPS, user can track itself, and so select option with head movement.</p>
                </section>
                <section>
                    <span>What you can do with Google Glass?</span>
                    <p>The marketing video from Google shows that you can make yourself a 'super-human', once the device can indicate how many meters your from your checkpoint, if the train station is open/closed, show climate, and even allows you to agend dates with just one voice command.</p>
                    <video 
                        height="120px"
                        width="350px"
                        controls
                    ><source
                        src="media/getting-started.mp4"
                        alt="Getting started video"
                        title="Getting started"
                        type="video/mp4"
                      />
                    </video>
                </section>
            </main>
            <aside>
                <span>Other news</span>
                <span>Most recent videos</span>
                <video 
                    height="120px"
                    width="350px"
                    controls
                ><source
                    src="media/getting-started.mp4"
                    alt="Getting started video"
                    title="Getting started"
                    type="video/mp4"
                  />
                </video>
                <section>
                    <h3>News on Glass</h3>
                    <p>Google finally has revealed google Glass full specs, and a surprise still uncommon: the search giant will put in it's device an audio system based on trasnduction with conduction. Inside glas hastes, the sound will be transfered to user's ears via micro vibrations in some bones in his head, without using any auto-falante.</p>
                </section>
            </aside>
        </div>
   )
}

export default Home
