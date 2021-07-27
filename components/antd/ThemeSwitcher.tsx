import React, { useState } from "react";
// import "./App.css";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input } from "antd";

export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { switcher, currentTheme, status, themes } = useThemeSwitcher();
    const [text, setText] = useState("");

    const toggleTheme = (isChecked: boolean) => {
        setIsDarkMode(isChecked);
        switcher({ theme: isChecked ? themes.dark : themes.light });
    };

    // Avoid theme change flicker
    if (status === "loading") {
        return null;
    }

    return (
        <div className="main fade-in">
            <h1>The current theme is: {currentTheme}</h1>
            <Switch checked={isDarkMode} onChange={toggleTheme} />

            <Input
                style={{ width: 300, marginTop: 30 }}
                placeholder="I will change with the theme!"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}
