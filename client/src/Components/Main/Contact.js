import React from 'react'
import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {
            title: "Website related queries, feedback and suggestions", body: [
                "Synergy Peripheral Services , Navsari",
                "107, Manohar Empire Railway Station Road, Fuwara Cir, opposite Daboo Hospital, Asha Nagar, Navsari, Gujarat 396445",
                "9377309768",
                "support@synergyforit.com"
            ]
        },
        {
            title: "For Contacting Developers", body: [
                "Parva Vashi",
                "parvavashi@gmail.com",
                "7434906979"
            ]
        },
        { title: "For BloodBank Realted Queries", body: ["Contact Perticular BloodBank", "Register now to Contact Blood Banks Near You"] }
    ];
    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={cc} draggable={false} width="90%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact