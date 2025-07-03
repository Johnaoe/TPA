import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <div className="h-10 w-auto overflow-hidden flex items-center">
                        <img alt="logo" src={Logo} className="w-auto h-20 object-cover object-center"/>
                    </div>
                    <p className="my-5">
                        Building bridges between Europeans through innovative Erasmus+
                        projects. We create opportunities for cultural exchange, personal growth,
                        and lasting international friendships through sports and community activities.
                    </p>
                    <p>© TPA All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Our Projects</h4>
                    <p className="my-5">Beach Volleyball Championships</p>
                    <p className="my-5">Cultural Exchange Programs</p>
                    <p>Youth Leadership Training</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Get Involved</h4>
                    <p className="my-5">Ready to join our next project or organize an event?</p>
                    <p>info@tarptautiniaiprojektai.lt</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;