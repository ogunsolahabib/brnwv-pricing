import Button from "../ui/button";

export default function Header() {
    return <header className="sticky left-0 top-0 flex w-screen z-50 bg-white"><nav className="p-4 w-full">
        <div className="container w-full mx-auto flex items-center justify-between gap-x-2">
            <div className="flex items-center">
                <a href="#" className="font-bold">Your Logo</a>
            </div>
            <div className="flex items-center gap-x-3 md:gap-x-10">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <div className="w-px h-8 bg-gray-200"></div>
                <div>
                    <a href="#" >
                        <Button>
                            Get Started
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </nav></header>
}