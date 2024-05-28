import Footer from "@/components/Footer/Footer";
import Header from "./components/Navbar/Header";
import Main from "./components/Main";

export default function Project({ searchParams }: { searchParams: any }) {
    return (
        <div className="min-h-screen w-screen flex flex-col">
            <Header title={searchParams.title} email={searchParams.email} />
            <Main title={searchParams.title} live={searchParams.live} />
            <Footer loading />
        </div>
    );
}
