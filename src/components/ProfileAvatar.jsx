export default function ProfileAvatar() {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 px-6">
      <div
        className="
          w-40 h-40 md:w-48 md:h-48
          rounded-full
          border-2 border-[#7c7cff]
          shadow-[0_0_25px_#7c7cff55]
          hover:shadow-[0_0_45px_#7c7cffaa]
          transition-all duration-300
          overflow-hidden
          bg-black
        "
      >
        <img
          src="/profile.jpg"
          alt="Sambit Saha"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
