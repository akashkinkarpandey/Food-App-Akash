// import { useState } from "react";
import React,{useState} from "react";

const Section=({title,description,isVisible,setIsVisible})=>{
    // const [isVisible,setIsVisible]=useState(false);
    return (
        <div className="p-2 m-2 border border-black">
            <h3 className="font-bold text-xl">{title}</h3>
            {/* <p>{description}</p> */}
            {
                !isVisible?(
            <button className="cursor-pointer" onClick={()=>{setIsVisible(true)}}>Show </button>
                ):
                (
            <button className="cursor-pointer" onClick={()=>{setIsVisible(false)}}>Hide</button>
                )
            }
            {isVisible && <p>{description}</p>}
        </div>
    );
}
const Instamart=()=>{
    const [visibleSection,setVisibleSection]=useState("about");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section title={"About Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis vel accusantium quam tempora deserunt natus optio inventore voluptatum autem repudiandae dolorum nobis animi aperiam reiciendis, voluptate mollitia deleniti explicabo. Vitae a eveniet, saepe nihil accusamus repudiandae soluta aspernatur voluptas nostrum? Fugiat, alias autem! Nesciunt laboriosam maxime nulla! Qui, perferendis." }
            isVisible={visibleSection==="about"}
            setIsVisible={()=>setVisibleSection("about")}
        />
            <Section title={"Team Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis vel accusantium quam tempora deserunt natus optio inventore voluptatum autem repudiandae dolorum nobis animi aperiam reiciendis, voluptate mollitia deleniti explicabo. Vitae a eveniet, saepe nihil accusamus repudiandae soluta aspernatur voluptas nostrum? Fugiat, alias autem! Nesciunt laboriosam maxime nulla! Qui, perferendis."}
            isVisible={visibleSection==="team"}
            setIsVisible={()=>setVisibleSection("team")}
            />
            <Section title={"Careers"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis vel accusantium quam tempora deserunt natus optio inventore voluptatum autem repudiandae dolorum nobis animi aperiam reiciendis, voluptate mollitia deleniti explicabo. Vitae a eveniet, saepe nihil accusamus repudiandae soluta aspernatur voluptas nostrum? Fugiat, alias autem! Nesciunt laboriosam maxime nulla! Qui, perferendis."}
            isVisible={visibleSection==="career"}
            setIsVisible={()=>setVisibleSection("career")}
            />
        </div>
    );
};
export default Instamart;