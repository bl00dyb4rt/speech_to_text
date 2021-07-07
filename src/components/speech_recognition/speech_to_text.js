import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import {Button} from 'react-bootstrap';
import {forEach} from "react-bootstrap/ElementChildren";


const SearchComponent = (SearchBar, props = {}) => {
    return (<section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='search characters'
                    autoFocus
                    value={props}
                    /*     onChange={(e) => onChange(e.target.value)}*/
                />
            </form>
        </section>
    )
}


export const Dictaphone = ({getQuery}) => {

    const inputRef = React.useRef(null)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const [text, setText] = useState(transcript)

    useEffect(() => {
        setText(transcript)
        const text_speech = check_text(transcript)
        console.log("nueva")
        if (text_speech.state) {
            console.log('si')
            console.log(text_speech.data)
            getQuery(text_speech.data)
            inputRef.current.click()

        } else {
            console.log('no')
        }

    }, [transcript]);


    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <Button variant={"success"} className={"outline-success"} onClick={() => SpeechRecognition.startListening({
                continuous: true,
                language: 'es-PE'
            })}>Listen</Button>
            <Button variant={"danger"} className={"outline-danger"}
                    onClick={SpeechRecognition.stopListening}>Stop</Button>
            <Button
                id={"myButton"}
                variant={"warning"}
                className={"outline-warning"}
                onClick={resetTranscript}
                ref={inputRef}

            >Reset</Button>
            <section className='search'>

                <input
                    type='text'
                    className='form-control'
                    placeholder='search characters'
                    autoFocus
                    value={text}
                    readOnly
                >
                </input>

            </section>

            <div className="microphone-result-text" style={{color: "white"}}>{transcript}</div>

        </div>
    );


};


const check_text = (speech_text) => {

    const search = speech_text.split(" ");
    console.log(search[search.length - 1]);
    if (search[search.length - 1] === 'buscar' || search[search.length - 1] === 'Buscar' ) {

        search.splice(-1, 1)
        return {
            state: true,
            data: search.join(' ')
        }
    } else {
        return {
            state: false
        }
    }


}



