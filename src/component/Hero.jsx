import { useState} from "react"
function Hero(){
    const [index, setIndex ] = useState(0)
    const maahMaah = [
        "1. Afeef Hore lahoow Ama Adkeysi Danbo Lahoow",
        "2.Daacadi ma hungowdo.",
        "3. Af daboolan waa dehab",
        "4. Talo Keen Ahoow Ama Talo Raac Ahoow",
        "5. Af jooga looma adeego",
        "6. Af wax cune xisho",
        "7. Arrin xumo abaar ka daran.",
        "8. Col iyo abaar cagahaagaa lagaga baxaa. ",
        "9. Intaadan fallin ka fiirso",
        "10. Aqoon la’aani waa iftiin la’aan."
    ]
    

    const nextBtn = ()=>{
        if(index <maahMaah.length-1){
            setIndex(index+1)

        }
        
    }

    const PreviousBtn = ()=>{
        setIndex(index-1)
    }
    return <div className="text-center">
        {/* <h1 style={{display: index=== maahMaah.length-1 ?"block" :"none"}} className="font-bold hidden text-red-500 text-3xl">Dhamaad</h1> */}
         
         <h1 className={`font-bold text-red-500 text-3xl ${index===maahMaah.length-1 
            ? "block" :"hidden"}`}>Dhamaad</h1>
        {/* <p style={{color: index==2 ? "red" : ""}} 
        className="my-20 text-3xl">{maahMaah[index]}</p>
         */}
         <p className={`my-20 text-3xl ${index==2 ? "text-red-600" : ""}`}>{maahMaah[index]}</p>
        <button  onClick={PreviousBtn} className="bg-blue-500 px-8 py-3 rounded text-white text-3xl">Previous</button>
        <button onClick={nextBtn} className="bg-blue-500 px-8 py-3 rounded text-white text-3xl ml-10">Next</button>
    </div>
}
export default  Hero