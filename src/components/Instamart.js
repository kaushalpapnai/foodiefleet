import { useState } from "react"

const Section=({title,description,isVisible,setIsVisible})=>{
  // const [isVisible,setIsVisible] = useState(false);
  return(
    <>
    <div className="border border-black m-4 p-2">
       <h1 className="font-bold tex-2xl">{title}</h1>
       {isVisible ? <button className="underline" onClick={()=>setIsVisible()}>Hide</button> : 
       <button className="underline" onClick={()=>setIsVisible()}>Show</button>}
       {isVisible && <p className="text-gray-900">{description}</p>}
    </div>
    </>
  )
}


const Instamart=()=>{
  const [visibleSection,setVisibleSection] = useState(" ");
    return(
        <>
          <h1 className="font-bold text-3xl m-2 p-2">Instamart</h1>
          <Section title={"About Instamart :-"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.'}
           isVisible={visibleSection == "about"} 
           setIsVisible={()=>setVisibleSection(visibleSection=="about"?"":"about")}
          />
          <Section title={"Team Instamart :-"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."}
             isVisible={visibleSection == "team"} 
             setIsVisible={()=>setVisibleSection(visibleSection=="team"?"":"team")}
          />
          <Section title={"Careers :-"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."}
             isVisible={visibleSection == "careers"} 
             setIsVisible={()=>setVisibleSection(visibleSection=="careers"?"":"careers")}
          />

        </>
    )
}

export default Instamart