import React from 'react'
import styles from '../../styles/dashboardoverview.module.css'
import HealthStatusCard from './HealthStatusCard/HealthStatusCard'

const DashboardOverview = () => {
  return (
    <div className={styles['dashboard-section']}>
        <div className={styles.section1}>
          <div className={styles.search}>
          <input placeholder='Search'/>
          <i class='bx bxs-bell-ring' ></i>
          </div>
          <div className={styles.heading}>
          <h2>Dashboard</h2>
          <select>
            <option>this week</option>
            <option value="">this month</option>
            <option value="">this year</option>
          </select>
          </div>
          <div className={styles['details-container']}>
          <div className={styles['patient-anatomy']}>
          <i className='bx bx-plus-circle'></i> 
          <img src='/images/human-anatomy.png'/>
          </div>
          <div className={styles['patient-details']}>
            <div className={styles['patient-organs']}>
              <div style={{display:"flex",alignItems:"center"}}>
              <img src='/images/human-heart.png' alt=""/>
              <h4>Heart</h4>
              </div>

              <h6>Date: 4 Oct 2024</h6>
            </div>
             <div className={styles['patient-organs']}>
              <div style={{display:"flex",alignItems:"center"}}>
              <img src="/images/human-bone.png" alt="" />
               <h4>Bone</h4>
              </div>

               <h6>Date: 4 Oct 2024</h6>
             </div>
            <div className={styles['patient-organs']}>
              <div style={{display:"flex",alignItems:"center"}}>
              <img src="/images/lung.png" alt="" />
              <h4>Lungs</h4>
              </div>
              <h6>Date: 4 Oct 2024</h6>
            </div>
            <div className={styles['more-details']}>
            <small>details</small>
            <i class='bx bx-right-arrow-alt'></i>
            </div>
          </div>
          </div>
          <div className={styles['patient-analytics']}>
            <h4>Activity</h4>
            <HealthStatusCard/>
          </div>
        </div>
        <div className={styles.section2}></div>
    </div>
  )
}

export default DashboardOverview