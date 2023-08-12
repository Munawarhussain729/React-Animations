import React from 'react'
import { motion } from 'framer-motion'

function Home() {
    return (
        <div style={{ height: "100vh", display:"flex", flexDirection:'column' ,alignItems:"center", justifyContent:"center" }}>
            <motion.div initial={{y:-250}} animate={{y:10}}>
                <h1>Welcome to Home </h1>
            </motion.div>
            <motion.div initial={{x:'-100vw'}} animate={{x:0}}>
                <h1>A world of animation </h1>
            </motion.div>
            <motion.div initial={{x:450}} animate={{x:-10}}>
                <h1>Animate from right </h1>
            </motion.div>
        </div>
    )
}

export default Home