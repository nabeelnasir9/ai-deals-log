// pages/home.js
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ChatPage from "@/components/ChatPage";
import ChatHistory from "@/components/ChatHistory";
import UploadDocument from "@/components/UploadDocument";
import Packages from "@/components/Packages";
import Analytics from "@/components/Analytics";
import Captable from "@/components/Captable";
import HeroSection from "@/components/HeroSection";
import Profile from "@/components/Profile";
import Layout from "@/components/Layout";
import FullPageLoader from "@/components/FullPageLoader";

export default function Home() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState("/intro");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/auth/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  const renderView = () => {
    switch (currentView) {
      case "/chat-box":
        return <ChatPage />; // Render ChatPage component
      case "/chat-history":
        return <ChatHistory />;
      case "/upload-document":
        return <UploadDocument />;
      case "/packages":
        return <Packages />;
      case "/analytics":
        return <Analytics />;
      case "/captable":
        return <Captable />;
      case "/profile":
        return <Profile user={user} />;
      case "/intro":
      default:
        return <HeroSection />;
    }
  };

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <Layout
      user={user}
      handleLogout={handleLogout}
      currentView={currentView}
      setCurrentView={setCurrentView}
    >
      {renderView()}
    </Layout>
  );
}
