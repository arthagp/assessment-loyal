"use client";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { FaVideo, FaVideoSlash, FaPhoneSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const MediaAccess = () => {
  //PROBLEM : Masih belum bisa handle mediaDevice, mungkin bisa jika menggunakan webRTC.

  //ISSUE : if Off/on mic or camera its doesn't really off the mic and camera..

  const [micEnabled, setMicEnabled] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const enableMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        setMicEnabled(true);
        setCameraEnabled(true);
      } catch (error) {
        console.error("Error accessing media devices: ", error);
      }
    };

    enableMedia();

    return () => {
      // Cleanup
      if (videoRef.current) {
        if (videoRef.current.srcObject) {
          const stream = videoRef.current.srcObject as MediaStream;
          const tracks = stream.getTracks();

          tracks.forEach((track: MediaStreamTrack) => {
            track.stop();
          });
        }
      }
    };
  }, []);

  const toggleMic = () => {
    setMicEnabled((prevMicEnabled) => !prevMicEnabled);
    if (videoRef.current) {
      if (videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const audioTracks = stream.getAudioTracks();
        audioTracks[0].enabled = !micEnabled;
      }
    }
  };

  const toggleCamera = () => {
    setCameraEnabled((prevCameraEnabled) => !prevCameraEnabled);
    if (videoRef.current) {
      if (videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const videoTracks = stream.getVideoTracks();
        videoTracks[0].enabled = !cameraEnabled;
      }
    }
  };

  const size = 30;

  const router = useRouter();

  const goToDashboard = () => {
    router.push("/");
  };

  return (
    <div className="w-full">
      <video ref={videoRef} autoPlay muted={micEnabled} />
      <div className="flex justify-center gap-10 mt-5">
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
        <FaPhoneSlash
          onClick={goToDashboard}
          className="cursor-pointer bg-red-400 rounded-full h-10 w-10 p-2"
          size={size}
        />
      </div>
    </div>
  );
};

export default MediaAccess;
