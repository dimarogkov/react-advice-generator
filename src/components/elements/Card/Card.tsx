type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <div
            className={`relative flex items-center flex-col md:flex-row w-full max-w-[740px] rounded-[12px] overflow-hidden bg-[#fff] ${className}`}
        >
            {children}
        </div>
    );
};
