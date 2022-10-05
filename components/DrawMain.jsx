import React from 'react'

const DrawMain = () => {
    if (typeof document !== "undefined") {

        const canvas = document.getElementById('draw')
        const toolbar = document.getElementById("toolbar");
        const ctx = canvas.getContext("2d");

        const canvasOffsetX = canvas.offsetLeft;
        const canvasOffsetY = canvas.offsetTop;

        canvas.width = window.innerWidth - canvasOffsetX;
        canvas.height = window.innerHeight - canvasOffsetY;

        let isPainting = false;
        let lineWidth = 5;
        let startX;
        let startY;

        toolbar.addEventListener("click", (e) => {
          if (e.target.id === "clear") {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        });

        toolbar.addEventListener("change", (e) => {
          if (e.target.id === "stroke") {
            ctx.strokeStyle = e.target.value;
          }

          if (e.target.id === "lineWidth") {
            lineWidth = e.target.value;
          }
        });

        const draw = (e) => {
          if (!isPainting) {
            return;
          }

          ctx.lineWidth = lineWidth;
          ctx.lineCap = "round";

          ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
          ctx.stroke();
        };

        canvas.addEventListener("mousedown", (e) => {
          isPainting = true;
          startX = e.clientX;
          startY = e.clientY;
        });

        canvas.addEventListener("mouseup", (e) => {
          isPainting = false;
          ctx.stroke();
          ctx.beginPath();
        });

        canvas.addEventListener("mousemove", draw);

        
    }
    const onSubmit = async () => {
        if (typeof document !== "undefined") {
            const canvas = document.getElementById("draw");

            let dataURL = canvas.toDataURL();
            let actualImage = new Image();
            actualImage.src = dataURL;
            console.log(dataURL);
            const webhookBody = {
              embeds: [
                {
                  title: "Draw Minigame test",
                  image: {
                    url: actualImage,
                  },
                },
              ],
            };
        
    
        const webhookUrl = "https://discord.com/api/webhooks/998909930641829888/t6v59YrptiKUDm0xTJoyWYJCeI1WRI77XQZBH4BcugnWF6uDxy_D4aS1AWBTIVKRenmu"
    
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });
        // if (response) {
        //   setAlertStateSubmitted(true)
        //   setTimeout(() => {
        //     setAlertStateSubmitted(false)
        //   }, 3000)
    
        // } else {
        //   setAlertStateError(true);
        //   setTimeout(() => {
        //     setAlertStateError(false);
        //   }, 3000);
        // }
        }

}


  return (
    <div className="w-full h-screen bg-[#1e1d1f] text-white pt-24 p-4">
      <div
        id="toolbar"
        className="flex bg-black w-full rounded-lg p-1 items-center"
      >
        <h1 className="px-4">Draw</h1>
        <div className="px-4">
          <input type="color" id="stroke" className="rounded-md" />
        </div>
        <div>
          <input
            type="number"
            id="lineWidth"
            value="5"
            className="text-black rounded-md w-[50px]"
          />
        </div>
        <div className="px-4">
          <button
            id="clear"
            className="bg-[#3400a5] rounded-md hover:bg-[#3400a5]/30 px-4 text-center duration-300"
          >
            Clear
          </button>
        </div>
        <div className="px-4">
          <button
            onClick={onSubmit}
            className="bg-[#3400a5] rounded-md hover:bg-[#3400a5]/30 px-4 text-center duration-300"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-full h-fit rounded-lg">
        <canvas
          className="bg-white w-full h-full rounded-lg"
          id="draw"
        ></canvas>
      </div>
    </div>
  );
}

export default DrawMain