import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const getSingaporeTheme = () => {
    const sgTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' }));
    const hour = sgTime.getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const userOverride = useRef(false); // tracks if user manually toggled

    const [theme, setTheme] = useState(() => {
        try {
            const saved = localStorage.getItem('theme');
            const savedOverride = localStorage.getItem('themeOverride');
            if (saved && savedOverride === 'true') {
                userOverride.current = true;
                return saved;
            }
        } catch {}
        return getSingaporeTheme();
    });

    // Check time every minute, only if user hasn't overridden
    useEffect(() => {
        const interval = setInterval(() => {
            if (!userOverride.current) {
                setTheme(getSingaporeTheme());
            }
        }, 60 * 1000); // every 60 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        try {
            localStorage.setItem('theme', theme);
        } catch {}
    }, [theme]);

    const toggleTheme = () => {
        userOverride.current = true;
        try {
            localStorage.setItem('themeOverride', 'true'); // remember override
        } catch {}
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);

// export const useTheme = () => useContext(ThemeContext);

// export function ThemeProvider({ children }) {
//     const [theme, setTheme] = useState(() => {
//         try {
//             const saved = localStorage.getItem('theme');
//             if (saved) return saved;
//             return window.matchMedia &&
//                 window.matchMedia('(prefers-color-scheme: dark)').matches
//                 ? 'dark'
//                 : 'light';
//         } catch {
//             return 'light';
//         }
//     });

//     useEffect(() => {
//         const root = document.documentElement;
//         if (theme === 'dark') {
//             root.classList.add('dark');
//         } else {
//             root.classList.remove('dark');
//         }
//         try {
//             localStorage.setItem('theme', theme);
//         } catch {}
//     }, [theme]);

// // Keep in sync if OS preferrence changes (optional nice touch)

//     useEffect(() => {
//         const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//         const handleChange = (e) => {
//             // only change if user hasn't explicitly chosen (i.e. no saved localStorage value)
//             if (!localStorage.getItem('theme')) {
//                 setTheme(mediaQuery.matches ? 'dark' : 'light');
//             }
//         };

//         mediaQuery.addEventListener('change', handleChange);

//         return () => {
//             mediaQuery.removeEventListener('change', handleChange);
//         };
//     }, []);

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
//     }

//     return (
//         <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }

// export const useTheme = () => useContext(ThemeContext);