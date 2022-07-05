let days = document.getElementById('days')
let hours = document.getElementById('hours')
let mins = document.getElementById('mins')
let secs = document.getElementById('secs')

const getTime=()=>{
    let eidTime = new Date('10 july 2022')
    let now = new Date()
    let eidmili = eidTime.getTime()
    let nowmili = now.getTime()
    let tillEidMili = eidmili - nowmili
    let eiddays = Math.floor(tillEidMili / (1000 * 60 * 60 * 24 ));
    days.innerHTML = eiddays + " days"
    let eidhours = Math.floor(tillEidMili % (1000*60*60*24) / (1000 * 60 * 60  ));
    hours.innerHTML = eidhours + " hours"

    let eidmins = Math.floor(tillEidMili % (1000*60*60) / (1000 * 60  ));
    mins.innerHTML = eidmins + " minutes"
    let eidsecs = Math.floor(tillEidMili % (1000*60) / (1000  ));
    secs.innerHTML = eidsecs + " seconds"
}
getTime();

setInterval(getTime,1000);