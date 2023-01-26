import React from 'react'
import Header from '../Components/Header';
import Content from '../Components/Content';
import ExploreTopic from '../Components/ExploreTopic';
import ExploreJob from '../Components/ExploreJob';
import JobPost from '../Components/JobPost';
import ImageSlider from '../Components/ImageSlider';
import LearnAndConnect from '../Components/LearnAndConnect';
const Home=()=> {
  return (
    <div>
      <Header/>
      <Content/>
      <ExploreTopic/>
      <ExploreJob/>
      <JobPost/>
      <ImageSlider/>
      <LearnAndConnect/>
    </div>
  )
}

export default Home