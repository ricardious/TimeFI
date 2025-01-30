const GradientBackdrop: React.FC = () => {
    return (

        <div className="absolute inset-0 -top-48 inline-flex flex-row justify-center">
            <div className="w-[200px] h-[200px] rounded-full relative animate-one opacity-50 blur-[90px] bg-[rgb(255,72,173)]"></div>
            <div className="w-[100px] h-[100px] rounded-full relative animate-two opacity-50 blur-[90px] bg-[rgb(30,0,255)]"></div>
            <div className="w-[200px] h-[200px] rounded-full relative animate-one opacity-50 blur-[90px] bg-[rgb(140,0,215)]"></div>
        </div>
    );
}

export default GradientBackdrop;