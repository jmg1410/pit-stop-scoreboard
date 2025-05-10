import LogoHeader from "./LogoHeader"

function Layout({children}) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-700 to-black text-white p-6 font-mono">
            <LogoHeader />
            {children}
        </div>
    )
}
export default Layout