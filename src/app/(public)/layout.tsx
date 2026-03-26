type PublicLayoutProps = {
    children: React.ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="public-layout">
            <main className="public-layout__content mx-auto min-h-screen max-w-7xl px-4 py-6">
                {children}
            </main>
        </div>
    );
}