gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "p",
            start: "top 70%",
            end: "bottom 40%",
            markers: true,
            scrub: 1
        }
    })
    .to('svg', { duration: 2, scale: "1.2", x: 50, y: 300, ease: "bounce" })
    .to('p', { duration: 2, scale: 1.1, backgroundColor: "black", padding: "15", borderRadius: "5px", margin: "30" })
    .to('body', { duration: 2, backgroundImage: "linear-gradient(red, blue, green)" })
    .to('body', { duration: 2, backgroundImage: "linear-gradient(#123, #432, #555)", backgroundSize: "contain" })
    .to('body', { duration: 2, backgroundImage: "radial-gradient(red, blue, green)", backgroundSize: "contain" })
    .to('h1', { color: "white", fontSize: "50" })