type Props = {
    name: string;
    description?: string;
    image: string;
};

const Class = ({ name, description, image }: Props) => {
    const getImageClasses = (name: string) => {
        const baseClasses = "w-full h-full object-cover";

        switch(name) {
            case "Beach Volleyball Tournament":
                return `${baseClasses} object-[center_60%]`; // Lower center
            case "Cultural Exchange Weekends":
                return `${baseClasses} object-[center_30%]`; // Higher center
            case "International Sports Festivals":
                return `${baseClasses} object-bottom`; // Bottom focus
            case "Community Outreach Programs":
                return `${baseClasses} object-top`; // Top focus
            case "Community":
                return `${baseClasses} object-[center_85%]`; // Perfect center
            case "Training Classes":
                return `${baseClasses} object-[center_15%]`; // Slightly lower
            default:
                return `${baseClasses} object-center`; // Default center
        }
    };

    const overlayStyles = `p-5 absolute z-30 flex
      h-[380px] w-[450px] flex-col items-center justify-center
      whitespace-normal bg-primary-500 text-center text-white
      opacity-0 transition duration-500 hover:opacity-90`;

    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px] overflow-hidden">
            <div className={overlayStyles}>
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img
                className={getImageClasses(name)}
                alt={`${name}`}
                src={image}
            />
        </li>
    );
};

export default Class;