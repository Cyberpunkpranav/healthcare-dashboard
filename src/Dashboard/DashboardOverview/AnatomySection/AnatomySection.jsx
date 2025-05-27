import React from 'react'
import styles from '../../../styles/anatomy.module.css'
import organs from '../../../data/healthData'


const AnatomySection = () => {
  return (
    <>
          <div className={styles['details-container']}>
          <div className={styles['patient-anatomy']}>
          <i className='bx bx-plus-circle'></i> 
          <img src='/images/human-anatomy.png'/>
          </div>
          <div className={styles['patient-details']}>
            {
                organs.map((data)=>(
                <div className={styles['patient-organs']}>
              <div style={{display:"flex",alignItems:"center"}}>
              <img src={`/images/${data.image}`} alt={data.organ}/>
              <h4>{data.organ}</h4>
              </div>
              <h6>{data.date_of_inspection}</h6>
              <div className={styles['status-bar']}>
                <div style={{backgroundColor:`var(--${data.color})`,width:data.percent}} className={styles.status}></div>
              </div>
            </div>
                ))
            }
         
             {/* <div className={styles['patient-organs']}>
              <div style={{display:"flex",alignItems:"center"}}>
              <img src="/images/human-bone.png" alt="" />
               <h4>Bone</h4>
              </div>
              <h6>Date: 4 Oct 2024</h6>
              <div className={styles['status-bar']}></div>
             </div>
            <div className={styles['patient-organs']}>
              <div style={{display:"flex",alignItems:"center"}}>
              <img src="/images/lung.png" alt="" />
              <h4>Lungs</h4>
              </div>
              <h6>Date: 4 Oct 2024</h6>
            <div className={styles['status-bar']}></div>
            </div> */}
            <div className={styles['more-details']}>
            <small>details</small>
            <i class='bx bx-right-arrow-alt'></i>
            </div>
          </div>
          </div>
        </>
  )
}

export default AnatomySection