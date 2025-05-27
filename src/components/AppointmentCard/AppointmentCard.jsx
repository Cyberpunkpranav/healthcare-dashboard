import React from 'react'
import styles from '../../styles/appointment-card.module.css'

const AppointmentCard = ({data}) => {
  return (
    <div className={`${styles['appointment-card']} ${data.status?styles.active:""}`}>
      <div style={{display:'flex', justifyContent:"space-between",alignItems:"center"}}>
      <p className={styles.speciality}>{data.speciality}</p>
      <img src={`/images/${data.image}`}/>
      </div>
      <small className={styles.time}>{data.time}</small>
      <p className={styles.doctor}>{data.doctor}</p>
    </div>
  )
}

export default AppointmentCard