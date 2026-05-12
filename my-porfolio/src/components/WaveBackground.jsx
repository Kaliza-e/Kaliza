export default function WaveBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="dot-grid opacity-60"></div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[150px] mix-blend-screen"></div>

      {/* SVG Wave */}
      <div className="absolute bottom-0 w-full leading-[0]">
        <svg
          className="relative block w-full h-[150px] md:h-[250px] lg:h-[350px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Back wave */}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.9,188.75,99.43,235.8,86.06,280.4,70.52,321.39,56.44Z"
            className="fill-cyan-500/20"
          ></path>
          {/* Front wave */}
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-grad-hero"
          ></path>
          {/* Solid base to match next section bg */}
          <rect x="0" y="119" width="1200" height="2" className="fill-navy-900"></rect>
        </svg>
      </div>
    </div>
  )
}
