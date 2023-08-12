import React from 'react'
import { motion } from 'framer-motion'
function Home() {
    const containerVariant = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                mass: 0.4,   // high mass means slower,
                damping: 8, //Osciallation
                when: 'beforeChildren'
            }
        }
    }

    const childVariants = {
        hidden: {
            opacity: 0
        },
        visible: { opacity: 1 }
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div variants={containerVariant} initial="hidden" animate="visible">
                <h1>The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela</h1>
                <motion.p variants={childVariants}>The way to get started is to quit talking and begin doing. -Walt Disney</motion.p>
                <motion.div variants={childVariants}>
                    <p>Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs</p>
                    <p>If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Home