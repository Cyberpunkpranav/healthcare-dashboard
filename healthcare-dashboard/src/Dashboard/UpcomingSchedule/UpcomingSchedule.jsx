import React from 'react'
import styles from '../../styles/upcoming-schedule.module.css'

const UpcomingSchedule = ({schedule}) => {
  return (
    <div>
      <h5 className={styles['us-day']}>On {schedule.day}</h5>
      <div className={styles['us-cards']}>
      {
        schedule.appointments.map((data)=>(
          <div className={styles['us-card']}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <p>{data.title}</p>
            <img src={`/icons/${data.image}`}/>
            </div>
            <small>{data.time}</small>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default UpcomingSchedule