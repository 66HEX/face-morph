import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import "@mediapipe/face_mesh";
import Webcam from "react-webcam";
import { runDetector } from "../../utils/detector";
import FaceMesh from "../FaceMesh/faceMesh.jsx";

const smoothPosition = (current, target, smoothFactor = 1) => {
    if (!current) return target;
    return {
        x: current.x + (target.x - current.x) * smoothFactor,
        y: current.y + (target.y - current.y) * smoothFactor,
        z: current.z + (target.z - current.z) * smoothFactor,
    };
};

function Scene({ faceData }) {
    const [smoothedPosition, setSmoothedPosition] = useState(null);

    useEffect(() => {
        if (faceData) {
            setSmoothedPosition(prevPos =>
                smoothPosition(prevPos, {
                    x: (-faceData.position.x * 8.5) + 0.05,
                    y: (faceData.position.y * 6.5) - 0.325,
                    z: faceData.position.z - 5
                })
            );
        }
    }, [faceData]);

    if (!faceData || !smoothedPosition) return null;

    return (
        <>
            <group position={[smoothedPosition.x, smoothedPosition.y + 0.5, smoothedPosition.z]}>
                <FaceMesh
                    face={faceData}
                    width={faceData.box.width / 35}
                    rotation-y={Math.PI}
                    wireframe={false}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial
                        side={THREE.BackSide}
                        color={"#FFFFFF"}
                        flatShading={false}
                        metalness={0.5}
                        roughness={0.2}
                        wireframe={false}
                    />
                </FaceMesh>
            </group>
            <Environment preset="city"/>
        </>
    );
}

const FaceDetection = () => {
    const containerRef = useRef(null);
    const [cameraLoaded, setCameraLoaded] = useState(false);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [faceData, setFaceData] = useState(null);
    const [videoDimensions, setVideoDimensions] = useState({ width: 400, height: 500 });

    const previousFaceData = useRef(null);
    const MOVEMENT_THRESHOLD = 0.0015;

    const isSignificantMovement = (newFace, oldFace) => {
        if (!oldFace) return true;

        const dx = Math.abs(newFace.position.x - oldFace.position.x);
        const dy = Math.abs(newFace.position.y - oldFace.position.y);
        const dz = Math.abs(newFace.position.z - oldFace.position.z);

        return dx > MOVEMENT_THRESHOLD ||
            dy > MOVEMENT_THRESHOLD ||
            dz > MOVEMENT_THRESHOLD;
    };

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
            await runDetector(video, (face) => {
                if (isSignificantMovement(face, previousFaceData.current)) {
                    setFaceData(face);
                    previousFaceData.current = face;
                }
            });
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
        <div ref={containerRef} className="relative w-full h-full rounded-2xl overflow-hidden">
            <Webcam
                width={videoDimensions.width}
                height={videoDimensions.height}
                className="absolute top-0 left-0 opacity-50"
                videoConstraints={{
                    width: videoDimensions.width,
                    height: videoDimensions.height,
                    facingMode: "user",
                }}
                onLoadedData={handleVideoLoad}
                mirrored={true}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            <div className="absolute top-0 left-0 w-full h-full">
                <Canvas shadows camera={{position: [0, 0, 5], fov: 60}}>
                    <Scene faceData={faceData}/>
                </Canvas>
            </div>

            {loadingMessage && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"/>
                        <p className="text-white text-lg">{loadingMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaceDetection;