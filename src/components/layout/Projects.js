import { useEffect, useState } from "react";
import Image from "next/image";
import ListItem from "../list/ListItem";
import Button from "../buttons/Button";

const Projects = () => {

  const [data , setData] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    // Fetch Function   
    fetch("/data.json").then(
      function(res){
      return res.json()
    }).then(function(data){
      // store Data in State Data Variable
      setData(data)
    }).catch(
      function(err){
        console.log(err, ' error')
      }
    )
  },[])

  if (data) {
    return (
      <section id="projects" className="p-4 pb-10 mb-10 md:mb-0 md:pb-4 md:p-0 bg-white md:bg-transparent md:dark:bg-transparent dark:bg-primary md:pt-10 md:rounded-lg md:mx-auto">
        <span className="flex items-center justify-between">
          <p className="text-lg font-semibold text-text-primary md:dark:text-primary">My projects</p>
          <a href="https://github.com/DylanGarciaCalero?tab=repositories" target="_blank" className="bg-secondary text-center cursor-pointer inline-block p-2 px-3 w-fit border border-text-primary border-opacity-10 transition ease-in-out duration-500 hover:bg-highlight hover:text-primary rounded-md text-sm text-white dark:text-text-primary">visit my github</a>
        </span>
        <ul className="mt-4 grid grid-flow-row md:grid-cols-3 gap-10">
          {data.map((item, index) => {
            return (
              <li key={item.id} className="h-[30rem] md:p-2 md:bg-white md:dark:bg-primary rounded-lg">
                <Image
                  src={item.image}
                  alt="project-preview"
                  width={5000}
                  height={5000}
                  className="animate-fadeIn w-full h-1/2 object-cover rounded-lg"
                />
                <section className="h-1/2 flex flex-col justify-between">
                  <ul className="flex flex-wrap gap-1 mt-2">
                    { item.technologies.map(i => {
                      return (
                        <ListItem name={i} className="bg-secondary p-1 px-3 border border-text-primary border-opacity-10 rounded-md text-xs text-white dark:text-text-primary"/>
                      )})
                    }
                  </ul>
                  <span>
                    <p className="text-xs py-6 md:text-sm">{item.description}</p>
                    <a href={item.github} target="_blank" className="bg-secondary text-center cursor-pointer inline-block p-2 px-3 w-full border border-text-primary border-opacity-10 transition ease-in-out duration-500 hover:bg-highlight hover:text-primary rounded-md text-sm text-white dark:text-text-primary">Visit this repository</a>
                  </span>
                </section>
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return (
      <p>loading</p>
    )
  }

};

export default Projects;