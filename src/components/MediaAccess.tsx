'use client'

import { useEffect, useState, useRef } from "react";

const MediaAccess = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // Membuat referensi ke elemen video

  useEffect(() => {
    async function getMediaStream() {
      try {
        const mediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
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
  }, [stream]);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream; // Mengatur sumber objek video ke aliran media
    }
  }, [stream]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted playsInline controls />
    </div>
  );
};

export default MediaAccess;
