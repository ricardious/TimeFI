const GradientBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 -top-48 inline-flex flex-row justify-center">
      <div className="w-[200px] h-[200px] rounded-full relative animate-one opacity-40 blur-[90px] bg-secondary"></div>
      <div className="w-[200px] h-[200px] rounded-full relative animate-two opacity-50 blur-[80px] bg-primary"></div>
      <div className="w-[200px] h-[200px] rounded-full relative animate-one opacity-40 blur-[90px] bg-accent"></div>
    </div>
  );
};

export default GradientBackdrop;
