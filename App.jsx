import React, { useState } from "react";
import {
  Home,
  Map,
  Radio,
  BarChart3,
  User,
  Plus,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

const demoFeed = [
  {
    name: "Mary from Mavuria",
    avatar: "M",
    issue: "Broken borehole. Families walking 3km for water.",
    confirms: 82,
    comments: 14,
    tag: "Water",
    time: "2h ago",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
  },
];

function Shell({ activeTab, setActiveTab, children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8F3EA",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "390px",
          minHeight: "850px",
          background: "white",
          borderRadius: "30px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ padding: "20px", paddingBottom: "100px" }}>
          {children}
        </div>

        <button
          onClick={() => setActiveTab("report")}
          style={{
            position: "absolute",
            right: "20px",
            bottom: "90px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "none",
            background: "#F05A28",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Plus />
        </button>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "80px",
            borderTop: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "white",
          }}
        >
          <Home onClick={() => setActiveTab("home")} />
          <Map onClick={() => setActiveTab("map")} />
          <BarChart3 onClick={() => setActiveTab("pulse")} />
          <Radio onClick={() => setActiveTab("live")} />
          <User onClick={() => setActiveTab("profile")} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("splash");
  const [activeTab, setActiveTab] = useState("home");

  if (screen === "splash") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#F05A28",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>JAMII</h1>
          <p>MBEERE SOUTH</p>
          <p>Powered by Suzuki Networks</p>
          <button
            onClick={() => setScreen("home")}
            style={{
              marginTop: "30px",
              padding: "15px 30px",
              border: "none",
              borderRadius: "12px",
              background: "white",
              color: "#F05A28",
              cursor: "pointer",
            }}
          >
            ENTER JAMII
          </button>
        </div>
      </div>
    );
  }

  const renderTab = () => {
    if (activeTab === "map") return <h2>JAMII MAP</h2>;
    if (activeTab === "pulse") return <h2>JAMII PULSE</h2>;
    if (activeTab === "live") return <h2>JAMII LIVE</h2>;
    if (activeTab === "profile") return <h2>PROFILE</h2>;
    if (activeTab === "report") return <h2>REPORT ISSUE</h2>;

    return (
      <>
        <div>
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
            alt="hero"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>

        <h2 style={{ marginTop: "20px" }}>Hello Grishon 👋</h2>

        {demoFeed.map((item, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              marginTop: "20px",
            }}
          >
            <img
              src={item.image}
              alt="feed"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "16px" }}>
              <h4>{item.name}</h4>
              <p>{item.issue}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  <Heart size={16} />
                  {item.confirms}
                </div>

                <div style={{ display: "flex", gap: "5px" }}>
                  <MessageCircle size={16} />
                  {item.comments}
                </div>

                <div style={{ display: "flex", gap: "5px" }}>
                  <Share2 size={16} />
                  Share
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <Shell activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderTab()}
    </Shell>
  );
}
