import React, {Component} from 'react';
import { motion } from "framer-motion";




export class Home extends Component {
  static displayName = Home.name;
  
  
  render() {
      
    return (
        <div className='background'>
      <div >
      <div className = 'row'>
          <div className="columnleft">


          </div>
          <div className="columnright">
          <motion.div
              initial={{ opacity: 0, scale: 0.5, x: -1000 }} // Adjust the 'x' value to change the direction
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75 }}
          >
            <div className="content">
              <h1>Open<br/> Meteo </h1>

              <h2> Weather Forecast</h2>
              <h3> Storm <br/> with Heavy Rain</h3>

          
          </div>
          </motion.div>
          </div>
        
      </div>
      </div>
      </div>
    );
  }
}


