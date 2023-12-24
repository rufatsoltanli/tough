import React from 'react'
import CommonButton from '../../CommonComponents/Buttons'
import "./style.scss"

function SubscriptionSection() {
    return (
        <div className="subscriptionCont">
            <div className="cardsCont">
                <div className="card">
                    <div className="icon"><i class="fa-solid fa-city"></i></div>
                    <div className="plan">Basic Plan</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, adipisci voluptates vero in quia iusto fugiat voluptas corrupti, itaque explicabo libero at perspiciatis aut quasi!
                    </div>
                    <div className="monthlyPrice">
                        <span className='price'>$30 </span>
                        per month
                    </div>
                    <div className="button">
                        <CommonButton>Get Started</CommonButton>
                    </div>
                    <div className="freeTrial">
                        Free 30 Day Trial
                    </div>
                </div>
                <div className="card">
                    <div className="icon"><i class="fa-solid fa-city"></i></div>
                    <div className="plan">Standart Plan</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, adipisci voluptates vero in quia iusto fugiat voluptas corrupti, itaque explicabo libero at perspiciatis aut quasi!
                    </div>
                    <div className="monthlyPrice">
                        <span className='price'>$60 </span>
                        per month
                    </div>
                    <div className="button">
                        <CommonButton>Get Started</CommonButton>
                    </div>
                    <div className="freeTrial">
                        Free 30 Day Trial
                    </div>
                </div>
                <div className="card">
                    <div className="icon"><i class="fa-solid fa-city"></i></div>
                    <div className="plan">Premium Plan</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, adipisci voluptates vero in quia iusto fugiat voluptas corrupti, itaque explicabo libero at perspiciatis aut quasi!
                    </div>
                    <div className="monthlyPrice">
                        <span className='price'>$100 </span>
                        per month
                    </div>
                    <div className="button">
                        <CommonButton>Get Started</CommonButton>
                    </div>
                    <div className="freeTrial">
                        Free 30 Day Trial
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionSection