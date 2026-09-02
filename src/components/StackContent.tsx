import { DrawablyButton, DrawablyDivider } from "drawably/react"
import "drawably/style.css";
function StackContent() {
    const stack = [
        { name: "HTML", icon: "/icons/HTML.svg", type: "frontend" },
        { name: "CSS 3", icon: "/icons/css.svg", type: "frontend" },
        { name: "React", icon: "/icons/react.svg", type: "frontend" },
        { name: "Next.js", icon: "/icons/next.svg", type: "frontend" },
        { name: "TypeScript", icon: "/icons/typescript.svg", type: "frontend" },
        { name: "JavaScript", icon: "/icons/javascript.svg", type: "frontend" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg", type: "frontend" },
        { name: "Framer Motion", icon: "/icons/framer.svg", type: "frontend" },
        { name: "Node.js", icon: "/icons/node.svg", type: "backend" },
        { name: "Express.js", icon: "/icons/express.svg", type: "backend" },
        { name: "PHP", icon: "/icons/php.svg", type: "backend" },
        { name: "MongoDB", icon: "/icons/mongodb.svg", type: "backend" },
        { name: "PostgreSQL", icon: "/icons/postgresql.svg", type: "backend" },
        { name: "Git", icon: "/icons/git.svg", type: "tools" },
        { name: "GitHub", icon: "/icons/github.svg", type: "tools" },
        { name: "Vercel", icon: "/icons/vercel.svg", type: "tools" },
        { name: "Postman", icon: "/icons/postman.svg", type: "tools" },
        { name: "Render", icon: "/icons/render.svg", type: "tools" },
        { name: "MongoDB", icon: "/icons/mongodb.svg", type: "database" },
        { name: "MySQL", icon: "/icons/mysql.svg", type: "database" },

    ]
    return (
        <>
            <section className="h-full w-full relative p-6">
                <div className="space-y-3">
                    <h1 className="font-patrick text-5xl text-center">Stack</h1>
                    <p className="font-patrick text-center">The technologies and tools I use to build responsive, scalable and impactful web applications.</p>
                </div>

                <div className="h-auto w-full lg:mt-5 mt-10 space-y-6 py-6">
                    {/* Frontend Section */}
                    <div>
                        <h1 className="font-dotted text-2xl tracking-wider uppercase mb-5">FrontEnd</h1>
                        <div className="grid  grid-cols-2 lg:grid-cols-3 gap-6">
                            {stack.filter((tech) => tech.type === "frontend").map((tech) => (
                                <DrawablyButton key={tech.name} variant="outline" tone="neutral">
                                    <img src={tech.icon} className="w-8 h-8 me-5" />
                                    <span>{tech.name}</span>
                                </DrawablyButton>
                            ))}
                        </div>
                    </div>

                    {/* Backend Section */}
                    <div>
                        <h1 className="font-dotted text-2xl tracking-wider uppercase mb-5">Backend</h1>
                        <div className="grid  grid-cols-2 lg:grid-cols-3 gap-6">
                            {stack.filter((tech) => tech.type === "backend").map((tech) => (
                                <DrawablyButton key={tech.name} variant="outline" tone="neutral">
                                    <img src={tech.icon} className="w-8 h-8 me-5" />
                                    <span>{tech.name}</span>
                                </DrawablyButton>
                            ))}
                        </div>
                    </div>

                    {/* Database Section */}
                    <div>
                        <h1 className="font-dotted text-2xl tracking-wider uppercase mb-5">Database</h1>
                        <div className="grid  grid-cols-2 lg:grid-cols-3 gap-6">
                            {stack.filter((tech) => tech.type === "database").map((tech) => (
                                <DrawablyButton key={tech.name} variant="outline" tone="neutral">
                                    <img src={tech.icon} className="w-8 h-8 me-5" />
                                    <span>{tech.name}</span>
                                </DrawablyButton>
                            ))}
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div>
                        <h1 className="font-dotted text-2xl tracking-wider uppercase mb-5">Tools</h1>
                        <div className="grid  grid-cols-2 lg:grid-cols-3 gap-6">
                            {stack.filter((tech) => tech.type === "tools").map((tech) => (
                                <DrawablyButton key={tech.name} variant="outline" tone="neutral">
                                    <img src={tech.icon} className="w-8 h-8 me-5" />
                                    <span>{tech.name}</span>
                                </DrawablyButton>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default StackContent