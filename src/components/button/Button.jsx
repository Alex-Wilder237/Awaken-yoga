// src/components/common/Button.js
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Buttonbox = () => {
  return (
    <Dropdown>
      <DropdownTrigger className="bg-[#D6E6FF] px-8 py-7 lg:px-[60px] lg:py-8  rounded-full text-[10px] lg:text-lg">
        <Button  
        >
          Contact
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="p-2">
        <DropdownItem ><a className="text-xl" href="/">Subscript to our studio</a></DropdownItem>
        <DropdownItem ><a className="text-xl" href="/">View our Catalogue</a></DropdownItem>
        <DropdownItem ><a className="text-xl" href="/">Reserve a personal cour</a></DropdownItem>
        <DropdownItem ><a className="text-xl" href="/">Learn more about yoga</a></DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );
};

export default Buttonbox;
