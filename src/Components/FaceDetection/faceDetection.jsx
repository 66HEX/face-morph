import React, { useRef, useState, useEffect } from "react";
import "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import "@mediapipe/face_mesh";
import Webcam from "react-webcam";
import { runDetector } from "../../utils/detector.js";

const FaceDetection = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [cameraLoaded, setCameraLoaded] = useState(false);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [videoDimensions, setVideoDimensions] = useState({ width: 400, height: 500 });

    useEffect(() => {
        const updateDimensions = () => {
            const container = containerRef.current;
            if (container) {
                setVideoDimensions({
                    width: container.offsetWidth,
                    height: container.offsetHeight,
                });
            }
        };

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(containerRef.current);

        updateDimensions();

        return () => resizeObserver.disconnect();
    }, []);

    const handleVideoLoad = async (videoNode) => {
        const video = videoNode.target;
        if (video.readyState !== 4) return;
        if (modelLoaded) return;

        setCameraLoaded(true);
        try {
            await runDetector(video, canvasRef.current);
            setModelLoaded(true);
        } catch (error) {
            console.error("Error loading model:", error);
        }
    };

    const getLoadingMessage = () => {
        if (!cameraLoaded) return "Initializing camera...";
        if (!modelLoaded) return "Loading face detection model...";
        return null;
    };

    const loadingMessage = getLoadingMessage();

    return (
        <div ref={containerRef} className="relative w-full h-full">
            <Webcam
                width={videoDimensions.width}
                height={videoDimensions.height}
                className="absolute top-0 left-0 transform scale-x-[-1] visibility-visible"
                videoConstraints={{
                    width: videoDimensions.width,
                    height: videoDimensions.height,
                    facingMode: "user",
                }}
                onLoadedData={handleVideoLoad}
                mirrored={true}
            />
            <canvas
                ref={canvasRef}
                width={videoDimensions.width}
                height={videoDimensions.height}
                className="absolute top-0 left-0 transform scale-x-[-1]"
            />
            {loadingMessage && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-white text-lg">{loadingMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaceDetection;