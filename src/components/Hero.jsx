import videoHero from "../assets/LGANTEFRAN2.mp4"

const Hero = () => {
    return (
        <div className="container-hero" id="hero">
            <video src={videoHero} muted={true} autoPlay={true} playsInline loop></video>
        </div>
    )
}

export default Hero