import videoHero from "../assets/LGANTEFRAN2.mp4"

const Hero = () => {
    return (
        <div className="container-hero" id="hero">
            <video src={videoHero} muted={true} loop={true} autoPlay={true}></video>
        </div>
    )
}

export default Hero