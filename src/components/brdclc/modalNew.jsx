import React from "react";

const ModalNew = ({setOpenModal,title=null,children,callback}) => {

  return (
    <>
    <div className="modal flex fixed top-0 left-0 w-full h-full p-8  overflow-y-scroll bg-black opacity-90">
      <div
        
        className=" modal-panel max-w-xl min-w-[480px] flex-grow m-auto bg-white opacity-100 rounded-2xl shadow-md"
      
      >
        <form className=" block mt-0  bg-white " method="post">
          <div className="modal-content p-8 clearfix after:block after:content-[' '] after:clear-both ">
            {children}
          </div>
          <div className="modal-buttongroup mt-10  w-full border-t border-solid border-gray-700 text-right">
            <input className=" cursor-pointer text-[#E24F00] bg-transparent text-center py-3 px-8 outline-none border-none" type="button" value="确定"
              onClick={() => {
                setOpenModal(false)}}
            />
          </div>
        </form>
        </div>
      
    </div>
  </>
  );
};

export default ModalNew;
