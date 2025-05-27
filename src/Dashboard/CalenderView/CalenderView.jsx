import React from 'react'
import appointments from '../../data/appointments'
import styles from '../../styles/calender-view.module.css'
import { calender } from '../../data/appointments';
const week = [{day:'Mon',date:25}, {day:'Tues',date:26}, {day:'Wed',date:27}, {day:'Thurs',date:28}, {day:'Fri',date:29}, {day:'Sat',date:30}, {day:'Sun',date:31}];
const timeSlots = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']
const CalenderView = () => {
  return (
    // <div className={styles['calender-container']}>
    //     <div className={styles['week-header']}>
    //         {
    //             weekDates.map((day,i)=>(
    //                 <div key={i}>{day}</div>
    //             ))
    //         }
    //     </div>
    //     <div className={styles['time-grid']}>
    //     {timeSlots.map((time) => (
    //       <div key={time} className="time-row">
    //         {weekDates.map((date) => {
    //           const event = appointments.find(a => a.day === date && a.time === time);
    //           return (
    //             <div key={date + time} className="time-slot">
    //               {event ? (
    //                 <div className={`event-card ${event.color}`}>
    //                   <strong>{event.title}</strong><br />
    //                   <small>{event.doctor}</small>
    //                 </div>
    //               ) : null}
    //             </div>
    //           );
    //         })}
    //         </div>
    //         ))}
    //     </div>
    //     </div>
    <section className={styles.calender}>
      <div className={styles['months-scroll']}>
      <h5>October 2021</h5>
      <div style={{display:"flex", alignItems:"center"}}>
        <i className='bx bx-arrow-from-right'></i>
        <i className='bx bx-arrow-from-left'></i>
      </div>
      </div>
      <div className={styles['day-time']}>
        {
          calender.map((data,i)=>(
          <div style={{opacity:1/(i/2)}} className={styles['day-time-card']}>
            <small className={styles.day}>{data.day}</small>
            <h4 className={styles.date}>{data.date}</h4>
            <div className={`${styles.timeslots} scroll`}>
            {
              data.timings.map((timings)=>(
                <small className={`${styles.timeslot} ${timings.appointment==true?'active':''}`}>{timings.time}</small>
              ))
            }
            </div>
          </div>
          ))
        }

      </div>
    </section>

  )
}

export default CalenderView