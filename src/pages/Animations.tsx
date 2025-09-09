import {motion as m} from "framer-motion"
import {Link, useLocation} from "react-router-dom";
import type {navItem} from "./pages/Types.ts"
export const slideIn = {
  hidden: { opacity: 0, x:"-140vw" },
  visible: { opacity: 1, x: 0 }};
export function AnimatedNav({navItems}:{navItems:navItem[]}) {
  const location = useLocation();
//deciding animation behavior
  const animationProps =
  location.pathname === "/"
  ?{initial:"hidden",whileInView:"visible"}
  :{initial:"hidden",animate:"visible"};
  return(
    <m.nav className = "navContainer"
    {...animationProps}
    viewport={{once:true}}
    transition = {{staggerChildren:0.3}}>
      {navItems.map(({label, to}) => (
        <m.div className = "navItemContainer"
        key={to} 
        variants={slideIn} 
        transition = {{ type:"spring", stiffness:160, damping:35 }}>
          <Link to={to} className="nav">
          {label}</Link>
        </m.div>
      ))}
    </m.nav>
);}