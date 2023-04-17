import { useState } from "react";
import { Slider, Box } from "@mui/material"

interface IAnswers {
    questionId: number,
    answer : any
}

interface ISliderQProps{
    setAnswers: React.Dispatch<React.SetStateAction<any>>;
}

export default function Questionnarie() {
    const [answers, setAnswers] = useState<IAnswers[]>([]);
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
    return (
        <div className="questionnarie">
            {
                currentQuestionId === 1 ?
                <SliderQuestion setAnswers={setAnswers}/> : <></>
            }
        </div>
    );
}

function SliderQuestion(props : ISliderQProps){

    const [finalAnswer, setFinalAnswer] = useState<any>({});

    const marks = [
        { value : 0, label : "Karela"},
        { value : 20, label : "Cheesecake"},
        { value : 40, label : "Brownies"},
        { value : 60, label : "Gulab Jamun"},
        { value : 80, label : "Jalebi Rabdi"},
        { value : 100, label : "Prachi"}
    ]

    const updateAnswer = (value : number | number[]) => {
        const findAnswer = marks.find(x => x.value === value);
        setFinalAnswer(findAnswer);
    }

    return (
        <div className="question-card">
            <h3>On a scale of Karela to Prachi, how sweet is Atharva &#128513;?</h3>
            <div className="slider">
                <Box sx={{ width: 600, padding: "1em" }}>
                    <Slider
                        aria-label="Custom marks"
                        defaultValue={0}
                        step={20}
                        valueLabelDisplay="auto"
                        marks={marks}
                        color={"secondary"}
                        sx={{
                            height: 6
                        }}
                        onChangeCommitted = {(_, newValue) => updateAnswer(newValue)}
                    />
                </Box>
            </div>
            <h3 onClick={() => props.setAnswers([...finalAnswer])} style={{ cursor : "pointer" }}>
                Next &#10148;
            </h3>
        </div>
    );
}