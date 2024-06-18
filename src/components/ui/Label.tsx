type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Label: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <span
            className={`relative block w-full font-medium text-[13px] sm:text-[14px] tracking-[5px] sm:tracking-[6px] uppercase text-[#6c7289] ${className}`}
        >
            {children}
        </span>
    );
};
