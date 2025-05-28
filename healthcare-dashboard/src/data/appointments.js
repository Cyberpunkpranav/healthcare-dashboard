const calender = [
    {
    day:"Mon",
    date:25,
    timings:[{
        time:'10:00',
        appointment:false
        },
        {
        time:'11:00',
        appointment:false
        },
        {
        time:'12:00',
        appointment:false
        }]
    },
    {
        day:"Tues",
        date:26,
        timings:[{
        time:'08:00',
        appointment:false
        },
        {
        time:'09:00',
        appointment:true
        },
        {
        time:'10:00',
        appointment:false
        }]
    },
        {
        day:"Wed",
        date:27,
        timings:[{
        time:'12:00',
        appointment:false
        },
        {
        time:'-',
        appointment:false
        },
        {
        time:'13:00',
        appointment:false
        }]
    },
        {
        day:"Thurs",
        date:28,
        timings:[{
        time:'10:00',
        appointment:false
        },
        {
        time:'11:00',
        appointment:true
        },
        {
        time:'-',
        appointment:false
        }]
    },
        {
        day:"Fri",
        date:29,
        timings:[{
        time:'-',
        appointment:false
        },
        {
        time:'14:00',
        appointment:true
        },
        {
        time:'16:00',
        appointment:false
        }]
    },
        {
        day:"Sat",
        date:30,
        timings:[{
        time:'12:00',
        appointment:true
        },
        {
        time:'14:00',
        appointment:true
        },
        {
        time:'16:00',
        appointment:false
        }]
    },
        {
        day:"Sun",
        date:31,
        timings:[{
        time:'09:00',
        appointment:true
        },
        {
        time:'10:00',
        appointment:false
        },
        {
        time:'11:00',
        appointment:false
        }]
    },
]

const appointments=[
    {
        time:"09:00-11:00",
        speciality:'Dentist',
        doctor:'Dr. williamson',
        image:'white-tooth.png',
        status:1
    },
    {
        time:"11:00-12:00",
        speciality:'Physiotherapy',
        doctor:'Dr. Djones',
        image:"human-bone.png",
        status:0
    },
       {
        time:"11:00-12:00",
        speciality:'Cardiologist',
        doctor:'Dr. Williams',
        image:"human-heart.png",
        status:0
    },
]

const upcomingSchedule = [
    {
    day:'Thursday',
    appointments:[
    {
        title:'Health checkup complete',
        image:"medical-checkup.png",
        time:"11:00 AM",
    },
    {
        title:'Ophthalmologist',
        image:"eye.png",
        time:"2:00 PM"

    }]
    },   
    {
    day:'Saturday',
    appointments:[
    {
        title:'Cardiologist',
        image:"heart.png",
        time:"12:00 AM",
    },
    {
        title:'Neurologist',
        image:"doctor.png",
        time:"4:00 PM"

    }]
    },   
]

export {appointments,calender,upcomingSchedule}