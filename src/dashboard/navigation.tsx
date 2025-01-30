import IconLogo from "../assets/images/logo.svg";

export default function Navigation() {
    return (
        <div>
            <div className="flex justify-center lg:items-center px-5 py-6 lg:px-14">
                <img alt="logo" src={IconLogo} className="w-100 h-20-md" />
            </div>
        </div>
    );
}
