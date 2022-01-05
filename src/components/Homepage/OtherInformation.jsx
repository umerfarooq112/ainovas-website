import React from 'react'
import bgbinance from '../../assets/bg-bince.png'
import CustomButton from '../common/CustomButton';

function OtherInformation() {
    return (
        <div className='other-information-wrapper mt-147-px'>
            <h2 className='text-center f-70 fw-bold'>Other Information</h2>

            <div className="d-flex mt-117-px">
                <div className="left" style={{width:'50%'}}>
                    <h6 className='f-40 color-white fw-bold'>Demo Text</h6>
                    <p className='f-28 w-472-px mt-16-px fw-500 '>We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt</p>
                    <CustomButton  />
                </div>
                <div className="right" style={{width:'50%'}}>
                    <h6 className='f-40 color-white fw-bold'>Demo Text</h6>
                    <p className='f-28 w-472-px mt-16-px fw-500 '>We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt</p>
                    <CustomButton  />
                </div>
            </div>

            <div className="d-flex">
                <div className="left-demo d-flex">
                    <div className='text-section'>
                        <h6 className='f-40  fw-bold'>Demo Text</h6>
                        <p>Dec 12,2021</p>
                        <p className='f-28 w-412-px mt-16-px fw-500 info-txt '>We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt</p>
                        <CustomButton  />
                    </div>
                    <img src={bgbinance} className='img-section' alt="" />
                    
                </div>
                <div className="right-demo d-flex">
                    <img src={bgbinance} className='img-section' alt="" />
                    <div className='text-section'>
                        <h6 className='f-40  fw-bold'>Demo Text</h6>
                        <p>Dec 12,2021</p>
                        <p className='f-28 w-412-px mt-16-px fw-500 '>We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt</p>
                        <CustomButton  />
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default OtherInformation
