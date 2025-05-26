import React from 'react'
import styles from '../styles/dashboard.module.css'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className={styles['dashboard-container']}>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default Dashboard