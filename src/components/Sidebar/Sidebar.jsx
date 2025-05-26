import React from 'react'
import styles from '../../styles/sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img alt='logo' src='/images/Healthcare-logo.png' />
      </div>
      <div className={styles.navigation}>
        <div>
          <small>General</small>
          <i className='bx bx-dashboard'></i>

          <ul>
            <li className={styles['nav-links']}>
              <i className='bx bxs-dashboard'></i>
              <p>Dashboard</p>
            </li>
            <li className={styles['nav-links']}>
              <i className='bx bx-history'></i>
              <p>History</p>
            </li>
            <li className={styles['nav-links']}>
              <i className='bx bxs-calendar'></i>
              <p>Calender</p>
            </li>
            <li className={styles['nav-links']}>
              <i className='bx bxs-plus-square'></i>
              <p>Appointments</p>
            </li>
            <li className={styles['nav-links']}>
              <i className='bx bx-chart'></i>
              <p>Statistics</p>
            </li>
          </ul>
          <hr />
          <small>Tools</small>
          <ul>
            <li className={styles['nav-links']}>
              <i className='bx bx-chat'></i>
              <p>Chat</p>
              </li>
            <li className={styles['nav-links']}>
              <i className='bx bx-support' ></i>
              <p>Support</p>
              </li>
          </ul>
          <hr />
        </div>
        <ul>
          <li className={styles['nav-links']}>
            <i class='bx bxs-cog' ></i>            
            <p>Settings</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar