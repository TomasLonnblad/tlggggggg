import TransitionLink from "./TransitionLink"

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-400">
        rithmic
      </h1>
      <div className="

       
       bg-clip-padding p-4 m-4 border-8 border-primary border-dotted w-32 h-32 rounded-xl bg-tertiary">
       
       
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/work" label="Work" />
        <TransitionLink href="/about" label="About" />
      </div>
    </nav>
  )
}

export default Navigation
