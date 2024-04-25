// Write your JavaScript code here.
function init() {
    const takeoff = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
    rocket.style.left = 'calc(50% - 38px)';

    takeoff.addEventListener('click', e => {
        let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmed) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = 'blue'
            shuttleHeight.innerHTML = 10000
            rocket.style.bottom = `${parseInt(rocket.style.bottom) + 10}px`
        }
    });

    const landing = document.getElementById('landing')

    landing.addEventListener('click', e => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = 'green'
        shuttleHeight.innerHTML = 0
        rocket.style.bottom = 0
        rocket.style.left = 'calc(50% - 38px)'
    });

    const missionAbort = document.getElementById('missionAbort')

    missionAbort.addEventListener('click', e => {
        let confirmed = window.confirm("Confirm that you want to abort the mission.");
        if (confirmed) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = 'green'
            shuttleHeight.innerHTML = 0
            rocket.style.bottom = '0px'
            rocket.style.left = 'calc(50% - 38px)'
        };

    });

    const up = document.getElementById('up')
    const down = document.getElementById('down')
    const left = document.getElementById('left')
    const right = document.getElementById('right')

    up.addEventListener('click', e => {
        rocket.style.bottom = `${parseInt(rocket.style.bottom) + 10}px`
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000
    })
    down.addEventListener('click', e => {
        rocket.style.bottom = `${parseInt(rocket.style.bottom) - 10}px`
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000
    })
    left.addEventListener('click', e => {
        rocket.style.left = `${parseInt(rocket.style.left) + 10}px`
    })
    right.addEventListener('click', e => {
        rocket.style.left = `${parseInt(rocket.style.left) - 10}px`
    })
}

// Remember to pay attention to page loading!
window.addEventListener("load", init)