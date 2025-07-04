import { useEffect, useState } from "react";

const DownloadApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    setTimeout(() => {
      if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.vedguru.app";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "https://apps.apple.com/in/app/vedguru/id6746742016";
      } else if (/Macintosh|Mac OS X/.test(userAgent)) {
        window.location.href = "https://apps.apple.com/in/app/vedguru/id6746742016";
      } else if (/Windows NT/.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.vedguru.app";
      }
    }, 1000); // Optional: 1s delay to show loader
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      Redirecting you to the app store...
    </div>
  );
};

export default DownloadApp;
