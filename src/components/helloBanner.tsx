import { Fade } from "@mui/material";

interface IHelloBannerProps{
    setShowHelloBanner : React.Dispatch<React.SetStateAction<boolean>>
}

export default function HelloBanner(props : IHelloBannerProps){
    return (
        <div className="hello-banner">
            <Fade in={true} timeout={1000}>
                <h1>Hi there, Cutie &#129303;</h1>
            </Fade>
            <Fade in={true} timeout={2000}>
                <h2>I'm Dobby. A bot designed to ask questions. Also I love socks &#129510;</h2>
            </Fade>
            <Fade in={true} timeout={3000}>
                <h3 onClick={() => props.setShowHelloBanner(false)} style={{ cursor : "pointer" }}>
                    Click here to get started &#10148;
                </h3>
            </Fade>
        </div>
    );
}