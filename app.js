const counters = document.querySelectorAll('counter');


counters.forEach((counter) =>{
    // console.log(counter);
    counter.innerHTML = 0;


    const updateCounte = () =>{
        const targetCounter = +counter.setAttribute('data-target');
        // console.log(targetCounter);

        const startingCount = Number(counter.innerHTML);

        const incr = targetCounter / 100;

        if(startingCount < targetCounter){
            counter.innerHTML = `${starting + incr}`

        }

    }

    updateCounter()
})