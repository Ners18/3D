import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
     
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gray-900 rounded-[20px] py-5 px-12 min-h-[180px] md:px-2 flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
           <span className='text-green-400'>{title}</span>     <span className='text-red-600'>selam</span>
        </h3>
      </div>
      
    </motion.div>
  </Tilt>
);

const Hero = () => {
  return (
    <>
        <section className={`relative w-full h-screen mx-auto`}>
      <div
         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} hidden flex-row items-start gap-5 justify-center`}
         >
      
      </div>
     <div className="flex items-center justify-center flex-col">
    
       
        <div className="mt-16">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Musmer <span className='text-[rgb(255,112,13)]'>Exchange</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            En iyi oranlar,En hızlı kolay ve <br className='sm:block hidden' />
            Güvenilir Doviz İşlemleri.
          </p>
        </div>
        <div className='mt-20 flex  gap-10 flex-col md:flex-row  justify-center md:items-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div> 
     </div>
          
    </section>

    </>

 
  );
  
};

export default SectionWrapper(Hero,"Hero");
