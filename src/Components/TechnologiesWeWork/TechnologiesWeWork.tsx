import React from 'react'
import android from "../../Images/t-android-ic.svg"
import ios from "../../Images/t-apple-ic.svg"
import flutter from "../../Images/t-flutter-ic.svg"
import reactNative from "../../Images/t-react-ic.svg"
import Kotlin from "../../Images/t-kotlin-ic.svg"
import ChatBot from "../../Images/t-chatbot-ic.svg"

function TechnologiesWeWork() {
  return (
    <section className="technologies-we-work-main">
    <div className="technologies-we-work-con">
       <div className="container">
          <div className="con-head text-center">
             <h2>Modern Technologies We Work With</h2>
             <h5>We provide cutting edge web and mobile app solutions</h5>
          </div>
          <div className="technologies-we-work-inner">
             <ul className="nav nav-tabs" id="myTab" role="tablist">
               <li className="nav-item" role="presentation">
                 <button className="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Mobile App</button>
               </li>
               <li className="nav-item" role="presentation">
                 <button className="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Frontend</button>
               </li>
               <li className="nav-item" role="presentation">
                 <button className="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Backend</button>
               </li>
               <li className="nav-item" role="presentation">
                 <button className="nav-link" id="tab4" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab" aria-controls="tab-4" aria-selected="false">Database</button>
               </li>
               <li className="nav-item" role="presentation">
                 <button className="nav-link" id="tab5" data-bs-toggle="tab" data-bs-target="#tab-5" type="button" role="tab" aria-controls="tab-5" aria-selected="false">Frameworks</button>
               </li>
               <li className="nav-item" role="presentation">
                 <button className="nav-link" id="tab6" data-bs-toggle="tab" data-bs-target="#tab-6" type="button" role="tab" aria-controls="tab-6" aria-selected="false">Cloud</button>
               </li>
               <li className="nav-item" role="presentation">
                 <button className="nav-link" id="tab7" data-bs-toggle="tab" data-bs-target="#tab-7" type="button" role="tab" aria-controls="tab-7" aria-selected="false">DevOps</button>
               </li>
               <li className="nav-item" role="presentation">
                 <button className="nav-link" id="tab8" data-bs-toggle="tab" data-bs-target="#tab-8" type="button" role="tab" aria-controls="tab-8" aria-selected="false">Ecomme</button>
               </li>
             </ul>
             <div className="tab-content" id="myTabContent">
               <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                   <div className="technologies-list">
                      <div className="technologies-box1">
                         <a href="#">
                            <img src={android}/>
                            <p>Android</p>
                         </a>
                      </div>
                      <div className="technologies-box2">
                         <a href="#">
                            <img src={ios}/>
                            <p>ioS</p>
                         </a>
                      </div>
                      <div className="technologies-box3">
                         <a href="#">
                            <img src={flutter}/>
                            <p>Flutter</p>
                         </a>
                      </div>
                      <div className="technologies-box4">
                         <a href="#">
                            <img src={reactNative}/>
                            <p>React Native</p>
                         </a>
                      </div>
                      <div className="technologies-box5">
                         <a href="#">
                            <img src={Kotlin}/>
                            <p>Kotlin</p>
                         </a>
                      </div>
                      <div className="technologies-box6">
                         <a href="#">
                            <img src={ChatBot}/>
                            <p>Chatbot</p>
                         </a>
                      </div>
                   </div>
               </div>
               <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                   <div className="technologies-list">
                      <div className="technologies-box1">
                         <a href="#">
                            <img src={android}/>
                            <p>Android</p>
                         </a>
                      </div>
                      <div className="technologies-box2">
                         <a href="#">
                            <img src={ios}/>
                            <p>ioS</p>
                         </a>
                      </div>
                      <div className="technologies-box3">
                         <a href="#">
                            <img src={flutter}/>
                            <p>Flutter</p>
                         </a>
                      </div>
                      <div className="technologies-box4">
                         <a href="#">
                            <img src={reactNative}/>
                            <p>React Native</p>
                         </a>
                      </div>
                      <div className="technologies-box5">
                         <a href="#">
                            <img src={Kotlin}/>
                            <p>Kotlin</p>
                         </a>
                      </div>
                      <div className="technologies-box6">
                         <a href="#">
                            <img src={ChatBot}/>
                            <p>Chatbot</p>
                         </a>
                      </div>
                   </div>
               </div>
               <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3">
                   <div className="technologies-list">
                      <div className="technologies-box1">
                         <a href="#">
                            <img src={android}/>
                            <p>Android</p>
                         </a>
                      </div>
                      <div className="technologies-box2">
                         <a href="#">
                            <img src={ios}/>
                            <p>ioS</p>
                         </a>
                      </div>
                      <div className="technologies-box3">
                         <a href="#">
                            <img src={flutter}/>
                            <p>Flutter</p>
                         </a>
                      </div>
                      <div className="technologies-box4">
                         <a href="#">
                            <img src={reactNative}/>
                            <p>React Native</p>
                         </a>
                      </div>
                      <div className="technologies-box5">
                         <a href="#">
                            <img src={Kotlin}/>
                            <p>Kotlin</p>
                         </a>
                      </div>
                      <div className="technologies-box6">
                         <a href="#">
                            <img src={ChatBot}/>
                            <p>Chatbot</p>
                         </a>
                      </div>
                   </div>
               </div>
               <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4">
                   <div className="technologies-list">
                      <div className="technologies-box1">
                         <a href="#">
                            <img src={android}/>
                            <p>Android</p>
                         </a>
                      </div>
                      <div className="technologies-box2">
                         <a href="#">
                            <img src={ios}/>
                            <p>ioS</p>
                         </a>
                      </div>
                      <div className="technologies-box3">
                         <a href="#">
                            <img src={flutter}/>
                            <p>Flutter</p>
                         </a>
                      </div>
                      <div className="technologies-box4">
                         <a href="#">
                            <img src={reactNative}/>
                            <p>React Native</p>
                         </a>
                      </div>
                      <div className="technologies-box5">
                         <a href="#">
                            <img src={Kotlin}/>
                            <p>Kotlin</p>
                         </a>
                      </div>
                      <div className="technologies-box6">
                         <a href="#">
                            <img src={ChatBot}/>
                            <p>Chatbot</p>
                         </a>
                      </div>
                   </div>
               </div>
               <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="tab5">
                   <div className="technologies-list">
                      <div className="technologies-box1">
                         <a href="#">
                            <img src={android}/>
                            <p>Android</p>
                         </a>
                      </div>
                      <div className="technologies-box2">
                         <a href="#">
                            <img src={ios}/>
                            <p>ioS</p>
                         </a>
                      </div>
                      <div className="technologies-box3">
                         <a href="#">
                            <img src={flutter}/>
                            <p>Flutter</p>
                         </a>
                      </div>
                      <div className="technologies-box4">
                         <a href="#">
                            <img src={reactNative}/>
                            <p>React Native</p>
                         </a>
                      </div>
                      <div className="technologies-box5">
                         <a href="#">
                            <img src={Kotlin}/>
                            <p>Kotlin</p>
                         </a>
                      </div>
                      <div className="technologies-box6">
                         <a href="#">
                            <img src={ChatBot}/>
                            <p>Chatbot</p>
                         </a>
                      </div>
                   </div>
               </div>
               <div className="tab-pane fade" id="tab-6" role="tabpanel" aria-labelledby="tab6">
                   <div className="technologies-list">
                      <div className="technologies-box1">
                         <a href="#">
                            <img src={android}/>
                            <p>Android</p>
                         </a>
                      </div>
                      <div className="technologies-box2">
                         <a href="#">
                            <img src={ios}/>
                            <p>ioS</p>
                         </a>
                      </div>
                      <div className="technologies-box3">
                         <a href="#">
                            <img src={flutter}/>
                            <p>Flutter</p>
                         </a>
                      </div>
                      <div className="technologies-box4">
                         <a href="#">
                            <img src={reactNative}/>
                            <p>React Native</p>
                         </a>
                      </div>
                      <div className="technologies-box5">
                         <a href="#">
                            <img src={Kotlin}/>
                            <p>Kotlin</p>
                         </a>
                      </div>
                      <div className="technologies-box6">
                         <a href="#">
                            <img src={ChatBot}/>
                            <p>Chatbot</p>
                         </a>
                      </div>
                   </div>
               </div>
               <div className="tab-pane fade" id="tab-7" role="tabpanel" aria-labelledby="tab7">
                   <div className="technologies-list">
                      <div className="technologies-box1">
                         <a href="#">
                            <img src={android}/>
                            <p>Android</p>
                         </a>
                      </div>
                      <div className="technologies-box2">
                         <a href="#">
                            <img src={ios}/>
                            <p>ioS</p>
                         </a>
                      </div>
                      <div className="technologies-box3">
                         <a href="#">
                            <img src={flutter}/>
                            <p>Flutter</p>
                         </a>
                      </div>
                      <div className="technologies-box4">
                         <a href="#">
                            <img src={reactNative}/>
                            <p>React Native</p>
                         </a>
                      </div>
                      <div className="technologies-box5">
                         <a href="#">
                            <img src={Kotlin}/>
                            <p>Kotlin</p>
                         </a>
                      </div>
                      <div className="technologies-box6">
                         <a href="#">
                            <img src={ChatBot}/>
                            <p>Chatbot</p>
                         </a>
                      </div>
                   </div>
               </div>
               <div className="tab-pane fade" id="tab-8" role="tabpanel" aria-labelledby="tab8">
                   <div className="technologies-list">
                      <div className="technologies-box1">
                         <a href="#">
                            <img src={android}/>
                            <p>Android</p>
                         </a>
                      </div>
                      <div className="technologies-box2">
                         <a href="#">
                            <img src={ios}/>
                            <p>ioS</p>
                         </a>
                      </div>
                      <div className="technologies-box3">
                         <a href="#">
                            <img src={flutter}/>
                            <p>Flutter</p>
                         </a>
                      </div>
                      <div className="technologies-box4">
                         <a href="#">
                            <img src={reactNative}/>
                            <p>React Native</p>
                         </a>
                      </div>
                      <div className="technologies-box5">
                         <a href="#">
                            <img src={Kotlin}/>
                            <p>Kotlin</p>
                         </a>
                      </div>
                      <div className="technologies-box6">
                         <a href="#">
                            <img src={ChatBot}/>
                            <p>Chatbot</p>
                         </a>
                      </div>
                   </div>
               </div>
             </div>
          </div>
          
 
       </div>
    </div>
 </section>
  )
}

export default TechnologiesWeWork