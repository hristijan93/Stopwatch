const sw = new Stopwatch();

function Stopwatch() {
    let started = false;
    let startPoint = 0;
    let stopPoint = 0;

    this.start = function() {
        if (!startPoint) {
            startPoint = new Date;
        }
        if (started) {
            throw new Error (`The stopwatch is already started!`);
        }
        started = true;
    }

    this.stop = function() {
        stopPoint = new Date;
        if (!started) {
            throw new Error (`The stopwatch is not running`);
        }
        started = false;
    }

    this.reset = function() {
        started = false;
        startPoint = 0;
        stopPoint = 0;
    }

    Object.defineProperty(this, `duration`, {
        get: function() {
            console.log((stopPoint - startPoint) / 1000)
        }
    })
}