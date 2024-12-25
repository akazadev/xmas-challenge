import React, { useState, useRef, useEffect } from "react";

const PlayButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
    const canvasRef = useRef(null);
    const [audioContext, setAudioContext] = useState(null);
    const [analyser, setAnalyser] = useState(null);

    useEffect(() => {
        if (audioRef.current) {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const analyserNode = context.createAnalyser();
            const source = context.createMediaElementSource(audioRef.current);
            source.connect(analyserNode);
            analyserNode.connect(context.destination);

            setAudioContext(context);
            setAnalyser(analyserNode);
        }
    }, []);

    useEffect(() => {
        if (analyser) {
            const canvas = canvasRef.current;
            const canvasCtx = canvas.getContext("2d");
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            const draw = () => {
                const canvasWidth = canvas.offsetWidth;
                canvas.width = canvasWidth;
                canvas.height = 100;

                requestAnimationFrame(draw);
                analyser.getByteFrequencyData(dataArray);

                canvasCtx.clearRect(0, 0, canvasWidth, canvas.height);
                const barWidth = (canvasWidth / bufferLength) * 2.5;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                    const barHeight = dataArray[i] / 2;

                    const gradient = canvasCtx.createLinearGradient(0, 0, 0, canvas.height);
                    gradient.addColorStop(0, "#008000"); 
                    gradient.addColorStop(1, "#ff0000"); 
                    canvasCtx.fillStyle = gradient;

                    canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);
                    x += barWidth + 1;
                }
            };

            draw();
        }
    }, [analyser]);

    const handlePlayPause = async () => {
        if (audioContext && audioContext.state === "suspended") {
            await audioContext.resume();
        }
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((error) => {
                console.error("Audio playback failed:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current && audioRef.current.duration) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <button
                onClick={handlePlayPause}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
                {isPlaying ? "Pause" : "Play"} Christmas Song
            </button>
            <audio ref={audioRef} src="/song.mp3" onTimeUpdate={handleTimeUpdate} />
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <canvas className="rounded-xl w-full max-w-3xl" ref={canvasRef} height="100"></canvas>
        </div>
    );
};

export default PlayButton;
