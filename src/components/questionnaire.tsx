import { useState, useEffect } from "react";
import { Slider, Fade, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import RacoonImage from "../assets/racoon.jpg";
import AtharvaImage from "../assets/atharva.jpg";

interface ISliderQProps{
    setAnswers: React.Dispatch<React.SetStateAction<any>>;
    setCurrentQuestionId: React.Dispatch<React.SetStateAction<number>>;
    answers: any[];
}

interface IDateQProps{
    setAnswers: React.Dispatch<React.SetStateAction<any>>;
    setCurrentQuestionId: React.Dispatch<React.SetStateAction<number>>;
    answers: any[];
}

interface ITQProps{
    answers: any[];
}

export default function Questionnarie() {
    const [answers, setAnswers] = useState<any[]>([]);
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
    
    return (
        <div className="questionnarie">
            {
                currentQuestionId === 1 ?
                <SliderQuestion setAnswers={setAnswers} answers={answers} setCurrentQuestionId={setCurrentQuestionId}/> : 
                currentQuestionId === 2 ? 
                <DateQuestion setAnswers={setAnswers} answers={answers} setCurrentQuestionId={setCurrentQuestionId}/> : 
                <ThankYouNote answers={answers} />
            }
        </div>
    );
}

function SliderQuestion(props : ISliderQProps){

    const [finalAnswer, setFinalAnswer] = useState<any>({ value : 0, label : "Karela" });

    const marks = [
        { value : 0, label : "Karela"},
        { value : 2, label : "Cheesecake"},
        { value : 4, label : "Brownies"},
        { value : 6, label : "Gulab Jamun"},
        { value : 8, label : "Jalebi Rabdi"},
        { value : 10, label : "Prachi"}
    ]

    const updateAnswer = (value : number | number[]) => {
        const findAnswer = marks.find(x => x.value === value);
        setFinalAnswer(findAnswer?.label);
    }

    const addAnswer = () => {
        let answers = [...props.answers];
        answers.push({ key : "As sweet as", value : finalAnswer });
        props.setAnswers(answers);
        props.setCurrentQuestionId(2);
    }

    return (
        <div className="question-card">
            <h3>On a scale of Karela to Prachi, how sweet is Atharva &#128513;?</h3>
            <div className="slider">
                <Slider
                    aria-label="Custom marks"
                    defaultValue={0}
                    step={2}
                    valueLabelDisplay="auto"
                    min={0}
                    max={10}
                    marks={marks}
                    orientation={"vertical"}
                    color={"secondary"}
                    sx={{ height: "400px" }}
                    onChangeCommitted = {(_, newValue) => updateAnswer(newValue)}
                />
            </div>
            <h3 onClick={addAnswer} style={{ cursor : "pointer" }}>
                Next &#10148;
            </h3>
        </div>
    );
}

function DateQuestion(props : IDateQProps){

    const [showRacoonImage, setShowRacoonImage] = useState<boolean>(true);
    const [radioValue, setRadioValue] = useState<string>("Yes");

    useEffect(() => {
        setTimeout(() => {
            setShowRacoonImage(false);
        },7000)
    },[])

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((e.target as HTMLInputElement).value);
    }

    const addAnswer = () => {
        let answers = [...props.answers];
        answers.push({ key : "Worthy for the next date ? " , value : radioValue });
        props.setAnswers(answers);
        props.setCurrentQuestionId(3);
    }

    return (
        <div className="question-card">
            {
                showRacoonImage ? 
                <>
                    <h3>Would you like to go out again with this guy ?</h3>
                    <Fade in={true} timeout={2000}>
                        <img src={RacoonImage} alt="racoon" width={240} height={"auto"} style={{ borderRadius : "5%"}}></img>
                    </Fade>
                    <Fade in={true} timeout={6000}>
                        <p style={{ color : "red", fontWeight : "bold" }}>Oops! Wait...</p>
                    </Fade>
                </>
                : 
                <>
                    <h3>Ohh yeah. This guy ? &#127881;&#x1F389;</h3>
                    <Fade in={true} timeout={2000}>
                        <>
                            <img src={AtharvaImage} alt="atharva" width={240} height={"auto"} style={{ borderRadius : "3%"}}></img>
                            <FormControl style={{ padding: "0.5rem 0rem"}}>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={radioValue}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="Yes" control={<Radio />} label={<span>Definitely Yess &#129395;</span>} />
                                    <FormControlLabel value="No" control={<Radio />} label={<span>No &#128542;</span>} />
                                </RadioGroup>
                            </FormControl>
                            <span style={{ fontSize : "12px"}}>P.S : If your answer is No, Please send this guy a packet of tissues.</span>
                        </>
                    </Fade>
                    <h3 onClick={addAnswer} style={{ cursor : "pointer" }}>
                        Done &#9989;
                    </h3>
                </>
            }
        </div>
    )
}

function ThankYouNote(props : ITQProps){
    return (
        <div className="hello-banner">
            <h2>Thank You &#128522;. Please send Atharva this screenshot<br /></h2>
            <div>
                <h3>Your Answers : </h3>
                <ol>
                {
                    props.answers.map((item) => {
                        return (
                            <li key={self.crypto.randomUUID()} style={{ fontSize: "20px", padding : "0.5em"}}>{item.key} - {item.value}</li>
                        )
                    })
                }
                </ol>
            </div>
        </div>
    )
}