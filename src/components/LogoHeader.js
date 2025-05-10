function LogoHeader() {
    return (
        
      <div className="flex flex-col items-center gap-0 mb-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/Mario_kart_first_logo.png"
          alt="Mario Kart Logo"
          className="block w-[400px] max-w-full drop-shadow-md mb-[6px]"
          style={{ marginBottom: "-130px" }}
        />
  
        <img
          src="/custom_mario_kart_icons/logo_6.png"
          alt="Scoreboard Logo"
          className="block w-[360px] max-w-full drop-shadow-md"
        />
      </div>
    );
  }
  
  export default LogoHeader;