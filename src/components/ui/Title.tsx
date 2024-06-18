type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Title: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <h1
            className={`w-full text-[32px] sm:text-[36px] md:text-[40px] font-bold leading-[1.1em] font-fraunces text-[#1c232b] ${className}`}
        >
            {children}
        </h1>
    );
};
