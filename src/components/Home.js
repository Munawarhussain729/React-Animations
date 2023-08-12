import React from 'react'
import {motion } from 'framer-motion'
function Home() {
    return (
        <div style={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <motion.div initial={{opacity:0} } animate={{opacity:1}} transition={{delay:0.5, duration:3}}>
            <h1>Welcome </h1>   
            <p>To the world of animation</p>
            </motion.div>
        </div>
    )
}

export default Home