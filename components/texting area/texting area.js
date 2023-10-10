const Desktop2 = () => {
    return (
      <div className="relative bg-neutral-white box-border w-full overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-black">
        <div className="flex-1 box-border h-[1018px] overflow-hidden flex flex-row items-center justify-between py-0 px-[7px] relative border-[1px] border-solid border-black">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[0px] w-[863px] flex flex-col items-start justify-center gap-[12px] z-[0]">
            <div className="self-stretch flex flex-row items-end justify-start gap-[12px]">
              <div className="relative w-[79px] h-[79px]">
                <div className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 hidden" />
                <img
                  className="absolute h-[85.71%] w-[85.71%] top-[7.14%] right-[7.14%] bottom-[7.14%] left-[7.14%] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-32931@2x.png"
                />
                <div className="absolute h-[26.49%] w-[26.49%] top-[4.61%] right-[4.61%] bottom-[68.9%] left-[68.9%] rounded-[50%] bg-primary-default box-border hidden border-[2px] border-solid border-grayscale-off-white" />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch relative text-[36px] tracking-[0.03em] leading-[24px] font-semibold font-body-01 text-gray-200 text-left">
                  Athalia Putri
                </div>
              </div>
            </div>
            <div className="flex-1 w-[863px] flex flex-col items-center justify-end">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                alt=""
                src="/vector-11.svg"
              />
            </div>
          </button>
          <div className="my-0 mx-[!important] absolute top-[938px] left-[0px] bg-neutral-white w-[852px] flex flex-col items-center justify-center pt-px px-0 pb-[15px] box-border z-[1]">
            <div className="self-stretch my-0 mx-[!important] absolute top-[8px] left-[9px] flex flex-row items-center justify-between z-[0]">
              <div className="flex-1 rounded-81xl bg-gainsboro-300 flex flex-row items-center justify-start py-[15px] px-[18px] gap-[12px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5">
                  <div className="absolute top-[0px] left-[0px] bg-black w-5 h-5" />
                </button>
                <input
                  className="[border:none] font-light font-poppins text-[16px] bg-[transparent] relative leading-[150%] text-black text-left opacity-[0.4]"
                  placeholder="Type a message"
                  type="text"
                />
              </div>
              <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-gainsboro-400 rounded-81xl h-[53px] overflow-hidden flex flex-col items-end justify-end box-border hover:bg-darkgray">
                <div className="w-[34px] h-8 flex flex-col items-end justify-end">
                  <img
                    className="relative w-[32.5px] h-[31.5px]"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Desktop2;
  
  