import LoginCard from '@/src/components/login/login-card'
 
function LoginPage() {
  return (
    <>
      <div className="bg-gray-100 h-full">
        <div className="w-full h-full grid place-items-center py-10">
          <LoginCard></LoginCard>
        </div>
      </div>
    </>
  )
}
 
export default LoginPage