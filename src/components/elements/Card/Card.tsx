type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <div
            className={`relative w-full max-w-[520px] text-center rounded-[12px] p-[20px] sm:p-[32px] md:p-[40px] bg-[#323a49] ${className}`}
        >
            {children}
        </div>
    );
};
