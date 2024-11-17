export default function Navbar() {
  return (
    <div
      className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center border-2 border-blue-200 sticky top-0 z-50"
    >
      <div className="w-[191px] h-[34px]">
        <img src="/image/logo.png" alt="logo" />
      </div>
      <div className="w-[737.5px] h[92px] py-4 px[220px] flex justify-between items-center">
        <div className="w-[549px] h-[23px]" >        
        <ul className="flex justify-between  items-center mr-20 text-white">
          <li><a href="#product">Product</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        </div>
        <div className="w-[126px] h-[60px]" >
         <button className="px-10 py-4 rounded-lg bg-[#FFE492]">Login</button>
         </div>
      </div>
    </div>
  );
}


