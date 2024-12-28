import FaceDetection from "./Components/FaceDetection/faceDetection.jsx";
import BackgroundOverlay from "./Components/BackgroundOverlay/backgroundOverlay.jsx";

function App() {
    return (
        <div className="relative min-h-screen lg:h-svh w-full flex overflow-hidden">
            <div className="h-full w-full p-4 sm:p-8 lg:p-24 mb-32 xl:mb-0">
                <div className="absolute inset-0">
                    <BackgroundOverlay/>
                </div>
                <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8">
                    <div
                        className="min-h-[400px] flex-1 rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                        <div className="h-full w-full rounded-2xl overflow-hidden">
                            <FaceDetection/>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 lg:gap-6">
                        <div
                            className="rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 lg:mb-4 py-2">
                                3D Face Tracking Mask
                            </h1>
                            <p className="text-gray-300 text-base lg:text-lg">
                                Experience real-time facial tracking technology with this interactive 3D mask demo.
                                Watch as the mask seamlessly follows your movements and expressions,
                                demonstrating the power of modern web-based computer vision and 3D rendering
                                capabilities.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-xl p-4 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                                <h3 className="text-lg font-semibold text-white mb-2">3D Visualization</h3>
                                <p className="text-gray-400 text-sm">
                                    Real-time conversion of facial landmarks into 3D space using Three.js and React
                                    Three Fiber
                                </p>
                            </div>
                            <div className="rounded-xl p-4 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                                <h3 className="text-lg font-semibold text-white mb-2">Face Tracking</h3>
                                <p className="text-gray-400 text-sm">
                                    TensorFlow.js facial landmarks detection with 468 tracking points for precise mask
                                    positioning
                                </p>
                            </div>
                            <div className="rounded-xl p-4 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                                <h3 className="text-lg font-semibold text-white mb-2">Dynamic Mask</h3>
                                <p className="text-gray-400 text-sm">
                                    3D mask that adapts and transforms based on your facial movements and expressions
                                </p>
                            </div>
                            <div className="rounded-xl p-4 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                                <h3 className="text-lg font-semibold text-white mb-2">Technology Stack</h3>
                                <p className="text-gray-400 text-sm">
                                    React Three Fiber + TensorFlow.js + MediaPipe Facemesh + Three.js
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-gray-400 text-sm backdrop-blur-sm bg-black/20">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div>
                        Created by <a href="https://hexthecoder.pl" target="_blank" rel="noopener noreferrer"
                                      className="text-purple-400 hover:text-purple-300">hexthecoder</a>
                    </div>
                    <div>
                        Powered by:
                        <a href="https://www.tensorflow.org/js" target="_blank" rel="noopener noreferrer"
                           className="text-purple-400 hover:text-purple-300 ml-1">TensorFlow.js</a> (Apache-2.0) by
                        Google,
                        <a href="https://github.com/google/mediapipe" target="_blank" rel="noopener noreferrer"
                           className="text-purple-400 hover:text-purple-300 ml-1">MediaPipe</a> (Apache-2.0) by Google,
                        <a href="https://threejs.org" target="_blank" rel="noopener noreferrer"
                           className="text-purple-400 hover:text-purple-300 ml-1">Three.js</a> (MIT) by mrdoob,
                        <a href="https://docs.pmnd.rs/react-three-fiber" target="_blank" rel="noopener noreferrer"
                           className="text-purple-400 hover:text-purple-300 ml-1">React Three Fiber</a> (MIT) by PMNDrs
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;