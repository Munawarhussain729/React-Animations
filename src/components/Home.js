import React from 'react'
import {motion} from 'framer-motion'

const butonVariants={
    hover:{
        scale: [1.1], // There can be keyframe like[1, 1.1, 1, 1.1] means loop between these values
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition:{
            // duration:0.3,
            yoyo:10  //Yoyo property is use to loop the animation
        }
    }
}
function Home() {
    return (
        <div style={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
            <motion.button variants={butonVariants} whileHover="hover" style={{padding:10, border:'1px black', width:'200px', fontSize:'20px', borderRadius:'24px'}}>Hover to see</motion.button>
        </div>
    )
}

export default Home