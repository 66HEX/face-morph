import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";

export const runDetector = async (video, onFaceDetected) => {
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detectorConfig = {
    runtime: "tfjs",
  };
  const detector = await faceLandmarksDetection.createDetector(
      model,
      detectorConfig
  );

  const detect = async (net) => {
    const estimationConfig = { flipHorizontal: false };
    const faces = await net.estimateFaces(video, estimationConfig);

    if (faces && faces.length > 0) {
      const face = faces[0];
      const keypoints = face.keypoints.map(point => ({
        x: point.x,
        y: point.y,
        z: point.z || 0,
        name: point.name
      }));

      const box = {
        xMin: Math.min(...keypoints.map(p => p.x)),
        yMin: Math.min(...keypoints.map(p => p.y)),
        xMax: Math.max(...keypoints.map(p => p.x)),
        yMax: Math.max(...keypoints.map(p => p.y))
      };

      box.width = box.xMax - box.xMin;
      box.height = box.yMax - box.yMin;

      const centerX = (box.xMax + box.xMin) / 2;
      const centerY = (box.yMax + box.yMin) / 2;
      const centerZ = Math.max(...keypoints.map(p => p.z));

      const normalizedPosition = {
        x: ((centerX / video.videoWidth) - 0.5) * 2,
        y: -((centerY / video.videoHeight) - 0.5) * 2,
        z: centerZ / 100
      };

      onFaceDetected({
        keypoints,
        box,
        position: normalizedPosition
      });
    }
    requestAnimationFrame(() => detect(detector));
  };

  detect(detector);
};