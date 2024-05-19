"use client";
// Import library for animated counting
import CountUp from "react-countup";
// Define a functional component AnimatedCounter with a prop amount of type number
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
        // Container div with full width
    <div className="w-full">
      {/* 
        CountUp component:
        - decimals: Number of decimal places to display
        - decimal: Separator for decimal places
        - prefix: Prefix for the displayed number (e.g., $ for currency)
        - end: Target value for the animation to count up to
      */}
      <CountUp 
      decimals={2} 
      decimal="," 
      prefix="$" 
      end={amount} 
      />
    </div>
  );
};

export default AnimatedCounter;
