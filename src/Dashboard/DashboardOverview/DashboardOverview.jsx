import React, { useEffect } from 'react'
import styles from '../../styles/dashboardoverview.module.css'
import HealthStatusCard from './HealthStatusCard/HealthStatusCard'
import AnatomySection from './AnatomySection/AnatomySection'
import CalenderView from '../CalenderView/CalenderView'

const DashboardOverview = () => {
  return (
    <div className={styles['dashboard-section']}>
          <div className={styles.section1}>
          <div className={styles.search}>
            <div style={{display:"flex", alignItems:"center"}}>
            <i className='bx bx-search'></i>
          <input placeholder='Search'/>
            </div>

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
            <AnatomySection/>
            <HealthStatusCard/>
          </div>
        <div className={styles.section2}>
          <div className={styles['other-details']}>
          <div className={styles['user-profile']}>
          <i className='bx bxs-user'></i>
          </div>
          <div className={styles['add-more']}><i className='bx bx-plus'></i></div>
          </div>
          <CalenderView/>
        </div>
    </div>
  )
}

export default DashboardOverview