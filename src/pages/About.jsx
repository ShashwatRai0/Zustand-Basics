import React from "react";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#333",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.88)",
          textAlign: "center",
          lineHeight: "1.6",
        }}
      >
        <h1 style={{ color: "#333" }}>About the To-Do List App</h1>
        <p>
          This To-Do List app is designed to help you organize your tasks
          efficiently. It’s built using React and Zustand for lightweight state
          management.
        </p>
        <h3>Features:</h3>
        <ul style={{ listStyleType: "disc", textAlign: "left" }}>
          <li>Add tasks to your list.</li>
          <li>Mark tasks as completed using a checkbox.</li>
          <li>Delete tasks when they’re no longer needed.</li>
        </ul>
        <p>
          Zustand makes managing the app's state simple and efficient by
          allowing functions like adding, toggling, and deleting tasks to work
          seamlessly without unnecessary complexity.
        </p>
        <p>
          Explore the app and make your daily task management easy and
          enjoyable!
        </p>
      </div>
    </div>
  );
};

export default About;
