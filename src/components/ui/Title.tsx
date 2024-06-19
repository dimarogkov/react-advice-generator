type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Title: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <h1
            className={`w-full font-semibold text-[26px] sm:text-[28px] md:text-[32px] leading-[1.3em] text-[#cee3e9] ${className}`}
        >
            {children}
        </h1>
    );
};
