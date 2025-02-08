import ViewIcon from "@/assets/icons/View";
import ViewHideIcon from "@/assets/icons/ViewHide";
import React, { FC, useState } from "react";

const Input: FC<{
  placeholder: string;
  icon: React.JSX.Element;
  inputType?: string;
  label?: string;
  onChange: (value: string, type: string) => void;
}> = ({ placeholder, icon, label, onChange, inputType = "text" }) => {

    const [isPasswordVisible , setIsPasswordVisible] = useState(false)

    const determineInputType = () => {
        if(inputType === 'password'){
            return isPasswordVisible ? 'text' : 'password'
        }

        return 'text';
    }
  return (
    <div className="max-w-full">
      <p className="text-[white] text-base py-1 font-light font-montserrat ">
        {label}
      </p>
      <div className="border-[1px] px-2 flex flex-row items-center justify-between bg-transparent rounded-md gap-2">
        {icon}
        <div className="flex flex-row items-center justify-between flex-1 relative">
          <input
            type={determineInputType()}
            onChange={(e: any) => onChange(e.target.value, placeholder)}
            placeholder={placeholder}
            className="flex-1 text-xl font-montserrat placeholder:font-montserrat p-2 border-none outline-none rounded-lg bg-transparent text-white placeholder-white font-extralight "
          />
          {inputType === "password" && (
            <div className="absolute right-2 cursor-pointer bg-transparent" onClick={()=>setIsPasswordVisible(!isPasswordVisible)}>
                {isPasswordVisible ?  <ViewIcon/> : <ViewHideIcon/>}
                </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
