import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let checkbox = [{
    Nature: ['Online', 'In-Person',],
    Fields: ['Business', 'STEM', 'Health Science', 'Sport',],
    Type: ['Neworking Event', 'Recruitment Fair', 'Hackathon',],
    Industry: ['Accenture', 'Amazon', 'Air Force Stem', 'American Express', 'Apple', 'Amsted Industries', 'Bank of America', 'Boeing', 'Capital One', 'Carrier', 'Caterpillar', 'Delta', 'Discover', 'Ford', 'General Dynamics', 'Google', 'Jacobs', 'Johnson & Johnson', 'Microsoft'],
  }]

  let checkboxKeys = ['Nature', 'Fields', 'Type', 'Industry']
  let checkboxLength = [2,4,3,19]

  let filtersHTML = [];
  let keyName = Object.keys(checkbox[0])[0]
  for (let index = 0; index < 4; index++) {

    filtersHTML.push(<h1 className='col-span-12 container font-medium'>{checkboxKeys[index]}</h1>)

    for (let i = 0; i < checkboxLength[index]; i++) {
      filtersHTML.push(<div className='col-span-6 container text-left'>
        <input id="default-checkbox" type="checkbox" value="" className="input-checkbox"></input><label
          htmlFor="default-checkbox" className="label-checkbox">
        {Object.values(checkbox[0])[index][i]}</label>
      </div>)
    }
  }

  return (
      <div className="parent">

        <div className="bg-blue-800 grid grid-cols-12 items-center justify-items-center  ">

          <a href='/' className=" nav-item"> Evently</a>
          <a href='/'
             className=" duration-500 text-center h-full w-full hover:bg-blue-600 p-3 col-span-4 "> Search</a>
          <a href='/' className=" nav-item "> Home</a>
          <a href='/' className=" nav-item "> Create Event</a>
          <a href='/' className="nav-item "> Login</a>

        </div>

        <div
            className="relative bg-black-500 grid grid-cols-12 items-center justify-items-center p-60 bg-cover bg-[url('/images/homeEvent.png')]  ">
          <div className='col-span-12'>

            <h1 className='p-2 text-center font-black drop-shadow-2xl text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> Opportunity
              never waits for anyone</h1>
          </div>
        </div>

        <div
            className="relative bg-slate-200 grid grid-cols-12 items-center justify-items-center p-0 text-black   text-center">


          <div
              className='col-span-2 bg-slate-200 p-4 h-full w-full grid grid-cols-12 items-start justify-items-start'>
            {filtersHTML}




          </div>
          <div
              className='col-span-10 bg-orange-500 h-full w-full grid grid-cols-12 gap-4 items-center justify-items-center'>
            <div className="col-span-6 bg-red-500 w-full h-full  bg-cover bg-[url('/images/soflo.png')] "> </div>
            <div className='col-span-6 bg-red-500 w-full'>
              <h1>Event Title</h1>
              <h2>Event Date + Location</h2>
              <p>Event Description</p></div>
            <div className="col-span-6 bg-red-500 w-full h-full bg-cover bg-[url('/images/googleImage.png')] "> </div>
            <div className='col-span-6 bg-red-500 w-full '> Text</div>
            <div className="col-span-6 bg-red-500 w-full bg-cover h-full bg-[url('/images/soflo.png')] "> </div>
            <div className='col-span-6 bg-red-500 w-full'> Text</div>
          </div>

        </div>
      </div>
  )
}

export default Home