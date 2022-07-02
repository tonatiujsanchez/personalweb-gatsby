import React, { useEffect, useState } from "react"
import headerIlustration from '../images/monitor_illustration_2.svg'
import fetchRepos from "../libs/fetchRepos"

export default function Home() {

    const [repos, setRepos] = useState([])

    useEffect(() => {

        const getRepos = async() => {

            const resposSesion = JSON.parse(sessionStorage.getItem("reapos_tsdev") || "[]")
            if( resposSesion.length > 0 ){
                return setRepos(resposSesion)
            }

            let myRespos =  await fetchRepos()
            setRepos(myRespos)
        }
        getRepos()


    }, [])


    return (
        <div>
            <header>
                <div className='container mx-auto p-16 max-w-5xl flex justify-between items-center flex-col md:flex-row gap-10'>
                    <div className="flex-1">
                        <h1 className='text-4xl font-black mb-3'>Hola! 👋 <br /> <span className="text-5xl">Soy Tonatiuj</span></h1>
                        <p className="text-xl">Soy Desarrollador de aplicaciones web y moviles</p>
                    </div>
                    <div>
                        <img
                            src={headerIlustration}
                            alt="Computadora con código de programación"
                            style={{ height: "300px" }} >

                        </img>
                    </div>
                </div>
            </header>
            <main>
                <section className="container mx-auto p-2 max-w-5xl mb-16">
                    <h2 className="text-xl font-bold text-center mb-3">¿Que proyecto tienes en mente? ¡Cuentame! 😃</h2>
                    <form className="max-w-[600px] mx-auto">
                        <div className="w-full flex items-center border bg-white rounded p-1">
                            <input type="text" className="py-3 px-3 rounded w-full" />
                            <button type="submit"
                                className="border px-10 py-3 bg-slate-900 text-white rounded-md">
                                Enviar
                            </button>
                        </div>
                    </form>
                </section>
                <section className="bg-slate-200 py-12">
                    <div className="container mx-auto p-5 max-w-5xl">
                        <header className="text-center">
                            <h2 className="text-3xl font-extrabold mb-1">Mis repos de Github</h2>
                            <p className="text-xl">Colaboración y contribución de código</p>
                        </header>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">
                            {
                                (repos.slice(0,12)).map(repo => (
                                    <article key={repo.id} className="bg-white rounded p-5 shadow">
                                        <h3 className="pb-5 font-semibold">{repo.name}</h3>
                                        <footer className="border-t pt-2">
                                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                                {repo.full_name}
                                            </a>
                                        </footer>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-3">
                <div className="container mx-auto p-2 max-w-5xl text-center">
                    <p>Todos los derechos reservados <a href="https://twitter.com/tonatiujsanchez" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Tonatiuj Sánchez</a></p>
                </div>
            </footer>
        </div>

    )
}
