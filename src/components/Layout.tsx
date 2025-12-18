import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen relative bg-[var(--color-bg)] text-[var(--color-text)] font-sans selection:bg-[var(--color-primary)] selection:text-black overflow-hidden">
            {/* Scanline Effect */}
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>
            <div className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-b from-transparent via-[rgba(0,255,65,0.03)] to-transparent opacity-10 animate-scan h-[100vh]"></div>

            {/* Ambient Glow */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[var(--color-primary)] opacity-[0.03] blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-secondary)] opacity-[0.03] blur-[120px] rounded-full"></div>
            </div>

            <Navbar />

            <main className="relative z-10 pt-16">
                {children}
            </main>

            <footer className="text-center py-8 text-[var(--color-text-dim)] text-xs font-mono border-t border-[var(--color-panel)] mt-20 bg-black/40 backdrop-blur-sm z-10 relative">
                <p className="mb-2">Diseñado por <span className="text-[var(--color-primary)]">Iker Bretos</span></p>
            </footer>
        </div>
    );
};
