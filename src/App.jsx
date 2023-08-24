import { useEffect, useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"

export default function App() {
  const [conveterOrCopy, setConverterOrCopy] = useState('CONVERTER')
  const [pixel, setPixel] = useState('')
  const [rem, setRem] = useState("")

  useEffect(() => {
    setConverterOrCopy("CONVERTER")
  }, [pixel])

  async function handleButton() {
    if (conveterOrCopy === "CONVERTER") {
      if (pixel !== "") {
        setRem(pixel * 0.0625)
        setConverterOrCopy("COPIAR")
        return
      } 
      toast.error("Campo vazio! Insira um número")
    } else {
      navigator.clipboard.writeText(`${rem}rem`)
      .then(() => {
        toast.success("Copiado com sucesso!")
      })
      .catch((error) => {
        console.log(error)
        toast.error("Erro ao tentar Copiar")
      })
    }
  }

  

  return (
    <div className="h-screen w-full bg-slate-950 flex justify-center items-center">
        <div className="flex flex-col w-[90%] md:w-[35rem] bg-white p-4 rounded-lg shadow-lg space-y-5">
          <span 
            className="block mx-auto text-3xl font-bold text-gray-800 border-b-gray-800"
          >
            Informe o valor em Pixel:
          </span>
          <input 
            placeholder="Digite aqui um número"
            type="text" 
            className="bg-emerald-200 p-3 text-slate-700 text-xl focus:outline-none focus:ring-emerald-900 focus:ring-2 transition-all rounded-xl"
            value={pixel}
            onChange={(e) => {
              const inputValue = e.target.value
              if (/^\d*$/.test(inputValue)) {
                setPixel(inputValue)
              }
            }}
          />
          <button 
          onClick={handleButton}
          className={`${conveterOrCopy === "CONVERTER"? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}  transition-colors py-3 rounded-lg w-1/2 mx-auto text-white font-extrabold`}
          >
            {conveterOrCopy}
          </button>
          <div className="bg-black py-3 font-extrabold text-2xl text-center text-white">
            {rem ? `${rem}rem` : "Resultado"}
          </div>
        </div>
        <ToastContainer autoClose={3000} />
    </div>
  )
}