"use client";

import { useEffect, useState, useRef } from "react";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { FaVideo, FaVideoSlash } from "react-icons/fa";

const MediaAccess = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function getMediaStream() {
      try {
        let mediaConstraints: MediaStreamConstraints = {
          audio: micEnabled,
          video: cameraEnabled,
        };

        console.log(mediaConstraints);

        const mediaStream: MediaStream =
          await navigator.mediaDevices.getUserMedia(mediaConstraints);
        console.log(mediaStream);
        setStream(mediaStream);
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    }

    if (!stream) {
      getMediaStream();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [micEnabled, cameraEnabled]);

  // Toggle mic
  const toggleMic = () => {
    if (stream) {
      const audioTracks = stream.getAudioTracks();
      if (audioTracks.length > 0) {
        const audioTrack = audioTracks[0];
        audioTrack.enabled = !audioTrack.enabled;
        setMicEnabled(audioTrack.enabled);
      }
    }
  };

  // Toggle camera
  const toggleCamera = () => {
    if (stream) {
      const videoTracks = stream.getVideoTracks();
      if (videoTracks.length > 0) {
        const videoTrack = videoTracks[0];
        videoTrack.enabled = !videoTrack.enabled;
        setCameraEnabled(videoTrack.enabled);
      }
    }
  };

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const size = 30;

  return (
    <div className="w-full">
      <video ref={videoRef} autoPlay muted={micEnabled} />
      <div className="flex justify-center gap-5 mt-5">
        <button onClick={toggleMic}>
          {micEnabled ? <IoMdMic size={size} /> : <IoMdMicOff size={size} />}
        </button>
        <button onClick={toggleCamera}>
          {cameraEnabled ? (
            <FaVideo size={size} />
          ) : (
            <FaVideoSlash size={size} />
          )}
        </button>
      </div>
    </div>
  );
};

export default MediaAccess;
