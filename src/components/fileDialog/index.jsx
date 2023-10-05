import React,{useState} from 'react'
import Modal from './modal'

const FileDialog = () => {
  const [showModal, setShowModal] = useState(false);
  const [recipe, setRecipe] = useState()

    return (
      <>
        <div className="flex flex-col items-center justify-center h-60">
  
            <button
                className="px-4 py-2 text-purple-100 bg-purple-600 rounded-sm"
                type="button"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                导入配方
            </button>

            {showModal && <Modal setOpenModal={setShowModal} setRecipe={setRecipe} />}
            
        </div>
        {recipe && <pre><code>{JSON.stringify(recipe,null,2)}</code></pre>}
        </>
    )
}

export default FileDialog