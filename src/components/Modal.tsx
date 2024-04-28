import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Modal({isModalOpen, setIsModalOpen}: {isModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [selectedFood, setSelectedFood] = useState([] as string[]);
  const navigate = useNavigate();

  const addSelectedFood = (food: string) => {
    if (selectedFood.includes(food)) {
      setSelectedFood(selectedFood.filter((item) => item !== food));
      console.log(selectedFood);
      return;
    }
    setSelectedFood(selectedFood.concat(food));
    console.log(selectedFood);
  }

  const checkIffoodExist = (food: string) => {
    return selectedFood.includes(food);
  }

  const handleClick = () => {
    const data = selectedFood;
    navigate('/random', {
      state: {
        data: data,
      }
    })
  };


  return (
    <>
      {isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

          <div className="relative bg-white w-auto p-6 rounded-2xl backdrop-blur-lg drop-shadow-lg shadow-white flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold mb-4">เลือกอาหารที่คุณอยากกินได้เลย!</h2>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
              <div className="flex flex-col gap-2 items-center" onClick={() => addSelectedFood('ไก่')}>
                <img src="/bokchoy.jpg" alt="" className='w-52 h-42 drop-shadow-lg rounded-lg hover:blur-sm cursor-pointer' />
                <p>อยากกิน ไก่!</p>
                {checkIffoodExist('ไก่') && <img src="checkmark.png" alt="" className='w-6 h-6' />}
              </div>
              <div className="flex flex-col gap-2 items-center" onClick={() => addSelectedFood('ทะเล')}>
                <img src="/oyster.jpg" alt="" className='w-52 h-42 drop-shadow-lg rounded-lg hover:blur-sm cursor-pointer' />
                <p>อยากกิน ทะเล</p>
                {checkIffoodExist('ทะเล') && <img src="checkmark.png" alt="" className='w-6 h-6' />}
              </div>
              <div className="flex flex-col gap-2 items-center" onClick={() => addSelectedFood('แป้ง')}>
                <img src="/pizza.jpg" alt="" className='w-52 h-42 drop-shadow-lg rounded-lg hover:blur-sm cursor-pointer' />
                <p>อยากกิน แป้ง</p>
                {checkIffoodExist('แป้ง') && <img src="checkmark.png" alt="" className='w-6 h-6' />}
              </div>
              <div className="flex flex-col gap-2 items-center" onClick={() => addSelectedFood('ของหวาน')}>
                <img src="/icecream.jpg" alt="" className='w-52 h-42 drop-shadow-lg rounded-lg hover:blur-sm cursor-pointer' />
                <p>อยากกิน ของหวาน</p>
                {checkIffoodExist('ของหวาน') && <img src="checkmark.png" alt="" className='w-6 h-6' />}
              </div>
            </div>

            <button
              className="w-32 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              onClick={handleClick}
            >
              Enter Site!
            </button>
            <button
              className="w-32 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      ) : ''}
    </>
  )
}

export default Modal