import { redirect } from 'next/navigation'
 
function Home() {
  let isLoggedIn = false; // Change this to check for cookies / cached auth session

  if(isLoggedIn) {
    redirect("/home")
  } else {
    redirect("/login")
  }
}
 
export default Home