'use client'
import { useEffect, useRef, useState } from "react";
import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";


const NavItems = () => {

    const [activeIndex, setActiveIndex] = useState<
    null | number>(null);

    /*How close the navbar with a keyboard*/
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
}, [])

    const isAnyOpen = activeIndex !== null;

    const navRef = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(navRef, () => setActiveIndex(null));
   return (
     <div className="flex gap-4 h-full" ref={navRef}>
       {PRODUCT_CATEGORIES.map((category, i) => {
         /*This lines of code is how we keep track of 
           which item in Navbar is currently opened*/
         const handleOpen = () => {
           if (activeIndex === i) {
             setActiveIndex(null);
           } else {
             setActiveIndex(i);
           }
         };

         const isOpen = i === activeIndex;
         return (
           <NavItem
             category={category}
             handleOpen={handleOpen}
             isOpen={isOpen}
             isAnyOpen={isAnyOpen}
             key={category.value}
             //   close={close}
           />
         );
       })}
     </div>
   );
}

export default NavItems