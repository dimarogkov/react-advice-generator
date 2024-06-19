type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Label: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <span
            className={`relative block w-full font-semibold text-[12px] tracking-[5px] uppercase text-[#52ffa8] ${className}`}
        >
            {children}
        </span>
    );
};
