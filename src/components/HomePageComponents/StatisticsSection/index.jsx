import React, { useRef } from 'react';
import useScrollTriggeredCountUp from '../../../hooks/useCounterHook';
import "./style.scss"
import CommonButton from '../../CommonComponents/Buttons';

function Statistics() {
    const YourComponentProjects = () => {
        const refProjects = useRef(null);
        const countProjects = useScrollTriggeredCountUp(refProjects, 800);


        return <div ref={refProjects} className='increasingNumber'>{countProjects}</div>;
    };
    const YourComponentCustomers = () => {
        const refCustomers = useRef(null);
        const countCustomers = useScrollTriggeredCountUp(refCustomers, 795);


        return <div ref={refCustomers} className='increasingNumber'>{countCustomers}</div>;
    };
    const YourComponentHours = () => {
        const refHours = useRef(null);
        const countHours = useScrollTriggeredCountUp(refHours, 1200);

        return <div ref={refHours} className='increasingNumber'>{countHours}</div>;
    };
    const YourComponentCups = () => {
        const refCups = useRef(null);
        const countCups = useScrollTriggeredCountUp(refCups, 850);

        return <div ref={refCups} className='increasingNumber'>{countCups}</div>;
    };
    return (
        <div id="homePageStatistics" >
            <div className="leftSide" >
                <div className="finishedProjects" >
                    <YourComponentProjects />
                    FINISHED PROJECTS
                </div>
                <div className="happyCustomers">
                    <YourComponentCustomers />
                    HAPPY CUSTOMERS
                </div>
                <div className="workingHours">
                    <YourComponentHours />
                    WORKING HOURS
                </div>
                <div className="cupsOfCoffee">
                    <YourComponentCups />
                    CUPS OF COFFEE
                </div>
            </div>
            <div className="rightSide">
                <CommonButton>
                    Explore Further
                </CommonButton>
            </div>
        </div>
    )
}

export default Statistics