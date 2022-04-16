import React from 'react'
import android from "../../Images/t-android-ic.svg"
import ios from "../../Images/t-apple-ic.svg"
import flutter from "../../Images/t-flutter-ic.svg"
import reactNative from "../../Images/t-react-ic.svg"
import Kotlin from "../../Images/t-kotlin-ic.svg"
import ChatBot from "../../Images/t-chatbot-ic.svg"
import angular from "../../Images/t-angular-ic.svg"
import reactjs from "../../Images/t-react-ic.svg"
import vuejs from "../../Images/t-vuejs-ic.svg"
import js from "../../Images/t-javascript-ic.svg"
import css3 from "../../Images/t-css3-ic.svg"
import html5 from "../../Images/t-html5-ic.svg"
import dotnet from "../../Images/t-dot-net-ic.svg"
import php from "../../Images/t-php-ic.svg"
import python from "../../Images/t-python-ic.svg"
import node from "../../Images/t-nodejs-ic.svg"
import java from "../../Images/t-java-ic.svg"
import ruby from "../../Images/t-ruby-ic.svg"
import mysql from "../../Images/t-mysql-ic.svg"
import postgresql from "../../Images/t-postgresql-ic.svg"
import mongo from "../../Images/t-mongodb-ic.svg"
import sqlite from "../../Images/t-sqlite-ic.svg"
import dynamo from "../../Images/t-dynamodb-ic.svg"
import elastic from "../../Images/t-elasticsearch-ic.svg"
import laravel from "../../Images/t-laravel-ic.svg"
import codeigniter from "../../Images/t-codeigniter-ic.svg"
import django from "../../Images/t-django-ic.svg"
import express from "../../Images/t-expressjs-ic.svg"
import spring from "../../Images/t-spring-ic.svg"
import rubyonrails from "../../Images/t-ruby-on-rails-ic.svg"
import aws from "../../Images/t-aws-ic.svg"
import googlecloud from "../../Images/t-google-cloud-ic.svg"
import azure from "../../Images/t-azure-ic.svg"
import alibaba from "../../Images/t-alibaba-cloud-ic.svg"
import oracle from "../../Images/t-oracle-cloud-ic.svg"
import jenkins from "../../Images/t-jenkins-ic.svg"
import docker from "../../Images/t-docker-ic.svg"
import kubernets from "../../Images/t-kubernets-ic.svg"
import selenium from "../../Images/t-selenium-ic.svg"
import gradle from "../../Images/t-gradle-ic.svg"
import magento from "../../Images/t-magento-ic.svg"
import shopify from "../../Images/t-shopify-ic.svg"
import kentico from "../../Images/t-kentico-ic.svg"
import woocommerce from "../../Images/t-woocommerce-ic.svg"




function TechnologiesWeWork() {
  return (
   <section className="technologies-we-work-main">
   <div className="technologies-we-work-con">
      <div className="container">
         <div className="con-head text-center">
            <h2>Technologies we work with</h2>
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
                <button className="nav-link" id="tab8" data-bs-toggle="tab" data-bs-target="#tab-8" type="button" role="tab" aria-controls="tab-8" aria-selected="false">E-commerce</button>
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
                  </div>
              </div>
              <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                  <div className="technologies-list">
                     <div className="technologies-box1">
                        <a href="#">
                           <img src={angular}/>
                           <p>Angular js</p>
                        </a>
                     </div>
                     <div className="technologies-box2">
                        <a href="#">
                           <img src={reactjs}/>
                           <p>React js</p>
                        </a>
                     </div>
                     <div className="technologies-box3">
                        <a href="#">
                           <img src={vuejs}/>
                           <p>Vue.js</p>
                        </a>
                     </div>
                     <div className="technologies-box4">
                        <a href="#">
                           <img src={js}/>
                           <p>JavaScript</p>
                        </a>
                     </div>
                     <div className="technologies-box5">
                        <a href="#">
                           <img src={css3}/>
                           <p>CSS3</p>
                        </a>
                     </div>
                     <div className="technologies-box6">
                        <a href="#">
                           <img src={html5}/>
                           <p>HTML5</p>
                        </a>
                     </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3">
                  <div className="technologies-list">
                     <div className="technologies-box1">
                        <a href="#">
                           <img src={dotnet}/>
                           <p>.NET</p>
                        </a>
                     </div>
                     <div className="technologies-box2">
                        <a href="#">
                           <img src={php}/>
                           <p>PHP</p>
                        </a>
                     </div>
                     <div className="technologies-box3">
                        <a href="#">
                           <img src={python}/>
                           <p>Python</p>
                        </a>
                     </div>
                     <div className="technologies-box4">
                        <a href="#">
                           <img src={node}/>
                           <p>Nodejs</p>
                        </a>
                     </div>
                     <div className="technologies-box5">
                        <a href="#">
                           <img src={java}/>
                           <p>Java</p>
                        </a>
                     </div>
                     <div className="technologies-box6">
                        <a href="#">
                           <img src={ruby}/>
                           <p>Ruby</p>
                        </a>
                     </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4">
                  <div className="technologies-list">
                     <div className="technologies-box1">
                        <a href="#">
                           <img src={mysql}/>
                           <p>MySQL</p>
                        </a>
                     </div>
                     <div className="technologies-box2">
                        <a href="#">
                           <img src={postgresql}/>
                           <p>PostgreSQL</p>
                        </a>
                     </div>
                     <div className="technologies-box3">
                        <a href="#">
                           <img src={mongo}/>
                           <p>MongoDb</p>
                        </a>
                     </div>
                     <div className="technologies-box4">
                        <a href="#">
                           <img src={sqlite}/>
                           <p>SQLite</p>
                        </a>
                     </div>
                     <div className="technologies-box5">
                        <a href="#">
                           <img src={dynamo}/>
                           <p>DynamoDB</p>
                        </a>
                     </div>
                     <div className="technologies-box6">
                        <a href="#">
                           <img src={elastic}/>
                           <p>Elasticsearch</p>
                        </a>
                     </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="tab5">
                  <div className="technologies-list">
                     <div className="technologies-box1">
                        <a href="#">
                           <img src={dotnet}/>
                           <p>.NET</p>
                        </a>
                     </div>
                     <div className="technologies-box2">
                        <a href="#">
                           <img src={laravel}/>
                           <p>Laravel</p>
                        </a>
                     </div>
                     <div className="technologies-box3">
                        <a href="#">
                           <img src={codeigniter}/>
                           <p>Codignitor</p>
                        </a>
                     </div>
                     <div className="technologies-box4">
                        <a href="#">
                           <img src={django}/>
                           <p>Django</p>
                        </a>
                     </div>
                     <div className="technologies-box5">
                        <a href="#">
                           <img src={express}/>
                           <p>Express.js</p>
                        </a>
                     </div>
                     <div className="technologies-box6">
                        <a href="#">
                           <img src={spring}/>
                           <p>Spring</p>
                        </a>
                     </div>
                     <div className="technologies-box7">
                        <a href="#">
                           <img src={rubyonrails}/>
                           <p>Ruby on rails</p>
                        </a>
                     </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="tab-6" role="tabpanel" aria-labelledby="tab6">
                  <div className="technologies-list">
                     <div className="technologies-box1">
                        <a href="#">
                           <img src={aws}/>
                           <p>AWS</p>
                        </a>
                     </div>
                     <div className="technologies-box2">
                        <a href="#">
                           <img src={googlecloud}/>
                           <p>Google Cloud</p>
                        </a>
                     </div>
                     <div className="technologies-box3">
                        <a href="#">
                           <img src={azure}/>
                           <p>Azure</p>
                        </a>
                     </div>
                     <div className="technologies-box4">
                        <a href="#">
                           <img src={alibaba}/>
                           <p>Alibaba Cloud</p>
                        </a>
                     </div>
                     <div className="technologies-box5">
                        <a href="#">
                           <img src={oracle}/>
                           <p>Oracle Cloud</p>
                        </a>
                     </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="tab-7" role="tabpanel" aria-labelledby="tab7">
                  <div className="technologies-list">
                     <div className="technologies-box1">
                        <a href="#">
                           <img src={jenkins}/>
                           <p>JenKins</p>
                        </a>
                     </div>
                     <div className="technologies-box2">
                        <a href="#">
                           <img src={azure}/>
                           <p>Azure Devops</p>
                        </a>
                     </div>
                     <div className="technologies-box3">
                        <a href="#">
                           <img src={docker}/>
                           <p>Docker</p>
                        </a>
                     </div>
                     <div className="technologies-box4">
                        <a href="#">
                           <img src={kubernets}/>
                           <p>kubernetes</p>
                        </a>
                     </div>
                     <div className="technologies-box5">
                        <a href="#">
                           <img src={selenium}/>
                           <p>Selenium</p>
                        </a>
                     </div>
                     <div className="technologies-box6">
                        <a href="#">
                           <img src={gradle}/>
                           <p>Gradle</p>
                        </a>
                     </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="tab-8" role="tabpanel" aria-labelledby="tab8">
                  <div className="technologies-list">
                     <div className="technologies-box1">
                        <a href="#">
                           <img src={magento}/>
                           <p>Magento</p>
                        </a>
                     </div>
                     <div className="technologies-box2">
                        <a href="#">
                           <img src={shopify}/>
                           <p>Shopify</p>
                        </a>
                     </div>
                     <div className="technologies-box3">
                        <a href="#">
                           <img src={kentico}/>
                           <p>Kentico</p>
                        </a>
                     </div>
                     <div className="technologies-box4">
                        <a href="#">
                           <img src={woocommerce}/>
                           <p>wooCommerce</p>
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