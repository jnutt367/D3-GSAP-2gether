gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('h3', { x: 200, opacity: 0 }, { duration: 4, x: 50, y: 100, fontFamily: "fantasy", opacity: 1, color: "blue", fontSize: "2em", ease: "elastic" });

let tl = gsap.timeline({
        duaration: 10,
        scrollTrigger: {
            trigger: ".svg",
            start: "top 70%",
            end: "bottom 40%",
            markers: true,
            scrub: 1
        }
    })
    .to('.svg', { duration: 7, scale: "1.2", x: 50, y: 300, ease: "bounce", position: "relative", zIndex: 2 })
    .to('p', { duration: 2, scale: 1.1, textContent: "A tables's TITLE? OR WHATEVER", backgroundColor: "black", padding: "15", borderRadius: "5px" })
    .to('body', { duration: 2, backgroundImage: "linear-gradient(red, blue, green)" })
    .to('body', { duration: 2, backgroundImage: "linear-gradient(#123, #432, #555)", backgroundSize: "contain" })
    .to('body', { duration: 2, backgroundImage: "radial-gradient(red, blue, green)", backgroundSize: "contain" })
    .to('h1', { color: "white", fontSize: "35" })
    .to('h2', { duration: 5, color: "aliceblue" })
    .to('.blue-circle', { duration: 10, scale: 1.3, y: -150, ease: "elastic", color: "aliceblue" })
    .to('.green-dot', { duration: "3", scale: 20, y: -200, zIndex: 10, position: "relative" })