import React from 'react'
import data from './data.json'

const ListedItemslist = data.ListedItem1;
const paraStyle = {
    color:'green',
    textAlign:'center'
  }
 
function Restaurant() {
    const ListedItems=[
        {
            "name":"sree ram",
            "details":"Chicken Tikka",
            "resimage" : "../images/idli1.png"
        },
        {
            "name":"Taj Mahal",
            "details":"Paneer Tikka",
            "resimage" : "../images/idli2.png"
        },
        {
            "name":"Saundraya",
            "details":"Chole bture",
            "resimage" : "../images/image1.png"
        },
        {
            "name":"Oberoi",
            "details":"Pani Puri",
            "resimage" : "../images/image2.png"
        },
        {
            "name":"Taj Residnatall",
            "details":"Idli dosha",
            "resimage" : "../images/image3.png"
        }

    ]
    return (
        <div>
        {
           ListedItems.map(item=><h2 style={paraStyle} > {item.details} Restaurant Name {item.name} 
           <br/><img src={item.resimage} className="center"/>
           </h2>)
           }
          
        </div>
    )
}

export default Restaurant

