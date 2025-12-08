const endDate = "11 December 2025";

function cownDown (){
    const deadLineEndDate = new Date(endDate); 
    const dateNow = new Date();
    const totalsceond = (deadLineEndDate - dateNow) / 1000;
    const days = Math.floor(totalsceond / (3600*24));
    const hr = Math.floor((totalsceond % (3600*24)) / 3600);
    const mnt = Math.floor((totalsceond % 3600) / 60 );
    const sec = Math.floor((totalsceond % 60 ) );
    
    document.getElementById('days').textContent= timeFormat(days);
    document.getElementById('hours').textContent= timeFormat(hr);
    document.getElementById('minutes').textContent= timeFormat(mnt);
    document.getElementById('seconds').textContent= timeFormat(sec);   
    
}

// Formating Date 00:00:00

function timeFormat (time){
    return time< 10 ? `0${time}` : time
}

// Calling function
cownDown()
setInterval(cownDown, 1000)