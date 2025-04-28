# 3D Face Tracking Mask

A real-time facial tracking application that renders a 3D mask overlay using modern web technologies. The application tracks facial movements and expressions in real-time, demonstrating advanced computer vision capabilities directly in the browser.

## Features

- **Real-time Face Detection**: Utilizes TensorFlow.js and MediaPipe Facemesh to detect and track 468 facial landmarks
- **3D Visualization**: Converts facial landmarks into 3D space using Three.js and React Three Fiber
- **Dynamic Mask Overlay**: Responsive 3D mask that adapts to facial movements and expressions
- **Responsive Design**: Fully responsive interface that works across different screen sizes

## Tech Stack

- React
- TensorFlow.js
- MediaPipe Facemesh
- Three.js
- React Three Fiber
- Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/66HEX/face-morph.git
cd face-morph
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How It Works

The application uses your device's camera to track facial movements in real-time. Here's the process:

1. **Face Detection**: TensorFlow.js and MediaPipe Facemesh detect facial landmarks (468 points) from the video feed
2. **3D Mapping**: The detected points are mapped to 3D space using Three.js
3. **Mask Overlay**: A 3D mask is rendered and positioned based on the tracked facial landmarks
4. **Real-time Updates**: The mask position and rotation update continuously to match facial movements

## Project Structure

```
├── src/
│   ├── Components/
│   │   ├── FaceDetection/
│   │   │   └── faceDetection.jsx     # Main face detection component
│   │   └── FaceMesh/
│   │       └── faceMesh.jsx          # 3D mask rendering
│   ├── utils/
│   │   └── detector.js               # Face detection utilities
    │   ├── index.css                 # Global styles
│   ├── App.jsx                       # Main application component
│   ├── main.jsx                      # Application entry point
│   └── index.css                     # Tailwind directives and base styles
├── .gitignore                        # Git ignore file
├── index.html                        # HTML template
├── package.json                      # Project dependencies and scripts
├── postcss.config.js                 # PostCSS configuration for Tailwind
├── tailwind.config.js                # Tailwind CSS configuration
├── vite.config.js                    # Vite configuration
└── README.md                         # Project documentation
```

## License

This project is powered by:
- TensorFlow.js (Apache-2.0) by Google
- MediaPipe (Apache-2.0) by Google
- Three.js (MIT) by mrdoob
- React Three Fiber (MIT) by PMNDrs

## Acknowledgments

Created by [hexthecoder](https://hexthecoder.pl)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If you have any questions or run into issues, please open an issue in the GitHub repository.
