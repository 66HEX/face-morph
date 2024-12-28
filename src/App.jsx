import FaceDetection from "./Components/FaceDetection/faceDetection.jsx";
import BackgroundOverlay from "./Components/BackgroundOverlay/backgroundOverlay.jsx";

function App() {
    return (
        <div className="relative min-h-screen w-full flex overflow-hidden p-4 sm:p-8 lg:p-24">
            <div className="absolute inset-0">
                <BackgroundOverlay/>
            </div>
            <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="min-h-[400px] flex-1 rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                    <div className="h-full w-full rounded-xl overflow-hidden">
                        <FaceDetection/>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-4 lg:gap-6">
                    <div className="rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 lg:mb-4">
                            Face Landmarks Demo
                        </h1>
                        <p className="text-gray-300 text-base lg:text-lg mb-4 lg:mb-6">
                            A real-time demonstration of facial landmarks detection using TensorFlow.js.
                            This demo shows how to track facial features and landmarks in the browser using machine learning.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a href="https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="px-4 lg:px-6 py-2 lg:py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors text-center">
                                Model Documentation
                            </a>
                            <a href="https://www.tensorflow.org/js/models"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="px-4 lg:px-6 py-2 lg:py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors text-center">
                                TensorFlow.js Models
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl p-4 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                            <h3 className="text-lg font-semibold text-white mb-2">About Project</h3>
                            <p className="text-gray-400 text-sm">
                                Browser-based facial landmarks detection using MediaPipe Facemesh model
                            </p>
                        </div>
                        <div className="rounded-xl p-4 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                            <h3 className="text-lg font-semibold text-white mb-2">Technology</h3>
                            <p className="text-gray-400 text-sm">
                                TensorFlow.js + Face Landmarks Detection + React
                            </p>
                        </div>
                        <div className="rounded-xl p-4 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                            <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
                            <p className="text-gray-400 text-sm">
                                Detects 468 facial landmarks in real-time
                            </p>
                        </div>
                        <div className="rounded-xl p-4 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                            <h3 className="text-lg font-semibold text-white mb-2">Model</h3>
                            <p className="text-gray-400 text-sm">
                                MediaPipe Facemesh - Fast and accurate facial landmark detection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;